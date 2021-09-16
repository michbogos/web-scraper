import React from 'react'
import { useEffect, useState } from 'react'
import html2canvas from 'html2canvas';

export default function SingleScrape() {
    const [url, setUrl] = useState("");
    const [data, setData] = useState("");
    let request = new XMLHttpRequest()

    useEffect(() => {
        document.getElementById("urlInput").addEventListener("change", (e)=>{
            fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(e.target.value)}`)
                .then(response => {
                    if (response.ok){
                        return response.json()
                    }
                }).then(
                    (data) => {console.log(data);
                                setData(data.contents)
                                document.getElementById("iframe")
                                .setAttribute("srcDoc", data.contents)}
                )
    })
})
    return (
        <div className = "MainFlex">
            <input id = "urlInput" placeholder = "https://example.com"></input>
            <label style = {{fontSize:"xx-large"}}>Window View</label>
            <iframe srcDoc = "" id = "iframe"></iframe>
            <button className = "rounded" onClick = {
                

            html2canvas(document.querySelector("#capture")).then(canvas => {
            document.body.appendChild(canvas)
            })


            }>Make screenshot</button>
        </div>
    )
    }
