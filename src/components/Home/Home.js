import { PropTypes } from 'prop-types';

export default function Home(props) {
  const { time, active, name } = props;
  let nms = Array.isArray(name) ? name.join(' and ') : name;
  return (
    <div>
      <h1>Welcome {nms}, to the Home page</h1>
      <p>The time is {new Date(time).toLocaleTimeString()}</p>
      <p>The component is {active ? 'active' : 'NOT active'}</p>
      {props.children}
    </div>
  );
}
Home.defaultProps = {
  time: Date.now(),
};
Home.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  time: PropTypes.number,
  active: PropTypes.bool.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
