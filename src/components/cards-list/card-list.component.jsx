import { Component } from "react";
import Card from "../card/card.component";

import "./card-list.styles.css";
const cardList = ({ monsters }) => (
  <div className="card-list " key={monsters.id}>
    {monsters.map((monster) => {
      return <Card monster={monster} key={monsters.id} />;
    })}
  </div>
);

export default cardList;
