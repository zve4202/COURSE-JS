const peopleWaiting = [
  "Кристина",
  "Олег",
  "Кирилл",
  "Мария",
  "Светлана",
  "Артем",
  "Глеб",
];

giveParcel();
giveParcel();
giveParcel();

while (peopleWaiting.length > 0) {
    leaveQueueWithoutParcel();
}

function giveParcel() {
    const humanName = peopleWaiting.shift();
    alert(
      `${humanName} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`
    );
}

function leaveQueueWithoutParcel() {
    const humanName = peopleWaiting.pop();
    alert(`${humanName} не получил(а) посылку и ушел(ла) из очереди`);
}