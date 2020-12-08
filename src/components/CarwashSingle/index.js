import "./styles.css";
import React, { useState, useEffect } from "react"; 
import http from "../../http-common";
import { Button, PageHeader, Space } from "antd";
import { useParams } from "react-router-dom";
import SingleMapView from "../SingleMapView";

export default () => {
  const[carwash, setCarwash] = useState({});

  let { id } = useParams();

  useEffect(() => {
    http.get(`/carwashes/${id}`)
    .then(response => setCarwash(response.data))
    .catch(error => console.log(error));
  },[id]);
  
  return (
    <div className="full-width">
      <PageHeader
        className="site-page-header"
        onBack={() => window.history.back()}
        title={carwash.name}
        subTitle={
          <Space size="middle">
            <a href={carwash.website}>На сайт</a>
            {/* <Button>Змінити</Button>
            <Button danger>Видалити</Button> */}
          </Space>
        }
      />
      <SingleMapView carwash={carwash}/>
    </div>
  );
};                        
