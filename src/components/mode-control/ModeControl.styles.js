import styled from "styled-components";

export const ModeControlContainer = styled.div`
  align-items: center;
  border-radius: 50px;
  bottom: 48px;
  box-sizing: border-box;
  display: flex;
  gap: 8px;
  height: fit-content;
  justify-content: center;
  width: 100%;

  img {
    filter: invert(100%);
    height: 20px;
  }
`;

export const Slider = styled.input`
  border: 2px solid #FFFFFF80;
  width: 100%;
  z-index: 1000;
  -webkit-appearance: none;
  height: fit-content;
  background: #00000040;
  border-radius: 100px;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
`;