import React from 'react'
import styled from "styled-components";
import {Link } from "react-router-dom";
import closeIcon from '../Images/closeIcon.png'

const MenuContainer=styled.aside`

  position: fixed;
  z-index:999;
  width: 350px;
  height: 100%;
  background: #ffc500;
  display: grid;
  align-items: center;
  top: 0;
  transition: 0.3s ease-in-out;
  right: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

const CloseIcon=styled.img`
color: #000;
height:20px;
width:20px;

`;

const MenuIcon=styled.div`
  position:absolute;
  top:1.2rem;
  right:1.2rem;
  background:transparent;
  border:transparent;
  font-size:2rem;
  cursor:pointer;
  outline:none;  
`;

const SideMenu=styled.div`
display:grid;
grid-template-columns:1fr;
grid-template-rows:repeat(3,80px);
text-align:center;

@media screen and (max-width:480px){
  grid-template-rows:repeat(3, 60px);
}
`;

const SideLink=styled(Link)`
display:flex;
align-items:center;
justify-content:center;
font-size:1.5rem;
text-decoration:none;
list-style:none;
transition:0.2s ease-in-out;
text-decoration:none;
color:#000;
cursor:pointer;

&:hover{
  color:#e31837;
  transition:0.2s ease-in-out;
}
`;

const SideRoute=styled(Link)`
background:#e31837;
white-space:nowrap;
padding:16px 64px;
color:#fff;
font-size:16px;
outline:none;
border:none;
cursor:pointer;
trasition:0.2s ease-in-out;
text-decoration:none;

&hover{
  transition:0.2s ease-in-out;
  background:#fff;
  color:#010606
}
`;

const SideBtn = styled.div`
  display: flex;
  justify-content: center;
`;


const Menu = ({isOpen,toggle}) => {
  return (
  <MenuContainer isOpen={isOpen} onClick={toggle}>

  <MenuIcon>
        <CloseIcon src={closeIcon}/>
      </MenuIcon>

      <SideMenu>
        <SideLink to='/'>Pizza</SideLink>
        <SideLink to='/'>desserts</SideLink>
        <SideLink to='/'>Full Menu</SideLink>
      </SideMenu>

      <SideBtn>
      <SideRoute to='/'>Order Now</SideRoute>
      </SideBtn>

      </MenuContainer>
  )
}

export default Menu