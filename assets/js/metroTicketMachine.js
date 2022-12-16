const metroTicketMachine = {
  cacheSummary: "",
  cacheSumPrice: 0,
  prices: {
    "normal/single/night": 5,
    "normal/month/normal": 136,
    "normal/single/normal": 5.2,
    "normal/24/comunal": 3,
    "normal/24/2-org": 3,
    "normal/24/all-org": 3,
    "normal/72/comunal": 3,
    "normal/72/comunal-train": 3,

    "reduced/single/night": 2.5,
    "reduced/month/normal": 68,
    "reduced/single/normal": 2.6,
    "reduced/24/comunal": 3,
    "reduced/24/2-org": 3,
    "reduced/24/all-org": 3,
    "reduced/72/comunal": 3,
    "reduced/72/comunal-train": 3,
  },
  tickets: {
    "normal/single/night": 0,
    "normal/month/normal": 0,
    "normal/single/normal": 0,
    "normal/24/comunal": 0,
    "normal/24/2-org": 0,
    "normal/24/all-org": 0,
    "normal/72/comunal": 0,
    "normal/72/comunal-train": 0,

    "reduced/single/night": 0,
    "reduced/month/normal": 0,
    "reduced/single/normal": 0,
    "reduced/24/comunal": 0,
    "reduced/24/2-org": 0,
    "reduced/24/all-org": 0,
    "reduced/72/comunal": 0,
    "reduced/72/comunal-train": 0,
  },
  add(type) {
    metroTicketMachine.tickets[type]++;
    metroTicketMachine.updateView();
  },
  substract(type) {
    if (metroTicketMachine.tickets[type] === 0)
      return;
    metroTicketMachine.tickets[type]--;
    metroTicketMachine.updateView();
  },
  cancel() {
    metroTicketMachine.tickets = {
      "normal/single/night": 0,
      "normal/month/normal": 0,
      "normal/single/normal": 0,
      "normal/24/comunal": 0,
      "normal/24/2-org": 0,
      "normal/24/all-org": 0,
      "normal/72/comunal": 0,
      "normal/72/comunal-train": 0,

      "reduced/single/night": 0,
      "reduced/month/normal": 0,
      "reduced/single/normal": 0,
      "reduced/24/comunal": 0,
      "reduced/24/2-org": 0,
      "reduced/24/all-org": 0,
      "reduced/72/comunal": 0,
      "reduced/72/comunal-train": 0,
    };
    metroTicketMachine.updateView();
  },
  getSummaryInfo() {
    let summaryText = '';
    let sumPrice = 0;

    ["normal/single/night",
      "normal/month/normal",
      "normal/single/normal",
      "normal/24/comunal",
      "normal/24/2-org",
      "normal/24/all-org",
      "normal/72/comunal",
      "normal/72/comunal-train",
      "reduced/single/night",
      "reduced/month/normal",
      "reduced/single/normal",
      "reduced/24/comunal",
      "reduced/24/2-org",
      "reduced/24/all-org",
      "reduced/72/comunal",
      "reduced/72/comunal-train"].forEach(function (ticketId) {
        const count = metroTicketMachine.tickets[ticketId];
        if (count > 0) {
          const price = metroTicketMachine.prices[ticketId];
          const currentPrice = count * price;
          let ticketLabel = document.getElementById(ticketId + "-header").innerText
          ticketLabel = ticketLabel.replace(/\n/g, "");
          ticketLabel = ticketLabel.replace(/ +/g, " ");

          summaryText += ticketLabel + ' ';
          summaryText += count;
          summaryText += 'x ';
          summaryText += currentPrice.toFixed(2);
          summaryText += " ZŁ";
          summaryText += "\n";

          sumPrice += currentPrice;
        }
      });

    return {
      summaryText,
      sumPrice
    }
  },
  updateView() {
    try {
      const info = metroTicketMachine.getSummaryInfo();
      document.getElementById("sum").innerText = info.sumPrice.toFixed(2) + " ZŁ";
      document.getElementById("summary").innerText = info.summaryText;

      metroTicketMachine.cacheSumPrice = info.sumPrice;
      metroTicketMachine.cacheSummary = info.summaryText;
      console.log("droga 1");

      ["normal/single/night",
        "normal/month/normal",
        "normal/single/normal",
        "normal/24/comunal",
        "normal/24/2-org",
        "normal/24/all-org",
        "normal/72/comunal",
        "normal/72/comunal-train",
        "reduced/single/night",
        "reduced/month/normal",
        "reduced/single/normal",
        "reduced/24/comunal",
        "reduced/24/2-org",
        "reduced/24/all-org",
        "reduced/72/comunal",
        "reduced/72/comunal-train",
      ].forEach(function (ticketId) {
        const count = metroTicketMachine.tickets[ticketId]

        if (count <= 0) {
          document.getElementById(ticketId + "-header").style.display = 'none'
          document.getElementById(ticketId + "-selector").style.display = 'none'
        } else {
          document.getElementById(ticketId + "-header").style.display = 'block'
          document.getElementById(ticketId + "-selector").style.display = 'block'
          document.getElementById(ticketId + "-counter").innerText = count;
        }
      })
    } catch (e) {
      document.getElementById("sum").innerText = metroTicketMachine.cacheSumPrice.toFixed(2) + " ZŁ";
      document.getElementById("summary").innerText = metroTicketMachine.cacheSummary;
      console.log("droga 2");
    }
  },
};
