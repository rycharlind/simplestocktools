import React from "react";
import Brand from "../style/Brand.style";
import githubLogo from '../assets/github-logo.svg';

export default class ViewSource extends React.Component {
    render() {
        return (
            <a target="_new" href="https://github.com/rycharlind/simplestocktools-react"
                style={{ textDecoration: 'none', color: Brand.primary, display: 'flex', alignItems: 'center' }}>
                <img alt="View Source" src={githubLogo} width="40" height="40" style={{ marginRight: '12px' }} />
                <span>View Source</span>
            </a>
        )
    }
}