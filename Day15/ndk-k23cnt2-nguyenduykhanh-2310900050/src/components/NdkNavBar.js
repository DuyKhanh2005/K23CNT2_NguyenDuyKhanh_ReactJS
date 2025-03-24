import React from 'react'
import { Link } from 'react-router-dom'

export default function NdkNavBar() {
    return (
        <nav>
            <Link to='/' >Home</Link> |
            <Link to='/ndk-list-user' >List User</Link> |
            <Link to='/ndk-create-user' >Create User</Link>
        </nav>
    )
}