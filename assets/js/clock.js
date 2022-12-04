function aktualizujZegar() {
  const teraz = new Date();

  let napis = "";

  napis += teraz.getHours();
  napis += ":";
  if (teraz.getMinutes() < 10)
    napis += "0";
  napis += teraz.getMinutes();

  const moj_zegar = document.getElementById("clock");
  moj_zegar.innerText = napis;
}

setInterval(aktualizujZegar, 1000);
