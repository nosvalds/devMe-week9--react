import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        // make sure you always add this, it makes Component work
        super(props);
        // setup our state
        const { initial } = this.props;
        // just a plain old JavaScript object
        this.state = {
            count: initial
        };

        this.handleClick = this.handleClick.bind(this);
        }

    handleClick(num) {
        const { max } = this.props;

        let currentCount = this.state.count;

        if (currentCount < max && currentCount > 0) { // if less than max or > 0 can add or subtract
            this.setState({ count: currentCount + num }); 
        } else if (currentCount === max && num < 0) { // if = max and subtracting update the state
            this.setState({ count: currentCount + num });
        } else if (currentCount === 0 && num > 0) {
            this.setState({ count: currentCount + num });
        }
    }

    render() {
        return (<>
                <p>{ this.state.count }</p>
                <div>
                    <button onClick={() => this.handleClick(-1)}>-</button>
                    <button onClick={() => this.handleClick(1)}>+</button>
                </div>
                </>)
    }
}

export default Counter
