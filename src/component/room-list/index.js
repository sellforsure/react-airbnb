import "./index.css";

import Heading from "../heading";
import { Fragment } from "react";
import Box from "../box";

export default function RoomList({ list }) {
  return (
    <div className="room__block">
      <Heading border>Типи номерів</Heading>

      <div className="room__list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Item({ type, pricePerNight: price, currency, capacity }) {
  return (
    <Box className="room">
      <span className="room__title">{type}</span>
      <span className="info">Кількість гостей: {capacity}</span>
      <span className="room__title">
        {currency}
        {price}
      </span>
    </Box>
  );
}
