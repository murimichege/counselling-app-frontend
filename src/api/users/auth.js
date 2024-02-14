import axiosClient from "../axiosClient";
const authEndpoint = `/v1/auth`;

const authApi = {
  login: (params) =>
    axiosClient.post(`${authEndpoint}/authenticatewithldap`, params),
    checkToken: () => axiosClient.post(`/${authEndpoint}/counselor/check-token`),
//   receptionistToken: () => axiosClient.post(`/${authEndpoint}/receptionist/check-token`),
};

export default authApi;
