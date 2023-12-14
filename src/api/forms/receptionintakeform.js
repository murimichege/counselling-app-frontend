import axiosClient from '../axiosClient'

const formEndpoint = '/v1/products'

const IntakeFormApi = {
    // getAll: () => axiosClient.get(`${productEndpoint}`),
    create: (params) => axiosClient.post(`${formEndpoint}/`, params),
    // getOne: (id) => axiosClient.get(`${productEndpoint}/product/${id}`),
    // update: (params,id) => axiosClient.put(`${productEndpoint}/product/${id}`, params),
}

export default IntakeFormApi