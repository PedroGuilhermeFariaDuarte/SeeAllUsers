import React from "react"

// Icons
import { FiSearch } from "react-icons/fi";

// Components
import { Container_Svg } from "../Svg";

// Styles
import { Container, InputField } from "./styles";

// Utils
import Iinput from "../../utils/interfaces/Input";

const Input: React.FC<Iinput> = ({ callback }) => {
  let time: NodeJS.Timeout;

  function handlerDebounceCallBack(values: any, callback: any) {
    clearTimeout(time)
    time = setTimeout(() => callback(values), 250)
  }

  return <Container>
    <InputField
      type="text"
      name="filter"
      placeholder="Digite sua pesquisa"
      onChange={(event: any) => handlerDebounceCallBack(event.target.value, callback)} />
    <Container_Svg>
      <FiSearch />
    </Container_Svg>
  </Container>
}

export default Input
