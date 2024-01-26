import Heading from "../heading";
import "./index.css";

export default function Contact({ name, image, rate, time, info, phone }) {
  return (
    <div className="contact">
      <div className="contact__header">
        <img src={image} alt={name}></img>
        <div className="contact__block">
          <Heading>Господар - {name}</Heading>
          <div className="contact__sub-block">
            <span className="contact__sub-value">{phone}</span>
            <span className="contact__sub-value">{time}</span>
            <span className="contact__sub-value">{rate}</span>
          </div>
        </div>
      </div>
      <p className="contact__info">{info}</p>
    </div>
  );
}
