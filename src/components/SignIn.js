import React from 'react';
import {Form, FormControl, FormGroup, ControlLabel, Button, Col, Checkbox} from 'react-bootstrap';
import Modal from './Modal/Modal'


const SignIn = ({onSubmit, onCancel}) =>  {
    return (
        <Modal title="Sign In" onClose={onCancel}>
            <Form horizontal>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={4}>
                  Email
                </Col>
                <Col sm={8}>
                  <FormControl type="email" placeholder="Email" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={4}>
                  Password
                </Col>
                <Col sm={8}>
                  <FormControl type="password" placeholder="Password" />
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={4} sm={8}>
                  <Checkbox>Remember me</Checkbox>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={4} sm={8}>
                  <Button className="btn btn-success" type="submit">Sign in</Button>
                </Col>
              </FormGroup>
            </Form>


        </Modal>

    );
};

export default SignIn

