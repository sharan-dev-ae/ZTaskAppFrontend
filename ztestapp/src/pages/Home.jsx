import React, { useEffect, useState } from "react";
import Table from "../components/table";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from "../redux/user/userSlice";

function Home() {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <div style={{ padding: "20px" }}>
        <h1
          style={{ fontSize: "25px", fontWeight: "bold", marginBottom: "16px" }}
        >
          User Table
        </h1>
        <Table data={users} />
      </div>
    </div>
  );
}

export default Home;
