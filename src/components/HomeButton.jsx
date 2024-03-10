import React from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  background-color: #f8766c;
  color: white;
  border: none;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 150px ;

  &:hover {
    background-color: #c75a52;
  }
`;

const HomeButton = () => {
    const navigateTo = useNavigate();

    const handleNavigateHome = () => {
        navigateTo("/");
    };

    return <Button onClick={handleNavigateHome}>Вернуться на главную</Button>;
};

export default HomeButton;
