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
            <li>EN</li><ArrowDropDown/>
            <li>$</li><ArrowDropDown/>
          </ul>
        </div>
        <div className='alignRight'>
          <ul>
            <span> <Person/> My Profile </span>
            <span> <ShoppingCart/>2 Items Price</span>
            <span> <Search/> </span>
          </ul>
        </div>
    </div>
  )
}

export default PreNavBar;