import React from "react";
import "./card.styles.css";

export const Card = (props) => (
  <div className="card-container">
    <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
    {/* key helps react know which element gets updated, so it only rerender that element */}
    <h2>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
  </div>
);
