// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.scss';
import Title from './components/title/Title';
import OutputScreen from './components/outputScreen/Output-screen';
import ButtonC from './components/button/Button';
// import { Button } from 'react-bootstrap';




const App = () => {

  // const [question, setQuestion] = useState();
  // const [answer, setAnswer] = useState();

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   const value = e.target.value;

  //   switch (value) {
  //     case '=': {


  //     }
  //   }


  // }

  return (
    <div className='frame'>
      <Title value='Calculator Appy' />
      <div class="mainCalc">
        <OutputScreen />
        <div className="button-row">
          <ButtonC label={'Clear'}>Clear</ButtonC>
          <ButtonC label={'Delete'} />
          <ButtonC label={'.'} />
          <ButtonC label={'/'} />
        </div>
        <div className="button-row">
          <ButtonC label={'7'} />
          <ButtonC label={'8'} />
          <ButtonC label={'9'} />
          <ButtonC label={'*'} />
        </div>
        <div className="button-row">
          <ButtonC label={'4'} />
          <ButtonC label={'5'} />
          <ButtonC label={'6'} />
          <ButtonC label={'-'} />
        </div>
        <div className="button-row">
          <ButtonC label={'1'} />
          <ButtonC label={'2'} />
          <ButtonC label={'3'} />
          <ButtonC label={'+'} />
        </div>
        <div className="button-row">
          <ButtonC label={'0'} />
          <ButtonC label={'='} />
        </div>
      </div>
    </div>
  );
}

export default App;
