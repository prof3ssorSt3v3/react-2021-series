import './listitem.css';

export default function ListItem(props) {
  return (
    <li className="listitem" data-ref="1">
      <h2 class="title">Sample title</h2>
      <p>Some other text</p>
    </li>
  );
}
