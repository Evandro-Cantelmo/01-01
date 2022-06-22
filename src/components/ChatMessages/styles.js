import styled from "styled-components";
export const Container = styled.div`
  background: black;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: auto;
`;

export const UserBallon = styled.div`
  background: green;
  padding: 10px;
  min-width: 20%;
  max-width: 45%;
  align-self: flex-end;
  margin: 10px;
  text-align: left;
  border-radius: 5px;
  word-wrap: break-word;
`;
export const ProfissinalBallon = styled.div`
  background: blue;
  padding: 10px;
  min-width: 20%;
  max-width: 45%;
  align-self: flex-start;
  margin: 10px;
  border-radius: 5px;
  word-wrap: break-word;
`;
