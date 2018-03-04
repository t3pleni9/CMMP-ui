import React, {Component} from 'react';
import {Form, FormControl, FormGroup, ControlLabel, Button, Col, Checkbox} from 'react-bootstrap';
import Modal from './Modal/Modal'


class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'email': "",
      'password': "",
      're-password':""
    }
  }

  onStateChange(event, property) {
    let state = {};
    state[property] = event.target.value;
    this.setState(state);
  }
  
  register(event) {
    console.log(this.state);
    // registration logic post validation
    // event.preventDefault();
  }

  render() {
    return (
        <Modal title="Sign Up" onClose={this.props.onCancel}>
          <Form horizontal>
            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={4}>
                Email
              </Col>
              <Col sm={8}>
                <FormControl type="email" placeholder="Email" onChange={(e) => this.onStateChange(e, 'email')}/>
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={4}>
                Password
              </Col>
              <Col sm={8}>
                <FormControl type="password" placeholder="Password" onChange={(e) => this.onStateChange(e, 'password')}/>
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalRePassword">
              <Col componentClass={ControlLabel} sm={4}>
                Re-enter Password
              </Col>
              <Col sm={8}>
                <FormControl type="password" placeholder="Password" onChange={(e) => this.onStateChange(e, 're-password')}/>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col smOffset={4} sm={8}>
                <Button className="btn btn-success" type="submit" onClick={(e) => this.register(e)}>Register</Button>
              </Col>
            </FormGroup>
          </Form>
        </Modal>
    );
  }
}

export default SignUp

