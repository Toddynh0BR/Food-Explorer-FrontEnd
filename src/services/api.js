import axios from "axios";

export const api = axios.create({
    baseURL: "https://food-explorer-backend-50tt.onrender.com"
})