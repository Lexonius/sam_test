import React from "react";
import { List } from "antd";
import { Link } from "react-router-dom";

const ListItem = ({ item }) => {
  return (
    <List.Item key={item.title}>
      <List.Item.Meta
        title={<Link to={`/info/${item.id}`}>{item.title}</Link>}
        description={item.description}
      />
      {item.content}
    </List.Item>
  );
};

export default ListItem;
