import React, { Component } from 'react';
import LameGameHeader from './components/LameGameHeader';
class LameGame extends Component {
    constructor(props) {
        super(props);

        this.buttonCaptions = [
            'Start',
            'Now',
            'Try Again'
        ];

        this.difference = "";

        this.state = {
            gameStateIndex: 0,
            timeStamp: null
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let curIndex = this.state.gameStateIndex;
        let { aim } = this.props;
        switch (curIndex) {
            case 0: // clicked start, save timestamp of when that happened
                this.setState({ gameStateIndex: curIndex + 1,
                                timeStamp: new Date().getTime() });
                break;
        
            case 1: // clicked now
                let now = new Date().getTime(); // get current timestamp
                let startTime = this.state.timeStamp; // retrieve start timestamp

                let diff = (now - (startTime + aim * 1000))/1000; // do the math to see how close they were to the aim
                this.difference = diff.toFixed(1);

                this.setState({ gameStateIndex: curIndex + 1 });
                break;
        
            case 2: // clicked "try again"
                this.setState({ gameStateIndex: 0,
                                timeStamp: null });
                break;
            default:
                break;
        }
    }

    render() {
        const { aim } = this.props;
        let buttonCaption = this.buttonCaptions[this.state.gameStateIndex];

        return (
            <>
            <h1>Lame Game</h1>
            <LameGameHeader 
                gameStateIndex={ this.state.gameStateIndex } 
                aim={ aim } 
                diff={ this.difference } 
            />
            <button 
                onClick={this.handleClick}
            >
                { buttonCaption }
            </button>
            </>
        )
    }
}

export default LameGame