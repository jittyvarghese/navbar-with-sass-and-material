import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';



const navItems = [ 
    {
        name : 'About',
        path : '/about'
    },
    {
        name : 'Plans',
        path : '/plans'
    },
    {
        name : 'Contact',
        path : '/contact'
    }, 
    {
        name : 'Help',
        path : '/help'
    }
 ]

const Navbar = () => {
    const [clicked, setClicked] = useState(false);
   const handleClick = ()=> {
       setClicked(!clicked);
   }
    return (
        <nav>
            <span className ='logo'><a href="/">Navbar Logo</a></span>
            <div className ='menu-icon' onClick= {handleClick}>
                <FontAwesomeIcon className='icon-transition' icon = {clicked ? 'times' : 'bars'}  spin />
            </div>
            <div className = {clicked ? 'nav-item-wrapper' : ' nav-item-wrapper closed'}>
                <ul>
                    {navItems.map((items) => <li key= {items.name}><a href={items.path}>{items.name}</a> </li>)}
                </ul>
                <Button variant="contained"  className = 'button' boxShadow={25} >Sign In</Button>     
            </div>
        </nav>
    )
}

export default Navbar
