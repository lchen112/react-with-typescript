import { IState } from "../Interfaces";

interface IProps {
  people: IState["people"];
}

export const PeopleList: React.FC<IProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person, i) => (
      <div key={i} className="Person-Card">
        <img alt="person" className="Image" src={person.url} />
        <div className="Person-Name">{person.name}</div>
        <div>She is : {person.age} years old</div>
        <div>Notes: {person?.notes}</div>
      </div>
    ));
  };

  return <div>{renderList()}</div>;
};
