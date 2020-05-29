import React from 'react';
import { SwatchesPicker } from 'react-color';
import Jumbotron from 'react-bootstrap/Jumbotron'

class Headline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayColorPick: false,
            color: "#333",
        };

        this.clickHandler = this.clickHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose = () => {
        this.setState({ displayColorPick: false })
      };
    
    handleChange = (color) => {
        this.setState({ color: color.hex })
      };

    clickHandler() {
        this.setState({ displayColorPick: !this.state.displayColorPick })
          // pop up the SwatchPicker
      }

  render() {
    const { message } = this.props;
    const { color, displayColorPick } = this.state;
    return (
        <>
        <Jumbotron>
            <h1
                onClick={ this.clickHandler }
                style={{
                    color: color // set color to hex color from State
                }}
            >
                { message }
            </h1>
        </Jumbotron>
        { displayColorPick ? 
            <div 
                style={{
                    position: 'absolute',
                    zIndex: '2',
                }}
            >
            <div 
                style={{
                    position: 'fixed',
                    top: '0px',
                    right: '0px',
                    bottom: '0px',
                    left: '0px',
                }} 
                onClick={ this.handleClose }
            />
                <SwatchesPicker 
                    color={ this.state.color } 
                    onChange={ this.handleChange } 
                />
            </div> 
            : null 
        }
        </>
    );
  }
}

export default Headline;