import React, { useEffect, useState } from "react";
import { getData } from "./api";
import { List, Input } from "antd";
import ListItem from "./components/ListItem";
import { useSelector, shallowEqual } from "react-redux";
import { useActions } from "./hooks/useActions";

import "./styles/home.css";

function setDataAction(data) {
  return { type: "SET_DATA", payload: data };
}

function setFilteredData(data) {
  return { type: "SET_FILTER_DATA", payload: data };
}

const Home = () => {
  const [isFiltered, setValueIsFiltered] = useState(false);
  const data = useSelector(state => state.data, shallowEqual);
  const filterData = useSelector(state => state.filterData, shallowEqual);
  const [setDataActionDispatch] = useActions([setDataAction]);
  const [setFilteredDataDispatch] = useActions([setFilteredData]);

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

  const filterName = e => {
    const value = e.target.value.toLowerCase();

    if (!value) {
      setValueIsFiltered(false);
      return;
    }

    setValueIsFiltered(true);
    const filteredData = data.filter(item =>
      item.territory.toLowerCase().includes(value)
    );

    setFilteredDataDispatch(filteredData);
  };

  console.log(filterData, isFiltered);

  const formationListData = () => {
    let arr;
    if (isFiltered) {
      arr = filterData;
    } else {
      arr = data;
    }

    return Array.isArray(arr)
      ? arr.map(elem => ({
          title: elem.fullname,
          description: elem.address,
          content: elem.formname,
          id: elem.order
        }))
      : [];
  };

  return (
    <div className="wrapper content_block">
      {/*TODO remove console.log */}
      {console.log(data)}
      <div className="content_block_input">
        <Input placeholder="Введите название" onChange={filterName} />
      </div>
      <List
        size="small"
        itemLayout="vertical"
        dataSource={formationListData()}
        pagination={{
          pageSize: 7
        }}
        renderItem={item => <ListItem item={item} />}
      />
    </div>
  );
};

export default Home;
