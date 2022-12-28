import React from "react";// для начала нужно импортировать React
import { createRoot } from 'react-dom/client';//Импортировали библиотеку
//библиотека, которая позволяет работать с деревом элементов в браузере
// и монтирует в dom браузера наши react элементы
import 'bootstrap/dist/css/bootstrap.css'//импортировали стили из библиотеки bootstrap
import App from "./app";
const root = createRoot(document.querySelector('#root'))//задали корнейвой элемент

// const element = <h1>hello world</h1>//jsx эквевалентна React.createElement( "h1", null, "Hello world" )
//element - наш первый реакт элемент

// root.render(element)//отрендерили его внутрь рут
root.render(<App/>)// отрендерили компонент
