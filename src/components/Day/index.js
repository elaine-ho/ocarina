import React from "react";
import dateFns from "date-fns";
import { Container, Row, Col, Table, Form, InputGroup, FormControl, Button } from 'react-bootstrap';

import './day.css';

class Day extends React.Component{

    renderSchedule(){
        let time = dateFns.startOfDay(this.props.modalDate);
        let times = [];
        for(let i=0; i<48; i++){
            var formattedTime = dateFns.format(time, "hh:mm a");
            times.push(
                <tr>
                    <td>{formattedTime}</td>
                    <td></td>
                </tr>
            );
            time = dateFns.addMinutes(time, 30);
        }
        return <Table>{times}</Table>;
    }

    render(){
        return(
            <div>
                <h3 class='currentDay'>{dateFns.format(this.props.modalDate,"M/D/YYYY")}</h3>
                <Container>
                    <Row>
                        <Col sm >
                            <Form.Label class='day-header'>Schedule</Form.Label>
                            <div id='schedule-scrollable'>{this.renderSchedule()} </div>
                        </Col>
                        <Col sm>                            
                            <Form>
                                <Form.Group controlId="formToDo">
                                <Form.Label class='day-header'>To-Do</Form.Label>
                                <InputGroup className="todo-1">
                                    <FormControl aria-label="First text input for to-do." />
                                    <InputGroup.Prepend>
                                        <InputGroup.Checkbox aria-label="First checkbox for to-do." />
                                    </InputGroup.Prepend>
                                </InputGroup>
                                <InputGroup className="todo-2">
                                    <FormControl aria-label="Second text input for to-do." />
                                    <InputGroup.Prepend>
                                        <InputGroup.Checkbox aria-label="Second checkbox for to-do." />
                                    </InputGroup.Prepend>
                                </InputGroup>
                                <InputGroup className="todo-3">
                                    <FormControl aria-label="Third text input for to-do." />
                                    <InputGroup.Prepend>
                                        <InputGroup.Checkbox aria-label="Third checkbox for to-do." />
                                    </InputGroup.Prepend>
                                </InputGroup>
                                <InputGroup className="todo-4">
                                    <FormControl aria-label="Fourth text input for to-do." />
                                    <InputGroup.Prepend>
                                        <InputGroup.Checkbox aria-label="Fourth checkbox for to-do." />
                                    </InputGroup.Prepend>
                                </InputGroup>
                                <InputGroup className="todo-5">
                                    <FormControl aria-label="Fifth text input for to-do." />
                                    <InputGroup.Prepend>
                                        <InputGroup.Checkbox aria-label="Fifth checkbox for to-do." />
                                    </InputGroup.Prepend>
                                </InputGroup>
                                </Form.Group>
                                <Form.Group controlId="formNotes">
                                <Form.Label class='day-header'>Journal</Form.Label>
                                <Form.Control as="textarea" rows="3" id='textarea-notes' />
                                </Form.Group>
                                <Form.Group controlId="formAddToSchedule">
                                <Form.Label class='day-header'>Add To Schedule</Form.Label>
                                <div class="time-picker">
                                    <div>
                                    <Form.Control as="select" size="sm">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option selected='selected'>12</option>
                                    </Form.Control>
                                    </div>
                                    <div>
                                    <Form.Control as="select" size="sm">
                                        <option>00</option>
                                        <option>30</option>
                                    </Form.Control>
                                    </div>
                                    <div>
                                    <Form.Control as="select" size="sm">
                                        <option>am</option>
                                        <option>pm</option>
                                    </Form.Control>
                                    </div>
                                    <div>
                                        <span id="to">to</span>
                                    </div>
                                    <div>
                                    <Form.Control as="select" size="sm">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option selected='selected'>12</option>
                                    </Form.Control>
                                    </div>
                                    <div>
                                    <Form.Control as="select" size="sm">
                                        <option>00</option>
                                        <option>30</option>
                                    </Form.Control>
                                    </div>
                                    <div>
                                    <Form.Control as="select" size="sm">
                                        <option>am</option>
                                        <option>pm</option>
                                    </Form.Control>
                                    </div>
                                </div>
                                <Form.Control type="text" placeholder="What's the move?" />
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Day;