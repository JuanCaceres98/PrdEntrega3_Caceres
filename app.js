const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");

const productos = [
    {
        id: 1,
        nombre: "Harina",
        precio: 50
    },    {
        id: 1,
        nombre: "Lenteja",
        precio: 50
    },    {
        id: 1,
        nombre: "Atun",
        precio: 50
    },    {
        id: 1,
        nombre: "Pollo",
        precio: 50
    },    {
        id: 1,
        nombre: "Vino",
        precio: 50
    },    {
        id: 1,
        nombre: "Pan",
        precio: 50
    },    {
        id: 1,
        nombre: "Leche",
        precio: 50
    },    {
        id: 1,
        nombre: "Lechuga",
        precio: 50
    },
]

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((product)=>{
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <h3>${product.nombre}</h3>
    <p>${product.precio}</p>
    `;

    shopContent.append(content);


    let comprar = document.createElement("button");
    comprar.innerText = "comprar"
    comprar.className = "comprar"

    content.append(comprar)

    comprar.addEventListener("click", () => {
        const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
        
        if (repeat) {
            carrito.map((prod) => {
                if(prod.id === product.id) {
                    prod.cantidad++;
                }
            });
        } else {
            carrito.push({
            id : product.id,
            nombre: product.nombre,
            precio: product.precio,
        });
            console.log(carrito);
            console.log(carrito.length);
            saveLocal();
        }
    });
});

verCarrito.addEventListener("click", () => {
    const modalHeader =  document.createElement("div")
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito.</h1>
    `;
    modalContainer.append(modalHeader);

    const modalButton = document.createElement("h1");
    modalButton.innerText = "x";
    modalButton.className = "modal-header-button";

    modalHeader.append(modalButton);


    carrito.forEach((product) => {
        let carritoContent = document.createElement("div");
        carrito.className = "modal-content";
        carrito.innerHTML = `
        <h3>${product.nombre}</h3>
        <p>${product.precio}</p>
        `;

        modalContainer.append(carritoContent)
    })
    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    const totalBuying = document.createElement("div")
    totalBuying.className = "total-content";
    totalBuying.innerHTML = `total a pagar: ${total} $`
    modalContainer.append(totalBuying)
});
//set Item
const saveLocal = () => {
localStorage.setItem("carrito",JSON.stringify(carrito));
}

//Get Item

JSON.parse(localStorage.getItem("carrito"))