import React, { useEffect, useReducer, useState } from "react";
import UserRow from "./UserRow";
import { getDatabase, ref, child, get, set, update } from "firebase/database";
const db = getDatabase();
const dbRef = ref(getDatabase());
export function addUser() {}
const FetchUsers = () => {
  const [data, setData] = useState([]);
  const db = getDatabase();
  const dbRef = ref(getDatabase());

  useEffect(() => {
    updateUi();
  }, [updateData]);
  const updateData = () => {
    update(ref(db, "users"), {
      ...data.filter((u) => u !== undefined),
    });
  };
  const updateUi = () => {
    get(child(dbRef, `users`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setData(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const dummyUser = {
    firstName: "Name",
    lastName: "Last Name",
    email: "email@example.com",
    role: "role",
    status: "active",
  };
  {
    /* -------- Fetching Users from Firebase */
  }

  addUser = (e) => {
    setData([dummyUser, ...data]);
    updateData();
  };

  return (
    <div>
      {data
        ? data.map((user, i) => {
            if (user !== undefined) {
              return (
                <UserRow
                  firstName={user.firstName}
                  lastName={user.lastName}
                  email={user.email}
                  role={user.role}
                  status={user.status}
                  key={i}
                  index={i}
                  updateUi={updateUi}
                />
              );
            }
          })
        : null}
    </div>
  );
};

export default FetchUsers;
