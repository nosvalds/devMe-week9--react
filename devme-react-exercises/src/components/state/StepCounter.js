import React, { Component } from 'react';

class StepCounter extends Component {
    constructor(props) {
        // make sure you always add this, it makes Component work
        super(props);
        // setup our state
        this.state = {
            count: 0
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(num) {
        const { max } = this.props;

        let newTotal = this.state.count + num;

        if (newTotal + num > max) { // adding num to newTotal > max, set count to max
            this.setState({ count: max });
        } else if (newTotal + num < 0) { // adding num to newTotal < 0, set count to 0
            this.setState({ count: 0 });
        } else {
            this.setState({ count: newTotal }); 
        }
    }

    render() {
        const { step } = this.props;
        
        return (
            <>
            <p>
                { this.state.count }
            </p>
            <div>
                <button 
                    onClick={() => this.handleClick(-step)}
                >
                    -{ step }
                </button>
                <button
                    onClick={() => this.handleClick(step)}
                >
                    +{ step }
                </button>
            </div>
            </>
        );
    }
}

export default StepCounter
