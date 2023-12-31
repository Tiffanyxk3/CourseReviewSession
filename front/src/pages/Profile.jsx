import "../styles/profile.css";
import { Title } from "./components/Title";
import { useNavigate } from "react-router-dom";

export function Profile() {
  const navigate = useNavigate();

  let username = JSON.parse(localStorage.getItem("currUser")).username;
  let major = JSON.parse(localStorage.getItem("currUser")).major;
  let tag = JSON.parse(localStorage.getItem("currUser")).tag;
  if (major.length == 0) {
    major = "NA";
  }

  function onClick() {
    navigate(`/edit`);
  }

  function onClickBack() {
    navigate(`/dashboard`);
  }

  return (
    <div className="profile-bg">
      <div className="profile">
        <Title title="My Profile" />

        <div className="info">
          <div className="info-row">Username: {username}</div>
          <div className="info-row">Major: {major}</div>
          <div className="info-row">Tag: {tag}</div>
        </div>

        <div className="edit-btn-div">
          <button id="edit-btn" type="button" onClick={onClick}>
            Edit
          </button>
        </div>

        <div className="back">
          <button id="back-btn" type="button" onClick={onClickBack}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
