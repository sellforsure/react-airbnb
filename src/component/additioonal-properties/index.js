import "./index.css";
import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

export default function Properties({
  rules,
  policy,
  transportation,
  languages,
  offers,
  instructions,
}) {
  return (
    <Box shadow className="properties">
      <Heading border>Додаткові властивості</Heading>
      <ul className="properties__list">
        <ListItem>
          <div className="properties__item">
            <span className="properties__item-title">Правила дому</span>
            <span>{rules}</span>
          </div>
        </ListItem>
        <ListItem>
          <div className="properties__item">
            <span className="properties__item-title">Політика скасування</span>
            <span>{policy}</span>
          </div>
        </ListItem>
        <ListItem>
          <div className="properties__item">
            <span className="properties__item-title">Місцевий транспорт</span>
            <span>{transportation}</span>
          </div>
        </ListItem>
        <ListItem>
          <div className="properties__item">
            <span className="properties__item-title">Мови хоста</span>
            <span>{languages}</span>
          </div>
        </ListItem>
        <ListItem>
          <div className="properties__item">
            <span className="properties__item-title">
              Спеціальні пропозиції:
            </span>
            <span>{offers}</span>
          </div>
        </ListItem>
        <ListItem>
          <div className="properties__item">
            <span className="properties__item-title">
              Інструкції щодо реєстрації
            </span>
            <span>{instructions}</span>
          </div>
        </ListItem>
      </ul>
    </Box>
  );
}
