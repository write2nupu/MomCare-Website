import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:YOUR_BACKEND_PORT/api",
})

export default api