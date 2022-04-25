import axios from "axios";
import { apiUrl } from "../constants/constants";

export const getAdvertisiment = async (id) => {
  const response = await axios.get(`${apiUrl}/advertisement/${id}`);

  return response.data;
}

export const getAdvertisiments = async (payload) => {
  const filters = {
    name: payload.name
  };

  delete payload.name

  const query = `filters=${JSON.stringify(filters)}&sort=${payload.sort}&skip=${payload.skip}&rows=${payload.rows}&limit=${payload.limit}`;

  const response = await axios.get(`${apiUrl}/advertisement?${query}`, {
    method: 'GET'
  });

  return response.data;
}

export const createAdvertisiment = async (payload) => {
  const advertisiment = {
    name: payload.name,
    description: payload.description,
    price: payload.price,
    photosAdvertisiment: {
      mainPhoto: payload.mainPhoto,
      photos: []
    },
  }

  Object.keys(['firstPhoto', 'secondPhoto', 'thirdPhoto']).forEach((key) => {
    if (payload[key]) {
      advertisiment.photosAdvertisiment.photos.push(payload[key]);
    }
  })

  const response = await axios.post(`${apiUrl}/advertisement`, advertisiment);

  return response.data
}

export const updateAdvertisiment = async (payload) => {
  const response = await axios.put(`${apiUrl}/advertisement/${payload.id}`, payload.newValues);

  return response.data;
}
