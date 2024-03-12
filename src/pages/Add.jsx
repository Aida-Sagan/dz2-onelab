import {useState} from "react";
import {useNavigate} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addItem  } from '../actions/actions';

import styled from "styled-components";
import Modal from "react-modal";

export default function Add() {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
    const [modalIsOpen, setModalIsOPen] = useState(false);

    const navigateTo = useNavigate();

    const dispatch = useDispatch();
    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleSurnameChange = (e) => {
        setSurname(e.target.value);
    }

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    }

    const openModal = () => {
        setModalIsOPen(true);
    }

    const closeModal = () => {
        setModalIsOPen(false);
    }

    const onSave = () => {

        if(!name || !surname || !phone) {
            alert("Пожалуйста, заполните форму");
        }

        const phoneNumber = /^[0-9]+$/;
        if(!phoneNumber.test(phone)) {
            alert("Пожалуйста, введите корректный номер");
            return;
        }

        const newItem = {
            name,
            surname,
            phone,
        };

        dispatch(addItem(newItem));

        openModal();
        navigateTo('/');

    }


    return (
        <Container>
        <div className='form'>
            <Form className='form-content'>
                <InputField value={name} onChange={handleNameChange} type='text' name='name' placeholder='Your name'/>
                <InputField value={surname} onChange={handleSurnameChange} type='text' name='name' placeholder='Your surname'/>
                <InputField value={phone} onChange={handlePhoneChange} type='text' name='name' placeholder='Your phone'/>
                <Button onClick={openModal}>Save information</Button>
            </Form>

            <Modal isOpen={modalIsOpen}
                onRequestClose={closeModal}>
                <ModalDataContainer>
                    <div className='modal-data'>
                        <h2>Вы точно хотите сохранить данные?</h2>
                        <Button onClick={() => { onSave(); closeModal(); }}>Yes</Button>
                        <Button onClick={closeModal}>Cancel</Button>
                    </div>
                </ModalDataContainer>
            </Modal>

        </div>
        </Container>
    )
}

const Container = styled.div`
  background-image: linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%);
  min-height: 100vh; 
`;


const Form = styled('form-content')`
      height: 300px;
      background: white;
      border: 0 none;
      border-radius: 20px;
      box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);
      padding: 20px 30px;
      box-sizing: border-box;
      width: 500px;
      margin: 0 10%;
      justify-content: center;
    `

const InputField = styled.input`
      height: 40px;
      border: 1px solid #ccc;
      border-radius: 5px;
      margin-bottom: 10px;
      width: 100%;
      box-sizing: border-box;
      color: #2665a1;
      font-size: 13px;


      &:focus {
        border: 2px solid #d32d99;
        box-shadow: none;
        transition: border-color 0.5s ease-in;
      }
    `

const Button = styled.button`
      width: 200px;
       background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);      font-weight: bold;
      color: white;
      border: 0 none;
      border-radius: 25px;
      cursor: pointer;
      padding: 10px 5px;
      margin: 10px 5px;
      align-self: center;
      
      &:hover {
        box-shadow: 0 0 0 2px white, 0 0 0 3px #ee0979
      }
    `

const ModalDataContainer = styled.div`
  justify-content: center;
  display: flex;
  background-image: linear-gradient(to top, #feada6 0%, #f5efef 100%);
  height: 80vh;
  align-items: center;
  
  .modal-data {
    width: 500px;
    height: 150px;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;