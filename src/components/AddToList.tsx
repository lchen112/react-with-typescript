import { IState } from "../Interfaces";

interface IProps {
  people: IState["people"];
  setPeople: React.Dispatch<React.SetStateAction<IState["people"]>>;
}

export const AddToList: React.FC<IProps> = (people, setPeople) => {
  return (
    <>
      <h2>Registration form</h2>
      <form className="Registration-form">
        <input
          required
          placeholder="Name"
          type="text"
          className="Input"
        ></input>
        <input
          required
          placeholder="Age"
          type="number"
          className="Input"
        ></input>
        <input
          required
          placeholder="Image URL"
          type="text"
          className="Input"
        ></input>
        <input placeholder="Notes" type="textarea" className="Input"></input>
        <button type="submit">Add to Party</button>
      </form>
    </>
  );
};
