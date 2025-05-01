import React from 'react';

const Table = ({ data }) => {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={{ padding: '8px', border: '1px solid #ddd' }}>ID</th>
          <th style={{ padding: '8px', border: '1px solid #ddd' }}>Name</th>
          <th style={{ padding: '8px', border: '1px solid #ddd' }}>Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>{item.id}</td>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>{item.name}</td>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;