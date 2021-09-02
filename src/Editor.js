import React, { useState, useEffect, useRef } from 'react'
import "./Quill.css"

import ReactQuill, {Quill} from "react-quill"
import ToolBar from "./ToolBar.js"
import 'react-quill/dist/quill.snow.css';

const Parchment = Quill.import("parchment")




export default function Scrape() {

  function getCount(parent, getChildrensChildren){
    var relevantChildren = 0;
    var children = parent.childNodes.length;
    for(var i=0; i < children; i++){
        if(parent.childNodes[i].nodeType != 3){
            if(getChildrensChildren)
                relevantChildren += getCount(parent.childNodes[i],true);
            relevantChildren++;
        }
    }
    return relevantChildren;
}

    let QuillRef = null;
    let ReactQuillRef = null;
    let UnpriviligedEditor = useRef(null);



    let AttachQuillRefs = () => {
      if (typeof ReactQuillRef.getEditor !== 'function') return;
      QuillRef = ReactQuillRef.getEditor();
    }

    const [value, setValue] = useState('');

    useEffect(()=>{
      AttachQuillRefs();
      UnpriviligedEditor.current = ReactQuillRef.makeUnprivilegedEditor(ReactQuillRef.getEditor());
    })


    return (
        <div id = "editor">
          <ToolBar/>
            <ReactQuill 
                ref = {(el)=> {ReactQuillRef = el}}
                id = "quill"
                theme="snow" 
                value={value} 
                onChange={setValue}
                modules = {
                    {
                      toolbar:false
                    }
                    }
                    />
        </div>
    )
}

//TODO: Quill.js integration
  //DONE!!!! onChange as event on the Quill Object DONE!!!
  //Very hard, do later Get Current line and do styling with css
//text coloration

//Scrap single website

//Programming language
//Nodes
//Different exporters
//Custom plugin support for python and other languages
//Similar wesites database thingy