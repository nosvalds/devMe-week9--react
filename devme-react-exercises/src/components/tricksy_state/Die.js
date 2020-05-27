import React, { Component } from 'react';
class Die extends Component {

    constructor(props) {
        super(props);
        const { sides } = this.props;

        this.state = {
            roll: Math.floor(Math.random() * sides) + 1,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { sides } = this.props;

        this.setState({
            roll: Math.floor(Math.random() * sides) + 1
        })
    }

    render() {
        return (
            <div 
                onClick={ this.handleClick }
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "cornflowerblue",
                    borderRadius: 15,
                    textAlign: "center"
                }}
            >
                <h1>
                    { this.state.roll }
                </h1>
            </div>
        )
    }
}
export default Die
