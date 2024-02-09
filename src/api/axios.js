import axios from "axios";
const BASE_URL = "https://localhost:7192/api";

export default axios.create({
    baseURL: BASE_URL,
    headers: {
        //"Content-type": "application/json",
        //Authorization: `Bearer ${localStorage.getItem("token")}`,
        Authorization: "Bearer CfDJ8OpeCGhGruJJk7n5sgHXvz2sYafXDnQh5vwipG77C6uNBA0AGOqrBl7D6YXrOqN/+oreMDYrmeEEyFM01qDnZu+oiCvP9R4LXDZpv/oNsU+HY1aj+VXmDI/HcfkZBztACc8X5vqPsES8urkQxmnVqRtnM5QBJJQ9ztm0vAsvmS64l6ZoG/ArIgj9MqId2Rl8R9SGsstxe7D3vR+5KCxer/Qw8gQ++ZUGDnQdB19x+ih/",
    }
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {
        //"Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        withCredentials: true
    }
});