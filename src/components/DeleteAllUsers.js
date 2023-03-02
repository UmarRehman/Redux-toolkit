import React from "react";
import { useDispatch } from "react-redux";
import { clearAllUsers } from "../store/actions";
const DeleteAllUsers=()=> {
  const dispatch = useDispatch();

  const deleteUsers = () => {
    dispatch(clearAllUsers());
  };
  return (
    <div>
      <button className="btn btn-delete" onClick={deleteUsers}>
        Clear All Users
      </button>
    </div>
  );
}

export default DeleteAllUsers;
