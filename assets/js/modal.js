const modal = {
  views: {
    gdynia: {
      template: "modalview-dbl-column",
      display: "flex",
      leftColumButtons: [
        { label: "1 Razowe", redirect: "xxx" },
        { label: "24-Godzinne", redirect: "xxx" },
        { label: "72-GODZINNE" },
      ],
      rightColumButtons: [
        { label: "1 Razowe" },
        { label: "24-Godzinne" },
        { label: "72-GODZINNE" },
      ],
    },
    metro: {
      template: "modalview-dbl-column",
      display: "flex",
      //normalne:
      leftColumButtons: [
        { label: "1 Razowe", redirect: "normalne-1-razowe" },
        { label: "24-Godzinne", redirect: "normalne-24-godzinne" },
        { label: "72-GODZINNE" },
        { label: "MIESIĘCZNY" },
      ],
      //ulgowe:
      rightColumButtons: [
        { label: "1 Razowe", redirect: "ulgowe-1-razowe" },
        { label: "24-Godzinne" },
        { label: "72-GODZINNE" },
        { label: "MIESIĘCZNY" },
      ],
    },
    "normalne-1-razowe": {
      template: "modalview-single-column",
      display: "block",
      buttons: [
        { label: "ZWYKŁE I NOCNE", redirect: "metro" },
        { label: "ZWYKŁE, POSPIESZNE I NOCNE" }
      ],
    },
    "normalne-24-godzinne": {
      template: "modalview-single-column",
      display: "block",
      buttons: [
        { label: "KOMUNALNE" },
        { label: "KOLEJOWO-KOMUNALNE 2 ORG" },
        { label: "KOLEJOWO KOMUNALNE WSZYSTKICH ORG" },
      ],
    },
    "ulgowe-1-razowe": {
      template: "modalview-single-column",
      display: "block",
      buttons: [{ label: "ZWYKŁE I NOCNE" }, { label: "ZWYKŁE, POSPIESZNE I NOCNE" }],
    },
  },
  obecnywidok: "",

  open(widok) {
    modal.close()

    const view = modal.views[widok];
    document.getElementById("modal-wrapper").style.display = "block";
    document.getElementById(view.template).style.display = view.display;
    modal.obecnywidok = widok;

    if (view.template == "modalview-dbl-column") {
      const buttonsleft = document.getElementById(view.template).getElementsByClassName("leftbutton")
      const buttonsright = document.getElementById(view.template).getElementsByClassName("rightbutton")

      for (let i = 0; i < buttonsleft.length; ++i) {
        const buttonContent = view.leftColumButtons[i]; // string albo undefined
        if (buttonContent == undefined) {
          buttonsleft[i].style.display = "none";
        } else { //mamy tekst
          buttonsleft[i].innerText = buttonContent.label;
          buttonsleft[i].style.display = "block";
        }
      }
      for (let i = 0; i < buttonsright.length; ++i) {
        const buttonContent = view.rightColumButtons[i]; // obiekt albo undefined
        if (buttonContent == undefined) {
          buttonsright[i].style.display = "none";
        } else { //mamy tekst
          buttonsright[i].innerText = buttonContent.label;
          buttonsright[i].style.display = "block";
        }
      }

    } else {
      const buttons = document.getElementById(view.template).getElementsByClassName("button")
      for (let i = 0; i < buttons.length; ++i) {
        const buttonContent = view.buttons[i]; // string albo undefined
        if (buttonContent == undefined) {
          buttons[i].style.display = "none";
        } else { //mamy tekst
          buttons[i].innerText = buttonContent.label;
          buttons[i].style.display = "block";
        }
      }
    }

  },
  close() {
    document.getElementById("modal-wrapper").style.display = "none";
    document.getElementById("modalview-single-column").style.display = "none";
    document.getElementById("modalview-dbl-column").style.display = "none";
  },
  click(whichbutton) {
    const template = modal.views[modal.obecnywidok].template

    if (template == "modalview-dbl-column") {
      let button

      if (whichbutton < 4) {
        button = modal.views[modal.obecnywidok].leftColumButtons[whichbutton]
      } else {
        button = modal.views[modal.obecnywidok].rightColumButtons[whichbutton - 4]
      }

      modal.open(button.redirect)
    } else {
      button = modal.views[modal.obecnywidok].buttons[whichbutton]
      modal.open(button.redirect)
    }
  },
};
