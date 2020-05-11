import CSS from 'csstype';
import React from "react";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Table from 'react-bootstrap/Table';
import NumberFormat from 'react-number-format';

type State = {
    callOrPut: string;
    numberOfContracts: number | string;
    optionPrice: number | string;
    strikePrice: number | string;
    stockPrice: number | string;
    totalInvestment: number;
    stockPriceValue: number;
    strikePriceValue: number;
    profit: number;
    profitColor: string;
}

const pillStyle: CSS.Properties = { padding: '3px', backgroundColor: '#546e7a', color: '#fff' };
const resultValueStyle: CSS.Properties = { textAlign: 'right' };

const popoverNumberOfContracts = (
    <Popover id="popover-basic">
        <Popover.Title as="h3"># of Contracts</Popover.Title>
        <Popover.Content>
            The total number of contracts that you will purchase for this trade.  
            Each contract equals 100 shares of the underlying stock. 
      </Popover.Content>
    </Popover>
);

const popoverOptionPrice = (
    <Popover id="popover-basic">
        <Popover.Title as="h3">Option Price</Popover.Title>
        <Popover.Content>
            This is the price, or premium that you pay for each contract.  Your total investment will be the Option Price x # of Contracts. 
            <a target="_new" href="https://www.investopedia.com/terms/o/option-premium.asp">Learn More</a>
      </Popover.Content>
    </Popover>
);

const popoverStrikePrice = (
    <Popover id="popover-basic">
        <Popover.Title as="h3">Strike Price</Popover.Title>
        <Popover.Content>
            The strike price is the target price at which your contract can be bought or sold when it is exercised.
            In order to make a profit, you need the unerlying stock price to be greater than the stock price for a Call,
            and less than for a Put. 
            <a target="_new" href="https://www.investopedia.com/terms/s/strikeprice.asp">Learn More</a>
      </Popover.Content>
    </Popover>
);

const popoverStockPrice = (
    <Popover id="popover-basic">
        <Popover.Title as="h3">Stock Price</Popover.Title>
        <Popover.Content>
            This is the price of the stock that you think it will be at in the future.  
            Change this up and down to see what price gets you the highest profit.
      </Popover.Content>
    </Popover>
);

const learnMoreUrl = "https://www.investopedia.com/articles/optioninvestor/03/073003.asp";

export default class OptionsProfileCalc extends React.Component<any, State> {

