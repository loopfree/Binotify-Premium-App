import React, { useState, useEffect } from "react";
import UserTag from "../components/UserTag";
import Brand from "../components/Brand";

function ListSubs() {
  const user = "Admin1";
  const [data, setData] = useState<any[]>([]);

  async function getSubscriptionList() {
    const token: string | undefined = document.cookie.split('; ')
                                  .find((row) => row.startsWith("token="))
                                  ?.split("=")[1];

    const response = await fetch("http://catify-rest:3000/subscription/list", {
      method: 'GET',
      headers: {
        authorization: token === undefined ? "" : token as string
      }
    });
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
  }, []);

  async function onApproveButton(subscriberId: string, creatorId: string) {
    const token: string | undefined = document.cookie.split('; ')
                                  .find((row) => row.startsWith("token="))
                                  ?.split("=")[1];
                                  
    const arg: any = {
      'subscriberId': subscriberId,
      'creatorId': creatorId
    }

    await fetch("http://catify-rest:3000/subscription/approve", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: token === undefined ? "" : token as string
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

  const [currPage, setCurrPage] = useState(1);
  const [lastPage, setLastPage] = useState(Math.max(1, Math.ceil(data.length / 10)));

  useEffect(() => {
    setLastPage(Math.max(1, Math.ceil(data.length / 10)));
  }, [data]);

  const nextPage = () => {
    setCurrPage(Math.min(lastPage, currPage + 1));
  };

  const prevPage = () => {
    setCurrPage(Math.max(1, currPage - 1));
  };

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
          {data.slice(10 * (currPage - 1), 10 * currPage).map((item, index) => (
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
      <div className="sticky bottom-24 flex justify-end w-full gap-6 mt-6">
        <button className="btnPrimary text-sm disabled:opacity-50" onClick={prevPage} disabled={currPage===1}>&lt;</button>
        <p className="w-4 text-center">{currPage}</p>
        <button className="btnPrimary text-sm disabled:opacity-50" onClick={nextPage} disabled={currPage===lastPage}>&gt;</button>
      </div>
    </main>
  )
}

export default ListSubs;
