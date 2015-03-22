// This is a JavaScript file

/*例
function calculate() {
for (var i = 0; i < document.form1.type.length; i++){
if(document.form1.type[i].checked == true)
document.form1.val.value = document.form1.type[i].value;
}}*/

function calculate1() {
//入力された評価値読み込み
for (var i = 0; i < document.Select0.s0.length; i++){
if(document.Select0.s0[i].checked == true){
a0 = document.Select0.s0[i].value;
//document.Select0.val0.value = a0;
}}

for (var i = 0; i < document.Select1.s1.length; i++){
if(document.Select1.s1[i].checked == true){
a1 = document.Select1.s1[i].value;
//document.Select1.val1.value = a1;
}}

for (var i = 0; i < document.Select2.s2.length; i++){
if(document.Select2.s2[i].checked == true){
a2 = document.Select2.s2[i].value;
//document.Select2.val2.value = a2;
}}

for (var i = 0; i < document.Select3.s3.length; i++){
if(document.Select3.s3[i].checked == true){
a3 = document.Select3.s3[i].value;
//document.Select3.val3.value = a3;
}}

for (var i = 0; i < document.Select4.s4.length; i++){
if(document.Select4.s4[i].checked == true){
a4 = document.Select4.s4[i].value;
//document.Select4.val4.value = a4;
}}

for (var i = 0; i < document.Select5.s5.length; i++){
if(document.Select5.s5[i].checked == true){
a5= document.Select5.s5[i].value;
//document.Select5.val5.value = a5;
}}

for (var i = 0; i < document.Select6.s6.length; i++){
if(document.Select6.s6[i].checked == true){
a6 = document.Select6.s6[i].value;
//document.Select6.val6.value = a6;
}}

for (var i = 0; i < document.Select7.s7.length; i++){
if(document.Select7.s7[i].checked == true){
a7 = document.Select7.s7[i].value;
//document.Select7.val7.value = a7;
}}

for (var i = 0; i < document.Select8.s8.length; i++){
if(document.Select8.s8[i].checked == true){
a8 = document.Select8.s8[i].value;
//document.Select8.val8.value = a8;
}}

for (var i = 0; i < document.Select9.s9.length; i++){
if(document.Select9.s9[i].checked == true){
a9 = document.Select9.s9[i].value;
}}
//document.Select9.val9.value = a9;
//ここまで読み込み
/*
for(var j=0; j<2; j++){
for (var i = 0; i < document.Selectj.sj.length; i++){
if(document.Selectj.sj[i].checked == true){
aj = document.Selectj.sj[i].value;
document.Selectj.valj.value = aj;
}}}*/

//行定義
matrix[0] = [1,a0,a1,a2,a3];
matrix[1] = [1/a0,1,a4,a5,a6];
matrix[2] = [1/a1,1/a4,1,a7,a8];
matrix[3] = [1/a2,1/a5,1/a7,1,a9];
matrix[4] = [1/a3,1/a6,1/a8,1/a9,1];

//document.a.test.value = matrix[1];

//幾何平均
for(i=0; i<n; i++) { for(j=0; j<n; j++) {
x[i] = x[i]*matrix[i][j];
kika[i] = Math.pow(x[i], 1/n);
//kika[i] = Math.round(kika[i]*10000)/10000;
} }

//document.a.test.value = kika[1];

//幾何平均合計
kikaS = kika[0]+kika[1]+kika[2]+kika[3]+kika[4];
//kikaS = Math.round(kikaS*10000)/10000;

//document.a.test.value = kikaS;

//重みベクトル
for(i=0; i<n; i++) {
W1[i] = kika[i]/(kikaS);
//W1[i] = Math.round(W1[i]*10000)/10000;
}

//重み最終
W = [W1[0],W1[1],W1[2],W1[3],W1[4]];

//document.a.test.value = W;

//λmax と整合度 CI 計算
//手順1
for(i=0; i<n; i++) {
for(j=0; j<n; j++) {
WM[i] = WM[i]+W1[j]*matrix[i][j];
//WM[i] = Math.round(WM[i]*10000)/10000;
} }

//手順2
for(i=0; i<n; i++){
WMW[i] = WM[i]/W1[i];
//WMW[i] = Math.round(WMW[i]*10000)/10000;
}
//document.a.test.value = WMW[3];

//λmax 計算
for(i=0; i<n; i++){
Xmax = Xmax+WMW[i];}
Xmax = Xmax/n;
//Xmax = Math.round(Xmax*10000)/10000;

//document.a.test.value = Xmax;

//整合度 CI 計算
CI = (Xmax-n)/(n-1);
//CI = Math.round(CI*10000)/10000;

//document.a.test.value = CI;

//E 計算
for(i=0; i<80; i++) {
for(j=0; j<n; j++) {
E[i] = E[i]+S[i][j]*W[j];
E[i] = Math.round(E[i]*10000)/10000; }
}

//document.a.test.value=E[0];

//alert
//function alertDismissed() {}
//function callbackAlert(){}
//function showAlert() {
//navigator.notification.alert(
//    '好みがわかりません・・・\n', // メッセージ
//    callbackAlert(), // コールバック関数
//    ' ',//タイトル
//    'やり直す' // ボタン名
//); }

if(CI<0.1){ //変数引き渡し
location.href="result.html#"+[E[0],E[1],E[2],E[3],E[4],E[5],E[6],E[7],E[8],E[9],E[10],E[11],E[12],E[13],E[14],E[15],E[16],E[17],E[18],E[19]].join(',');
}else{ location.href="error.html#"
}

}//calculate1()


