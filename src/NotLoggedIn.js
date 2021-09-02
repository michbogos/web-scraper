import React from 'react'

export default function NotLoggedIn(props) {
    return (
        <div className = "MainFlex">
            <h3>Seems like you're not logged in <br></br> Log in to access your dashboard</h3>
           <button className = "rounded" style = {{background:"#6C63FF"}} onClick = {() => {props.SetIsLoggedIn(true); console.log("done")}}>Log In!</button> 
        </div>
    )
}
