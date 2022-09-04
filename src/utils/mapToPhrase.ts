import { GoogleSpreadsheetRow } from 'google-spreadsheet';

type Phrase = {
  phrase: string;
  name: string;
  checked: boolean;
};

export const mapToPhrase = (row: GoogleSpreadsheetRow): Phrase => {
  const [, phrase, name, checked] = row._rawData;
  return { phrase, name, checked: checked === 'TRUE' };
};
