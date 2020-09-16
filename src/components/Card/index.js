import styled from "styled-components";
import { darken, lighten } from "polished";

// Utils
import BackgroundColor from "../../utils/styles/background"

export const ContainerCard = styled.div.attrs({
  className: "Container_Card"
})`
  width:450px;
  height:150px;
  border-radius:5px;
  margin-bottom:50px;

  background-color:${BackgroundColor.backgroundBase};
  background: linear-gradient(-45deg,${darken(0.1, `${BackgroundColor.backgroundGradientFirst}`)},
  ${BackgroundColor.backgroundGradientSecond});

  box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.10),
    -8px -8px 12px 0  ${lighten(0.5, darken(0.6, `${BackgroundColor.backgroundGradientFirst}`))};
`

export const Header = styled.div`
  width:100%;
  height:15px;
  padding:15px;
`

export const Content = styled.div`
  width:100%;
  height:100%;

  display:flex;
  flex-flow:column;
  justify-content:center;
  align-items:center;

   p {
     font-size:0.3em;
   }
`
