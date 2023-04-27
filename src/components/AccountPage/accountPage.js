import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../redux/user/selectors";
import { fetchUser,updateUserProfile } from "../../redux/user/user-operations";
import userImage from "./image.png"


const UserPage = () => {
  const dispatch = useDispatch();
    const {
        name,
        email,
        birthday,
        phone,
        telegram
    } = useSelector(getUser)
    const [avatar] = useState(userImage)
    
    useEffect(() => {
    dispatch(fetchUser())
},[dispatch])

  const handleAvatarChange = (e) => {
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("birthday", birthday);
    formData.append("phone", phone);
    formData.append("telegram", telegram);
    dispatch(updateUserProfile(formData));
  };

  return (
    <section className="user-page">
      <div className="user-page__avatar-container">
        <img
          className="user-page__avatar"
          src={avatar || "/src/components/AccountPage/image.png"}
          alt="User Avatar"
        />
        <input type="file" onChange={handleAvatarChange} />
        <button>
          Upload Avatar
        </button>
        <h3>${name}</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          placeholder="Enter your name"
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          placeholder="Enter your email"
        />
        <label htmlFor="birthday">Birthday:</label>
        <input
          id="birthday"
          type="date"
          value={birthday}
          placeholder="Enter your birthday"
        />
        <label htmlFor="phone">Phone:</label>
        <input
          id="phone"
          type="text"
          value={phone}
          placeholder="Enter your phone"
        />
        <label htmlFor="telegram">Telegram:</label>
        <input
          id="telegram"
          type="text"
          value={telegram}
          placeholder="Enter your telegram username"
        />
        <button type="submit">Save</button>
      </form>
    </section>
  );
};

export default UserPage;