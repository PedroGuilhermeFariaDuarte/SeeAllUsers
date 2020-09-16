import React, { useEffect, useState } from "react"

// Components
import { ContainerMoreOption, Option } from "../../components/MoreOptions";
import BoxMessage from "../../components/BoxMessage";
import Button from "../../components/Button";
import Input from "../../components/Input";
import {
  ContainerCard,
  Content
} from "../../components/Card";

// Services
import api from "../../services/axios"

// Utils
import IBoxMessage from "../../utils/interfaces/BoxMessage"
import handlerError from "../../utils/handlerError"
import IUser from "../../utils/interfaces/User"

// Styles
import { Container, ScrollingContainer } from "./styles";

let indexMatch = 1;
let lastIndexMatch = 6

const Home: React.FC = () => {
  const [ allUsers, setAllUsers ] = useState<[ IUser ]>()
  const [ filterUsers, setFilterUsers ] = useState()
  const [ boxMessage, setBoxMessage ] = useState<IBoxMessage>()

  useEffect(() => {
    async function handlerGetAllUser() {
      try {
        handlerDisableButtons(true)
        const request = await api.get("/users")
        const requestError = handlerError(request);

        if (requestError) {
          setBoxMessage({ message: requestError })
          return;
        }

        const promises = [ handlerStorage(request.data.data), handlerPagination() ]

        Promise.all(promises)
          .then(() => handlerDisableButtons(false))
          .catch(error => {
            setBoxMessage({ message: handlerError(error) })
          })

      } catch (error) {
        setBoxMessage({ message: handlerError(error) })
      }
    }
    handlerGetAllUser()
  }, [])

  function handlerStorage(data: IUser) {
    sessionStorage.setItem("users", JSON.stringify(data))
    return true;
  }

  function handlerPagination(match: Number = indexMatch): Boolean {
    const data = sessionStorage.getItem("users") ?? false

    if (!data || match > data.length) return false;

    Promise.resolve(JSON.parse(data).filter((content: IUser, index: Number) => {
      if (index >= match && index <= lastIndexMatch) return content
    }))
      .then(pageItems => {
        if (allUsers) {
          // @ts-ignore
          setAllUsers(old => [ ...old, ...pageItems ])
        } else {
          // @ts-ignore
          setAllUsers(pageItems)
        }
      })
      .catch(error => {
        setBoxMessage({ message: handlerError(error) })
        handlerDisableButtons(false)
      })

    return true;
  }

  function handlerGetUser(param: String | Number) {
    // @ts-ignore
    if (param?.trim() === "") {
      // @ts-ignore
      setFilterUsers([])
      return;
    }

    // @ts-ignore
    const resultSearch: [ IUser ] = allUsers && allUsers.filter((user: IUser) => user.name === param || user.age === param)

    if (resultSearch?.length > 0) {
      // @ts-ignore
      setFilterUsers(resultSearch)
    } else {
      // @ts-ignore
      setFilterUsers([])
    }
  }

  function handlerLoadMore() {
    indexMatch = lastIndexMatch + 1;
    lastIndexMatch = lastIndexMatch + lastIndexMatch
    handlerPagination(indexMatch)
  }

  function handlerDisableButtons(disable: boolean = true) {
    if (disable) {
      document.querySelectorAll("button").forEach(item => item.setAttribute("disabled", "true"))
    } else {
      document.querySelectorAll("button").forEach(item => item.removeAttribute("disabled"))
    }
  }

  function handlerClearSearchField() {
    try {
      handlerDisableButtons(true)
      // @ts-ignore
      const inputField = document.querySelector("input");

      // @ts-ignore
      inputField.value = "";

      // @ts-ignore
      handlerGetUser(inputField.value)

      handlerDisableButtons(false)
    } catch (error) {
      setBoxMessage({ message: handlerError(error) })
    }

  }

  function handlerCloseBoxMessage() {
    try {
      // @ts-ignore
      setBoxMessage({})
    } catch (error) {
      setBoxMessage({ message: handlerError(error) })
    }
  }

  return <>
    {
      boxMessage?.message && (
        // @ts-ignore
        <BoxMessage message={boxMessage?.message} callback={handlerCloseBoxMessage} />
      )
    }
    <Container>
      <Input callback={handlerGetUser} />

      <ContainerMoreOption>
        <Option onClick={() => handlerClearSearchField()}>limpar busca</Option>
      </ContainerMoreOption>

      <ScrollingContainer>
        {
          // @ts-ignore
          allUsers && (!filterUsers || filterUsers.length == 0)
            ?
            allUsers.map((content: IUser, index: Number) => (
              <ContainerCard key={index}>
                <Content>
                  <p>{content.name}</p>
                  <p>{content.age} ano(s) de idade</p>
                </Content>
              </ContainerCard>))
            :
            filterUsers
              ?
              // @ts-ignore
              filterUsers.map((content: IUser, index: Number) => (
                <ContainerCard key={index}>
                  <Content>
                    <p>{content.name}</p>
                    <p>{content.age} ano(s) de idade</p>
                  </Content>
                </ContainerCard>))
              :
              (<ContainerCard>
                <Content>
                  <p>Carregando...</p>
                </Content>
              </ContainerCard>)
        }
      </ScrollingContainer>
      <Button onClick={() => handlerLoadMore()}>carregar mais</Button>
    </Container>
  </>
}

export default Home
