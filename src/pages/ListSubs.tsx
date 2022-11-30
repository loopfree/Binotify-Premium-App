import React, { useState, useEffect } from "react";
import UserTag from "../components/UserTag";
import Brand from "../components/Brand";

function ListSubs() {
  const user = "Admin1";
  const [data, setData] = useState<any[]>([]);

  async function getSubscriptionList() {
    const response = await fetch("http://catify-rest:3000/subscription/list");
    return await response.json();
  }

  useEffect(() => {
    getSubscriptionList().then((results) => {
      if(results !== null)  {
        setData(results.return);
      } else {
        setData([]);
      }
    });
    // console.log(data);
  }, []);

  async function onApproveButton(subscriberId: string, creatorId: string) {
    const arg: any = {
      'subscriberId': subscriberId,
      'creatorId': creatorId
    }

    await fetch("http://catify-rest:3000/subscription/approve", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(arg)
    })

    window.location.reload();
  }

  async function onRejectButton(subscriberId: string, creatorId: string) {
    const arg: any = {
      'subscriberId': subscriberId,
      'creatorId': creatorId
    }

    await fetch("http://catify-rest:3000/subscription/decline", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(arg)
    })

    window.location.reload();
  }

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
            <th>Creator ID</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.subscriberId}</td>
              <td>{item.creatorId}</td>
              <td>{item.status}</td>
              <td>
                <button className="btnDanger text-sm mr-3" onClick={() => onRejectButton(item.subscriberId, item.creatorId)}>Reject</button>
                <button className="btnPrimary text-sm" onClick={() => onApproveButton(item.subscriberId, item.creatorId)}>Approve</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}

export default ListSubs;
