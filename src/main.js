import { Header } from "./js/header.js";
import { Menu } from "./js/menu.js";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/worker.js");
}

document.head
  .querySelectorAll("link[rel=preload]")
  .forEach((element) => element.setAttribute("rel", "stylesheet"));

document.body.append(Header(), Menu("a", "b", "c"), "MAIN CONTENT");
