import { useSelector, useDispatch } from 'react-redux';
import {useEffect} from 'react';
import './App.css';
import Feed from './components/Feed/Feed';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Sidebar from './components/Sidebar/Sidebar';
import { login, logout, selectUser } from './features/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import Widgets from './components/Widgets/Widgets';

function App() {

  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    const changeUser = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(login({
          email: authUser.email,
          uid: authUser.uid,
          displayName: authUser.displayName,
          photoUrl: authUser.photoURL,
        }));
      } else {
        dispatch(logout());
      }
    });
    return () => {
      changeUser();
    };
  }, [dispatch]);

  return (

    <div className="app">

        <Header/>

        {!user ? (
            <Login/>
           ) : (

            <div className="appBody">
          
                <Sidebar/>
                <Feed/>
                <Widgets/>
          
            </div> 

           )
        } 



    </div>

  );

};

export default App;

//ctrl + spacebar for auto imports
