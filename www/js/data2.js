// This is a JavaScript file
var excelApp = WScript.CreateObject("Excel.application");
var book = excelApp.Workbooks.Open("js/recruit.xlsx");
var sheet = book.WorkSheets("Sheet1");

// Excel内を読み込み
var portForioNum = sheet.Cells(2,1);
var JapansStock = sheet.Cells(2,2);
var JapansBond = sheet.Cells(2,3);
var foreignStock = sheet.Cells(2,4);
var foreignBond = sheet.Cells(2,5);
var JapansReit = sheet.Cells(2,6);
var foreignReit = sheet.Cells(2,7);
var ret = sheet.Cells(2,8);
var risk = sheet.Cells(2,9);
var sharpratio = sheet.Cells(2,10);

WScript.Echo(portForioNum, JapansStock, JapansBond, foreignStock, foreignBond, JapansReit, foreignReit, ret, risk, sharpretio);

book.Close();
excelApp.Quit();
excelApp = null;

