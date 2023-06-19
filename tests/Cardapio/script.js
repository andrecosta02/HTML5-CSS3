let ShoppingBag = document.getElementById('ShoppingBag')


const list = [{
        id: 1,
        product: "Lasanha",
        path: "imagens/lasanha.jpg",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        price: 2,

    },
    {
        id: 2,
        product: "Macarrão",
        path: "imagens/lasanha.jpg",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        price: 2,
    },
    {
        id: 3,
        product: "Lasanha",
        path: "imagens/lasanha.jpg",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        price: 2,
    },
    {
        id: 3,
        product: "Lasanha",
        path: "imagens/lasanha.jpg",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        price: 2,
    },
    {
        id: 4,
        product: "Lasanha",
        path: "imagens/lasanha.jpg",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        price: 2,
    },
    {
        id: 5,
        product: "Lasanha",
        path: "imagens/lasanha.jpg",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        price: 2,
    },
    
    /*{
        product: "",
        Emoji: "",
        price: 0,
        Quantity: 0,
        Unit: "",
    },*/
];


// ${list.product}:

//Mostra todos os Produtos, valores e cria os botões
const ShowProdutcNames = (users) => {
    users.forEach((list) => {

        ShoppingBag.innerHTML += (`

        <section class="card">
            <div class="divFoto">
                <img src="${list.path}" alt="" class="foto">
            </div>

            <div class="prato">
                <h2>${list.product} - R$ ${list.price}</h2>
                <p>${list.description}</p>
            </div>
        </section>

        `)

    });
}
ShowProdutcNames(list)









const changeThemeBtn = document.querySelector("#change-theme")

// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// Load light or dark mode
function loadTheme() {
  const darkMode = localStorage.getItem("dark");

  if (darkMode) {
    toggleDarkMode();
  }
}
loadTheme();

changeThemeBtn.addEventListener("change", function () {
  toggleDarkMode();

  // Save or remove dark mode from localStorage
  localStorage.removeItem("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark", 1);
  }
});

