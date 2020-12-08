import "./styles.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import http from "../../http-common";
import { List, Row, Col } from "antd";
import CarwashMap from "../CarwashMap";

export default () => {
  const [carwashes, setCarwashes] = useState([])
  
  useEffect(() => {
    http.get("/carwashes/")
      .then(response => setCarwashes(response.data))
      .catch(error => console.log(error));
  }, []);
  
  return (
    <Row className="main-row">
      <Col span={6}>
        <List bordered>
          {carwashes.map(carwash =>
            <List.Item key={carwash.id}>
              <Link to={`/carwashes/${carwash.id}`}>{carwash.name}</Link>
            </List.Item>
          )}
        </List>
      </Col>
      <Col span={18}>
        <CarwashMap carwashes={carwashes} />
      </Col>
    </Row>
  );
};