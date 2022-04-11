//stampa in terminale con "npm start" dopo aver inserito "start": "node index.js" tra gli script del tuo package.json
// console.log("800a");
const fs = require("fs").promises;

async function Readfile(file) {
    const data = await fs.readFile(file);
    createList(data.toString().trim().split(";"));

}


async function WriteFile(path, content) {
    await fs.writeFile(path, content, { flag: 'a+'})
}

async function WriteandRead(path, content) {
    WriteFile(path, content);
    Readfile(path)
}
const arguments = process.argv.slice(2);
const obJ = {prodotto: arguments[0], quantita: arguments[1]}
const arg = [`prodotto: ${arguments[0]}` , `quantita: ${arguments[1]}` ];

WriteandRead("spesa.txt", `${JSON.stringify(obJ)};`);

/* STAMPA IN HTML */
// const ul = document.querySelector('ul');

// async function Stamp(prodotto, quantita) {
//     ul.innerHTML= `<li>${prodotto} ${quantita}</li>`
// };

// Stamp("ciccio" , 2);
// const ul = document.querySelector('ul');

// function createList(listaSpesa) {
//     listaSpesa.map((element) => {
//         ul.innerHTML = `<li>${element}</li>`
//     })
// }
//CIAOOOOOOO 800A!!