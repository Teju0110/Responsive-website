import React from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import pizzaIcon from '../Images/icon.png'

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1;
  font-weight: 800;
  background-color: transparent;
  transition: 0.6s ease-in-out;
`;

const NavLink = styled(Link)`
  color: white;
  font-size:50px;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;


  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

const MenuBar = styled.div`
  height: 60px;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: white;

  p {
    trasform: translate(-175%, 100%);
    font-weight: bold;
    margin-right:50px;
  }
`;

const Icon = styled.img`
  font-size: 2rem;
  transform: translate(-50%, 15%);
  height: 60px;
  width: 80px;
  object-fit: contain;
  
`;

const NavBar = ({toggle}) => {
  return (
    <Nav>
      <NavLink to="/">PizzaMania</NavLink>
      <MenuBar onClick={toggle}>
        <Icon src={pizzaIcon} alt="" />
        <p>Menu</p>
      </MenuBar>
    </Nav>
  );
};

export default NavBar;
