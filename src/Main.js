import React from 'react'
import { ReactComponent as DataCollection } from './assets/data_collection.svg'
import { ReactComponent as Data } from './assets/data.svg'
import { ReactComponent as WebsiteScraping } from './assets/website_scraping.svg'
import {Link} from "react-router-dom"

export default function Main() {
    return (
        <div className = "MainFlex">
            <h1>Web Scraping <br/> Made Easy</h1>
            <div className = "flex">
                <label>It has never been this easy</label>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </p>

                <label>Get Things Done</label>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </p>

                <label>Find Your Data</label>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </p>
            </div>
            <div style = {flexStyle}>
            <WebsiteScraping style = {style}></WebsiteScraping>
                <DataCollection style = {style}></DataCollection>
                <Data style = {style}></Data>
            </div>
            <div className = "footer">
                <button class = "rounded"><Link className = "link" to = "/scrape">Scrape Now</Link></button>
            </div>
        </div>
    )
}

let style = {
    width:"40vw",
    margin:0,
    padding:0,
    height:"30vw"
}

let flexStyle = {
    position:"absolute",
    display:"flex",
    top:"20vw",
    left:"45vw",
    flexDirection:"column",
    justifyContent:"start"
}
