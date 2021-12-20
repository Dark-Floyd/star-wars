import "./App.css";
import Table from "./components/Table/Table";
import { Navbar, Container, Col, Row } from "react-bootstrap";
import Chart from "./components/Chart/Chart";
function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand  style={{ fontSize: "2rem" }}>
            <img
              src="/empire.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="SWAPI"
            />{" "}
            SWapi
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Container fluid="md">
        <Row>
          <Col>
            {" "}
            <Table></Table>
          </Col>
        </Row>

        <Row>
          <Col>
            {" "}
            <Chart></Chart>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
