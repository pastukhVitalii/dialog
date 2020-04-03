import React from 'react';

import css from './Messages.module.css';
import User from "../User/User";

function Messages() {

  /*var options = {
    hour: 'numeric',
    minute: 'numeric',
  };
  let date = ( new Date().toLocaleString("ru", options) );*/

  let date = new Date().toLocaleTimeString('ru', {hour: '2-digit', minute: '2-digit'})

  return (



    <div className={css.messages}>
      <User/>
      <div className={css.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
      <div className={css.date}>{date}</div>
      <div className={css.tail}></div>
    </div>

  );
}

export default Messages;
