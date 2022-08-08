import styled from '@emotion/styled';

export const Form = styled.form`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
`;
export const Input = styled.input`
  width: 200px;
  height: 20px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 50px;
  box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.75);
`;
export const Button = styled.button`
  width: 100px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 50px;
  cursor: pointer;
  color: #fff;
  box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.75);
  background-color: #000;
  &:hover,
  &:focus {
    scale: 1.1;
  }
`;
