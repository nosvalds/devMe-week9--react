import React, { Component } from 'react';

class StepCounter extends Component {
    constructor(props) {
        // make sure you always add this, it makes Component work
        super(props);
        // setup our state
        // just a plain old JavaScript object
        this.state = {
            count: 0
        };

        this.handleClick = this.handleClick.bind(this);
        }

    handleClick(num) {
        const { max } = this.props;

        let currentCount = this.state.count;

        if (currentCount + num > max) { // adding num to currentCount > max, set count to max
            this.setState({ count: max });
        } else if (currentCount + num < 0) { // subtracting num to currentCount < 0, set count to max
            this.setState({ count: 0 });
        } else {
            this.setState({ count: currentCount + num }); 
        }
    }

    render() {
        const { step } = this.props;
        return (<>
                <p>{ this.state.count }</p>
                <div>
                    <button onClick={() => this.handleClick(-step)}>-{ step }</button>
                    <button onClick={() => this.handleClick(step)}>+{ step }</button>
                </div>
                </>)
    }
}

export default StepCounter
