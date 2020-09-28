import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

class count extends Component {
  state = {
    hitung: 0,
    isDisabled: true,
  };

  addCount = () => {
    if (this.state.hitung === 0) {
      this.setState({
        hitung: this.state.hitung + 1,
      });
    } else {
      this.setState({
        hitung: this.state.hitung + 1,
      });
    }
  };
  minusCount = () => {
    if (this.state.hitung <= 0) {
      this.setState({
        isDisabled: true,
      });
      return null;
    } else {
      this.setState({
        hitung: this.state.hitung - 1,
      });
    }
  };

  componentDidMount() {}

  render() {
    return (
      <Container fluid>
        <Row xs={2} md={4} lg={6}>
          <Col>
            <Button variant={this.state.hitung === 0 ? "warning" : "dark"}>
              {" "}
              {this.state.hitung === 0 ? "ZERO" : this.state.hitung}{" "}
            </Button>
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
