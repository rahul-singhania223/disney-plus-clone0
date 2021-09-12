import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserName, selectUserPhoto, setUserLogin, setUserSignOut } from '../features/user/userSlice';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { useHistory } from 'react-router-dom';

function Header(props) {

    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    const dispatch = useDispatch();
    const history = useHistory();


    
    const signIn = () => {
        
        signInWithPopup(auth, provider)
            .then((result) => {

                // This gives you a Google Access Token. You can use it to access the Google
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;

                // The signed-in user info.
                const user = result.user;
                
                const userName = user.displayName;
                const email = user.email;
                const photo = user.photoURL;


                // Adding user credentials inside redux state
                dispatch(setUserLogin({
                    name: userName,
                    email: email,
                    photo: photo
                }))

                // redirect to the homepage
                history.push("/");
                

                // .....
            }).catch(e => {
                const errCode = e.code;
                const errMsg = e.message;
                
                alert(errMsg);
                
                // The email of the user's account used
                const email = e.email;

                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(e);
            })
    }


    const userSignOut = () => {
        signOut(auth).then(() => {

            // remove user credentials from redux state
            dispatch(setUserSignOut({}));

            // redirect to login page
            history.push("/login");
        }).catch(e => console.log(e));
    }

    
    return (
        <Nav>
            <Logo src='/images/logo.svg' />

            {   !userName ?
                    ( <Login onClick={() => signIn()} >Login</Login> ) :

                    <>

                        <NavMenu>                         

                            <a href='#'>
                                <img src='/images/home-icon.svg' alt='' />
                                <span>Home</span>
                            </a>

                            <a href='#'>
                                <img src='/images/search-icon.svg' alt='' />
                                <span>Search</span>
                            </a>

                            <a href='#'>
                                <img src='/images/watchlist-icon.svg' alt='' />
                                <span>Watch list</span>
                            </a>

                            <a href='#'>
                                <img src='/images/original-icon.svg' alt='' />
                                <span>Original</span>
                            </a>

                            <a href='#'>
                                <img src='/images/movie-icon.svg' alt='' />
                                <span>Movies</span>
                            </a>

                            <a href='#'>
                                <img src='/images/series-icon.svg' alt='' />
                                <span>Series</span>
                            </a>

                        </NavMenu>

                        <ProfileImage onClick={() => userSignOut()} src={ userPhoto } />

                    </>

            }            

            
            
            
        </Nav>
    );
}

export default Header;


const Nav = styled.div`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;      
    padding: 0 36px;
    overflow-x: hidden;

    
`;

const Logo = styled.img`
    width: 80px;
`;

const NavMenu = styled.div`
    display: flex;   
    align-items: center;
    flex: 1;
    margin-left: 36px;
    

    a {
        display: flex;
        align-items: center;
        padding: 0 12px ;        

        img {
            height: 20px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            text-transform: uppercase;
            white-space: nowrap;
            position: relative;

            &:after {
                content: "";
                height: 2px;
                background: #fff;
                position: absolute;                
                left: 0;
                right: 0;
                bottom: -6px;
                border-radius: 9px;
                opacity: 0;
                transform: scaleX(0);
                transition: all 250ms ;                
            }
        }

        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }


    @media(max-width: 1024px) {
        display: none;
    }
   

`;

const ProfileImage = styled.img`
    width: 48px;
    height: 48px;
    object-fit: contain;
    border-radius: 50%;
    cursor: pointer;
    margin-left: auto;
`;

const Login = styled.div`
    border: solid 1px;
    padding: 8px 16px;
    border-radius: 4px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.6);
    transition: all 0.2s;
    cursor: pointer;
    margin-left: auto;

    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`;