import Card from './Components/Cards/Card';
import Design from './Components/decomposition/Design';

import { btn } from './Components/Cards/Card';

import './App.css';


function App() {
  return (
    <div className="App">
      <Card img='https://via.placeholder.com/285x180?text=Image'>
          <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </Card>
      <Card title={'Special title treatment'} button={btn('Go somewhere', '#')}>
          <p>With supporting text below as a natural lead-in to additional content.</p>
      </Card>
      <Card />

      <Design />
    </div>
  );
}

export default App;
