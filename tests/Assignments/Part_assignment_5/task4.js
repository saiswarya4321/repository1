
const ExcelJS = require('exceljs');

async function readExcelData() {

    
    const workbook = new ExcelJS.Workbook();

    
    await workbook.xlsx.readFile("C:/Users/aiswa/Downloads/Obsqura Testing.xlsx");

    const worksheet = workbook.getWorksheet('Sheet1');

    
    if (!worksheet) {
        throw new Error('Sheet1 worksheet not found');
    }

    
    worksheet.eachRow((row, rowNumber) => {

        console.log(`Row ${rowNumber}:`);

       
        row.eachCell((cell, colNumber) => {

            console.log(
                `Cell ${colNumber}: ${cell.value}`
            );

        });

    });
}

readExcelData();
