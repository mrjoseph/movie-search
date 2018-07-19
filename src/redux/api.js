const apiKey = '&apikey=d960482e';
const url = 'http://www.omdbapi.com/?';
const paramType = 's=';
//const id = 'rocky';

const api = async (id) => {
  try {
    const response = await fetch(`${url}${paramType}${id}${apiKey}`);
      return await response.json();
  } catch(e){
    return `${e} something went wrong`;
  }
};

export default api;

