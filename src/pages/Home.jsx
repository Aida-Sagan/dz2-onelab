import { Link } from "react-router-dom";
import "./styles.css";
import styled from "styled-components";

export default function Home() {
    return (
        <Container>
            <nav className="navigation-menu">
                <NavigationLink to="/add">
                    Добавить
                </NavigationLink>
                <NavigationLink to="/list">
                    Показать таблицу
                </NavigationLink>
            </nav>
        </Container>

    );
}

const Container = styled.div`
  background-image: linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%);
  min-height: 100vh; 
`;

const  NavigationLink = styled(Link)`
  text-decoration: none;
  color: #fdfbf7;
  font-size: 18px;
  font-weight: 600;
  padding: 10px 20px;
  border: 1px solid rgba(183, 36, 36, 0);
  border-radius: 10px;
  transition: transform ease 700ms;
  background-image: linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%);

  &:hover {
    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
    color: #770000;
    transform: scale(1.1);
  }
`
