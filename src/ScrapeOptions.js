import React, { useState, useEffect } from 'react'
import Tippy, {tippy} from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import {saveAs} from "file-saver";
import JSZip from 'jszip';


export default function ScrapeOptions(props) {

    const [imgUrl, setImgUrl] = useState("")
    const [img, setImg] = useState();

    let getImage = (url) =>{
        const HTTP = new XMLHttpRequest();
        const website_url = `https://api.apiflash.com/v1/urltoimage?access_key=3228ac7f29394d2db5a5487ff9390075&wait_until=page_loaded&format=png&full_page=true&response_type=json&scroll_page=true&url=${encodeURIComponent(url)}`
        HTTP.open("POST", website_url);
        HTTP.send();
        HTTP.onreadystatechange = (e)=> {
            if(HTTP.response !== ""){
             setImgUrl(JSON.parse(HTTP.responseText).url)}
        }
    
    }

    let getImageBytes = (url)=>{
        const HTTP = new XMLHttpRequest();

        const website_url = `https://api.apiflash.com/v1/urltoimage?access_key=3228ac7f29394d2db5a5487ff9390075&format=png&wait_until=page_loaded&full_page=true&response_type=image&scroll_page=true&url=${encodeURIComponent(url)}`

        HTTP.open("POST", website_url);
        HTTP.responseType = "blob";
        HTTP.send();
        HTTP.onreadystatechange = (e)=> {
            if(HTTP.response !== null)
             setImg(HTTP.response)
            }}

    let downloadZip = (files, data) => {

        console.log("making zip")

        let zip = new JSZip();

        files.forEach(element => {
                    if(element.match(/\.[0-9a-z]+$/i)[0] !== ".png"){
                        zip.file(element, data[files.indexOf(element)])}
                    else{
                        zip.file(element, data[files.indexOf(element)], {binary:true})
                    }
                })

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
                    if(e.target.elements["Make Screenshot"].checked && !e.target.elements["Download HTML"].checked){
                        if(document.getElementById("urlInput").value !== ""){
                        console.log(document.getElementById("urlInput").value)
                        getImage(document.getElementById("urlInput").value)
                        }
                    }
                    if(e.target.elements["Download HTML"].checked && !e.target.elements["Make Screenshot"].checked){
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
                    if(e.target.elements["Download HTML"].checked && e.target.elements["Make Screenshot"].checked){

                        console.log("doing stuff")

                        getImageBytes(props.url)

                        console.log(img)

                        

                        fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(props.url)}`)
                        .then(response => {
                            if (response.ok) return response.json()
                            throw new Error('Network response was not ok.')
                        })
                            .then(data =>{ 
                                let title = new DOMParser().parseFromString(data.contents, "text/html").title

                                if(title !== ""){
                                        downloadZip(
                                            [new DOMParser().parseFromString(data.contents, "text/html").title.concat(".htm"),
                                            "screenshot.png"],
                                            [data.contents,img]
                                    )}
                                else{
                                    downloadZip(
                                        ["wbsite".concat(".htm"),
                                        "screenshot.png"],
                                        [data.contents, img])
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
