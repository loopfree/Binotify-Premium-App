import React, { useState, useEffect } from "react";
import UserTag from "../components/UserTag";
import Brand from "../components/Brand";

function ListSubs() {
  const user = "Admin1";
  const [data, setData] = useState<null | any>([]);

  async function getSubscriptionList() {
    const response = await fetch("http://localhost:3000/subscriptionlist");
    return response.body;
  }

  useEffect(() => {
    getSubscriptionList().then((results) => {
      setData(results);
    });
    console.log(data);
  }, []);

  return (
    <main>
      {/* USER TAG */}
      <UserTag user={user} />
      <Brand />

      <h1 className="title">Subscriptions Application List</h1>
      <table>
        <thead>
          <tr>
            <th>Subscriber ID</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.subscriber_id}</td>
              <td>{item.status}</td>
              <td>
                <button className="btnDanger text-sm mr-3">Reject</button>
                <button className="btnPrimary text-sm">Approve</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}

export default ListSubs;
