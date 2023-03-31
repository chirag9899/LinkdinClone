import { Avatar } from '@mui/material';
import React from 'react';
import './Sidebar.css';
import {useSelector} from 'react-redux';
import { selectUser } from '../../features/userSlice';



const Sidebar = () => {

  const user = useSelector(selectUser);

  const recentItem = (topic) => (

    <div className="sidebarRecentItem">
        <span className='sidebarHash'> # </span>
        <p> {topic} </p>
    </div>
  );

  return (

    <div className='sidebar'>

        <div className="sidebarTop">
            <img 
                src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZXN0JTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60" 
                alt="background pic" 
            />
            <Avatar src={user.photoUrl} className='sidebarAvatar'>
                {user.email[0]}
            </Avatar>
            <h2> {user.displayName} </h2>
            <h4> {user.email} </h4>
        </div>

        <div className="sidebarStats">

            <div className="sidebarStat">
                <p> Who viewed you </p>
                <p className='sidebarStatNumber'> 3,400 </p>
            </div>

            <div className="sidebarStat">
                <p> Views on post </p>
                <p className='sidebarStatNumber'> 2,100 </p>
            </div>

        </div>

        <div className="sidebarBottom">
            <p> Recent </p>
            {recentItem('reactJs')}
            {recentItem('javascript')}
            {recentItem('coding')}
            {recentItem('softwareengineering')}
            {recentItem('developer')}
            {recentItem('100daysofcodechallenge')}
        </div>

    </div>

  )

};

export default Sidebar;