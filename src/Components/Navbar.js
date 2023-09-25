import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='container'>
        <div ><h1 style={{color:'white', padding:'10px 10px', backgroundColor:'black', marginTop:'20px',textAlign:'center'}}>
        <marquee> This is Header Section</marquee> </h1>
             <nav>
            <ul style={{display:'flex', backgroundColor:'pink',marginTop:'20px'}}>
            
            <li style={{margin:'20px', listStyle:'none', fontWeight:'400'}}>
                <Link to="/home">Home</Link>
                </li>
                
                <li style={{margin:'20px', listStyle:'none', fontWeight:'400'}}>
                <Link to='/about-us'>About-Us</Link>
                </li>
                <li style={{margin:'20px', listStyle:'none', fontWeight:'400'}}>
                <Link to="/contact-us">CSS-Gradiant</Link>
                </li>
                <li style={{margin:'20px', listStyle:'none', fontWeight:'400'}}>
                <Link to='/'>Back to Entry Point</Link> </li>
               
                
            </ul>
            </nav>
                
          
        </div>  
        
    </div>
  )
}

export default Navbar
