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
  payload: null,
  redirect(href, payload = false) {
    const url = parts + "/" + href;
    return fetch(url)
      .then(function (response) {
        return response.text()
      })
      .then(function (text) {
        if (payload)
          router.payload = payload;

        const body = document.getElementById("body");
        body.innerHTML = text;
        router.currentHref = href;
        console.log(href);

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
    if (router.currentHref == "bilet_miejski.html") {
      router.redirect("wybor_biletu.html");
    } else {
      router.redirect("strona_glowna.html");
    }
  },
  refresh() {
    router
      .redirect(router.currentHref)
      .then(function () {
        try {
          ticketMachine.updateView();
        } catch (error) { }
        try {
          metroTicketMachine.updateView();
        } catch (error) { }
      });
  }
}

router.redirect("strona_glowna.html");
