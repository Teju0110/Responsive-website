import React from 'react'
import pizzaDay from '../Images/pizzaday.jpg'
import backgoundImg from '../Images/backgroundImageFeature.jpg'
import styled from "styled-components";


export const FeaturesContainer = styled.div`
  background:#ffc500;
  height: 100vh;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border:6px solid red; 
  color: #e31837;
  text-align: center;
  padding: 0 1rem;
  h1 {
    font-size: clamp(2rem, 2.5vw, 3rem);
    text-align: center;
  }
  p {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 3vw, 2rem);
  }
`;

export const FeatureImage=styled.img`
height: 300px;
width:600px;
object-fit: contain;

`;

export const FeatureButton = styled.button`
font-size: 1rem;
padding: 1rem 4rem;
border-radius: 10px;
background: #e31837;
color: #fff;
transition: 0.2 ease-out;
margin-bottom:10px;

&:hover {
  background: #ffc500;
  transition: 0.2s ease-out;
  cursor: pointer;
  color: #000;
}
`;

const Features = () => {
  return (
    <FeaturesContainer>
        <h1>Pizza of the Day</h1>
        <FeatureImage src={pizzaDay} alt=""/>
        <h2>Tandoori Paneer Pizza</h2>
        <FeatureButton>Order Now</FeatureButton>
    </FeaturesContainer>
  )
}

export default Features