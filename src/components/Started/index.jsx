import React from 'react';
import _ from 'lodash';
import classes from './style.module.scss';

const Started = ({ openInvitation, name }) => {

  return (
    <div className={classes.container}>
      <div className={classes.wraper}>
        {!_.isEmpty(name) &&
          <div className={classes.toWraper}>
            <p>Teruntuk</p>
            <p className={classes.to}>{name}</p>
            <p>Di tempat</p>
          </div>
        }
        <div className={classes.btn}>
          <img onClick={openInvitation} className={classes.image} src="https://res.cloudinary.com/dwvzfit8v/image/upload/v1662999716/Invitation%20Assets/khamim/btnbuka_nswiij.webp" alt="Button" />
        </div>
      </div>
    </div>
  );
}

export default Started;
