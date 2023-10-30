import ListItem from './ListItem';

const items = ['one', 'two', 'three'];
function Main() {
  {
    items.map(elm => {
      console.log(elm);
      return <ListItem key={Math.floor(Math.random() * 10000)} />;
    });
  }
}

export default Main;
