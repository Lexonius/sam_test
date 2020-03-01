import React, { useMemo } from "react";
import { Icon } from "antd";
import { Link, useHistory } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";
import "./styles/info.css";

const Info = () => {
  const data = useSelector(state => state.data, shallowEqual);
  const item = useMemo(id => data.find(item => item.id === id), [data]);
  const history = useHistory();

  if (!item) {
    history.push("/");
  }

  return (
    <div className="wrapper">
      <Link to={"/home"}>
        <Icon type="arrow-left" className="button_back" />
      </Link>
      {item && (
        <div className="wrapper_block">
          <div className="wrapper_block_row">
            {`Название: ${item.fullname}`}
          </div>
          <div className="wrapper_block_row">
            {`Местоположение: ${item.territory}`}
          </div>
          <div className="wrapper_block_row">{`Адресс: ${item.address}`}</div>
          <div className="wrapper_block_row">
            {`Хранящиеся сведения: ${item.formname}`}
          </div>
          <div className="wrapper_block_row">
            {`Дата создания: ${item.period}`}
          </div>
          <div className="wrapper_block_row">
            {`Количество библиотек: ${item.libraries}`}
          </div>
          <div className="wrapper_block_row">
            {`Количество ПК в библиотеках: ${item.computers}`}
          </div>
          <div className="wrapper_block_row">
            {`Количество пользователей: ${item.users}`}
          </div>
          <div className="wrapper_block_row">
            {`Количество посещений: ${item.visits}`}
          </div>
        </div>
      )}
    </div>
  );
};

export default Info;
