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

    return (
        <div className = "MainFlex">
            <input id = "urlInput" placeholder = "https://example.com"></input>
            <label style = {{fontSize:"xx-large"}}>Window View</label>
            <iframe srcDoc = "" id = "iframe"></iframe>
            <ScrapeOptions url = {url}></ScrapeOptions>
        </div>
    )
    }
