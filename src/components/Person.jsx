import styled from "styled-components"
import {useNavigate} from "react-router-dom";

export default function Person({person}) {
    const navigateTo = useNavigate();
    const onDelete = () => {

        let list = sessionStorage.getItem('list');

        if (!list) {
            list = [];
        } else {
            list = JSON.parse(list);
        }
        list.shift();

        sessionStorage.setItem('list', JSON.stringify(list));

        navigateTo('/add');
    }

    return (
        <StyledContainer vip={person.name === "name"}>
            <p>{person.name}</p>
            <p>{person.surname}</p>
            <p>{person.phone}</p>
            <button onClick={onDelete}>Удалить человека</button>

        </StyledContainer>
    )
}

const StyledContainer = styled("div")`
    background-color: ${(props) => props.vip ? "green" : "red"};
`

