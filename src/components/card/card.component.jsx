import React from 'react';
import './card.styles.css';

const card = props => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
        alt="img"
      />
      <h2> {props.monster.name} </h2>
      <p>{props.monster.email}</p>
    </div>
  );
};

export default card;
