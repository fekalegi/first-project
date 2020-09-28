import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

class count extends Component {
  state = {
    hitung: 0,
    variant: "warning",
    value: null,
  };

  addCount = () => {
    if (this.state.hitung < 0) {
      this.cekCount();
    } else if (this.state.hitung === 0) {
      this.setState({
        variant: "dark",
        hitung: this.state.hitung + 1,
        value: "ZERO",
      });
    } else {
      this.setState({
        variant: "dark",
        hitung: this.state.hitung + 1,
        value: this.state.hitung,
      });
    }
  };
  minusCount = () => {
    if (this.state.hitung <= 0) {
      this.cekCount();
    } else {
      this.setState({
        variant: "dark",
        hitung: this.state.hitung - 1,
        value: this.state.hitung,
      });
    }
  };

  cekCount = (value) => {
    if (this.state.hitung !== 0) {
      this.setState({
        variant: "dark",
        value: this.state.hitung,
      });
    } else {
      this.setState({
        variant: "warning",
        value: "ZERO",
      });
    }
  };

  componentDidMount() {
    this.cekCount();
  }

  render() {
    return (
      <Container fluid>
        <Row xs={2} md={4} lg={6}>
          <Col>
            <Button variant={this.state.variant}> {this.state.value} </Button>
          </Col>
          <Col>
            <Button variant="primary" onClick={this.addCount}>
              {" "}
              +{" "}
            </Button>{" "}
            <Button variant="primary" onClick={this.minusCount}>
              {" "}
              -{" "}
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default count;
