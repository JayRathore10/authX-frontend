import "./ProfilePage.css";

export function ProfilePage({userData}){
  return(
    <>
      <h1>Profile</h1>
      <p>Name: <span>{userData.name}</span> </p>
      <p>Age : <span>{userData.age}</span></p>
      <p>Email : <span>{userData.email}</span></p>
    </>
  );
}