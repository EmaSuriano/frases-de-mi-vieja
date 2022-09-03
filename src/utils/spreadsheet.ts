import { GoogleSpreadsheet } from 'google-spreadsheet';
import { API_KEY, SPREADSHEET_ID } from '../const';

export const getSpreadsheetRows = async () => {
  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
  doc.useApiKey(API_KEY);

  await doc.loadInfo(); // loads document properties and worksheets

  const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
  const rows = await sheet.getRows();

  return rows;
};
