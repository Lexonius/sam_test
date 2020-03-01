import React, { useEffect, useState } from "react";
import { getData } from "./api";
import { List } from "antd";
import ListItem from "./components/ListItem";
import { useSelector, shallowEqual } from "react-redux";
import { useActions } from "./hooks/useActions";

function setDataAction(data) {
  return { type: "SET_DATA", payload: data };
}

const Home = () => {
  const data = useSelector(state => state.data, shallowEqual);
  const [setDataActionDispatch] = useActions([setDataAction]);

  useEffect(() => {
    (async () => {
      try {
        const data = await getData();
        setDataActionDispatch(data);
      } catch (e) {
        // TODO add error
        console.log("ERROR: ", e);
      }
    })();
  }, []);

  const listData = Array.isArray(data)
    ? data.map(elem => ({
        title: elem.fullname,
        description: elem.address,
        content: elem.formname,
        id: elem.order
      }))
    : [];

  return (
    <div className="wrapper content_block">
      {/*TODO remove console.log */}
      {console.log(data)}
      <List
        size="small"
        itemLayout="vertical"
        dataSource={listData}
        pagination={{
          pageSize: 3
        }}
        renderItem={item => <ListItem item={item} />}
      />
    </div>
  );
};

export default Home;
