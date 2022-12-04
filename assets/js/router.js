const parts = "/parts";

const router = {
  currentHref: '',
  hideBackBtnOnHrefs: [
    "strona_glowna.html",
  ],
  showCancelBtnOnHrefs: [
    "bilet_miejski.html",
    "bilet_metropolitalny.html",
  ],
  redirect(href) {
    const url = parts + "/" + href;
    fetch(url)
      .then(function (response) {
        return response.text()
      })
      .then(function (text) {
        const body = document.getElementById("body");
        body.innerHTML = text;
        router.currentHref = href;

        if (router.hideBackBtnOnHrefs.indexOf(href) !== -1)
          document.getElementById("back").classList.add('disabled');
        else
          document.getElementById("back").classList.remove('disabled');

        if (router.showCancelBtnOnHrefs.indexOf(href) !== -1)
          document.getElementById("cancel").classList.remove('disabled');
        else
          document.getElementById("cancel").classList.add('disabled');

      });
  },
  back() {
    switch (router.currentHref) {
      case "wybor_biletu.html": {
        router.redirect("strona_glowna.html");
        break;
      }
      case "odczyt_karty.html": {
        router.redirect("strona_glowna.html");
        break;

      }
      case "karta_miejska.html": {
        router.redirect("strona_glowna.html");
        break;
      }
      case "platnosc.html": {
        router.redirect("karta_miejska.html");
        break;
      }
      case "podziekowanie.html": {
        router.redirect("strona_glowna.html");
        break;
      }
      case "bilet_miejski.html": {
        router.redirect("wybor_biletu.html");
        break;
      }
      case "bilet_metropolitalny.html": {
        router.redirect("wybor_biletu.html");
        break;
      }
    }
  },
  refresh() {
    router.redirect(router.currentHref);
  }
}

router.redirect("strona_glowna.html");
