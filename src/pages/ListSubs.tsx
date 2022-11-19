import React from "react";
import UserTag from "../components/UserTag";
import Brand from "../components/Brand";

function ListSubs() {
  const user = "Admin1";
  return (
    <main>
      {/* USER TAG */}
      <UserTag user={user} />
      <Brand />

      <h1 className="title">Subscriptions Application List</h1>
      <table>
        <thead>
          <tr>
            <th>Application ID</th>
            <th>Application Name</th>
            <th>Application Description</th>
            <th>Application Owner</th>
          </tr>
        </thead>
      </table>
    </main>
  )
}

export default ListSubs;
