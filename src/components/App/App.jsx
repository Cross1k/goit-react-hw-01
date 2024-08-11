import userData from "../../data/userData.json";

import Profile from "../Profile/Profile";

const App = () => {
  return (
    <Profile
      username={userData.username}
      tag={userData.tag}
      location={userData.location}
      avatar={userData.avatar}
      stats={userData.stats}
    />
  );
};

export default App;
