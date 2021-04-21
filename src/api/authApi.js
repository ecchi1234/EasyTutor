import axiosClient from "./axiosClient";

export default authApi = {
  login(data) {
    const url = "api/auth/login";
    return axiosClient.post(url, data);
  },

  register(data) {
    const url = "api/auth/register";
    return axiosClient.post(url, data);
  },
};
