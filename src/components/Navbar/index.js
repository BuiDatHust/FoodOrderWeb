import React from 'react'
import { Nav, NavLink, Bars, NavIcon } from './NavbarElement'

function Navbar({toggle}) {
    return (
        <div>
            <Nav>
                <NavLink to='/'>Pizza</NavLink>
                <NavIcon onClick={toggle} >
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </div>
    )
}
export default Navbar

