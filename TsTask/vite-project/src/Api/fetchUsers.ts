import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com/users",
});

export const getUsers = async () => {
  try {
    const response = await api.get("/");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getUsersById = async (id: number) => {
  try {
    const response = await api.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
