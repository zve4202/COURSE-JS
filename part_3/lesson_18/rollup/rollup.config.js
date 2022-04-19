import styles from "rollup-plugin-styles"; // подключение стилей
import image from "rollup-plugin-img"; // работа с картинками
import { babel } from "@rollup/plugin-babel"; // поддержка старых браузеров
import serve from "rollup-plugin-serve"; // запуск на локальном сервере
import livereload from "rollup-plugin-livereload"; // обновление сервера без перезагрузки

export default {
  input: "./src/index.js",
  output: {
    file: "./build/bundle.js",
    format: "cjs",
  },
  plugins: [
    styles(), // подключение стилей
    image({ limit: 100000 }), // работа с картинками
    babel({ babelHelpers: "bundled" }), // поддержка старых браузеров
    serve({
      contentBase: "./",
      open: true,
      port: 8000,
    }), // запуск на локальном сервере
    livereload(), // обновление сервера без перезагрузки
  ],
};
