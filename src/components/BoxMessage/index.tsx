import React from "react"

// Icons
import { MdError } from "react-icons/md";
import { createInterface } from "readline";

// Utils
import IInput from "../../utils/interfaces/Input"

// Components
import { Container_Svg } from "../Svg";

// Styles
import { Container, Header, Content, Footer } from "./styles";

const IBoxMessage = {
  message: String,
  callback: Function
}

const BoxMessage: React.FC<typeof IBoxMessage> = ({ message, callback }) => {
  return <Container>
    <Header>
      <Container_Svg>
        <MdError />
      </Container_Svg>
      <p>Falha inesperada da aplicação</p>
    </Header>
    <Content>
      <p>{message}</p>
    </Content>
    <Footer>
      <span onClick={() => callback()}>fechar</span>
    </Footer>
  </Container>
}

export default BoxMessage
