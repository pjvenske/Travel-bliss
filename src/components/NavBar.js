import React from 'react';

export default function NavBar() {
    const path = window.location.pathname;
    return (
        <nav className="nav">
            <a href="/" className="site-title">Home</a>
            <ul>
                <CustomLink href="/about">About</CustomLink>
                <CustomLink href="/contact">Contact</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ href, children, ...props}) {
    const path = window.location.pathname
    return (
        <li className={path === href ? "active" : ""}>
            <a href={href} {...props}>{children}</a>
        </li>
    )
}

