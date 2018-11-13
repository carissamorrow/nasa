import nasaService from "./nasa-service.js";

let _nasaService = new nasaService()

function _draw(Apod) {

  let template = `<h3>${Apod.url}</h3>`
  document.getElementById('test-id').innerHTML = template;
}

export default class nasaController {
  constructor() {
    console.log('hello from n-controller')
    _nasaService.getApod(_draw)

  }

  getApod(date) {

  }
}
