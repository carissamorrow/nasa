import NasaController from "./components/nasa-controller.js";

class App {
  constructor() {
    this.controllers = {
      nasaController: new NasaController()
    }
  }
}




// @ts-ignore
window.app = new App()