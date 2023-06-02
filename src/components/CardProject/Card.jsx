import "./Card.css";
import { BsTrashFill } from "react-icons/bs";

function Card({ name, budget, category, onRemove }) {
  return (
    <div className="ProjectBox">
      <div className="BoxName">
        <p>{name}</p>
        <div className="Trash" onClick={onRemove}>
          <BsTrashFill />
        </div>
      </div>

      <div className="BoxBudget">
        <p>
          Budget: <span>R$ {budget}</span>
        </p>
      </div>

      <div className="BoxCategory">
        <p>
          Category: <span>{category}</span>
        </p>
      </div>
    </div>
  );
}

export default Card;
