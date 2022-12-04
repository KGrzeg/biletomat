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
    summary: "PODSUMOWANIE",
    thanks: "DZIĘKUJEMY ZA KORZYSTANIE Z USŁUG ZKM GDYNIA",
    wait: "PROSZĘ CZEKAĆ",
    sum: "KWOTA:",
  },
  ukr: {
    ticketCity: "МІСЬКИЙ КВИТОК",
    ticketMetro: "ПРОЇЗНИЙ КВИТОК МЕТРОПОЛІТЕНУ",
    backBtn: "ПОВЕРНЕННЯ",
    cancelBtn: "СКАСУВАТИ",
    ticketBuy: "КУПИТИ КВИТОК",
    rechargeCard: "ПОПОВНЕННЯ КАРТКИ",
    ticketMonth: "ЗА МІСЯЦЬ",
    ticket3Month: "НA 3 МІСЯЦІ",
    ticketYear: "НА РІК",
    cardInstruction: "ДЛЯ ПРОДОВЖЕННЯ, БУДЬ ЛАСКА, ЗАСТОСУЙТЕ КАРТКУ У ВІДПОВІДНОМУ МІСЦІ",
    paymentHeader: "ДЛЯ ОПЛАТИ ПОКУПКИ",
    paymentMethodCard: "ДАВАННЯ КАРТКИ",
    paymentMethodOr: "АБО",
    paymentMethodMoney: "ВНЕСЕННЯ ГОТІВКИ",
    summary: "ПІДСУМКИ",
    thanks: "ДЯКУЮ ЗА КОРИСТУВАННЯ ПОСЛУГАМИ ZKM GDYNIA",
    wait: "БУДЬ ЛАСКА, ЗАЧЕКАЙТЕ",
    sum: "СУМА:",
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
    paymentMethodCard: "BRING THE CARD",
    paymentMethodOr: "OR",
    paymentMethodMoney: "INSERT CASH",
    summary: "SUMMARY",
    thanks: "THANK YOU FOR USING ZKM GDYNIA TRANSPORT",
    wait: "PLEASE WAIT",
    sum: "PRICE:",
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
