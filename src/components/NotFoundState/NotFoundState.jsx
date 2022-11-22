import { ErrorImage } from "../../assets/Images";
import "./NotFoundState.styles.css";

export const NotFoundState = ({ findValue }) => {
  return (
    <div>
      <h3 className="erroText">Sorry we can`t find "{findValue}"</h3>
      <div className="imageWrapper">
        <ErrorImage />
      </div>
    </div>
  );
};
