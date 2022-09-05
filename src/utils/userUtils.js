import axios from "axios";

const deleteUserAccount = async (id, token) => {
  const response = await axios.delete(`http://localhost:3000/auth/${id}`);
  return response.data;
};

//logout user
const logoutUser = async () => {
  localStorage.removeItem("user");
};

export const userUtils = {
  deleteUserAccount,
  logoutUser,
};
