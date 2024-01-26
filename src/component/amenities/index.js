import "./index.css";
import Box from "../box";
import ListItem from "../list-item";

import airport from "./airport.svg";
import breakfast from "./breakfast.svg";
import childFriendly from "./childFriendly.svg";
import concierge from "./concierge.svg";
import gym from "./gym.svg";
import parking from "./parking.svg";
import pets from "./pets.svg";
import pool from "./pool.svg";
import roomService from "./roomService.svg";
import wifi from "./wifi.svg";
import Heading from "../heading";

export default function Amenities({
  hasPool,
  hasGym,
  hasFreeBreakfast,
  hasFreeWiFi,
  hasParking,
  hasPetsAllowed,
  hasAirportShuttle,
  hasConciergeService,
  hasRoomService,
  hasChildFriendly,
}) {
  return (
    <Box shadow className="amenities">
      <Heading>Зручності</Heading>
      <ul className="amenities__list">
        {hasPool && <ListItem imageSrc={pool}>Басейн</ListItem>}
        {hasGym && <ListItem imageSrc={gym}>Спортивний зал</ListItem>}
        {hasFreeBreakfast && (
          <ListItem imageSrc={breakfast}>Безкоштовний сніданок</ListItem>
        )}
        {hasFreeWiFi && <ListItem imageSrc={wifi}>Безкоштовний Wi-Fi</ListItem>}
        {hasParking && (
          <ListItem imageSrc={parking}>Безкоштовний вуличний паркінг</ListItem>
        )}
        {hasPetsAllowed && (
          <ListItem imageSrc={pets}>
            Дозволено розміщення з домашніми тваринами
          </ListItem>
        )}
        {hasAirportShuttle && (
          <ListItem imageSrc={airport}>Трансфер до/з аеропорту</ListItem>
        )}
        {hasConciergeService && (
          <ListItem imageSrc={concierge}>Консьєрж-сервіс</ListItem>
        )}
        {hasRoomService && (
          <ListItem imageSrc={roomService}>Обслуговування номерів</ListItem>
        )}
        {hasChildFriendly && (
          <ListItem imageSrc={childFriendly}>Підходить для дітей</ListItem>
        )}
      </ul>
    </Box>
  );
}
