// sec / min / hour / day
const convertMsToDays = (totalMS) =>
    Math.round(totalMS / 1000 / 60 / 60 / 24);

function getDaysBeforeBirthday(nextBirthdayDate) {

  const msToNextBirthday = nextBirthdayDate.getTime() - new Date().getTime();
  return convertMsToDays(msToNextBirthday);
}

console.log(
  `До дня рождения осталось ${getDaysBeforeBirthday(new Date(2022, 4, 9))} дней`
);
