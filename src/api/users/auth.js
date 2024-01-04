import axiosClient from "../axiosClient"
const authEndpoint = `/v1/api`

const authApi = {
    login: (params) => axiosClient.post(`${authEndpoint}/authenticatewithldap`,params),
    signin:(params) => axiosClient.post('/v1/user/signin',params),

    checkToken: () => axiosClient.post('/v1/admin/check-token'),
   verifyToken: () => axiosClient.post('/v1/admin/check-token'),


}

export default authApi