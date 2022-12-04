const ticketMachine = {
  transactionType: '', // cityCard, ticket
  ticketType: '', // city, metro
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

    let summaryText = '';
    ['single', 'hour', 'daily'].forEach(function (period) {
      if (ticketMachine.tickets[period].reduced > 0) {
        summaryText += ticketMachine.tickets[period].reduced;
        summaryText += 'x ';
        summaryText += period + '-reduced';
        //TODO: CENA
        summaryText += "\n";
      }
      if (ticketMachine.tickets[period].normal > 0) {
        summaryText += ticketMachine.tickets[period].normal;
        summaryText += 'x ';
        summaryText += period + '-normal';
        //TODO: CENA
        summaryText += "\n";
      }
    })

    document.getElementById("summary").innerText = summaryText;
  },
}
