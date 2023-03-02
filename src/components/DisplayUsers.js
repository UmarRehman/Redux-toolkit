import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../store/slices/UserSlice";
const DisplayUsers = () => {
  const dispatch = useDispatch();
  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };
  const data = useSelector((state) => {
    return state.users;

  });
  console.log(data);
  return (
    <Wrapper>
      {data.map((user, id) => {
        return (
          <div style={{display:"flex",justifyContent:"space-between"}}>
            {" "}
            <li style={{ lineHeight: "40px" }} key={id}>
              {user}
              
            </li>
            <button
              style={{marginTop:"10px"}}
                onClick={() => {
                  deleteUser(id);
                }}
                className="btn btn-delete"
              
              >
                Delete
              </button>
          </div>
        );
      })}
    </Wrapper>
  );
};
const Wrapper = styled.section`
  margin: 1rem 3.2rem;
  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
  }
  h3 {
    margin: 0;
  }
  .admin-table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 4rem 0;
  }
  .admin-subtitle {
    font-size: 3.2rem;
  }
  .delete-btn {
    background-color: transparent;
    border: none;
  }
  .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }
  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;
export default DisplayUsers;
