const daysToMs = (days) => days * 24 * 60 * 60 * 1000;

const addDays = (date, days = 1) => {
  return new Date(date.getTime() + daysToMs(days));
};

const date = new Date();
console.log("today", date);

let daysAdd = 10;
for (let i = 0; i < 5; i++) {    
    const addedDate = addDays(date, daysAdd);
    console.log(`today + ${daysAdd}`, addedDate);
    daysAdd++;    
}
