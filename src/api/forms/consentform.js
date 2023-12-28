import axiosClient from '../axiosClient'

const formEndpoint = '/v1/forms'

const ConsentFormApi = {
    create: (params) => axiosClient.post(`${formEndpoint}/consentforms`, params),
    get: (id) => axiosClient.get(`${formEndpoint}/consentforms/${id}`),
   
}

export default ConsentFormApi