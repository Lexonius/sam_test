import React from "react";
import { Icon } from 'antd';
import { Link } from "react-router-dom"

export default function Info() {
  const id = window.location.pathname.split(':')[1];
  console.log(id);
  return (
    <div className="row">
      <Link 
        to={'/home'}
      >
        <Icon type="arrow-left" />
      </Link>
      <div className="col-md-12">{window.location.pathname}</div>
    </div>
  );
}
