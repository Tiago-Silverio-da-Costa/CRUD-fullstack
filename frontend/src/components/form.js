import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
    displat: flex;
    align-items: flex-end;
    gap: 10px;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    `;

const InputArea = styled.div`
    display: flex;
    flex-direction: column;
    `;

const Input = styled.input`
    width: 120px;
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;
    `;

const Label = styled.label``;

const Form = ( {onEdit }) => {
    const ref = useRef()

    return (
        <FormContainer ref={ref}>
            <InputArea>
                <Label>Nome</Label>
                <Input name="nome" />
            </InputArea>
            <InputArea>
                <Label name="email" types="email" />
                <InputArea />
            </InputArea>
            <InputArea>
                <Label>Telefone</Label>
                <Input name="fone" />
            </InputArea>
            <InputArea>
                <Label>Data de Nascimento</Label>
                <Input name="data_nascimento" typr="date" />
            </InputArea>

            <Button typr="submit">SALVAR</Button>
        </FormContainer>
    )
}

export default Form;