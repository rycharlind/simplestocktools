import React from "react";
import FlexStyle from "../style/Flex.style";
import ViewSource from "./ViewSource";

export default class Footer extends React.Component {
    render() {
        return (
            <div style={{ ...FlexStyle.row, ...{ height: '100px', padding: '32px', justifyContent: 'center' } }}>
                <span style={{marginRight: '16px'}}>
                    Created with <a target="_new" href="https://reactjs.org/">React.js</a> and <a target="_new" href="https://react-bootstrap.github.io">React Bootstrap</a>
                </span>
                <ViewSource></ViewSource>
            </div>
        )
    }
}