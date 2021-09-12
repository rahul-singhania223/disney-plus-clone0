import React from 'react';
import styled from 'styled-components';
import { selectMovies } from '../features/movie/moviesSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Movies(props) {


    const movies = useSelector(selectMovies);


    return (
        <Container>
            <h4>Recommended for You</h4>

            <Content>

                {
                    movies && 
                        movies.map((movie) => (
                            <Link key={movie.id} to={`/detail/${movie.id}`} >
                                <Wrap >
                                    <img src={movie.data.cardImg} alt='' />
                                </Wrap>
                            </Link>
                        ))
                }
                
            </Content>
        </Container>
    );
}

export default Movies;


const Container = styled.div`

    h4 {
        padding: 25px 0;
    }

    padding-bottom: 24px;
`;


const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
    border-radius: 10px;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px, rgba(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    transition: all 250ms;
    cursor: pointer;


    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
        box-shadow: rgba(0 0 0 / 80%) 0px 40px 58px -16px, rgba(0 0 0 / 72%) 0px 30px 22px -10px;

    }
`;