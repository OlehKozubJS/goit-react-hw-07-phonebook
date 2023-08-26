import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://mockapi.io/clone/64ea4377bf99bdcc8e6772c7';

export const fetchContacts = createAsyncThunk(
  'contacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/tasks');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/tasks', { contact });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/tasks${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
