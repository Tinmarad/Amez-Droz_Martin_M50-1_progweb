"user strict";
export class User {
  constructor(options) {
    this.titre = options.titre;
    this.prenom = options.prenom;
    this.nom = options.nom;
    this.ville = options.ville;
    this.pays = options.ville;
    this.age = options.age;
    this.email = options.email;
    this.photo = options.photo;
    this.present = options.present;
    this.element = this.generateElement();
  }
  generateElement() {
    const containerElement = document.createElement("div");
    const html = `
<div class="user" data-present="${this.present}">
    <img src="${this.photo}">
    <div class="user--info">
            <h1>${this.titre} ${this.prenom} ${this.nom}</h1>
            <p>${this.age} years old</p>
            <p>${this.ville}, ${this.pays}</p>
    </div>
    <a href="mailto:${this.email}">
            <span class="mail">✉️</span>
    </a>
</div>`;

    containerElement.insertAdjacentHTML("afterbegin", html);

    return containerElement;
  }
  render() {
    const mainElement = document.querySelector("main");
    mainElement.append(this.element);
  }
}

const mainElement = document.querySelector("main");
mainElement.addEventListener("click", function (element) {
  console.log(element.target);
  if (element.target.getAttribute("data-present") === "true") {
  } else {
    element.target.setAttribute("data-present", "true");
  }
});
