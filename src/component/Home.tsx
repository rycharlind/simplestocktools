import React from "react"
import Jumbotron from "react-bootstrap/Jumbotron"
import Button from "react-bootstrap/Button"

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron style={{ backgroundColor: '#37474f' }}>
                    <h1>Simple Stock Tools</h1>
                    <p>
                        An open-source React app that brings easy-to-use web tools for analyzing stock data. 
                    </p>
                    <p>
                        <Button as="a" href="/options-calculator" variant="primary">Try the Stock Options Calculator</Button>
                    </p>
                </Jumbotron>
            </div>
        )
    }
}