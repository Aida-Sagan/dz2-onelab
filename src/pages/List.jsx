import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HomeButton from "../components/HomeButton";
import Modal from "react-modal";

const List = () => {
    const [data, setData] = useState([]);
    const [isOpenModal, setModalIsOpen] = useState(false);
    const [editedIndex, setEditedIndex] = useState(-1);
    const [updatedPerson, setUpdatedPerson] = useState({ name: "", surname: "", phone: "" });


    useEffect(() => {
        let list = sessionStorage.getItem("list");
        if (!list) {
            list = [];
        } else {
            list = JSON.parse(list);
        }
        setData(list);
    }, []);

    const handleDelete = (index) => {
        const newData = [...data];

        newData.splice(index, 1);
        setData(newData);
        sessionStorage.setItem("list", JSON.stringify(newData));
    };


    const handleChange = (index) => {
        setEditedIndex(index);
        setUpdatedPerson(data[index]);
        setModalIsOpen(true);
    };

    const saveChanges = () => {
        const newData = [...data];
        newData[editedIndex] = updatedPerson;
        setData(newData);
        sessionStorage.setItem("list", JSON.stringify(newData));
        setModalIsOpen(false);
    };


    return (
        <div>
            <Table>
                <thead>
                <TableRow>
                    <TitleTable>Имя</TitleTable>
                    <TitleTable>Фамилия</TitleTable>
                    <TitleTable>Номер телефона</TitleTable>
                    <TitleTable>Действия</TitleTable>
                </TableRow>
                </thead>
                <tbody>
                {data.map((person, index) => (
                    <TableRow key={index}>
                        <TableCell>{person.name}</TableCell>
                        <TableCell>{person.surname}</TableCell>
                        <TableCell>{person.phone}</TableCell>
                        <TableCell>
                            <Button onClick={() => handleDelete(index)}>Удалить пользователя</Button>
                            <Button onClick={() => handleChange(index)}>Изменить данные</Button>
                        </TableCell>
                    </TableRow>
                ))}

                </tbody>
            </Table>


            <Modal isOpen={isOpenModal} onRequestClose={() => setModalIsOpen(false)}>
                <Title>Изменить данные</Title>
                <ChangedInput
                    type="text"
                    value={updatedPerson.name}
                    onChange={(e) => setUpdatedPerson({ ...updatedPerson, name: e.target.value })}
                />
                <ChangedInput
                    type="text"
                    value={updatedPerson.surname}
                    onChange={(e) => setUpdatedPerson({ ...updatedPerson, surname: e.target.value })}
                />
                <ChangedInput
                    type="text"
                    value={updatedPerson.phone}
                    onChange={(e) => setUpdatedPerson({ ...updatedPerson, phone: e.target.value })}
                />
                <Button onClick={saveChanges}>Сохранить</Button>
                <Button onClick={() => setModalIsOpen(false)}>Отмена</Button>
            </Modal>

            <HomeButton >Вернуться на главную</HomeButton>
        </div>
    );
};

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
`;

const TableRow = styled.tr`
 
  &:nth-child(even) {
    background-color: rgba(250, 200, 235, 0.27);
  }
`;

const TableCell = styled.td`
  border: 1px solid #c4c2c2;
  padding: 8px;
  text-align: left;
`;

const Button = styled.button`
  background-color: #fd887f;
  color: white;
  border: none;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 20px;

  &:hover {
    background-color: #c75a52;
  }
`;

const ChangedInput = styled.input`
  padding: 8px;
  color: #2b542c;
  font-size: 18px;
  margin-right: 10px;
  border-radius: 10px;
`;

const Title = styled.h2`
  color: #fd887f ;
`;

const TitleTable = styled.th`
  font-size: 18px;
  color: #647f82;
`;

export default List;
