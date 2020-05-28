import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar'

class Progress extends Component {
    constructor(props) {
        super(props);

        this.state = {
            curProg: 0,
            disabled: false
        }
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { curProg } = this.state;
        if (curProg === 90) {
            this.setState({
                disabled: true, // disable button
                curProg: this.state.curProg + 10
            })
        } else if (curProg < 100) {
            this.setState({
                curProg: this.state.curProg + 10
            })
        }
    }
    render() {
        const { curProg, disabled } = this.state;
        return (
            <>
            <ProgressBar now={ curProg } label={ `${curProg}%`} />
            <Button variant="outline-danger" size="lg" block onClick={  this.handleClick } disabled={ disabled }>More!</Button>
            </>
        )
    }
}

export default Progress;