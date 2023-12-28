import axiosClient from '../axiosClient'

const formEndpoint = '/v1/forms'

const SafetyFormApi = {
    create: (params) => axiosClient.post(`${formEndpoint}/safetyforms`, params),
    get: (id) => axiosClient.get(`${formEndpoint}/safetyforms/${id}`),
   
}

export default SafetyFormApi