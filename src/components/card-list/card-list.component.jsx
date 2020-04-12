import React from "react";
import "./card-list.styles.css";
import { Card } from "../card/card.component";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

// card-list component only cares about displaying cards
// inside of it, it does not care the content

// it now can be used on different parts of the app or
// different projects depends on shat its props.children is
