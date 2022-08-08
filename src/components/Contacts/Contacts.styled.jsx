import styled from '@emotion/styled';

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0;
`;
export const ContactsItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 200px;
  padding: 10px;
  margin: 0 auto;
  margin-bottom: 10px;
  border: 1px solid #fff;
  border-radius: 50px;
  background-color: #d37fae;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.75);
  &:hover,
  &:focus {
    scale: 1.1;
  }
`;
export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ContactsName = styled.p`
  font-size: 16px;
  margin: 0 auto;
  align-items: center;
`;
export const ContactsNumber = styled.p`
  font-size: 14px;
  margin: 0;
`;
export const ContactsItemButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  padding: 10px;
  height: 14px;
  color: #fff;
  border: 1px solid #ccc;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.75);
  background-color: #000;
`;
