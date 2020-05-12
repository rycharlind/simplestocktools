import React from "react";
import logo from '../assets/logo.svg';
import Brand from "../style/Brand.style";
import FlexStyle from "../style/Flex.style";
import ViewSource from "./ViewSource";
import PathUtil from "../util/PathUtil";

export default class Header extends React.Component {
    render() {
        return (
            <div style={{ ...FlexStyle.row, ...{ height: '100px', padding: '0px 32px' } }}>
                <a href={PathUtil.getPath('/')} style={{textDecoration: 'none', display: 'flex', alignItems: 'center'}}>
                    <img
                        src={logo}
                        width="40"
                        height="40"
                        alt="OptionsCalc"
                        style={{ marginRight: '16px' }}
                    />
                    <span style={Brand.brandName}>Simple Stock Tools</span>
                </a>
                <div style={FlexStyle.spacer}></div>
                <ViewSource></ViewSource>
            </div>
        )
    }
}