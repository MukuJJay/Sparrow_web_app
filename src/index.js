//scss
import main from './scss/main.scss';

//navActivator
import listActivator from "./app/listActivator";

//constants and varibales
const navPrimary = document.querySelectorAll(".nav--primary li");
const msgMenuList = document.querySelectorAll(".msg-menu ul li");

//functions
listActivator(navPrimary);
listActivator(msgMenuList);
