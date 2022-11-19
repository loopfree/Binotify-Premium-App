import Navbar from "../components/Navbar";
import UserTag from "../components/UserTag";

function ListSubs() {
  const user = "A";
  return (
    <main>
      {/* USER TAG */}
      <UserTag user={user} />
      <h1 className="title">List Subscriptions</h1>
    </main>
  )
}

export default ListSubs;
