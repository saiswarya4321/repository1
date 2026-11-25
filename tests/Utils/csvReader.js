const fs = require('fs');

function readCSV(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const lines = fileContent.split(/\r?\n/).filter(line => line.trim() !== '');
  
  const headers = lines[0].split(',');
  
  const records = lines.slice(1).map(line => {
    const values = line.split(',');
    let record = {};
    headers.forEach((header, index) => {
      record[header.trim()] = values[index] ? values[index].trim() : '';
    });
    return record;
  });
  
  return records;
}

module.exports = { readCSV };