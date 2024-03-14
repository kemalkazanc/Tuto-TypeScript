/*

const compteur = document.querySelector("#compteur");
let i = 0;

const increment = (e) => {
  i++;

  compteur.querySelector("span").innerText = i.toString();
};

compteur.addEventListener("click", increment);
*/
// Exercice 2 : Afficher

const a: string = "Hello World";
const n: number = 3;
const b: boolean = true;
const d: null = null;
const arr: string[] = ["aze", "aze", "3"];
const user: { firstName: string; lastName: string } = {
  firstName: "John",
  lastName: "Doe",
};
const date: Date = new Date();
const cb: Function = (e: MouseEvent) => {};

function printId(id: number): void {
  console.log(id.toString());
}
