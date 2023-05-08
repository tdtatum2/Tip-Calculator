import splitterLogo from './assets/images/logo.svg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="main_div">
      <header className="header_logo">
        <img src={splitterLogo} alt="Splitter Logo" className="logo" />
      </header>

      <main className="tip_calculator">
        <Row className='calculator_large_row'>
          <Col xs={12}>
            <section className="user_input_total">
              <label htmlFor="input_total" className="calculator_bill">
                <p>Bill</p>
                <input type="number" name="input_total" id="input_total" placeholder="0.00" />
              </label>
            </section>

            <section className="tip_percentage_selection">
              <Row className="tip_title">
                <Col xs={12}>
                  <h1 className="select_tip">Select Tip %</h1>
                </Col>
              </Row>
              <Row className="tip_buttons">
                <Col xs={6}>
                  <button className="tip_button">5%</button>
                </Col>
                <Col xs={6}>
                  <button className="tip_button">10%</button>
                </Col>
                <Col xs={6}>
                  <button className="tip_button">15%</button>
                </Col>
                <Col xs={6}>
                  <button className="tip_button">25%</button>
                </Col>
                <Col xs={6}>
                  <button className="tip_button">50%</button>
                </Col>
                <Col xs={6}>
                  <button className="tip_button">Custom</button>
                </Col>
              </Row>
            </section>

            <section className="user_input_people">
              <label htmlFor="input_people" className="total_people">
                <p>Number of People</p>
                <input type="number" name="input_people" id="input_people" placeholder='0' />
              </label>
            </section>
          </Col>

          <Col xs={12}>
            <section className="total_section">
              <Row>
                <Col xs={6}>
                  <h1 className="total_title">Tip Amount</h1>
                  <p className="total_descriptor">/ person</p>
                </Col>
                <Col xs={6}>
                  <h1 className="total_amount">$0.00</h1>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                  <h1 className="total_title">Total</h1>
                  <p className="total_descriptor">/ person</p>
                </Col>
                <Col xs={6}>
                  <h1 className="total_amount">$0.00</h1>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <button className="input_reset">RESET</button>
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