/*harasama
for(i=0; i<5; i++) {
if(document.FV.FV_v[i].checked) {
a = eval(document.FV.FV_v[i].value);
}

}
for(i=0; i<9; i++) {
if(document.F1.F_v1[i].checked) {
a1 = eval(document.F1.F_v1[i].value);
} }
for(i=0; i<9; i++) { if(document.F2.F_v2[i].checked) {
a2 = eval(document.F2.F_v2[i].value); }
}
for(i=0; i<9; i++) {
if(document.F3.F_v3[i].checked) {
a3 = eval(document.F3.F_v3[i].value);
} }
matrix[0] = [1,a1,a2];
matrix[1] = [1/a1,1,a3];
matrix[2] = [1/a2,1/a3,1];
W1[0] = (1/(1+1/a)+a/(a+1))/2;
W1[1] = ((1/a)/(1+1/a)+1/(a+1))/2;
W1[0] = Math.round(W1[0]*10000)/10000;
W1[1] = Math.round(W1[1]*10000)/10000;

//幾何平均
for(i=0; i<n; i++) { for(j=0; j<n; j++) {
x[i] = x[i]*matrix[i][j];
kika[i] = Math.pow(x[i], 1/n);
kika[i] = Math.round(kika[i]*10000)/10000;
} }
//幾何平均合計
kikaS = kika[0]+kika[1]+kika[2];
kikaS = Math.round(kikaS*10000)/10000;

//重みベクトル for(i=0; i<n; i++) {
W2[i] = kika[i]/(kikaS);
W2[i] = Math.round(W2[i]*10000)/10000; }
//λmax と整合度 CI 計算 //手順1
for(i=0; i<n; i++) {
for(j=0; j<n; j++) {
WM[i] = WM[i]+W2[j]*matrix[i][j];
WM[i] = Math.round(WM[i]*10000)/10000;
} }
//手順2
for(i=0; i<n; i++){
WMW[i] = WM[i]/W2[i];
WMW[i] = Math.round(WMW[i]*10000)/10000; }
//λmax 計算
for(i=0; i<n; i++){
Xmax = Xmax+WMW[i]; }
Xmax = Xmax/n;
Xmax = Math.round(Xmax*10000)/10000;
//整合度 CI 計算
CI = (Xmax-n)/(n-1);
CI = Math.round(CI*10000)/10000;
//重み最終
W = [W1[0]*W2[0],W1[0]*W2[1],W1[0]*W2[2],W1[1]]; for(i=0;i<4;i++){
W[i] = Math.round(W[i]*10000)/10000; }
//E 計算
for(i=0; i<20; i++) {
for(j=0; j<4; j++) {

E[i] = E[i]+S[i][j]*W[j];
E[i] = Math.round(E[i]*10000)/10000; }
}
//alert
function alertDismissed() { }
function showAlert() {
navigator.notification.alert( '好みがわかりません・・・\n', // メッセージ al
ertDismissed, // コールバック関数
' ',//タイトル
'やり直す' // ボタン名
); }
if(CI<0.1){ //変数引き渡し
location.href="result.html#"+[E[0],E[1],E[2],E[3],E[4],E[5],E[6],E[7],E[8],E[9],
E[10],E[11],E[12],E[13],E[14],E[15],E[16],E[17],E[18],E[19]].join(',');
}else{ showAlert();
}

*/
