const exceljs = require('exceljs');

async function readExcelFile() {
    const workbook = new exceljs.Workbook();
    
    // Replace with your actual file path and sheet logic
    await workbook.xlsx.readFile("C:/Users/aiswa/Downloads/Obsqura Testing.xlsx");
    
    // Example: Accessing a worksheet and reading rows
    const worksheet = workbook.getWorksheet("Sheet1"); // or workbook.getSheetByName('Sheet1')
    
//     worksheet.eachRow((row, rowNumber) => {
//         console.log(`Row ${rowNumber} values:`, row.values);
//     }
// );
worksheet.eachRow((row, rowNumber) => {
        row.eachCell((cell, colNumber) => {
            console.log(cell.value);
        });
    });
}

readExcelFile();
