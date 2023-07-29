import React, { useEffect, useState } from "react";
import Table from "./component/Table";

const App = () => {
  const [data, setData] = useState([
    {
      id: null,
      name: {
        firstname: null,
        lastname: null,
      },
      Phone: null,
      email: null,
      address: {
        street: null,
        suite: null,
        city: null,
      },
    },
  ]);

  const getData = async () => {
    const res = await fetch("http://localhost:3030/api/v1/getAllUsers");
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Table pullData={data} />
    </>
  );
};

export default App;
