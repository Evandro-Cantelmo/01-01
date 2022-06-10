import styled from "styled-components";

export const PrimaryContainer = styled.div`
  width: 100vw;
  height: 150vh;
  background: rgba(245, 53, 83, 2.5);

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  z-index: 1000;
`;
export const ScreenTransition = styled.div`
  z-index: 1000;
  width: 100vw;
  height: 50vh;
  margin-bottom: -20vh;
  background: rgba(245, 53, 83, 0.5);
  overflow: hidden;
`;
