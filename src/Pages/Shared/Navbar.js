import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)
    console.log(color)


    const manuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><a href='#about'>About</a></li>
        <li tabindex="0">
            <a href='#skills'> Skills </a>
        </li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#constact'>Contact</a></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li>
            <a
                className='bg-green-600 rounded py-2 px-3'
                href="https://drive.google.com/uc?export=download&amp;id=1vSmhsBgO9HcmhkqlLp57yfe1cJMw9jNF"
                download >
                Resume
            </a>
        </li>
    </>

    return (
        <div class={ "navbar bg-primary text-white lg:w-[80%] mx-auto sticky top-0"}>
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact bg-primary dropdown-content mt-3 p-2 shadow rounded-box w-52">
                        {manuItems}
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl">Mamun</a>
            </div>
            <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal p-0 bg-primary">
                    {manuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;