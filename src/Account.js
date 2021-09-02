import React from 'react'
import TopNavBar from './TopNavBar'
import LoggedIn from './LoggedIn'
import NotLoggedIn from './NotLoggedIn'

export default function Account(props) {
    return (
        <div>
            <TopNavBar></TopNavBar>
            {props.IsLoggedIn ? <LoggedIn></LoggedIn> : <NotLoggedIn SetIsLoggedIn = {props.SetIsLoggedIn}></NotLoggedIn>}
        </div>
    )
}