    constructor(prop: any) {
        super(prop);
        this.state = {
            callOrPut: 'call',
            numberOfContracts: 5,
            optionPrice: 1,
            strikePrice: 50,
            stockPrice: 70,
            totalInvestment: 0,
            stockPriceValue: 0,
            strikePriceValue: 0,
            profit: 0,
            profitColor: '#4caf50'
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.calculate = this.calculate.bind(this);
        this.getDollarValue = this.getDollarValue.bind(this);
        this.getProfitsCell = this.getProfitsCell.bind(this);
    }

    render() {
        return (

            <div>
                <Jumbotron style={{ backgroundColor: '#37474f' }}>
                    <h1>Stock Options Profit Calculator</h1>
                    <p>
                        A simple and lightweight app for calculating your stock option profits.  Enter in the below
                        information and click <strong>Calculate</strong> to see how much money you can make on a single trade.
                        </p>
                    <p>
                        <Button as="a" target="_new" href={learnMoreUrl} variant="primary">Learn more about Stock Options</Button>
                    </p>
                </Jumbotron>

                <CardDeck>
                    <Card bg="dark">
                        <Card.Header>
                            <h2>Inputs</h2>
                        </Card.Header>
                        <Card.Body>

                            <div style={{ maxWidth: '350px' }}>

                                <div style={{ marginBottom: '16px' }}>
                                    <Form.Group controlId="callOrPut">
                                        <Form.Check inline label="Call" value="call" type="radio" id="option-call"
                                            checked={this.state.callOrPut === 'call'}
                                            onChange={this.handleOptionChange}
                                        />
                                        <Form.Check inline label="Put" value="put" type="radio" id="option-put"
                                            checked={this.state.callOrPut === 'put'}
                                            onChange={this.handleOptionChange}
                                        />
                                    </Form.Group>
                                </div>

                                <Form.Group controlId="numberOfContracts">
                                    <Form.Label># of Contracts (<span style={{ color: '#eceff1', fontSize: '14px' }}>1 contract = 100 shares</span>)</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>#</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            size="lg"
                                            type="number"
                                            placeholder="Number"
                                            value={this.state.numberOfContracts}
                                            onChange={this.handleInputChange}
                                        />
                                        <InputGroup.Append>
                                            <OverlayTrigger trigger="hover" placement="right" overlay={popoverNumberOfContracts}>
                                                <Button variant="outline-secondary">?</Button>
                                            </OverlayTrigger>
                                        </InputGroup.Append>
                                    </InputGroup>
                                </Form.Group>

                                <Form.Group controlId="optionPrice">
                                    <Form.Label>Option Price (<span style={{ color: '#eceff1', fontSize: '14px' }}>Premium</span>)</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>$</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            size="lg"
                                            type="number"
                                            placeholder="Number"
                                            value={this.state.optionPrice}
                                            onChange={this.handleInputChange}
                                        />
                                        <InputGroup.Append>
                                            <OverlayTrigger trigger="hover" placement="right" overlay={popoverOptionPrice}>
                                                <Button variant="outline-secondary">?</Button>
                                            </OverlayTrigger>
                                        </InputGroup.Append>
                                    </InputGroup>
                                </Form.Group>

                                <Form.Group controlId="strikePrice">
                                    <Form.Label>Strike Price</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>$</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            size="lg"
                                            type="number"
                                            placeholder="Number"
                                            value={this.state.strikePrice}
                                            onChange={this.handleInputChange}
                                        />
                                        <InputGroup.Append>
                                            <OverlayTrigger trigger="hover" placement="right" overlay={popoverStrikePrice}>
                                                <Button variant="outline-secondary">?</Button>
                                            </OverlayTrigger>
                                        </InputGroup.Append>
                                    </InputGroup>
                                </Form.Group>

                                <Form.Group controlId="stockPrice">
                                    <Form.Label>Stock Price</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>$</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            size="lg"
                                            type="number"
                                            placeholder="Number"
                                            value={this.state.stockPrice}
                                            onChange={this.handleInputChange}
                                        />
                                        <InputGroup.Append>
                                            <OverlayTrigger trigger="hover" placement="right" overlay={popoverStockPrice}>
                                                <Button variant="outline-secondary">?</Button>
                                            </OverlayTrigger>
                                        </InputGroup.Append>
                                    </InputGroup>
                                </Form.Group>

                            </div>

                        </Card.Body>
                        <Card.Footer>
                            <Button variant="primary" size="lg" onClick={this.calculate}>Calculate</Button>
                        </Card.Footer>
                    </Card>
                    <Card bg="dark">
                        <Card.Header>
                            <h2>Results</h2>
                        </Card.Header>
                        <Card.Body>

                            <Table striped bordered hover variant="dark">
                                <tbody>
                                    <tr>
                                        <td>Total Investment</td>
                                        <td style={resultValueStyle}><NumberFormat value={this.state.totalInvestment} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>
                                            Option Price {this.getDollarValue(Number(this.state.optionPrice))} x # of Contracts 
                                            <span style={pillStyle}>{this.state.numberOfContracts}</span> x 100
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>

                            <Table striped bordered hover variant="dark">
                                <tbody>
                                    <tr>
                                        <td>Stock Price Value</td>
                                        <td style={resultValueStyle}><NumberFormat value={this.state.stockPriceValue} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>Total Investment {this.getDollarValue(this.state.totalInvestment)} x 
                                        Stock Price {this.getDollarValue(Number(this.state.stockPrice))}</td>
                                    </tr>
                                </tbody>
                            </Table>

                            <Table striped bordered hover variant="dark">
                                <tbody>
                                    <tr>
                                        <td>Strike Price Value</td>
                                        <td style={resultValueStyle}><NumberFormat value={this.state.strikePriceValue} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>Total Investment {this.getDollarValue(this.state.totalInvestment)} x 
                                        Strike Price {this.getDollarValue(Number(this.state.strikePrice))}</td>
                                    </tr>
                                </tbody>
                            </Table>

                            <Table striped bordered hover variant="dark">
                                <tbody>
                                    <tr>
                                        <td style={{fontSize: '32px'}}>Profit</td>
                                        <td style={{...resultValueStyle, ...{fontSize: '32px', color: this.state.profitColor}}}>
                                            <NumberFormat value={this.state.profit} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>{this.getProfitsCell()}</td>
                                    </tr>
                                </tbody>
                            </Table>

                        </Card.Body>
                    </Card>
                </CardDeck>

            </div>
        )
    }

    getProfitsCell() {

        const elements = [];

        const calcValuesCall = (
            <div>
                Stock Price Value {this.getDollarValue(this.state.stockPriceValue)} -
                Strike Price Value {this.getDollarValue(this.state.strikePriceValue)} -
                Total Investment {this.getDollarValue(this.state.totalInvestment)}
            </div>
        );

        const calcValuesPut = (
            <div>
                Strike Price Value {this.getDollarValue(this.state.strikePriceValue)} -
                Stock Price Value {this.getDollarValue(this.state.stockPriceValue)} -
                Total Investment {this.getDollarValue(this.state.totalInvestment)}
            </div>
        );

        if (this.state.callOrPut === 'call') {
            elements.push(calcValuesCall);
        } else {
            elements.push(calcValuesPut);
        }

        const alert = (
            <Alert variant="info" style={{marginTop: '16px'}}>
                NOTE: Your total losses cannot exceed your total investment.
            </Alert>
        );

        if (this.state.profit < 0) {
            elements.push(alert);
        }

        return elements;
    }

    getDollarValue(value: number) {
        return (
            <span style={pillStyle}>
                <NumberFormat value={value} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </span>
        )
    }

    calculate() {
        const totalInvestment: number = Number(this.state.optionPrice) * (Number(this.state.numberOfContracts) * 100);
        const stockPriceValue: number = totalInvestment * Number(this.state.stockPrice);
        const strikePriceValue: number = totalInvestment * Number(this.state.strikePrice);
        let profit: number = (stockPriceValue - strikePriceValue) - totalInvestment;

        if (this.state.callOrPut === 'put') {
            profit = (strikePriceValue - stockPriceValue) - totalInvestment;
        }

        if (profit <= totalInvestment) {
            profit = -totalInvestment;
        }

        this.setState({
            totalInvestment: totalInvestment,
            stockPriceValue: stockPriceValue,
            strikePriceValue: strikePriceValue,
            profit: profit
        });

        if (profit < 0) {
            this.setState({ profitColor: '#f44336' });
        } else {
            this.setState({ profitColor: '#4caf50' });
        }

    }

    handleInputChange(event: any) {
        this.setState({ [event.target.id]: event.target.value } as Pick<State, keyof State>);
    }

    handleOptionChange(event: any) {
        this.setState({ callOrPut: event.target.value });
    }
}