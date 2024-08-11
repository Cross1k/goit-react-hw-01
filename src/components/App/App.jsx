import css from "./App.module.css";
import Profile from "../Profile/Profile";

const userData = {
  username: "Jacques Gluke",
  tag: "jgluke",
  location: "Ocho Rios, Jamaica",
  avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

function Profile({ profile: { avatar, username, tag, stats } }) {
  return (
    <div>
      <div>
        <img src={avatar} alt={username} />
        <p>{username}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

function App() {
  console.log();
  return (
    <>
      <Profile profile={userData} />
    </>
  );
}

export default App;
