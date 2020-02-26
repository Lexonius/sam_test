import React, { useEffect, useState } from 'react';
import { getData } from "./api";
import { List } from 'antd'
import { Link } from "react-router-dom"

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then(setData);
  }, []);

  const listData = data.map((elem) => {
    const obj = {
      title: elem.fullname,
      description: elem.address,
      content: elem.formname,
      id: elem.order,
      props: elem,
    }
    return obj;
  })

  return (
    <div className="wrapper">
      {console.log(data)}
      <div className="content_block">
        <List 
          size="small"
          itemLayout="vertical"
          dataSource={listData ? listData : []}
          pagination={{
            pageSize: 3,
          }}
          renderItem={item => (
            <List.Item
              key={item.title}
            >
              <List.Item.Meta
                title={
                  <Link 
                    to={`/info/:${item.id}`}
                  >
                    {item.title}
                  </Link>
                }
                description={item.description}
              />
              {item.content}
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}
