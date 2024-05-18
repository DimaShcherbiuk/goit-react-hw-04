import axios from "axios";

const baseURL = "https://api.unsplash.com/";
const API_KEY = "3tMI0COuLgOQinKGQmDcIpS3k-QYKUOKzBesCWiMRlg";

export const getPhotos = async (query, page) => {
  try {
    const response = await axios.get(`${baseURL}/search/photos`, {
      params: {
        query: query,
        client_id: API_KEY,
        page,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};
