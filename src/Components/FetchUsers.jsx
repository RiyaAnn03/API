import React, { useEffect, useState } from "react";

const FetchUsers = () => {
  const [users, setUsers] = useState([]);
  const [selectID, setSelectID] = useState(null);
  const [userDetail, setUserDetail] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (!selectID) return;
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${selectID}`);
        if (!response.ok) {
          throw new Error("Failed to fetch user details");
        }
        const data = await response.json();
        setUserDetail(data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, [selectID]);

  return (
    <div>
      <select onChange={(e) => setSelectID(e.target.value)}>
        <option value="">Select</option>
        {users.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      {userDetail.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
};

export default FetchUsers;