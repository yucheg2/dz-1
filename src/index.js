import React from "react";// для начала нужно импортировать React
import { createRoot } from 'react-dom/client';//Импортировали библиотеку
//библиотека, которая позволяет работать с деревом элементов в браузере
// и монтирует в dom браузера наши react элементы
import 'bootstrap/dist/css/bootstrap.css'//импортировали стили из библиотеки bootstrap
const root = createRoot(document.querySelector('#root'))//задали корнейвой элемент

const element = <h1>Hello world</h1>//jsx эквевалентна React.createElement( "h1", null, "Hello world" )

root.render(element)//отрендерили его внутрь рут

