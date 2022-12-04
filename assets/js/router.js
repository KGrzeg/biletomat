const parts = "/parts";

const router = {
  currentHref: '',
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
    }
  },
  refresh(){
    router.redirect(router.currentHref);
  }
}

router.redirect("strona_glowna.html");
