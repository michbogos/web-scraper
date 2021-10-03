import React from 'react'
import TopNavBar from './TopNavBar'
import LoggedIn from './LoggedIn'
import NotLoggedIn from './NotLoggedIn'

export default function Account(props) {
    return (
        <div>
            <TopNavBar></TopNavBar>
            {props.isLoggedIn ? <LoggedIn query = {props.query} auth = {props.auth} user = {props.isLoggedIn}></LoggedIn> : <NotLoggedIn logIn = {props.logIn} setIsLoggedIn = {props.setIsLoggedIn} IsLoggedIn = {props.isLoggedIn}></NotLoggedIn>}
        </div>
    )
}
