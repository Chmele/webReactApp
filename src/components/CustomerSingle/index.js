import React, { useState, useEffect } from "react";
import http from "../../http-common";
import { Button, PageHeader, Space } from "antd";
import { useParams } from "react-router-dom";

export default () => {
  const[customer, setCarwash] = useState({});

  let { id } = useParams();

  useEffect(() => {
    http.get(`/api/customers/${id}`)
    .then(response => setCarwash(response.data))
    .catch(error => console.log(error));
  },[id]);
  
  return (
    <div className="full-width">
      <PageHeader
        className="site-page-header"
        onBack={() => window.history.back()}
        title={customer.name_surname}
        subTitle={
          <Space size="middle">
            <p>{customer.email}</p>
            {/* <Button>Змінити</Button>
            <Button danger>Видалити</Button> */}
          </Space>
        }
      />
    </div>
  );
};
