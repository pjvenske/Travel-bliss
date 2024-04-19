import React from 'react';

export default function NavBar() {
    const path = window.location.pathname;
    return (
        <nav className="nav">
            <a href="/" className="site-title"><img src="./assets/logo.png"></img></a>
            <ul>
                <CustomLink href="/about">About</CustomLink>
                <CustomLink href="/contact">Contact</CustomLink>
                <CustomLink href="/blog">Blog</CustomLink>
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

