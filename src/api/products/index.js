import axiosClient from './axiosClient'

const productEndpoint = '/v1/products'

const productApi = {
    getAll: () => axiosClient.get(`${productEndpoint}`),
    create: (params) => axiosClient.post(`${productEndpoint}/`, params),
    getOne: (id) => axiosClient.get(`${productEndpoint}/product/${id}`),
    update: (params,id) => axiosClient.put(`${productEndpoint}/product/${id}`, params),
}

export default productApi