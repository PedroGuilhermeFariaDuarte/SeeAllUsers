import styled from "styled-components"
import { darken } from "polished";

// Utils
import BackgroundColor from "../../utils/styles/background"

export const Container_Svg = styled.div`
  width:50px;
  height:100%;

  display:flex;
  flex-flow:row;
  justify-content:center;
  align-items:center;

  svg {
    font-size:20px;
    color: ${darken(0.5, `${BackgroundColor.backgroundGradientSecond}`)};
  }
`
