import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

class count extends Component {
  state = {
    hitung: 0,
    variant: "warning",
  };

  cekCount = () => {
    if (this.state.hitung === 0) {
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <Button variant={this.state.variant}> ZERO </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default count;
