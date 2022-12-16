const modal = {
  views: {
    metro: {
      template: "modalview-dbl-column",
      display: "flex",
      //normalne:
      leftColumButtons: [
        { label: "1 PRZEJAZDOWY", redirect: "one-time-metro-normal" },
        { label: "24-GODZINNE", redirect: "24-hour-metro-normal" },
        { label: "72-GODZINNE", redirect: "72-hour-metro-normal" },
        { label: "MIESIĘCZNY", ticket: "normal/month/normal" },
      ],
      //ulgowe:
      rightColumButtons: [
        { label: "1 PRZEJAZDOWY", redirect: "one-time-metro-reduced" },
        { label: "24-GODZINNE", redirect: "24-hour-metro-reduced" },
        { label: "72-GODZINNE", redirect: "72-hour-metro-reduced" },
        { label: "MIESIĘCZNY", ticket: "reduced/month/normal" },
      ],
    },

    //część czerwona, bilety normalne
    "one-time-metro-normal": {
      template: "modalview-single-column",
      display: "block",
      buttons: [
        { label: "ZWYKŁE I NOCNE", ticket: "normal/single/normal" },
        { label: "ZWYKŁE, POSPIESZNE I NOCNE", ticket: "normal/single/night" }
      ],
    },
    "24-hour-metro-normal": {
      template: "modalview-single-column",
      display: "block",
      buttons: [
        { label: "KOMUNALNE", ticket: "normal/24/comunal" },
        { label: "KOLEJOWO-KOMUNALNE 2 ORG", ticket: "normal/24/2-org" },
        { label: "KOLEJOWO KOMUNALNE WSZYSTKICH ORG", ticket: "normal/24/all-org" },
      ],
    },
    "72-hour-metro-normal": {
      template: "modalview-single-column",
      display: "block",
      buttons: [
        { label: "KOMUNALNE", ticket: "normal/72/comunal" },
        { label: "KOLEJOWO-KOMUNALNE", ticket: "normal/72/comunal-train" },
      ],
    },

    //część zielona, bilety ulgowe
    "one-time-metro-reduced": {
      template: "modalview-single-column",
      display: "block",
      buttons: [
        { label: "ZWYKŁE I NOCNE", ticket: "reduced/single/normal" },
        { label: "ZWYKŁE, POSPIESZNE I NOCNE", ticket: "reduced/single/night" }
      ],
    },
    "24-hour-metro-reduced": {
      template: "modalview-single-column",
      display: "block",
      buttons: [
        { label: "KOMUNALNE", ticket: "reduced/24/comunal" },
        { label: "KOLEJOWO-KOMUNALNE 2 ORG", ticket: "reduced/24/2-org" },
        { label: "KOLEJOWO KOMUNALNE WSZYSTKICH ORG", ticket: "reduced/24/all-org" },
      ],
    },
    "72-hour-metro-reduced": {
      template: "modalview-single-column",
      display: "block",
      buttons: [
        { label: "KOMUNALNE", ticket: "reduced/72/comunal" },
        { label: "KOLEJOWO-KOMUNALNE", ticket: "reduced/72/comunal-train" },
      ],
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

      if (whichbutton < 4)
        button = modal.views[modal.obecnywidok]
          .leftColumButtons[whichbutton]
      else
        button = modal.views[modal.obecnywidok]
          .rightColumButtons[whichbutton - 4]

      if (button.redirect) {
        modal.open(button.redirect)
      } else {
        metroTicketMachine.add(button.ticket);
        modal.close()
      }
    } else {
      button = modal.views[modal.obecnywidok].buttons[whichbutton]

      if (button.redirect) {
        modal.open(button.redirect)
      } else {
        metroTicketMachine.add(button.ticket);
        modal.close()
      }
    }
  },
};
