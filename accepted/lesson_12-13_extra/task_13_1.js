class Dictionary {
  #name;
  #words;
  constructor(name) {
    this.#name = name;
    this.#words = {};
  }

  get allWords() {
    return this.#words;
  }

  get mainName() {
    return this.#name;
  }

  set setMainName(name) {
    this.#name = name;
  }
  
  addNewWord(wordKey, wordObj) {
    this.allWords[wordKey] = wordObj;
  }

  add(word, description) {
    if (!this.allWords[word]) {
      const newWord = {
        word,
        description,
      };
      this.addNewWord(word, newWord);
    }
  }

  remove(word) {
    delete this.allWords[word];
  }

  get(word) {
    return this.allWords[word];
  }

  showAllWords() {
    Object.values(this.allWords).forEach((wordItem) => {
      console.log(`${wordItem.word} - ${wordItem.description}`);
    });
  }
}

class HardWordsDictionary extends Dictionary {
  constructor(name) {
    super(name);
  }

  // override
  add(word, description) {
    if (!this.allWords[word]) {
      // const newWord = {
      //   word,
      //   description,
      //   isDifficult: true,
      // };
      // this.addNewWord(word, newWord);
      // или так - упростить
      this.addNewWord(word, {
        word,
        description,
        isDifficult: true,
      });
    }
  }
}

const hardWordsDictionary = new HardWordsDictionary('Сложные слова');
    
hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');
    
hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');
    
hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');
    
hardWordsDictionary.remove('неологизм');
    
hardWordsDictionary.showAllWords();
    
console.log(hardWordsDictionary.mainName); // Сложные слова
hardWordsDictionary.setMainName = 'Новый Словарь';

console.log(hardWordsDictionary.mainName); // Новый Словарь
console.log(hardWordsDictionary.allWords); // выводит объект в котором есть слова 
// дилетант и квант