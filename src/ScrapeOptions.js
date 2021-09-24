import React from 'react'
import Tippy, {tippy} from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import {saveAs} from "file-saver";


export default function ScrapeOptions(props) {

    return (
        <div>
            <form onSubmit={
                (e) => {
                    e.preventDefault()
                    if(e.target.elements["Make Screenshot"].checked){
                        if(props.imageUrl !== ""){
                        console.log(props.imageUrl)
                        saveAs(props.imageUrl, "image.png")
                        }
                    }
            }}>
                <Tippy content = "afdsgh" theme="light">
                <div id = "screenshot">
                    <input type = "checkbox" name = "Make Screenshot"></input>
                    <label>Make Screenshot</label>
                </div>
                </Tippy>

                <div id = "download">
                    <input type = "checkbox" name = "Download HTML"></input>
                    <label>Download HTML</label>
                </div>

                <div id = "simmilar">
                    <input type = "checkbox" name = "Scrape Similar"></input>
                    <label>Scrape Similar</label>
                </div>

                <div>
                    <input type = "submit" value="Scrape" class = "rounded"></input>
                </div>

            </form>
        </div>
    )
}
