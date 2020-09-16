import styled from "styled-components"
import { darken } from "polished";

// Utils
import BackgroundColor from "../../utils/styles/background"

export const Container = styled.div.attrs({
  className: "Container_Input"
})`
  width:50%;
  height:50px;
  border-radius:5px;
  margin-top:80px;
  margin-bottom:50px;
  background-color:${BackgroundColor.backgroundGradientSecond};

  display:flex;
  flex-flow:row;
  justify-content:space-between;
  align-items:center;
`

export const InputField = styled.input`
  width:100%;
  height:100%;
  background:none;
  padding:20px;
`
