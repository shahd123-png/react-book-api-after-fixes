import axios from "axios";

export const fetchDataFromApi = async () => {
  const api = process.env.REACT_APP_BOOKS_API;
  try {
    const response = await axios.get(api, {
      params: {
        q: 'love',
        maxResults: 16,
      },
    });
    return response.data;

  } 
  catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
