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
    proceed: "PRZEJDŹ DO PŁATNOŚCI",
    'city-single-reduced': "Miejski bilet jednorazowy ulgowy",
    'city-single-normal': "Miejski bilet jednorazowy normalny",
    'city-hour-reduced': "Miejski bilet godzinny ulgowy",
    'city-hour-normal': "Miejski bilet godiznny normalny",
    'city-daily-reduced': "Miejski bilet całodobowy ulgowy",
    'city-daily-normal': "Miejski bilet całodobowy ulgowy",
    'metro-single-reduced': "Metropolialny jednorazowy ulgowy",
    'metro-single-normal': "Metropolialny jednorazowy normalny",
    'metro-hour-reduced': "Metropolialny godzinny ulgowy",
    'metro-hour-normal': "Metropolialny godzinny normalny",
    'metro-daily-reduced': "Metropolialny całodobowy ulgowy",
    'metro-daily-normal': "Metropolialny całodobowy normalny",
    'ticket-single': "JEDNORAZOWY",
    'ticket-hour': "GODZINNY",
    'ticket-daily': "DOBOWY",
    'ticket-reduced': "ULGOWY",
    'ticket-normal' : "NORMALNY",
    'monthCard' : "Doładowanie miesięczne karty miejskiej",
    '3monthCard': "Doładowanie 3-miesięczne karty miejskiej",
    'yearCard' : "Doładowanie roczne karty miejskiej"

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
    proceed: "PROCEED TO PAYMENT",
    'city-single-reduced': "City single ride reduced ticket",
    'city-single-normal': "City single ride normal ticket",
    'city-hour-reduced': "City 1-hour reduced ticket",
    'city-hour-normal': "City 1-hour normal ticket",
    'city-daily-reduced': "City 24-hour reduced ticket",
    'city-daily-normal': "City 24-hour normal ticket",
    'metro-single-reduced': "Metro single ride reduced ticket",
    'metro-single-normal': "Metro single ride normal ticket",
    'metro-hour-reduced': "Metro one-hour reduced ticket",
    'metro-hour-normal': "Metro one-hour normal ticket",
    'metro-daily-reduced': "Metro 24-hour reduced ticket",
    'metro-daily-normal': "Metro 24-hour normal ticket",
    'ticket-single': "SINGLE RIDE",
    'ticket-hour': "1-HOUR",
    'ticket-daily': "24-HOUR",
    'ticket-reduced': "REDUCED",
    'ticket-normal' : "NORMAL",
    monthCard: 'A month recharge of the card',
    '3monthCard': '3 months recharge of the card',
    yearCard: 'Year recharge of the card',
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
    proceed: "PRZEJDŹ DO PŁATNOŚCI",
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
