import axios from 'axios';
import { GET_COMPANIES, CREATE_COMPANY } from './types';

export const getCompanies = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/companies');
    dispatch({
      type: GET_COMPANIES,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const createCompany = (company) => async (dispatch) => {
  try {
    const res = await axios.post('/api/companies', company);
    dispatch({
      type: CREATE_COMPANY,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};
