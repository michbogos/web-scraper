import React, { useState, useEffect } from 'react'
import Tippy, {tippy} from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import {saveAs} from "file-saver";
import JSZip from 'jszip';


export default function ScrapeOptions(props) {

    const [imgUrl, setImgUrl] = useState("")

    let getImage = (url) =>{
        const HTTP = new XMLHttpRequest();
        const website_url = `https://api.apiflash.com/v1/urltoimage?access_key=3228ac7f29394d2db5a5487ff9390075&format=png&full_page=true&response_type=json&scroll_page=true&url=${encodeURIComponent(url)}`
        HTTP.open("POST", website_url);
        HTTP.send();
        HTTP.onreadystatechange = (e)=> {
            if(HTTP.response !== ""){
             setImgUrl(JSON.parse(HTTP.responseText).url)}
        }
    
    }

    let downloadZip = (files, data) => {
        let extensions = [];

        files.forEach(element => {
            extensions.push(element.match(/\.[0-9a-z]+$/i))
        })

        let zip = new JSZip();

        let folders = [];

        extensions.forEach((element)=> {
            folders.push(zip.folder(element))
        }
        )

        files.forEach(element => {
            folders.forEach((folderElement) => {
                if(folderElement.root.replace("/", "") == element.match(/\.[0-9a-z]+$/i)){
                    folderElement.file(element, data[files.indexOf(element)])
                }
            })
        });
        zip.generateAsync({type:"blob"}).then(content => {
            saveAs(content, "data.zip")
        })
    }

    useEffect(() => {
        saveAs(imgUrl, "img.png")
    }, [imgUrl])

    return (
        <div>
            <form onSubmit={
                (e) => {
                    e.preventDefault()
                    if(e.target.elements["Make Screenshot"].checked){
                        if(document.getElementById("urlInput").value !== ""){
                        console.log(document.getElementById("urlInput").value)
                        getImage(document.getElementById("urlInput").value)
                        }
                    }
                    if(e.target.elements["Download HTML"].checked){
                            fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(props.url)}`)
                            .then(response => {
                                if (response.ok) return response.json()
                                throw new Error('Network response was not ok.')
                            })
                                .then(data =>{ 
                                    let title = new DOMParser().parseFromString(data.contents, "text/html").title

                                    if(title !== ""){
                                    downloadZip(
                                        [new DOMParser().parseFromString(data.contents, "text/html").title.concat(".htm")],
                                        [data.contents]
                                        )}
                                    else{
                                        downloadZip(
                                            ["website".concat(".htm")],
                                            [data.contents])
                                        }
                                    });
                    }
                }
            }
            >
                <Tippy content = "Make a screenshot" theme="light">
                <div id = "screenshot">
                    <input type = "checkbox" name = "Make Screenshot"></input>
                    <label>Make Screenshot</label>
                </div>
                </Tippy>

                <Tippy content = "Download HTML" theme="light">
                <div id = "download">
                    <input type = "checkbox" name = "Download HTML"></input>
                    <label>Download HTML</label>
                </div>
                </Tippy>

                <Tippy content = "Scrape Simmilar Websites">
                <div id = "simmilar">
                    <input type = "checkbox" name = "Scrape Similar"></input>
                    <label>Scrape Similar</label>
                </div>
                </Tippy>

                <div>
                    <input type = "submit" value="Scrape" class = "rounded"></input>
                </div>

            </form>
        </div>
    )
}
