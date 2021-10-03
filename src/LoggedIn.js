import React from 'react'
import {getDocs} from "firebase/firestore"

import { useState, useEffect } from 'react';


export default function LoggedIn(props) {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        getDocs(props.query).then(data => data.forEach(doc =>  {setHistory(oldArray => [...oldArray, doc.data().url])}))
    }, [])
    return (
        <div className = "MainFlex">
            <h1>Logged In as {props.auth.currentUser.displayName}</h1>
            <p>{history ? history : "no history"}</p>
        </div>
    )
}

