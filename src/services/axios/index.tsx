import axios from "axios"

export default axios.create({
  baseURL: "https://random-persons.herokuapp.com"
})
