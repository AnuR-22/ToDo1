import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import img from '../img/HDFC_Bank_logo.imp.png';
import { TfiLocationPin } from "react-icons/tfi";
import { IoHelpSharp } from "react-icons/io5";
import { TfiSearch } from "react-icons/tfi";
import { FiMic } from "react-icons/fi";

function BankingProject() {
  return (
<div>
    <div  className='navbar'>
        <ul>
            <li>
            <img  width="130px"src={img} alt="" />
            <Link to="/"><a>Personal </a></Link>
            </li>
            <li>
                <Link to="/NRI"><a>NRI</a></Link>
            </li>
            <li>
                <Link to="/SME"><a>SME</a></Link>
            </li>
            <li>
                <Link to="/Wholesale"><a>Wholesale</a></Link>
            </li>
            <li>
                <Link to="/Agri"><a>Agri</a></Link>
            </li>
            
        </ul>
        <div className='icon'>
            <ul>
            <li>
           <TfiLocationPin   size='1rem' color='white'/>
            <Link to="/Location"><a>Locate us</a></Link>
            </li>
            <li>
            <IoHelpSharp  size='1rem' color='white'/>
                <Link to="/Blog"><a>Blog</a></Link>
            </li>
            
            </ul>
        </div>
        </div>
        
         <div>
            <h6 className='text'>Welcome!</h6>
            </div>
        <div className='Search-box'>
        <input   className='input-field' type="text" placeholder='what are you looking...'/>
            <i className='i1'><TfiSearch /></i>
            <i className='i2'><FiMic size='1rem' /></i>
           < button >Login</button>
        
           
           </div>
        
    </div>
  )
}

export default BankingProject;