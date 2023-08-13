import axiosClient from './'

const userEndpoint = '/v1/users'

const userApi = {
    getAll: () => axiosClient.get(`${userEndpoint}`),
    create: (params) => axiosClient.post(`${userEndpoint}/`, params),
    getOne: (id) => axiosClient.get(`${userEndpoint}/user/${id}`),
    update: (params,id) => axiosClient.put(`${userEndpoint}/user/${id}`, params),
}

export default userApi