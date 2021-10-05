import './searchhistory.css';
import List from '../List/List';

export default function SearchHistory(props) {
  const { terms } = { ...props };
  let formattedData = terms.map((item, index) => {
    return {
      ref: index + 1,
      title: item,
      txt: null,
    };
  });

  return (
    <div className="history">
      <List data={formattedData} />
    </div>
  );
}
