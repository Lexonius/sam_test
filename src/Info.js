import React, { useMemo } from "react";
import { Icon } from "antd";
import { Link, useParams, useHistory } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";

const Info = () => {
  const { id } = useParams();
  const data = useSelector(state => state.data, shallowEqual);
  const item = useMemo(id => data.find(item => item.id === id), [data]);
  const history = useHistory();

  if (!item) {
    history.push("/");
  }

  return (
    <div className="row">
      <Link to={"/home"}>
        <Icon type="arrow-left" />
      </Link>
      {item ? (
        <div className="col-md-12">
          {id}, {item.fullname}
        </div>
      ) : (
        <div className="col-md-12">'LOADING!!!'</div>
      )}
    </div>
  );
};

export default Info;
