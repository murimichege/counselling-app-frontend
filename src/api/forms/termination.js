import axiosClient from '../axiosClient'

const formEndpoint = '/v1/forms'

const TerminationFormApi = {
    create: (params) => axiosClient.post(`${formEndpoint}/terminationforms`, params),
    get: (id) => axiosClient.get(`${formEndpoint}/terminationforms/${id}`),
   
}

export default TerminationFormApi