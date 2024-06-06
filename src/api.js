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

const BASE_URL = "https://666051745425580055b35004.mockapi.io/contacts";

export const addContactApi = async (contact) => {
  const response = await axios.post(BASE_URL, contact);
  return response.data;
};

export const apiDeleteContact = async (contactId) => {
  const options = {
    method: "DELETE",
    url: `https://666051745425580055b35004.mockapi.io/contacts/${contactId}`,

    headers: {
      accept: "application/json",
    },
  };
  const { data } = await axios.request(options);
  return data;
};
