import React from 'react'
import TopNavBar from './TopNavBar'
import NotLoggedIn from './NotLoggedIn'
import LoggedIn from './LoggedIn'

export default function Manage(props) {
    return (
        <div>
            <TopNavBar></TopNavBar>
            {props.IsLoggedIn ? <LoggedIn></LoggedIn> : <NotLoggedIn SetIsLoggedIn = {props.SetIsLoggedIn}></NotLoggedIn>}
        </div>
    )
}
