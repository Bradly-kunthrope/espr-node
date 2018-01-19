import React, { Component } from "react";
import { Nav, NavItem, NavLink } from 'reactstrap';
import {
    Link
} from 'react-router-dom';
export default class Header extends Component {
    state = {
        fields: {}
    };

    render() {
        return (
           <header>
               <div className="logo">
               logo
               </div>

                <Nav tabs>
                
                        <NavItem>
                            <NavLink href="/Register">Register</NavLink>
                        </NavItem>
                         <NavItem>
                            <NavLink href="#">Carts</NavLink>
                        </NavItem>
                         <NavItem>
                            <NavLink href="#">Labs</NavLink>
                        </NavItem>
                         <NavItem>
                            <NavLink href="#">Teachers</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">AV Equipment</NavLink>
                        </NavItem>
                
               </Nav>
           </header>
           
        );
    }
}

