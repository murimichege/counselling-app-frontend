import axiosClient from "../axiosClient"

const authApi = {
    login: (params) => axiosClient.post(
        '/v1/admin/login',
        params
    ),
    signin:(params) => axiosClient.post('/v1/user/signin',params),

    checkToken: () => axiosClient.post('/v1/admin/check-token'),
   verifyToken: () => axiosClient.post('/v1/admin/check-token'),


}

export default authApi