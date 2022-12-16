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
    'ticket-single': "JEDNOPRZEJAZDOWY",
    'ticket-hour': "GODZINNY",
    'ticket-daily': "DOBOWY",
    'ticket-reduced': "ULGOWY",
    'ticket-normal': "NORMALNY",
    'monthCard': "Doładowanie miesięczne karty miejskiej",
    '3monthCard': "Doładowanie 3-miesięczne karty miejskiej",
    'yearCard': "Doładowanie roczne karty miejskiej",
    'thanks-1': "OCZEKIWANIE NA PŁATNOŚĆ",
    'thanks-2': "PRZETWARZANIE",
    'thanks-3': "POTWIERDZENIE PŁATNOŚCI",
    'thanks-4': "DRUKOWANIE BILETU",
    'thanks-5': "PROSZĘ ODEBRAĆ BILET",
    'thanks-6': "TRANSAKCJA ZAKOŃCZONA",

    'extend-card': "PRZEDŁUŻENIE KARTY MIEJSKIEJ",

    ///////////////////////////

    'normal': "NORMALNE",
    'reduced': "ULGOWE",
    'time-based': "OKRESOWE",

    //GDYNIA

    'normal-ticket': "ZWYKŁY",
    'hurried-ticket': "POSPIESZNY",
    '24-hour-ticket': "CAŁODOBOWY",

    // modal
    'one-time-metro': "JEDNOPRZEJAZDOWY",
    '24-hour-metro': "24-GODZINNY",
    '72-hour-metro': "72-GODZINNY",
    'month-ticket': "MIESIĘCZNY",

    //modal next menu
    'normal-night': "ZWYKŁE I NOCNE",
    'normal-hurrried-night': "ZWYKŁE, POSPIESZNE I NOCNE",
    'comunal': "KOMUNALNE",
    'train-comunal-2-org': "KOLEJOWO-KOMUNALNE 2 ORG",
    'train-comunal-all-org': "KOLEJOWO-KOMUNALNE WSZYSTKICH ORG",
    '72-comunal': "KOMUNALNE",
    '72-train-comunal': "KOLEJOWO-KOMUNALNE",

    //season
    'month': "MIESIĘCZNY",
    'season': "SEMESTRALNY",
    'named-normal': "IMIENNY NORMALNY",
    'named-reduced': "IMIENNY ULGOWY",
    'bearer': "NA OKAZICIELA",
    '4-MONTH': "4-MIESIECZNY",
    '5-MONTH': "5-MIESIĘCZNYB",
    //strefy
    'zone-1': "ZWYKŁE I NOCNE W GDYNI",
    'zone-2': "ZWYKŁE, POSPIESZNE I NOCNE W GDYNI",
    'zone-3': "ZWYKŁE, POSPIESZNE I NOCNE W SOPOCIE LUB RUMI LUB KOSAKOWIE LUB ŻUKOWIE LUB SZEMUDZIE LUB WEJHEROWIE",
    'zone-4': "ZWYKŁE, POSPIESZNE I NOCNE W RUMI, REDZIE I MIESCIE WEJHEROWO LUB WEJHEROWIE I RUMI",
    'zone-5': "ZWYKŁE, POSPIESZNE I NOCNE W OBREĘBIE SIECI KOMUNIKACYJNEJ",
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
    'ticket-normal': "NORMAL",
    'monthCard': 'A month recharge of the card',
    '3monthCard': '3 months recharge of the card',
    'yearCard': 'Year recharge of the card',
    'thanks-1': "WAITING FOR PAYMENT",
    'thanks-2': "PROCESSING",
    'thanks-3': "PAYMENT ACCEPTED",
    'thanks-4': "TRANSACTION SUCCESSFULL",


    ///////////////////////////

    'normal': "NORMAL",
    'reduced': "REDUCED",

    //GDYNIA

    'normal-ticket': "NORMAL TICKET",
    'hurried-ticket': "HURRIED TICKET",
    '24-hour-ticket': "24-HOUR TICKET",

    // modal
    'one-time-metro': "ONE-TIME",
    '24-hour-metro': "24-HOUR",
    '72-hour-metro': "72-HOUR",
    'month-ticket': "MONTH",

    //modal next menu
    'normal-night': "NORMAL & NIGHT",
    'normal-hurrried-night': "NORMAL, HURRIED & NIGHT",
    'comunal': "COMUNAL",
    'train-comunal-2-org': "TRAIN-COMUNAL 2 ORG",
    'train-comunal-all-org': "TRAIN-COMUNAL ALL ORG",
    '72-comunal': "COMUNAL",
    '72-train-comunal': "TRAIN-COMUNAL",

    //season
    'month': "MONTH TICKET",
    'season': "SEASON TICKET",
    'named-normal': "NAMED NORMAL",
    'named-reduced': "NAMED REDUCED",
    'bearer': "BEARER",
    '4-MONTH': "4-MONTH",
    '5-MONTH': "5-MONTH",
    //strefy
    'zone-1': "REGULAR AND NIGHT IN GDYNIA",
    'zone-2': "REGULAR, HURRIED AND NIGHT IN GDYNIA",
    'zone-3': "REGULAR, HURRIED AND NIGHT IN SOPOT OR RUMIA OR KOSAKOWO OR ŻUKOWO OR SZEMUD OR WEJHEROWO",
    'zone-4': "REGULAR, HURRIED AND NIGHT IN RUMIA, REDA AND WEJHEROWO CITY OR WEJHEROWO AND RUMIA",
    'zone-5': "REGULAR, HURRIED AND NIGHT FOR ALL LINES",
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
