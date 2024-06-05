import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiContactlist } from "../api";

export const apiRequestContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const data = await apiContactlist();
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
