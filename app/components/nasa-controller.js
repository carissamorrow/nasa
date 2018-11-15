import nasaService from "./nasa-service.js";

let _nasaService = new nasaService()

function _draw(apod) {
  let template = ''
  if (apod.type == 'image') {
    template = `<img src="${apod.img}"</img>`
  } else {
    template = `<iframe src="${apod.img}"></iframe>`
  }
  template += `<h4>${apod.date}</h4>`
  document.getElementById('test-id').innerHTML = template
}

export default class nasaController {
  constructor() {
    _nasaService.getApod(_draw)

  }
  getSpecificDate(event) {
    event.preventDefault()
    let date = event.target.date.value;
    _nasaService.getApod(_draw, date)
  }

}

