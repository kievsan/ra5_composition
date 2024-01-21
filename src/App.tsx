//import React from 'react';
import Card from './Components/Cards/Card';

//import classes from './Components/Cards/css/main.module.css';
import './App.css';
import { title } from 'process';
import { link } from 'fs';


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
    </div>
  );
}

export default App;

export interface cardBtn {title: string, link: string};

export const btn = (btnTitle: string, btnLink: string): cardBtn => {
  return {title: btnTitle, link: btnLink};
}


{/*       <Card img='https://via.placeholder.com/285x180?text=Image' /> */}
      {/* 
      <Card title={'Card title'} button={btn('Go somewhere', '#')} children={<p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>} />
       */}
{/*       <Card title={'Special title treatment'} button={btn('Go somewhere', '#')}>
          <p>With supporting text below as a natural lead-in to additional content.</p>
      </Card> */}