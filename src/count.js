import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

class count extends Component {
  state = {
    hitung: 0,
    variant: "warning",
  };

  addCount = () => {
    if (this.state.hitung <= 0) {
      return null;
    } else {
      this.setState({
        hitung: this.setState.hitung + 1,
      });
    }
  };

  cekCount = () => {
    if (this.state.hitung === 0) {
      this.setState({
        variant: "warning",
      });
      return "ZERO";
    } else {
      this.setState({
        variant: "dark",
      });
      return this.state.hitung;
    }
  };

  render() {
    return (
      <Container fluid>
        <Row xs={2} md={4} lg={6}>
          <Col>
            <Button variant={this.state.variant}> {this.cekCount}</Button>
          </Col>
          <Col>
            <Button variant="primary"> + </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default count;
