import React from 'react'
import { Link } from 'react-router-dom'
import SignInLinks from './SignedInLinks'
import SignOutLinks from './SignedOutLinks'

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">WorkApp</Link>
                <SignInLinks></SignInLinks>
                <SignOutLinks></SignOutLinks>
            </div>
        </nav>
    )
}


export default Navbar