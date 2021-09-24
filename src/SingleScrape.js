import React from 'react'
import { useEffect, useState } from 'react'

import ScrapeOptions from './ScrapeOptions';

export default function SingleScrape() {
    const [url, setUrl] = useState("");
    const [data, setData] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    let request = new XMLHttpRequest()

    useEffect(() => {
        document.getElementById("urlInput").addEventListener("change", (e)=>{
            setUrl(e.target.value)
            
        })
    })

    useEffect(()=>{
        console.log(imageUrl)
    }, [imageUrl])

    return (
        <div className = "MainFlex">
            <input id = "urlInput" placeholder = "https://example.com"></input>
            <label style = {{fontSize:"xx-large"}}>Window View</label>
            <iframe srcDoc = "" id = "iframe"></iframe>
            <button className = "rounded" onClick = {() =>{
                const HTTP = new XMLHttpRequest();
                const website_url = `https://api.apiflash.com/v1/urltoimage?access_key=3228ac7f29394d2db5a5487ff9390075&format=png&full_page=true&response_type=json&scroll_page=true&url=${encodeURIComponent(url)}`
                HTTP.open("POST", website_url);
                HTTP.send();
                HTTP.onreadystatechange = (e)=> {
                    if(HTTP.response !== ""){
                     setImageUrl(JSON.parse(HTTP.responseText).url)}
                     console.log(imageUrl)
                }

            }
            }>Make screenshot</button>
            <ScrapeOptions imageUrl = {imageUrl}></ScrapeOptions>
        </div>
    )
    }
