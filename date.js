// var mois = document.getElementById("mois");
// var jour = document.getElementById("jour");
// var annee = document.getElementById("annee");
// var dayArea = document.getElementById("day");
// var yearArea = document.getElementById("year");

// function handleChange() {
//   if (parseInt(mois.value) === 2) {
//     jour.setAttribute("max", "29");
//   } else if (
//     parseInt(mois.value) === 4 ||
//     parseInt(mois.value) === 6 ||
//     parseInt(mois.value) === 9 ||
//     parseInt(mois.value) === 11
//   ) {
//     jour.setAttribute("max", "30");
//   } else {
//     jour.setAttribute("max", "31");
//   }

//   var year = annee.value;
//   if (parseInt(mois.value) == 2 && parseInt(jour.value) <= 29) {
//     dayArea.style.border = "1px solid #6b6766";
//   } else if (parseInt(mois.value) == 4 && parseInt(jour.value) <= 30) {
//     dayArea.style.border = "1px solid #6b6766";
//   } else if (parseInt(mois.value) == 6 && parseInt(jour.value) <= 30) {
//     dayArea.style.border = "1px solid #6b6766";
//   } else if (parseInt(mois.value) == 9 && parseInt(jour.value) <= 30) {
//     dayArea.style.border = "1px solid #6b6766";
//   } else if (parseInt(mois.value) == 11 && parseInt(jour.value) <= 30) {
//     dayArea.style.border = "1px solid #6b6766";
//   } else if (parseInt(mois.value) == 4 && parseInt(jour.value) <= 30) {
//     dayArea.style.border = "1px solid #6b6766";
//   } else if (parseInt(mois.value) == 1 && parseInt(jour.value) <= 31) {
//     dayArea.style.border = "1px solid #6b6766";
//   } else if (parseInt(mois.value) == 3 && parseInt(jour.value) <= 31) {
//     dayArea.style.border = "1px solid #6b6766";
//   } else if (parseInt(mois.value) == 5 && parseInt(jour.value) <= 31) {
//     dayArea.style.border = "1px solid #6b6766";
//   } else if (parseInt(mois.value) == 7 && parseInt(jour.value) <= 31) {
//     dayArea.style.border = "1px solid #6b6766";
//   } else if (parseInt(mois.value) == 8 && parseInt(jour.value) <= 31) {
//     dayArea.style.border = "1px solid #6b6766";
//   } else if (parseInt(mois.value) == 10 && parseInt(jour.value) <= 31) {
//     dayArea.style.border = "1px solid #6b6766";
//   } else if (parseInt(mois.value) == 12 && parseInt(jour.value) <= 31) {
//     dayArea.style.border = "1px solid #6b6766";
//   } else if (year.length >= 5) {
//     yearArea.style.border = "1px solid #6b6766";
//   } else if (year.length == 3) {
//     yearArea.style.border = "#6b6766 solid 0.1rem";
//   } else if (year.value > annee.value) {
//     yearArea.style.border = "#6b6766 solid 0.1rem";
//   } else {
//     yearArea.style.border = "#6b6766 solid 0.1rem";
//   }
// }
