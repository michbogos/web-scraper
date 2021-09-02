import React from 'react'
import TopNavBar from './TopNavBar'

export default function About() {
    return (
        <div>
            <TopNavBar></TopNavBar>
            <div className = "MainDiv" style = {{padding:"5vw", width:"33%", lineHeight:"1.7rem"}}>
                <p>Scrapper is a hobby project made by <a href = "https://michbogos.github.io/website/">me. </a>
                It allows you to quickly and efficiently scrape the Internet, to create datasets, and images, phone numbers, links on a large scale.
                The converter allows you to convert the data to an easily readable and processable format. The converter supports a large number of file
                formats and enables you to export to different dataschemes and even your own file formats.</p>
            </div>
        </div>
    )
}
