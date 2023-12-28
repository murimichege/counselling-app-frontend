import axiosClient from '../axiosClient'

const sessionEndpoint = '/v1/session'

const SessionsApi = {
    create: (params) => axiosClient.post(`${sessionEndpoint}/sessions`, params),
    get: () => axiosClient.get(`${sessionEndpoint}/sessions/`),
    getsessiondetail: (id) => axiosClient.get(`${sessionEndpoint}/sessions/${id}`),

   
}

export default SessionsApi