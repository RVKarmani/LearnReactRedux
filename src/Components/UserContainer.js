import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux";

function UserContainer({ userData, fetchUsers }) {
  //Destructured from props

  useEffect(() => {
    fetchUsers();
  }, []); // Empty dependency array - so that fetchUsersDispatched only once
  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2 style={{ color: "red" }}>{userData.error}</h2>
  ) : (
    <div>
      <h2>User list</h2>
      <div>
        {userData && userData.users.map((user) => <li>{user.name}</li>)}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
