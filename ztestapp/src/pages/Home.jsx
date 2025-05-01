import React from "react";
import Table from "../components/table";

function Home() {
  const tableData = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Jack Black", email: "jack@example.com" },
  ];
  return (
    <div>
      <div style={{ padding: "20px" }}>
        <h1
          style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}
        >
          User Table
        </h1>
        <Table data={tableData} />
      </div>
    </div>
  );
}

export default Home;
