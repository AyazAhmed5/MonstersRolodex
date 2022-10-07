import "./card-component.styles.css";

const Card = ({ monster }) => {
  const { name, email, id } = monster;
  return (
    <div key={id} className="card-container">
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id + 3}?set=set2&size=180x180`}
      ></img>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};
export default Card;
