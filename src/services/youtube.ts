import { YoutubeDataAPI } from 'youtube-v3-api';

const API_KEY: string = process.env.API_KEY;

const YoutubeAPI = async (search: string): Promise<any> => {
  const api = new YoutubeDataAPI(API_KEY);
  const results: Promise<any> = await api.searchAll(search, 20).then((data: any) => {
      console.log(data);
  })
  return results;
}

export default YoutubeAPI;