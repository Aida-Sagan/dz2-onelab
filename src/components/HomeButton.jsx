import React from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  background-image: linear-gradient(to top, #ecd98f 0%, #d1fdff 100%);
  border: none;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 150px;
  margin-right: 20px;
  margin-bottom: 50px;

  &:hover {
    background-image: linear-gradient(to top, #96fbc4 0%, #f9f586 100%);
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
