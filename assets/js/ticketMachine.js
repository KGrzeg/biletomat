const ticketMachine = {
  transactionType: '', // cityCard, ticket
  // ticketType: 'city', // city, metro
  prices: {
    city: {
      single: {
        reduced: 1,
        normal: 2,
      },
      hour: {
        reduced: 2,
        normal: 4,
      },
      daily: {
        reduced: 5,
        normal: 10,
      },
    },
    metro: {
      single: {
        reduced: 1.5,
        normal: 3,
      },
      hour: {
        reduced: 1.8,
        normal: 3.6,
      },
      daily: {
        reduced: 6.7,
        normal: 13.4,
      },
    },
  },
  tickets: {
    single: {
      reduced: 0,
      normal: 0,
    },
    hour: {
      reduced: 0,
      normal: 0,
    },
    daily: {
      reduced: 0,
      normal: 0,
    },
  },
  add(period, type) {
    ticketMachine.tickets[period][type]++;
    ticketMachine.updateView();
  },
  substract(period, type) {
    if (ticketMachine.tickets[period][type] === 0)
      return;
    ticketMachine.tickets[period][type]--;
    ticketMachine.updateView();
  },
  cancel() {
    ticketMachine.tickets = {
      single: {
        reduced: 0,
        normal: 0,
      },
      hour: {
        reduced: 0,
        normal: 0,
      },
      daily: {
        reduced: 0,
        normal: 0,
      },
    };
    ticketMachine.updateView();
  },
  updateView() {
    document.getElementById("counter-single-reduced").innerText = ticketMachine.tickets.single.reduced;
    document.getElementById("counter-single-normal").innerText = ticketMachine.tickets.single.normal;
    document.getElementById("counter-hour-reduced").innerText = ticketMachine.tickets.hour.reduced;
    document.getElementById("counter-hour-normal").innerText = ticketMachine.tickets.hour.normal;
    document.getElementById("counter-daily-reduced").innerText = ticketMachine.tickets.daily.reduced;
    document.getElementById("counter-daily-normal").innerText = ticketMachine.tickets.daily.normal;

    const ticketType = router.payload.ticketType;
    let summaryText = '';
    let sumPrice = 0;
    ['single', 'hour', 'daily'].forEach(function (period) {
      if (ticketMachine.tickets[period].reduced > 0) {
        let currentPrice = ticketMachine.prices[ticketType][period].reduced;
        currentPrice *= ticketMachine.tickets[period].reduced;

        const ticketLabel = ticketType + '-' + period + '-reduced';

        summaryText += t(ticketLabel) + ' ';
        summaryText += ticketMachine.tickets[period].reduced;
        summaryText += 'x ';
        summaryText += currentPrice.toFixed(2);
        summaryText += " ZŁ";
        summaryText += "\n";

        sumPrice += currentPrice;
      }
      
      if (ticketMachine.tickets[period].normal > 0) {
        let currentPrice = ticketMachine.prices[ticketType][period].normal;
        currentPrice *= ticketMachine.tickets[period].normal;
        
        const ticketLabel = ticketType + '-' + period + '-normal';

        summaryText += t(ticketLabel) + ' ';
        summaryText += ticketMachine.tickets[period].normal;
        summaryText += 'x ';
        summaryText += currentPrice.toFixed(2);
        summaryText += " ZŁ";
        summaryText += "\n";

        sumPrice += currentPrice;
      }
    });
    document.getElementById("sum").innerText = sumPrice.toFixed(2) + " ZŁ";

    document.getElementById("summary").innerText = summaryText;
  },
}
