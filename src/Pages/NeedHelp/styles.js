import styled from "styled-components";
import { keyframes } from "styled-components";
export const Header = styled.div`
  grid-column: 1/4;

  background: white;
  display: grid;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  grid-row: 1;
  color: rgb(0, 142, 248);
  height: 30%;
  align-self: flex-start;
  grid-template-columns: repeat(6, 1fr);
`;

export const ChatContent = styled.div`
  grid-column: 1/4;

  background: white;
  display: grid;
  box-sizing: border-box;
  grid-row: 1/4;
  margin-top: 80px;
  color: rgb(0, 142, 248);
  justify-self: center;
  border-radius: 10px;
  width: 95%;
  overflow: hidden;
  height: 85%;
  grid-template-rows: repeat(6, 1fr);

  grid-template-columns: repeat(6, 1fr);
`;

const heartBeat = keyframes`
    0%{
    transform: translate(0);
  }
  10%{
    transform: translate(-2px,-2px);
  }
  20%{
    transform: translate(2px,-2px);
  }
  30%{
    transform: translate(-2px,2px);
  }
  40%{
    transform: translate(2px,2px);
  }
  50%{
    transform: translate(-2px,-2px);
  }
  60%{
    transform: translate(2px,-2px);
  }
  70%{
    transform: translate(-2px,2px);
  }
  80%{
    transform: translate(-2px,-2px);
  }
  90%{
    transform: translate(2px,-2px);
  }
  100%{
    transform: translate(0);
  }
`;
export const AnimatedHeart = styled.span`
  animation: ${heartBeat} 3s infinite;
`;
export const Video = styled.div`
  width: 100vw !important;
  position: fixed;
  height: 100vh;
  background: linear-gradient(180deg, #1fd5fc, #5a4dff);

  text-align: center;
`;
export const ImageScreen = styled.img`
  border-radius: 10%;
`;
export const SideWindows = styled.div`
  width: 150px;
  box-sizing: border-box;
  transition: all 0.5s;
  display: flex;
  overflow: hidden;

  border-radius: 10%;

  height: 150px;
  &:hover {
    content: "";
    background: white;
    margin-left: -50px;
    width: 300px;
    height: 150px;
    z-index: 1000;
  }
`;
export const Container = styled.div`
  grid-column: 1/4;
  grid-row: 3;
  background: white;
  padding-top: 10px;
  color: #008ef8;
  padding-bottom: 10px;
  align-items: center;
  box-sizing: border-box;
  display: grid;
  overflow: hidden;
  height: 40vh;
  width: 100%;
  row-gap: 40px;

  grid-template-columns: repeat(2, 1fr);
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 10px;
    height: 15px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding-bottom: 70px;
  }
`;
export const ScreenBack = styled.div`
  width: 100vw;
  height: 100vh;
  text-align: center;
  box-sizing: border-box;
  background: #54378f4a;
  position: fixed;

  display: grid;

  grid-template-columns: repeat(3, 1fr);
  color: white;
  grid-template-rows: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
  }
`;

export const Anchor = styled.a`
  text-decoration: none;
  color: white;
`;
export const InputArea = styled.div`

height: 80px;
display: flex;
justify-content: space-evenly;
grid-column: 1/7;
align-items: center;
grid-row: 6;
align-self: flex-end;
`