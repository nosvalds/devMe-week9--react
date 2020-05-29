import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'

class List2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listItems: [],
            inputValue: ""
        }

        this.clickHandler = this.clickHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    clickHandler(e) {
        e.preventDefault();
        const { listItems, inputValue } = this.state;
        this.setState({ listItems: [...listItems, inputValue], // use spread operator to concatenate inputValue onto listItems array. Can't use concat/push directly because we shouldn't modify state that way.
                        inputValue: "" // clear input for user experience
                    });
    }

    handleChange(e) {
        this.setState({ inputValue: e.currentTarget.value });
    }

    render() {
        const { inputValue, listItems } = this.state;
        return (
            <Card style={{ width: '18rem' }}>
                <ListGroup>
                    { listItems.map((value, index) => (
                        <ListGroup.Item 
                            key={ index }
                        >
                            { value }
                        </ListGroup.Item>
                    ))}
                </ListGroup>
                <Form>
                    <Form.Group>
                        <Form.Label>Add to the list:</Form.Label>
                        <Form.Control 
                            type="text" 
                            onChange={ this.handleChange }
                            value={ inputValue }
                        />
                    </Form.Group>
                    <Button 
                        onClick={ this.clickHandler }
                    >
                        Add
                    </Button>
                </Form>
            </Card>
        )
    }
}
export default List2;
