const Profile = ({ user }) => (
  <div className="p-5 bg-white bg-opacity-80 rounded-lg shadow m-5">
    <h2 className="text-2xl font-bold mb-4">{user.name}</h2>
    <p>{user.bio}</p>
  </div>
);

export default Profile;
