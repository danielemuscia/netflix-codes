import React from "react";
import { Link } from 'react-scroll'

export default function Chips({ name, id }) {
  return (
    <Link to={`${id}`} spy={true} smooth={true} duration={500} className="chips">
      <p>{name}</p>
    </Link>
  );
}
