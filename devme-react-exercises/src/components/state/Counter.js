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

        if (currentCount + num > max) { // adding num to currentCount > max, set count to max
            this.setState({ count: max });
        } else if (currentCount + num < 0) { // adding num to currentCount < 0, set count to initial
            this.setState({ count: 0 });
        } else {
            this.setState({ count: currentCount + num }); 
        }
    }

    render() {
        return (<>
                <p>{ this.state.count }</p>
                <div>
                    <button onClick={() => this.handleClick(-1)}>-1</button>
                    <button onClick={() => this.handleClick(1)}>+1</button>
                </div>
                </>)
    }
}

export default Counter
