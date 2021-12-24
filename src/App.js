import "./App.css";
import VehicleTable from "./components/VehicleTable/VehicleTable";
import { Navbar, Container, Col, Row } from "react-bootstrap";
import FullChart from "./components/FullChart/Fullchart";
function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand style={{ fontSize: "2rem" }}>
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
      <Container>
        <Row>
          <Col>
            <VehicleTable></VehicleTable>
          </Col>
        </Row>
        <Row>
          <Col>
            <FullChart></FullChart>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
