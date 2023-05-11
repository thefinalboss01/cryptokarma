import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const cryptoApiHeaders = {
//   'X-RapidAPI-key': '3918B313-6415-41E4-8787-60A581ED1A08'

console.log(process.env.REACT_APP_API_KEY);
// }
const cryptoApiHeaders = {
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
  'X-RapidAPI-key': process.env.REACT_APP_API_KEY,

}

// var options = {
//   "method": "GET",
//   "hostname": "rest.coinapi.io",
//   "path": "/v1/exchangerate/BTC/USD",
//   "headers": {'X-CoinAPI-Key': '73034021-THIS-IS-SAMPLE-KEY'}
// };

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery : fetchBaseQuery({baseUrl}),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }), 
    getCryptoHistory: builder.query({
      query: ({coinId, timePeriod}) => createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`),
    })
  })
})

export const {
  useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery
} = cryptoApi