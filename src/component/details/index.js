import "./index.css";
import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

import detailsQuests from "./detailsQuests.svg";
import detailsBedrooms from "./detailsBedrooms.svg";
import detailsBeds from "./detailsBeds.svg";
import detailsBaths from "./detailsBaths.svg";

export default function Details({ quests, bedrooms, beds, baths }) {
  return (
    <Box shadow className="details">
      <Heading>Деталі властивості:</Heading>
      <ul className="details__list">
        <ListItem imageSrc={detailsQuests}>
          <span>{quests} гостя</span>
        </ListItem>
        <ListItem imageSrc={detailsBedrooms}>
          <span>{bedrooms} спальня</span>
        </ListItem>
        <ListItem imageSrc={detailsBeds}>
          <span>{beds} ліжко</span>
        </ListItem>
        <ListItem imageSrc={detailsBaths}>
          <span>{baths} ванна кімната</span>
        </ListItem>
      </ul>
    </Box>
  );
}
