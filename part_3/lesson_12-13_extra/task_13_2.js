class CarService {
  static DefaultWorkingHours = {
    from: "9:00",
    till: "20:00",
  };

  constructor(name, workingHours) {
    this.name = name;
    this.workingHours = workingHours || CarService.DefaultWorkingHours;
  }
  repairCar(carName) {
    if (!carName) {
      alert("Введите название машины!");
      return;
    }

    const nowHour = new Date().getHours();
    const workFromHour = Number(this.workingHours.from.split(":")[0]);
    const workTillHour = Number(this.workingHours.till.split(":")[0]);

    if (nowHour >= workFromHour && nowHour < workTillHour) {
      alert(
        `Сейчас отремонтируем вашу машину ${carName}! Ожидайте, пожалуйста.`
      );
    } else {
      alert("К сожалению, мы сейчас закрыты. Приходите завтра.");
    }
  }
}

const carService = new CarService("RepairCarNow", {
  from: "8:00",
  till: "20:00",
});

carService.repairCar("BMW");