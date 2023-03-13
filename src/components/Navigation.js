import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from './ThemeContext'

import { Navbar, Icon } from 'react-materialize'

export default function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext)
  return (
    <Navbar className='menu'
      alignLinks='right'
      brand={<span className="brand-logo" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
        {/* <img src='https://cdn-icons-png.flaticon.com/128/1038/1038100.png' width={40} height={40}/> */}CơmGà</span>}
      id="mobile-nav" style={{backgroundColor: theme.backgroundColor,color: theme.color}}
      menuIcon={<Icon style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color
      }}>menu</Icon> }
      
      >
      <ul className='header-hover' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
        <li ><Link to='/' className='active' href='#home' style={{ backgroundColor: theme.backgroundColor, color: theme.color }} ><Icon left>home</Icon>Home</Link></li>
        <li to='/about'>
          <Link to='/about' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}><Icon left>info_outline</Icon>About</Link>
        </li>
        <li to='/news'>
          <Link to='/news' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}><Icon left>dvr</Icon>News</Link>
        </li>
        <li href='/contact'>
          <Link to='/contact' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}><Icon left>contacts</Icon>Contact</Link>
        </li>
        <li><a className='switch-mode' onClick={toggle}
          style={{
            backgroundColor: theme.backgroundColor,
            color: theme.color,
          }} data-testid="toggle-theme-btn"
        ><Icon left>brightness_4</Icon>
          {!dark ? 'Dark' : 'Light'} mode
        </a></li>
      </ul>
      <div>

      </div>

    </Navbar>
  )
}
