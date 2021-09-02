import React from 'react'
import { useEffect, useState } from 'react'

export default function SingleScrape() {
    const [url, setUrl] = useState("");
    const [data, setData] = useState("");
    let request = new XMLHttpRequest()

    useEffect(() => {
        document.getElementById("urlInput").addEventListener("change", (e)=>{
            console.log(e.target.value);
            request.open("GET", e.target.value)
            request.send();
            request.onload = () => {
                setData(request.response)
                console.log("done")
            }
        })
    })
    return (
        <div className = "MainFlex">
            <input id = "urlInput" placeholder = "https://example.com"></input>
            <label style = {{fontSize:"xx-large"}}>Window View</label>
            <p>{data}</p>
        </div>
    )
}
