import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import http from '../../http-common';
import { List } from 'antd';

export default () => {
  const [carwashes, setCarwashes] = useState([])

  useEffect(() => {
    http.get(`/api/customers/`)
      .then(response => setCarwashes(response.data))
      .catch(error => console.log(error));
  }, []);
  
  return(
      <List>
          { carwashes.map(customer => 
            <List.Item key={customer.id}>
              <Link to={`/customers/${customer.id}`}>{customer.name_surname}</Link>
            </List.Item>
          ) }
      </List>
  );
}
