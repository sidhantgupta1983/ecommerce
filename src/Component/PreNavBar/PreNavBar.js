import React from 'react'
import { ArrowDropDown } from '@material-ui/icons';
import { Person } from '@material-ui/icons';
import { ShoppingCart } from '@material-ui/icons';
import { Search } from '@material-ui/icons';
import './PreNavBar.css'

const PreNavBar = () => {
  return (
    <div className='preNavBar'>
        <div >
          <ul className='alignLeft'>
            <li>EN</li><a href='#'><ArrowDropDown/></a>
            <li>$</li><a href='#'><ArrowDropDown/></a>
          </ul>
        </div>
        <div className='alignRight'>
          <ul>
            <span><a href='#'> <Person/> My Profile </a></span>
            <span><a href='#'> <ShoppingCart/>2 Items Price</a></span>
            <span><a href='#'> <Search/> </a></span>
          </ul>
        </div>
    </div>
  )
}

export default PreNavBar;