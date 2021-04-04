import axiosClient from "./axiosClient";

export default userApi = {
  login(data) {
    const url = "auth/login";
    return axiosClient.post(url, data);
  },

  register() {},

  update() {},
};
