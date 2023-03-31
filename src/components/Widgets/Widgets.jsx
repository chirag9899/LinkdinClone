import { FiberManualRecord, Info } from '@mui/icons-material';
import React from 'react';
import './Widgets.css';


const Widgets = () => {

  const newsArticle = (heading, subtitle) => {
     return (
        <div className="widgetsArticle">

            <div className="widgetsArticleLeft">
                <FiberManualRecord/>
            </div>

            <div className="widgetsArticleRight">
                <h4> {heading} </h4>
                <p> {subtitle} </p>
            </div>

        </div>
     )
  };

  return (

    <div className='widgets'>

        <div className="widgetsHeader">
            <h2> LinkedIn News </h2>
            <Info/>
        </div>

        {newsArticle('React v18 has just been launched!🚀', 'React news - 15.9k readers')}
        {newsArticle('Discord switches to react native for app production', 'React Native news - 3.1k readers')}
        {newsArticle('Google start test run of robot assistants in classrooms', 'Engineering news - 8.5k readers')}
        {newsArticle('Firebase emerges as most used cloud platform in 2022', 'Cloud Engineering - 11.2k readers')}
        {newsArticle('How to scale through a Javascript interview test', 'Javascript news - 47.4k readers')}

    </div>

  )

};

export default Widgets;