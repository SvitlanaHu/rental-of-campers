import { createAsyncThunk } from "@reduxjs/toolkit";
import apiMockapi from "../services/apiMockapi.js";

export const fetchCamperList = createAsyncThunk(
  "getList",
  async (showedCamps, thunkAPI) => {
    try {
      const response = await apiMockapi("/Campers");
      response.campersCount = response.data.length;

      const { data, campersCount } = response;
      const editedData = data.slice(0, showedCamps);
      const Editedresponse = { data: editedData, campersCount };
      return Editedresponse;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
