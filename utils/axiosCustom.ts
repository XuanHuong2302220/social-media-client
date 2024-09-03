import axios from "axios";

const axiosCustom = axios.create({
    baseURL: "localhost:5000/api"
})

export default axiosCustom;