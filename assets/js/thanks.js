function mySetTimeout(delay) {
  return new Promise(function (res) {
    setTimeout(res, delay);
  });
}

function thanks() {
  const thanksDiv = document.getElementById("thanks");

  mySetTimeout(3000)
    .then(function () {
      thanksDiv.innerText = t("thanks-1");
      return mySetTimeout(2000)
    })
    .then(function () {
      thanksDiv.innerText = t("thanks-2");
      return mySetTimeout(5000)
    })
    .then(function () {
      thanksDiv.innerText = t("thanks-3");
      return mySetTimeout(1500)
    })
    .then(function () {
      thanksDiv.innerText = t("thanks-4");
      return mySetTimeout(5000)
    })
    .then(function () {
      router.redirect('strona_glowna.html');
    });
}
