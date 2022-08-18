import React, {
  FC,
  useReducer,
  useContext,
  ChangeEventHandler,
  useState,
} from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { getDatabase, ref, set, remove, get, child } from "firebase/database";
import { AiFillDelete, AiOutlineDelete } from "react-icons/ai";

const UserRow = ({
  firstName,
  lastName,
  email,
  role,
  status,
  index,
  updateUi,
}) => {
  const [usedEmail, setUsedEmail] = useState(false);
  const inputStyles =
    "w-full bg-gray-50 text-[0.8rem] border-none rounded-md pl-0 focus:pl-2 capitalize";
  const liStyles = "w-[7rem] my-1 border-b-[1px] border-gray-300  ";
  const db = getDatabase();
  const dbRef = ref(getDatabase());
  const update = (e) => {
    {
      /* -------- this function is triggered on every change you make to an input field --------*/
    }
    const value = e.target.value;
    const data = { firstName, lastName, email, role, status };
    const property = e.target.name;
    setUsedEmail(false);
    if (property === "email") {
      get(child(dbRef, `users`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            const users = snapshot.val();
            users.filter((e) => {
              if (e.email === value) {
                setUsedEmail(true);
                return;
              }
              if (!usedEmail) {
                set(ref(db, "users/" + index), {
                  ...data,
                  [property]: value,
                });
              }
            });
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }

    {
      /* -------- property is a dynamic value (for example: firstName) and it will overwrite the old one --------*/
    }
  };
  const removeUser = () => {
    {
      /* -------- this function is triggered when you click on the remove icon --------*/
    }
    remove(ref(db, "users/" + index));
    updateUi();
  };
  return (
    <div className="w-full flex justify-evenly items-center bg-slate-50 ">
      <ul className="w-full justify-evenly flex items-center ">
        <li className={liStyles + "w-[2.8rem] text-secondary-sea-50 "}>
          <input
            required
            type="text"
            className={inputStyles}
            defaultValue={index + Math.floor(1000 + Math.random() * 900)}
            name="id"
            disabled
          />
        </li>
        <li className={liStyles}>
          <input
            required
            type="text"
            className={inputStyles}
            defaultValue={firstName}
            onChange={update}
            name="firstName"
          />
        </li>
        <li className={liStyles}>
          <input
            required
            type="text"
            className={inputStyles}
            onChange={update}
            defaultValue={lastName}
            name="lastName"
          />
        </li>
        <li className={liStyles + "w-[10rem]"}>
          <label className="text-[0.7rem] text-red-500">
            {usedEmail ? "email is already in use" : ""}
          </label>
          <input
            required
            className={inputStyles}
            onChange={update}
            type="email"
            defaultValue={email}
            name="email"
          />
        </li>
        <li className={liStyles}>
          <select
            className={inputStyles}
            onChange={update}
            name="role"
            defaultValue={role}
          >
            <option value="admin">Admin</option>
            <option value="accountant">Accountant</option>
            <option value="doctor">Doctor</option>
          </select>
        </li>
        <li className={liStyles}>
          <select
            className={inputStyles}
            onChange={update}
            name="status"
            defaultValue={status}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </li>
        <li>
          <AiOutlineDelete
            size="1.5rem"
            onClick={removeUser}
            className="cursor-pointer"
            color="var(--primary-midnight-50)"
          />
        </li>
      </ul>
    </div>
  );
};

export default UserRow;
