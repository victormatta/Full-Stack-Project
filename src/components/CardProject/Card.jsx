import "./Card.css";
// import { BsPencil, BsTrashFill } from "react-icons/bs";

function Card({ name, budget, category }) {
  return (
    <div className="ProjectBox">
      <div className="BoxName">
        <p>{name}</p>
      </div>

      <div className="BoxBudget">
        <p>Budget: R$ {budget}</p>
      </div>

      <div className="BoxCategory">
        <p>Category: {category}</p>
      </div>

      {/* <div>
        <BsPencil />
        <BsTrashFill />
      </div> */}
    </div>
  );
}

export default Card;
