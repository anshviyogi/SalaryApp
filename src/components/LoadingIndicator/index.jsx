import Overlay from "../Overlay";
import loadingImage from "../../assets/loadingImage.svg";
import "./index.css";

function LoadingIndicator({ isOpen }) {
  return isOpen ? (
    <Overlay>
      <img className="loading-image" src={loadingImage}></img>
    </Overlay>
  ) : null;
}

export default LoadingIndicator;
