import styled from "styled-components";
import { keyframes } from "styled-components";
export const Header = styled.div`
  grid-column: 1/4;

  display: grid;
  box-sizing: border-box;
  grid-row: 1;

  height: 90%;
  grid-template-columns: repeat(6, 1fr);
`;
const heartBeat = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;
export const AnimatedHeart = styled.span`
  animation: ${heartBeat} 3s infinite;
`;
export const Video = styled.div`
  width: 100vw !important;
  position: fixed;
  height: 100vh;
  background: linear-gradient(-45deg, #1fd5fc, #5a4dff);
  background-size: 400% 400%;
  animation: ${heartBeat} 7s infinite;

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

  grid-template-columns: repeat(5, 1fr);
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

  padding-top: 90px;
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
