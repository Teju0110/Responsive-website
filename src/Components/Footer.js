import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import pizzaIcon from '../Images/icon.png'


export const FooterContainer = styled.footer`
  background-color: #0d0909;
  border-top:5px solid #e31837;
`;

export const FooterWrap = styled.div`
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
`;

export const SocialMedia = styled.section`
  max-width: 1300px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 16px auto 0 auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  flex-direction:column;
  justify-content: center;
  font-weight: bold;

`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;

const Icon = styled.img`
  font-size: 2rem;
  transform: translate(-50%, 15%);
  height: 60px;
  width: 80px;
  object-fit: contain;
  
`;

const Title=styled.h4`
color: white;
font-size:20px;
display: flex;
align-items: center;
text-decoration: none;
cursor: pointer;
`;

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <SocialMedia>
                <SocialMediaWrap>
                <SocialLogo to='/'>
                <Icon src={pizzaIcon} alt="" />
                <Title>PizzaMania</Title>
                </SocialLogo>
                
                <SocialIcons>

              <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>

              <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              
              <SocialIconLink
               href='/' target='_blank' aria-label='Twittet'>
                <FaTwitter />
              </SocialIconLink>

            </SocialIcons>

                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer