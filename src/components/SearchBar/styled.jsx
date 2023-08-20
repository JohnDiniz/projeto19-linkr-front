import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  background: rgb(255, 255, 255);
  width: 32%;
  min-height: 45px;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  border-radius: 10px;
  margin-left: 168px;
  z-index: 2;

  @media (max-width: 650px) {
    position: absolute;
    left: 50%;
    top: 80px;
    width: 94%;
    transform: translate(-50%, -50%);
    margin: 43px 0 0 0;
  }
  @media (max-width: 480px) {
    position: absolute;
    left: 47.77%;
    top: 80px;
    width: 89%;
    transform: translate(-50%, -50%);
    margin-top: 43px;
  }
`;

export const InputBox = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  border-radius: 5px;
`;

export const SearchContainer = styled.div`
  width: 32%;
  max-height: 310px;
  align-items: center;
  background: #e7e7e7;
  border-radius: 8px;
  overflow-y: scroll;
  position: absolute;
  top: 93%;
  left: 0;
  width: 100%;

  h1 {
    cursor: pointer;
  }
  @media (max-width: 650px) {
    top: 42px;
    width: 100%;
    max-height: 125px;
  }
  @media (max-width: 480px) {
    max-height: 82px;

    left: 50.04%;
    top: 82px;
    width: 100%;
    transform: translate(-50%, -50%);
  }
`;

export const UserBox = styled.a`
  width: 100%;
  height: 70px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-radius: 5px;
  color: black;
  padding: 2%;
  font-family: "Lato";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #707070;
  text-decoration: none;

  img {
    border-radius: 50%;
    object-fit: cover;
    width: 39px;
    height: 39px;
    margin-right: 15px;
  }
  span {
    color: #c5c5c5;
  }
`;

export const OutlineIcon = styled.span`
  margin: 15px;
  color: gray;
  ion-icon {
    font-size: 1.5em;
    color: #c6c6c6;
  }
`;

export const DebouncedInput = styled.input`
  width: 100%;
  height: 80%;
  margin: 2%;
  border: none;
  font-family: "Lato";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  color: #707070;

  :focus {
    outline-offset: 0px !important;
    outline: none !important;
  }

  @media (max-width: 375px) {
    font-size: 17px;
    line-height: 20px;
    text-align: center;
    margin-top: 10px;
  }
`;
