import axiosClient from './axiosClient'

const paymentEndpoint = '/v1/payments'

const paymentApi = {
    getstripePayments: () => axiosClient.get(`${paymentEndpoint}/stripe`),
    getMpesaPayments: () => axiosClient.get(`${paymentEndpoint}/stripe`),
    getOneStripePayment: (id) => axiosClient.get(`${userEndpoint}/payment/${id}`),
    getOneMpesaPayment: (id) => axiosClient.get(`${userEndpoint}/payment/${id}`),

}

export default paymentApi