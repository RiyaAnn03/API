import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [users, setUsers] = useState([]); // api details store
  const [selectID, setSelectID] = useState(null);
  const [userDetail, setUserDetail] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${selectID}`)
      .then((res) => res.json())
      .then((data) => setUserDetail(data));
  }, [selectID]);
  console.log(users);

  console.log(userDetail);

  console.log(userDetail);

  return (
    <div>
      <select onChange={(e) => setSelectID(e.target.value)} name="" id="">
        <option value="">select</option>
        {users.map((item, index) => (
          <option key={index} value={item?.id}>
            {item?.name}
          </option>
        ))}
      </select>
      {userDetail?.map((item, index) => (
        <p key={index}>{item?.title}</p>
      ))}
    </div>
  );
};

export default Fetch;
