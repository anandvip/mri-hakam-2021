const dob = document.getElementById("dob");
let contentSeries = `<h1>Hakam Singh 53Y/M, <span id="dob">DOB: </span></h1>`
let cs =document.querySelector("#content-series")
let hidedob = "<b>DOB: -1/-2/-8</b>";
dob.innerHTML = `${hidedob}`
console.log(hidedob);
console.log(dob);
cs.innerHTML=contentSeries
const str = "11/12/1968"
//const dobmatch = str.match(^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([1][26]|[2468][048]|[3579][26])00))))$/g)
//const dobreplace = "-1/-2/-8"
//console.log(dobmatch);
//const obfuscateDob = dobmatch.replaceAll(/"11/12/68"/gi, "/-1/-2/-8/")