import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendsList.module.css";

function FriendsList({ friends }) {
  return (
    <ul className={css.friends}>
      {friends.map((friend) => (
        <li key={friend.id} className={css.frnd}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

export default FriendsList;
