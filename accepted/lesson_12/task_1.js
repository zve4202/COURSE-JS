const student = {
  stack: ["HTML"],
  level: 1,
  improveLevel() {
    this.level +=1;
    switch (this.level) {
      case 2:
        this.stack.push("CSS");
        console.log(this.stack);
        break;
      case 3:
        this.stack.push("JavaScript");
        console.log(this.stack);
        break;
      case 4:
        this.stack.push("React");
        console.log(this.stack);
        break;
      case 5:
        this.stack.push("NodeJS");
        console.log(this.stack);
        break;
      default:
        break;
    }
    if (this.level > 5) {
      alert("Студент выучил все технологии!");        
    }
    return this;
  },
};

student
    .improveLevel()
    .improveLevel()
    .improveLevel()
    .improveLevel()
    .improveLevel();

