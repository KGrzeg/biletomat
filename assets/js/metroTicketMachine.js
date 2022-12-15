const metroTicketMachine = {
  prices: {
    "normal/single/night": 5,
    "normal/month/normal": 5,
    "normal/single/normal": 3,
    "normal/24/comunal": 3,
    "normal/24/2-org": 3,
    "normal/24/all-org": 3,
    "normal/72/comunal": 3,
    "normal/72/comunal-train": 3,

    "reduced/single/night": 5,
    "reduced/month/normal": 5,
    "reduced/single/normal": 3,
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
  updateView() {
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
  },
};
