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
    "reduced/month/reduced": 5,
    "reduced/single/reduced": 3,
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
    "reduced/month/reduced": 0,
    "reduced/single/reduced": 0,
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
      "reduced/month/reduced": 0,
      "reduced/single/reduced": 0,
      "reduced/24/comunal": 0,
      "reduced/24/2-org": 0,
      "reduced/24/all-org": 0,
      "reduced/72/comunal": 0,
      "reduced/72/comunal-train": 0,
    };
    metroTicketMachine.updateView();
  },
  updateView() {
  },
};
