const peopleWithVisa = [
  {
    firstName: "Stasia",
    lastName: "Ward",
    criminalRecord: true,
    passportExpiration: "19.06.2023",
  },
  {
    firstName: "Elliot",
    lastName: "Baker",
    criminalRecord: false,
    passportExpiration: "04.06.2021",
  },
  {
    firstName: "Leighann",
    lastName: "Scott",
    criminalRecord: true,
    passportExpiration: "31.07.2022",
  },
  {
    firstName: "Nick",
    lastName: "Pop",
    criminalRecord: false,
    passportExpiration: "31.12.2021",
  },
];

const result = allowVisa(peopleWithVisa);
console.log("result", result);

function allowVisa(clients = []) {
  return clients.filter((client) => {
    const { criminalRecord, passportExpiration } = client;
    if (criminalRecord) {
      return false;
    }
    // const passportDate = Date.parse(passportExpiration); не правильно
    // console.log(passportDate);
    const dateItems = passportExpiration.split(".");
    const day = dateItems[0];
    const month = dateItems[1];
    const year = dateItems[2];
    const passportDate = new Date(year, month - 1, day);
    console.log(passportDate);
    return passportDate.getTime() > Date.now();
  });
}