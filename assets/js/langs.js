const langs = {
  pl: {
    ticketCity: "BILET MIEJSKI",
    ticketMetro: "BILET METROPOLITALNY",
    backBtn: "POWRÓT",
    cancelBtn: "ANULUJ",
    ticketBuy: "KUPNO BILETU",
    rechargeCard: "DOŁADOWANIE KARTY",
    ticketMonth: "NA MIESIĄC",
    ticket3Month: "NA 3 MIESIĄCE",
    ticketYear: "NA ROK",
    cardInstruction: "ABY PRZEJŚĆ DALEJ, PRZYŁÓŻ KARTĘ W ODPOWIEDNIM MIEJSCU",
    paymentHeader: "ABY OPŁACIĆ ZAKUP",
    paymentMethodCard: "PRZYŁÓŻ KARTĘ",
    paymentMethodOr: "LUB",
    paymentMethodMoney: "WRZUĆ GOTÓWKĘ",
  },
  en: {
    ticketCity: "CITY TICKET",
    ticketMetro: "METRO TICKET",
    backBtn: "BACK",
    cancelBtn: "CANCEL",
    ticketBuy: "BUY TICKET",
    rechargeCard: "RECHARGE CARD",
    ticketMonth: "FOR MONTH",
    ticket3Month: "FOR 3 MONTHS",
    ticketYear: "FOR A YEAR",
    cardInstruction: "TO PROCEED, BRING CARD TO THE TERMINAL",
    paymentHeader: "TO PAY FOR THE PURCHASE",
    paymentMethodCard: "BRING CARD",
    paymentMethodOr: "OR",
    paymentMethodMoney: "INSERT CASH",
  },
  currentlang: 'pl',
  changeLang(newLang) {
    langs.currentlang = newLang;

    document.getElementById("back").innerHTML = t('backBtn');
    document.getElementById("cancel").innerHTML = t('cancelBtn');

    const flags = document.getElementsByClassName("flag");
    for (let i = 0; i < flags.length; i++) {
      flags[i].style.display = 'block';

      if (flags[i].id == newLang) {
        flags[i].style.display = 'none';
      }
    }
    router.refresh();
  }
}

function t(label) {
  return langs[langs.currentlang][label];
}
