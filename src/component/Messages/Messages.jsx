import React from 'react';

import css from './Messages.module.css';
import User from "../User/User";

let QualityComponent = (props) => {
  return(
    // класс добавил в App.css в "Messages.module.css" не смог добавить потому что это module.css
    <div className= {props.className}>
      {props.label}
    </div>
  )
};

let Messages = (props) => {

  /*var options = {
    hour: 'numeric',
    minute: 'numeric',
  };
  let date = ( new Date().toLocaleString("ru", options) );*/

  let date = new Date().toLocaleTimeString('ru', {hour: '2-digit', minute: '2-digit'});

  let qualityArray = props.quality.map(indexArr => {
    return (
       <QualityComponent label={indexArr.label} className={indexArr.className} key={indexArr.id}/>
    )
  });
  return (

    <div className={css.messages}>
      <User/>
      <div className={css.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliquaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.<br/>
        {qualityArray}
      </div>
      <div className={css.date}>{date}</div>
      <div className={css.tail}></div>
    </div>

  );
};
export default Messages;
