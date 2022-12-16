function mySetTimeout(delay) {
  return new Promise(function (res) {
    setTimeout(res, delay);
  });
}

function dotujSynu(target, number = 5, delay = 300) {
  let chain = mySetTimeout(delay);

  for (let i = 0; i < number; ++i) {
    chain = chain.then(function () {
      target.innerText += '.';
      return mySetTimeout(delay)
    })
  }
}

function thanks() {
  const thanksDiv = document.getElementById("thanks");

  mySetTimeout(3000)
    .then(function () {
      thanksDiv.innerText = t("thanks-1");
      dotujSynu(thanksDiv, 5, 200)
      return mySetTimeout(2000)
    })
    .then(function () {
      thanksDiv.innerText = t("thanks-2");
      dotujSynu(thanksDiv, 12, 350)
      return mySetTimeout(5000)
    })
    .then(function () {
      thanksDiv.innerText = t("thanks-3");
      dotujSynu(thanksDiv, 5, 100)
      return mySetTimeout(1500)
    })
    .then(function () {
      thanksDiv.innerText = t("thanks-4");
      dotujSynu(thanksDiv, 4, 350);
      return mySetTimeout(5000)
    })
    .then(function () {
      thanksDiv.innerText = t("thanks-5");
      dotujSynu(thanksDiv, 8, 350)
      return mySetTimeout(5000)
    })
    .then(function () {
      thanksDiv.innerText = t("thanks-6");
      return mySetTimeout(5000)
    })
    .then(function () {
      thanksDiv.innerText = t("thanks-6");
      return mySetTimeout(5000)
    })
    .then(function () {
      router.redirect('strona_glowna.html');
    });
}
