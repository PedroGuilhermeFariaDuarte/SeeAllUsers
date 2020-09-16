import styled from "styled-components";
import { darken, lighten } from "polished";

// Utils
import BackgroundColor from "../../utils/styles/background"
import ColorText from "../../utils/styles/color"

export const Container = styled.div.attrs({
  className: "Container_BoxMessage"
})`
  width:60%;
  min-height:150px;
  height:auto;
  border-radius:5px;
  margin-bottom:50px;
  background-color:${BackgroundColor.backgroundBoxMessage};
  backdrop-filter: blur(10px);
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.1);
  position:absolute;
  left:25%;
  right:25%;
  top:50px;
  z-index:100;

  display:flex;
  flex-flow:column;
`

export const Header = styled.div`
  width:100%;
  height:40px;

  display:flex;
  flex-flow:row;
  justify-content:flex-start;
  align-items:center;

  p {
    font-size:10px;
    font-weight:bold;
  }
`

export const Content = styled.div`
  width:100%;
  height:100%;
  padding:20px;

  display:flex;
  flex-flow:row;
  justify-content:flex-start;
  align-items:center;

  p {
    font-size:10px;
  }
`

export const Footer = styled.div`
  width:100%;
  height:100%;
  padding:20px;

  display:flex;
  flex-flow:row;
  justify-content:flex-end;
  align-items:center;

  span {
    font-weight:bold;
    font-size:10px;
    cursor:pointer;
  }
`
