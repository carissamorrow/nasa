import Nasa from "../models/nasa.js";

//@ts-ignore
let _nasaAPI = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/'
})
let _apiKey = '97LAlPaZ5cJhD2kmsw2Sw86LFZolCQaKYtdh4gWP'


export default class nasaService {
  constructor() {

  }

  addApod(formData, fnToRunOnSuccess) {

    if (!formData) {
      throw new Error("you must supply form data")
    }
    if (typeof fnToRunOnSuccess != 'function') {
      throw new Error("You must supply a success function")
    }
    _nasaAPI.post('', formData)
      .then(_res => {
        this.addApod(fnToRunOnSuccess)
      })
      .catch(err => console.log(err))
  }

  getApod(_draw, date) {
    let requestString = 'apod?api_key=' + _apiKey
    if (date) {
      requestString += "&date=" + date
    }
    _nasaAPI.get(requestString)

      .then(_res => {
        let picture = new Nasa(_res.data)
        _draw(picture)
      })
      .catch(error => {
        console.log(error)
      })
    return (
      `https://api.nasa.gov/planetary/apod?api_key=${_apiKey}&date=${date}`
    )
  }

}
