import "./styles/Track.css";

const Track = ({ data }) => {
  return (
    <div className="Track">
      <p>ID: {data.id}</p>
      <p>Title: {data.title}</p>
      <p>Artist: {data.artist}</p>
    </div>
  );
};

export default Track;
