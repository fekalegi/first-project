import React, { Component } from "react";
import { Container, Grid, Row, Col } from "react-bootstrap";

class count extends Component {
  state = {
    hitung: 0,
  };

  cekCount = () => {
    if (this.state.hitung === 0) {
    }
  };

  render() {
    return (
      <Container>
        <Grid>
          <Row></Row>
        </Grid>
      </Container>
    );
  }
}

export default count;
