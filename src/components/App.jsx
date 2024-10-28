import "./App.css";
import Profile from "./Profile/Profile";
import userData from "../userData.json";
import friends from "../friends.json";
import FriendsList from "./FriendList/FriendList";
import transactions from "../transactions.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
