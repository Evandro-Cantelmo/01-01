import styled from "styled-components";
import { keyframes } from "styled-components";

const breatheAnimation = keyframes`
 0% {    transform: translatey(100%); }

 50% {   transform: translatey(-20%); }

 70% {   transform: translatey(-80%); }

 100% {    transform: translatey(-100%); }`;

const breatheAnimation2 = keyframes`
 0% {    transform: translatey(100%); }

 70% {   transform: translatey(0%); }

 100% {    transform: translatey(-100%); }`;

export const PrimaryContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  z-index: 900;

  &:after {
    content: "";
    display: ${(props) => props.theme.fg};

    width: 100vw;
    height: 100vh;
    background: rgba(245, 53, 83, 0.5);

    justify-content: center;
    align-items: center;

    position: absolute;
    transform: translatey(100%);
    z-index: 900;
    padding: 0 1px;
    transition: transform ease 0.3s, background 0.7s;

    grid-template-columns: repeat(3, 1fr);
    animation-name: ${breatheAnimation};
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  &:before {
    content: "";
    display: ${(props) => props.theme.fg};

    width: 100vw;
    height: 100vh;
    background: rgba(245, 53, 83, 2.5);

    justify-content: center;
    align-items: center;

    position: absolute;
    transform: translatey(100%);
    z-index: 900;
    padding: 0 1px;
    transition: transform ease 0.3s, background 0.7s;

    grid-template-columns: repeat(3, 1fr);
    animation-name: ${breatheAnimation2};
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
`;
