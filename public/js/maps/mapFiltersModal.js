const modal = document.getElementById("mapFiltersModal");

const openFiltersBtn = document.getElementById("mapFiltersModalOpenBtn");


const crossBtn = document.getElementById("mapFiltersModalCloseBtn");

const cancel = document.getElementById("mapFiltersModalCancelBtn");
const confirm = document.getElementById("mapFiltersModalConfirmBtn");


openFiltersBtn.onclick = function() {
  modal.style.display = "block";
}

crossBtn.onclick = function() {
  modal.style.display = "none";
}

cancel.onclick = function() {
  modal.style.display = "none";
}

confirm.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}