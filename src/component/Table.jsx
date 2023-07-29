import "./Table.css";

const Table = ({ pullData }) => {
  console.log(pullData.map((id) => id.id));

  const mappedData = pullData.map((userDetails, index) => (
    <tr key={userDetails.id}>
      <td>{index + 1}</td>
      <td>
        {userDetails.name.firstname.toUpperCase()} {""}{" "}
        {userDetails.name.lastname}
      </td>
      <td>{userDetails.email}</td>
      <td>{userDetails.phone}</td>
      <td>{userDetails.address.city}</td>
    </tr>
  ));

  return (
    <>
      <h2>Responsive Table</h2>
      <div className="table-wrapper">
        <table className="fl-table">
          <thead>
            <tr>
              <th>id</th>
              <th>Fullname</th>
              <th>Email</th>
              <th>Phone No</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>{mappedData}</tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
