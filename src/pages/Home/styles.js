import styled from "styled-components"
import { darken } from "polished";

// Utils
import BackgroundColor from "../../utils/styles/background"

export const Container = styled.div.attrs({
  className: "Container_Home"
})`
  width:70%;
  height:100%;
  margin:auto;
  padding:0px 70px 0px 70px;

  display:flex;
  flex-flow:column;
  justify-content:space-between;
  align-items:center;
`

export const ScrollingContainer = styled.div`
  width:100%;
  height:100%;
  overflow-y:auto;
  padding:50px;
  margin-bottom:20px;
  background: linear-gradient(135deg,
  ${BackgroundColor?.backgroundGradientFirst},
  ${darken(0.2,
  `${BackgroundColor?.backgroundGradientSecond}`)
  }
  );

  display:flex;
  flex-flow:column;
  justify-content:space-between;
  align-items:center;
`
