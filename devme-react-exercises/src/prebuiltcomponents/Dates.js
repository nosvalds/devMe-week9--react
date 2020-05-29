import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import Card from "react-bootstrap/Card";
import Alert from 'react-bootstrap/Alert'
import Form from "react-bootstrap/Form";

class CalendarPick extends Component {
    constructor(props) {
        super(props);

        this.state = {
            startDate: new Date(),
            endDate: new Date(),
        }
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
    }

    handleChangeStart(date) {
        this.setState({
            startDate: date
        });
    }
    handleChangeEnd(date) {
        this.setState({
            endDate: date
        });
    }

    render() {
        const {startDate, endDate } = this.state;

        let diff = Math.ceil((endDate - startDate) / 86400000);
        return (
            <Card>
                <Card.Header>
                    <Form>
                        <Form.Group>
                            <Form.Label id="startDate">Start Date</Form.Label>
                            <DatePicker
                                id="startDate"
                                selected={this.state.startDate}
                                onChange={this.handleChangeStart}
                                className="form-control"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label id="endDate">End Date</Form.Label>
                            <DatePicker
                                id="endDate"
                                selected={this.state.endDate}
                                onChange={this.handleChangeEnd}
                                className="form-control"
                            />
                        </Form.Group>
                    </Form>
                </Card.Header>
                <Card.Body>
                    <Alert variant="success">
                        { diff } day(s)
                    </Alert>
                </Card.Body>
            </Card>
        );
    }
}

export default CalendarPick;