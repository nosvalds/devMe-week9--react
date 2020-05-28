import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class CatchMeIfYouCan2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            position: 0,

        }
        
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { jump } = this.props; // get jump size from props

        this.setState({ position: this.state.position + jump }); 
    }

    render() {
        const { position } = this.state;
        return (
            <Button 
                onClick={ this.handleClick }
                style={{
                    transform: `translateY(${position}px)`
                }} 
            >Catch Me</Button>
        )
    }

}

export default CatchMeIfYouCan2;