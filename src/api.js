import axios from "axios";

export const apiContactlist = async () => {
  const options = {
    method: "GET",
    url: "https://666051745425580055b35004.mockapi.io/contacts",
   
    headers: {
      accept: "application/json",
      
    },
  };
  const { data } = await axios.request(options);
  return data;
};
