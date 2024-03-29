import React from 'react';
import styled from 'styled-components';


function Login(props) {
    return (
        <Container>
            <CTA>
                <CTALogoOne src='/images/cta-logo-one.svg' alt='' />
                <SignUp href='#' >
                    get all there
                </SignUp>

                <Description>
                    scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in                
                </Description> 

                <CTALogoTwo src='/images/cta-logo-two.png' alt='' />               
            </CTA>
        </Container>
    );
}

export default Login;


const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;
   


    &:before {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        content: "";
        z-index: -1;
        background-image: url('/images/login-background.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        opacity: 0.7;
    }
`;

const CTA = styled.div`
    max-width: 650px;
    width: 80%;
    padding: 80px 40px;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;

`;

const CTALogoOne = styled.img``;

const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    text-transform: uppercase;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;



    :hover {
        background-color: #0483ee;        
    }

`;

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
    margin: 11px 0;
`;

const CTALogoTwo = styled.img`
    width: 90%;
`;