import splitterLogo from './assets/images/logo.svg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const tipButtonGroup = document.getElementsByClassName('tip_button');
  const allUserInputs = document.getElementsByTagName('input');

  const [userTotal, setUserTotal] = useState(0.00);

  const [totalPeople, setTotalPeople] = useState(1);
  const [invalidPeople, setInvalidPeople] = useState(false);

  const [tipPct, setTipPct] = useState(0);

  const [customTip, setCustomTip] = useState(0);

  const [tipPerPerson, setTipPerPerson] = useState(0.00);
  const [totalPerPerson, setTotalPerPerson] = useState(0.00);

  const handleTipButtonClick = (e) => {
    Array.from(tipButtonGroup).forEach(function(tipButton) {
      tipButton.classList.remove("active");
    })
    e.target.classList.add("active");
    setCustomTip(0);
    setTipPct(e.target.value);
  }

  const handleCustomTip = (e) => {
    Array.from(tipButtonGroup).forEach(function(tipButton) {
      tipButton.classList.remove("active");
    })
    setCustomTip(e.target.value);
    setTipPct(0);
  }

  const handleTotalChange = (e) => {
    setUserTotal(e.target.value);
  }

  const handleTotalPeopleChange = (e) => {
    if(e.target.value < 1) {
      setInvalidPeople(true);
      e.target.classList.add('invalid-input');
      setTotalPeople(1);
    } else {
      setInvalidPeople(false);
      e.target.classList.remove('invalid-input');
      setTotalPeople(Math.floor(e.target.value).toFixed(0));
    }
    
  }

  useEffect(() => {
    setTipPerPerson((userTotal * tipPct + customTip) / totalPeople);
  }, [userTotal, totalPeople, tipPct, customTip])

  useEffect(() => {
    setTotalPerPerson((userTotal / totalPeople) + (tipPerPerson));
  }, [tipPerPerson, userTotal, totalPeople])
  


  const handleTotalReset = () => {
    Array.from(tipButtonGroup).forEach(function(tipButton) {
      tipButton.classList.remove("active");
    })
    Array.from(allUserInputs).forEach(function(userInput) {
      userInput.value = '';
    })
    setUserTotal(0.00);
    setTotalPeople(1);
    setCustomTip(0);
    setTipPct(0);
  }
  

  return (
    <div className="main_div">
      <header className="header_logo">
        <img src={splitterLogo} alt="Splitter Logo" className="logo" />
      </header>

      <main className="tip_calculator">
        <Row className='calculator_large_row'>
          <Col xs={12} lg={6}>
            <section className="user_input_total">
              <label htmlFor="input_total" className="calculator_bill">
                <p>Bill</p>
                <input type="number" name="input_total" id="input_total" placeholder="0.00" onChange={(e) => {handleTotalChange(e)}} />
              </label>
            </section>

            <section className="tip_percentage_selection">
              <Row className="tip_title">
                <Col xs={12}>
                  <h1 className="select_tip">Select Tip %</h1>
                </Col>
              </Row>
              <Row className="tip_buttons">
                <Col xs={6} lg={4}>
                  <button className="tip_button" value={0.05} onClick={(e) => {handleTipButtonClick(e)}}>5%</button>
                </Col>
                <Col xs={6} lg={4}>
                  <button className="tip_button" value={0.1} onClick={(e) => {handleTipButtonClick(e)}}>10%</button>
                </Col>
                <Col xs={6} lg={4}>
                  <button className="tip_button" value={0.15} onClick={(e) => {handleTipButtonClick(e)}}>15%</button>
                </Col>
                <Col xs={6} lg={4}>
                  <button className="tip_button" value={0.25} onClick={(e) => {handleTipButtonClick(e)}}>25%</button>
                </Col>
                <Col xs={6} lg={4}>
                  <button className="tip_button" value={0.5} onClick={(e) => {handleTipButtonClick(e)}}>50%</button>
                </Col>
                <Col xs={6} lg={4}>
                  <input className="custom_tip_button" type="number" onChange={(e) => {handleCustomTip(e)}} placeholder='Custom'/> 
                </Col>
              </Row>
            </section>

            <section className="user_input_people">
              <label htmlFor="input_people" className="total_people">
                <Row>
                  <Col xs={7}>
                     <p>Number of People</p>
                  </Col>
                  <Col xs={5}>
                    <h6 className={invalidPeople ? 'zero-error' : 'no-zero-error'}>Can't be zero</h6>
                  </Col>
                  
                </Row>
                  <input type="number" name="input_people" id="input_people" placeholder='1' onChange={(e) => {handleTotalPeopleChange(e)}} />
              </label>
            </section>
          </Col>

          <Col xs={12} lg={6}>
            <section className="total_section">
              <Row className='align-items-center'>
                <Col xs={6}>
                  <h1 className="total_title">Tip Amount</h1>
                  <p className="total_descriptor">/ person</p>
                </Col>
                <Col xs={6}>
                  <h1 className="total_amount">${tipPerPerson ? tipPerPerson.toFixed(2) : '0.00'}</h1>
                </Col>
              </Row>
              <Row className='align-items-center'>
                <Col xs={6}>
                  <h1 className="total_title">Total</h1>
                  <p className="total_descriptor">/ person</p>
                </Col>
                <Col xs={6}>
                  <h1 className="total_amount">${totalPerPerson ? totalPerPerson.toFixed(2) : '0.00'}</h1>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <button className="input_reset" onClick={handleTotalReset}>RESET</button>
                </Col>
              </Row>
            </section>
          </Col>
        </Row>
        

        
        
      </main>
    </div>
  );
}

export default App;
