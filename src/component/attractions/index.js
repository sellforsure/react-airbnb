import "./index.css";

import Heading from "../heading";
import { Fragment } from "react";
import Box from "../box";

export default function Attraction({ attraction }) {
  return (
    <Box shadow className="attraction">
      <Heading border>Відгуки клієнтів</Heading>
      {attraction.map(({ id, ...rest }) => (
        <Fragment key={id}>
          <Item {...rest} />
        </Fragment>
      ))}
    </Box>
  );
}

function Item({ name, link }) {
  return (
    <a className="attraction__item" href={link}>
      {name}
    </a>
  );
}
