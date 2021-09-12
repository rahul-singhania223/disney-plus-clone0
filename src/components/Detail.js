import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore/lite";
import db from '../firebase';



function Detail(props) {

    const { id } = useParams();
    const [detail, setDetail] = useState({});


    const getDetail = async () => {
        
        const docCollection = collection(db, 'movies');
        const docSnapshot = await getDocs(docCollection);

        docSnapshot.docs.map((doc) => {
            if(doc.id === id) {
                setDetail(doc.data());
            } 
        })
    }


    useEffect(() => {
        // Grab the movie from the database
       getDetail();

    }, [])

    console.log(detail);
    

    return (
        <Container>

            { detail &&           
                <>
                    <Background>
                        <img src={detail.backgroundImg} alt='' />
                    </Background>

                    <ImgTitle>
                        <img src={ detail.titleImg } alt='' />
                    </ImgTitle>

                    <Controles>
                        <PlayBtn>
                            <img src='/images/play-icon-black.png' alt='' />
                            <span>Play</span>
                        </PlayBtn>

                        <TrailerBtn>
                            <img src='/images/play-icon-white.png' alt='' />
                            <span>Trailer</span>
                        </TrailerBtn>

                        <AddBtn>
                            <span>+</span>
                        </AddBtn>

                        <GroupWatchBtn>
                            <img src='/images/group-icon.png' alt='' />
                        </GroupWatchBtn>

                    </Controles>

                    <Subtitle>
                        { detail.subTitle }
                    </Subtitle>

                    <Description>
                        { detail.description }
                    </Description>
                </>
                
            }            
        </Container>
    );
}

export default Detail;


const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;

`;

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;;
    }
`;

const ImgTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;
    margin-top: 40px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const Controles = styled.div`
    display: flex;
    align-items: center;
`;

const PlayBtn = styled.button`
    border-radius: 4px;
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 56px;
    background-color: rgba(249, 249, 249);
    border: none;
    padding: 0 24px;
    margin-right: 22px;
    letter-spacing: 1.8px;
    cursor: pointer;
    text-transform: uppercase;

    &:hover {
        background: rgba(198, 198, 198);
    }

   
`;

const TrailerBtn = styled(PlayBtn)`
    background: rgba(0, 0, 0, 0.3);
    border: solid 1px rgba(249, 249, 249);
    color: rgba(249, 249, 249);
`;

const AddBtn = styled.button`
    width: 44px;
    height: 44px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    border: solid 2px white;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    cursor: pointer;
    margin-right: 16px;
    
    span {
        font-size: 30px;
    }
`;

const GroupWatchBtn = styled(AddBtn)`
    background: rgba(0, 0, 0,  0.8);
`;

const Subtitle = styled.div`
    color: rgba(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`;

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    max-width: 760px;
`;