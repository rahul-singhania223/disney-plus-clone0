import React from 'react';
import styled from 'styled-components';



function Viewers(props) {
    return (
        <Container>
            <Wrap>
                <img src='/images/viewers-disney.png' alt='' />
            </Wrap>

            <Wrap>
                <img src='/images/viewers-pixar.png' alt='' />
            </Wrap>

            <Wrap>
                <img src='/images/viewers-marvel.png' alt='' />
            </Wrap>

            <Wrap>
                <img src='/images/viewers-starwars.png' alt='' />
            </Wrap>

            <Wrap>
                <img src='/images/viewers-national.png' alt='' />
            </Wrap>
        </Container>
    );
}

export default Viewers;


const Container = styled.div`
    margin-top: 30px;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    padding: 30px 0 26px;

`;

const Wrap = styled.div`

    border: 3px solid rgba(149, 149, 149, 0.1);
    border-radius: 10px;
    box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px, rgba(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    transition: all 250ms;


    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);

    }
`;