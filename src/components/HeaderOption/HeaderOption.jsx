import { Avatar } from '@mui/material';
import React from 'react';
import { selectUser } from '../../features/userSlice';
import './HeaderOption.css';
import {useSelector} from 'react-redux';


const HeaderOption = ({Icon, title, avatar, onClick}) => {

  const user = useSelector(selectUser);

  return (

    <div className='headerOption' onClick={onClick}>
        {Icon && <Icon className='headerOptionIcon' />}
        { avatar && 
          <Avatar className='headerOptionIcon' src={user?.photoUrl}>
             {user?.email[0]}
          </Avatar>
        }
        <h3 className='headerOptionTitle'> {title} </h3>
    </div>

  )

};

export default HeaderOption;