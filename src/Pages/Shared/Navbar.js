import React, { useState } from 'react';

const Navbar = () => {

    /* const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)
    console.log(color) */


    const manuItems = <>
        <li><a>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li tabindex="0">
            <a> Skills </a>
        </li>
        <li><a>Experience</a></li>
        <li><a>Projects</a></li>
        <li><a href='#constact'>Contact</a></li>
        <li><a href="/blogs">Blogs</a></li>
        <li><a>RESUME</a></li>
    </>

    return (
        <div class={ "navbar bg-primary text-white lg:w-[80vw] mx-auto sticky top-0"}>
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {manuItems}
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {manuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;