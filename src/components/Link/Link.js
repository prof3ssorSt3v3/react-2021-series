import './link.css';

export default function Link(props) {
  // const url = props.lnk.url;
  // const title = props.lnk.title;
  //using destructuring
  const { title, url } = { ...props.lnk };

  return (
    <a className="navLink" href={url}>
      {title}
    </a>
  );
}
