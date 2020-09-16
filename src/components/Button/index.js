import styled from "styled-components"
import { darken, lighten } from "polished";

// Utils
import BackgroundColor from "../../utils/styles/background"

export default styled.button`
  width:300px;
  height:70px;
  border-radius:5px;
  margin-bottom:20px;
  cursor:pointer;

  display:flex;
  flex-flow:row;
  justify-content:center;
  align-items:center;

  background-color:${BackgroundColor.backgroundBase};

  background: linear-gradient(-45deg,${darken(0.5, `${BackgroundColor.backgroundGradientFirst}`)},
  ${BackgroundColor.backgroundGradientSecond});

  box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.10),
    -8px -8px 12px 0  ${lighten(0.5, darken(0.6, `${BackgroundColor.backgroundGradientSecond}`))};

  transition:0.2s ease all;

  &:active {
    transition:0.2s ease all;
    box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.10) inset,
    -8px -8px 12px 0  ${lighten(0.5, darken(0.6, `${BackgroundColor.backgroundGradientSecond}`))} inset;
  }
`
