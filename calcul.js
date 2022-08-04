var nb_victime = document.getElementById("nbvictimes");
var nbr_E = document.getElementById("nbrE");
var nbr_F = document.getElementById("nbrF");
var nbr_H = document.getElementById("nbrH");
var text = document.getElementById("text-alert");
text.style = "display:none;";
var total = nbr_E.value + nbr_F.value + nbr_H.value;
// function handleChange() {
//   if (
//     parseInt(nb_victime.value) ===
//     parseInt(nbr_E.value + nbr_F.value + nbr_H.value)
//   ) {
//     console.log("Ok vous avez TOUT VRAI");
//   } else {
//     console.log("TOUT FAUX");
//   }
// }

function handleInput() {
  if (
    parseInt(nb_victime.value) !==
    parseInt(nbr_E.value) + parseInt(nbr_F.value) + parseInt(nbr_H.value)
  ) {
    text.style = "display:visible;";
    text.style = "color:#bd1818;";
  } else {
    text.style = "display:none;";
  }
}
