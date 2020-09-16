import { AxiosError } from "axios"

export default (error: any | AxiosError): String => {
  if ((error?.code >= 400 || error?.code >= 500) || error?.isAxiosError) {
    return error?.message
  }

  return ""
}
