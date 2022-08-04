var titre = document.getElementById("title");
var type = document.getElementById("type");
var lieu = document.getElementById("lieu");
var nb_victime = document.getElementById("nbvictimes");
var nbr_E = document.getElementById("nbrE");
var nbr_F = document.getElementById("nbrF");
var nbr_H = document.getElementById("nbrH");
var mois = document.getElementById("mois");
var jour = document.getElementById("jour");
var annee = document.getElementById("annee");
var bouton = document.getElementById("bouton");
bouton.disabled = "disabled";

function handleChange() {
  if (
    titre.value == "" ||
    type.value == "" ||
    lieu.value == "" ||
    nb_victime.value == "" ||
    nbr_E.value == "" ||
    nbr_F.value == "" ||
    nbr_H.value == "" ||
    mois.value == "" ||
    jour.value == "" ||
    annee.value == ""
  ) {
    bouton.disabled = "disabled";
  } else {
    bouton.disabled = "";
  }
}
