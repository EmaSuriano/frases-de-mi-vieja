import dotenv from 'dotenv';

dotenv.config();

export const SPREADSHEET_URL =
  'https://docs.google.com/spreadsheets/d/17rg8s8LvnMr-Vwjz1T2NdrnXoCiteKucd8lVJlPqK_Y';

export const SPREADSHEET_ID = SPREADSHEET_URL.split('/').pop();

export const API_KEY = process.env.API_KEY;

export const FORM_URL = 'https://forms.gle/NXjbwnNUQjiZudMS8';
export const REPORT_URL = 'https://forms.gle/fnr1bwQx7S5eU5eY6';
