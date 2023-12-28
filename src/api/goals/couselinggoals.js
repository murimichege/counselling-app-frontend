import axiosClient from '../axiosClient'

const counselingGoalsEndpoint = '/v1/counselinggoals'

const GoalsApi = {
    create: (params) => axiosClient.post(`${counselingGoalsEndpoint}`, params),
    get: (studentid) => axiosClient.get(`${counselingGoalsEndpoint}/${studentid}`),
   
}

export default GoalsApi