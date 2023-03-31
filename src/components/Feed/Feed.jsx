import { CalendarViewDay, Create, EventNote, Image, Subscriptions } from '@mui/icons-material';
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { selectUser } from '../../features/userSlice';
import { db } from '../../firebase';
import InputOption from '../InputOption/InputOption';
import Post from '../Post/Post';
import './Feed.css';
import {useSelector} from 'react-redux';
import FlipMove from 'react-flip-move'; //for animating the posts when they appear on the screen


const Feed = () => {

  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState('');

  const user = useSelector(selectUser);

  useEffect(() => {
    const getPosts = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));

    const unsubscribe = onSnapshot(getPosts, (snapshot) => {
        setPosts(snapshot.docs.map((doc) => ({
            id: doc.id,
            post: doc.data()
        })
      ))
    });
    return unsubscribe;
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    const postRef = collection(db, 'posts');
    addDoc(postRef, {
        name: user?.displayName,
        message: input,
        description: user?.email,
        photoUrl: user?.photoUrl || '',
        timestamp: serverTimestamp()
    });
    setInput('');
  };

  return (

    <div className='feed'>

        <div className="feedInputContainer">

            <div className="feedInput">
                <Create/>
                <form>
                    <input 
                        type="text" 
                        value={input} 
                        onChange={(e) => setInput(e.target.value)} 
                    />
                    <button type='submit' onClick={sendPost}> Send </button>
                </form>
            </div>

            <div className="feedInputOptions">
                <InputOption title="Photo" Icon={Image} color='#70B5F9' />
                <InputOption title="Video" Icon={Subscriptions} color='#E7A33E' />
                <InputOption title="Event" Icon={EventNote} color='#C0CBCD' />
                <InputOption title="Write article" Icon={CalendarViewDay} color='#7FC15E' />
            </div>

        </div>

        <FlipMove>
            {posts.map(({id, post}) => (
                <Post 
                  key={id} //we need to make sure all our posts have keys for this FlipMove to work
                  name={post.name} 
                  description={post.description} 
                  message={post.message} 
                  photoUrl={post.photoUrl}
                />
              ))
            }
        </FlipMove>



    </div>

  )

};

export default Feed;