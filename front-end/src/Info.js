import Track from "./Track";
import "./styles/Info.css";

const Info = ({ result }) => {
  let trackData;
  if (result.length) {
    trackData = result.map((track) => {
      return <Track data={track} key={track.id} />;
    });
  } else if (result.error) {
    trackData = (
      <div>
        <p className="not-found">Track not found</p>
      </div>
    );
  } else {
    trackData = <Track data={result} />;
  }
  return <div>{trackData}</div>;
};

export default Info;
