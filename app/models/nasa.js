export default class nasa {
  constructor(data) {
    this.date = data.date
    this.img = data.url
  }
  getImageHTML() {
    return `
  <div class="col">
  <div class="card"
  <img class="card-img-top" src="${this.img}" />
   <h4 class= "card-date">${this.date}/h4>
   </div>
   </div>
    `
  }

}