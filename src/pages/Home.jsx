import { Link } from "react-router-dom";
import "./styles.css";
import styled from "styled-components";

export default function Home() {
    return (
            <nav className="navigation-menu">
                <NavigationLink to="/add">
                    Перейти на страницу Add
                </NavigationLink>
                <NavigationLink to="/list">
                    Перейти на страниц List
                </NavigationLink>
            </nav>


    );
}

const  NavigationLink = styled(Link)`
  text-decoration: none;
  color: #3d3a3a;
  font-size: 18px;
  padding: 10px 20px;
  border: 1px solid #b72424;
  border-radius: 10px;
  transition: transform ease 700ms;
  background: #f8766c;

  &:hover {
    background-color: #c75a52;
    color: #fff8f8;
    transform: scale(1.1);
  }
`
