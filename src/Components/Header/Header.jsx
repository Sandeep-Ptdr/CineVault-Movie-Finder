import React, { useEffect, useState } from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchPage/SearchBar'
import logo from '../../assets/logo.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

function Header() {
 const [menu, setMenu] = useState(false)
 
 
 return (
    <>
    <div className='header'>
      <Link to='/'>
      <div className='logo-Img'><img src={logo} alt="logo-img" /></div>
      <div className='logo'>CineVault</div>
      </Link>
     
      <div ><SearchBar/> </div>

      <div className={`hameBurger-container`}>
        <button 
        className='menuBtn'
        onClick={()=>setMenu(!menu)}
        > {menu? <IoMdClose className='icon'/> :  <RxHamburgerMenu className='icon'/>} </button>
      </div>


 


    </div>

    <div className={`menuItems ${menu ? 'active' : 'not-active'}`}>
       
      



        <div className='searchBar-Container'> <SearchBar/>  </div>


        
    </div>

    
    </>
  )
}

export default Header
