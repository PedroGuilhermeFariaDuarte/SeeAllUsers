import { create } from "domain";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 @media screen and (min-width:200px) and (max-width:1020px) {
  .Container_Home, .Container_Input {
    width:100%;
  }

  .Container_Card {
    width:95%;
    height:125px;
  }
 }
`
