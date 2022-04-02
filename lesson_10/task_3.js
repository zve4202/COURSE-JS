const student = {
  name: "Maxim",
  programmingLanguage: "JavaScript",
};

console.log("result add", handleObject(student, "age", "add"));
console.log("result get", handleObject(student, "programmingLanguage", "get"));
console.log("result delete", handleObject(student, "programmingLanguage", "delete"));

function handleObject(obj, key, action) {
  switch (action) {
    case "get":
      return obj[key];
    case "add":
      obj[key] = "";
      return obj;
    case "delete":
      delete obj[key];
      return obj;
    default:
      return obj;
  }
}