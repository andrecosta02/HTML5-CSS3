const list = [
    {
        id: 1,
        Product: "Banana",
        Price: 2,
        Quantity: 1,
        Unit: "Palmas",
        QttLower: "",
        QttSum: "",
    },
    {
        id: 2,
        Product: "Abacaxi",
        Price: 2.5,
        Quantity: 2,
        Unit: "Unidades",
        QttLower: "",
        QttSum: "",
    },
    {
        id: 3,
        Product: "Pera",
        Price: 5,
        Quantity: 3,
        Unit: "Quilos",
        QttLower: "",
        QttSum: "",
    },
    {
        id: 3,
        Product: "Laranja",
        Price: 3,
        Quantity: 3,
        Unit: "Quilos",
        QttLower: "",
        QttSum: "",
    },
    {
        id: 4,
        Product: "Uva",
        Price: 3,
        Quantity: 3,
        Unit: "Caixas",
        QttLower: "",
        QttSum: "",
    },
    {
        id: 5,
        Product: "Morango",
        Price: 10,
        Quantity: 1,
        Unit: "Bandejas",
    },
    
    /*{
        Product: "",
        Emoji: "",
        Price: 0,
        Quantity: 0,
        Unit: "",
    },*/
];




//Mostra todos os Produtos, valores e cria os botões
const ShowProdutcNames = (users) => {
    users.forEach((list) => {

        ShoppingBag.innerHTML += (`

        ${list.Product}:

        ${list.Quantity}
       
        <hr>

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

