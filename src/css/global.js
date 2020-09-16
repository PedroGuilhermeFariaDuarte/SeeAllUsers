import { createGlobalStyle } from "styled-components"

// Utils
import BackgroundColor from "../utils/styles/background"
import TextColor from "../utils/styles/color"

export default createGlobalStyle`
  *,*::before,*::after {
    padding:0px;
    margin:0px;
    border:none;
    outline:none;
    box-sizing:border-box;
  }

  html,#app,#root,body {
    width:100%;
    height:100%;
    font-family: "'Roboto', 'Consolas'",sans-serif;
    font-size:1.6em;
    color:${TextColor.colorText};
    background-color:${BackgroundColor.backgroundBase};
  }
`
