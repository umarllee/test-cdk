export function helloWorld(): string{
    return 'Salam dunya!'
}

// import * as FileSaver from 'file-saver'
// import * as XLSX from "xlsx" 

// export function exportToExcel(data: any[], headerKeyArray: string[], headerTranslateArray: string[], filename?: string) {
//     const filteredData = data.map(item => {
//       const filteredItem: any = {};
//       const obj: { [key: string]: string } = {};
  
//       headerKeyArray.map((dt: any, key: any) => {
//         obj[`${dt}`] = headerTranslateArray[key];
//       })
  
//       Object.keys(obj).forEach(columnKey => {
//         if (item.hasOwnProperty(columnKey)) {
//           const mappedColumnName = obj[columnKey];
//           if (mappedColumnName) {
//             filteredItem[mappedColumnName] = item[columnKey];
//           }
//         }
//       });
//       return filteredItem;
//     });
  
//     const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(filteredData);
//     const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
//     const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
//     const blob: Blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  
//     FileSaver.saveAs(blob, filename + '.xlsx'); 
//   }


  