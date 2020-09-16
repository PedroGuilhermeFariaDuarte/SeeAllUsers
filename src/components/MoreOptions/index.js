import styled from "styled-components"
import { darken, lighten } from "polished";

// Utils
import ColorText from "../../utils/styles/color"

export const ContainerMoreOption = styled.div`
  width:100%;
  height:70px;
  margin-bottom:10px;

  display:flex;
  flex-flow:row;
  justify-content:flex-start;
  align-items:center;
`

export const Option = styled.p`
  font-size:10px;
  font-weight:bold;
  color: ${ColorText.colorText};
  cursor:pointer;
`
