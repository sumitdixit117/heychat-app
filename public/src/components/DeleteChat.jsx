import React from "react";
import axios from "axios";
import styled from "styled-components";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { deleteMessagesRoute } from "../utils/APIRoutes";

export default function DeleteChat({ currentChat, clearMessages }) {
  const handleDeleteChat = async () => {
    const data = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    );
    const confirm = window.confirm("Do you want to clear this chat?");
    if (confirm) {
      await axios.post(deleteMessagesRoute, {
        from: data._id,
        to: currentChat._id,
      });
      clearMessages();
    }
  };

  return (
    <Button onClick={handleDeleteChat}>
      <RiDeleteBin5Fill />
    </Button>
  );
}

const Button = styled.button`
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #9a86f3;
  border: none;
  cursor: pointer;
  svg {
    font-size: 1.1rem;
    color: #ebe7ff;
  }
`;
