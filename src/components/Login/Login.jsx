import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, {useState} from 'react';
import { auth } from '../../firebase';
import './Login.css';
import {useDispatch} from 'react-redux';
import { login } from '../../features/userSlice';


const Login = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePic, setProfilePic] = useState('');

  const dispatch = useDispatch();

  const register = () => {
     if (!name) {
        return alert('Please enter a full name');
     };

     createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
                displayName: name,
                photoURL: profilePic,
            }).then(() => {
                dispatch(login({
                    email: user.email,
                    uid: user.uid,
                    displayName: name,
                    photoUrl: profilePic
                }));
            });
        })
        .catch((error) => {
            alert(error.message);
        });
  };

  const loginToApp = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert(`Welcome, ${user.displayName}`);
            dispatch(login({
                email: user.email,
                uid: user.uid,
                displayName: user.displayName,
                photoUrl: user.photoURL,
            }));
        }).catch((error) => {
            alert(error.message);
        });
  };

  return (

    <div className='login'>

        <img 
            src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks" 
            alt="linkedIn Icon" 
        />

        <form>

            <input
                type='text' 
                placeholder='Full name (required if registering)'
                value={name}
                onChange={(e) => setName(e.target.value)} 
            />

            <input 
                type="text" 
                placeholder='Profile picture URL (optional)'
                value={profilePic}
                onChange={(e) => setProfilePic(e.target.value)}
            />

            <input 
                type="email" 
                placeholder='Email' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input 
                type="password" 
                placeholder='Password' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button type='submit' onClick={loginToApp}> Sign In </button>

        </form>

        <p> 
            Not a member? {" "} 
            <span className='loginRegister' onClick={register}> 
                Register now
            </span>
        </p>

    </div>

  )

};

export default Login;