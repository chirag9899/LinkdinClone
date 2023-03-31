import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React, {forwardRef} from 'react';
import InputOption from '../InputOption/InputOption';
import './Post.css';



const Post = forwardRef(({name, description, message, photoUrl}, ref) => {

    
  return (

    <div ref={ref} className='post'>

        <div className="postHeader">

            <Avatar src={photoUrl} className='postAvatar'> {description[0]} </Avatar>

            <div className="postInfo">
                <h2> {name} </h2>
                <p> {description} </p>
            </div>

        </div>

        <div className="postBody">
            <p> {message} </p>
        </div>

        <div className="postButtons">
            <InputOption Icon={ThumbUpAltOutlined} title='Like' color='gray' />
            <InputOption Icon={ChatOutlined} title='Comment' color='gray' />
            <InputOption Icon={ShareOutlined} title='Share' color='gray' />
            <InputOption Icon={SendOutlined} title='Send' color='gray' />

        </div>

    </div>

  )

});

export default Post;