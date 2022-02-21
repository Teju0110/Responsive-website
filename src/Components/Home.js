import styled from "styled-components";
import React,{useState} from "react";

import backgoundImg from "../Images/backgroundImage.jpg";
import NavBar from "./NavBar";
import Menu from "./Menu";

const Container = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${backgoundImg});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

const Content = styled.div`
  height: calc(100vh -80px);
  max-height: 100%;
  width: 100vw;
  padding: 0rem calc((100vw -1300px) / 2);
`;

const Items = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    height:100vh;
    max-height:100%;
    padding 0 2rem;
    width:650px;
    color:#fff;
    text-transform:uppercase;
    line-height:1;
    font-weight:bold;


    @media screen and (max-width:650px){
        width:100%;
    }
`;

const H1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #e9ba23;
  letter-spacing: 3px;
`;

const P = styled.p`
  font-size: clamp(2.5rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`;

const Button=styled.button`
    font-size:1.4rem;
    padding:1rem 4rem;
    border:none;
    background:#e31837;
    color:#fff;
    transition:0.2s ease-out;
    border-radius:10px;

    &:hover{
        background:#ffc500;
        transition:0.2s ease-out;
        color:#000;
        cursor:pointer;
        
    }

`;

const Home = () => {
 
  const[isOpen, setIsOpen]=useState(false);

  const toggle =()=>{
    setIsOpen(!isOpen)
  }

  return( 
  <Container>
    <NavBar toggle={toggle}/>
    <Menu isOpen={isOpen} toggle={toggle}/>
      <Content >
          <Items>
              <H1>Greatest Pizza Ever</H1>
              <P>Ready in 10 Min</P>
              <Button>Place Order</Button>
          </Items>
      </Content>

  </Container>
  );
};

export default Home;
