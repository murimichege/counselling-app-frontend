import axiosClient from '../axiosClient'

const sessionEndpoint = '/v1/sessions'

const SessionsApi = {
    create: (params) => axiosClient.post(`${sessionEndpoint}/session`, params),
    get: () => axiosClient.get(`${sessionEndpoint}/sessions/`),
    getsessiondetail: (id) => axiosClient.get(`${sessionEndpoint}/sessions/${id}`),

   
}

export default SessionsApi