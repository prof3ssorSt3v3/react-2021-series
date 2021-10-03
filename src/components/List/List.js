import './list.css';
import ListItem from '../ListItem/ListItem';

export default function List(props) {
  return (
    <ul className="list">
      {props.data.map((item) => (
        <ListItem key={item.title} data={item} />
      ))}
    </ul>
  );
}
