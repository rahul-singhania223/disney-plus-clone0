import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ImageSlider from './ImageSlider';
import Viewers from './Viewers';
import Movies from './Movies';
import db from '../firebase';
import { collection, getDocs, doc, setDoc } from 'firebase/firestore/lite';
import { useDispatch } from 'react-redux';
import { setMovies } from '../features/movie/moviesSlice';
import axios from 'axios';

function Home(props) {

    const dispatch = useDispatch();
    const [data, setData] = useState();

    

    const getMovies = async () => {
        const moviesCollection = collection(db, 'movies');
        const moviesSnapshot = await getDocs(moviesCollection);
        const movieList = moviesSnapshot.docs.map(doc => (
            {
                id: doc.id,
                data: doc.data()
            }
        ));


        // Set all movie list inside redux state

        dispatch(setMovies(movieList));
              
               
    }
   
    
    useEffect(() => {
        getMovies().then(() => console.log('got it ')).catch(e => console.log(e))
        
    }, [])
    
    

    return (
        <Container>
            
            <ImageSlider /> 
            <Viewers />
            <Movies />           
        </Container>
    );
}

export default Home;


const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;
    overflow-y: hidden;


    &:before {
        background-image: url('/images/home-background.png');
        background-size: cover;
        background-position: center;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }

`;