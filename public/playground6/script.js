document.addEventListener("DOMContentLoaded", () => {
    // Initialize the splash screen
    const themeToggle = document.querySelector(".theme-switch__checkbox");
    const root = document.documentElement;

    // Splash screen removal and logo entrance
    setTimeout(() => {
        document.querySelector(".splash").style.display = "none";
        document.body.classList.add("loaded");
    }, 1400);

    // Load saved theme from cookie
    const savedTheme = document.cookie
        .split("; ")
        .find((row) => row.startsWith("theme="))
        ?.split("=")[1];

    // Set the theme based on the saved cookie
    if (savedTheme) {
        root.setAttribute("data-theme", savedTheme);
        themeToggle.checked = savedTheme === "dark" ? false : true;
    }

    // Trigger to toggle the theme
    themeToggle.addEventListener("click", () => {
        const currentTheme = root.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        root.setAttribute("data-theme", newTheme);
        document.cookie = `theme=${newTheme}; path=/; max-age=31536000`;
    });
});

// Torna os links dinamicos
// Para adicionar/remover links, basta adicionar/remover do array abaixo
const links = [
    {
        id: "link-auto-avaliacao",
        plansul: "http://172.32.1.81/playground4/",
        caixa: "http://10.98.14.42/playground4/",
        titulo: "Auto Avaliação",
        urlImagem: "./imgs/Auto Avaliação.png",
    },
    {
        id: "link-cadastro-pessoal",
        plansul: "http://172.32.1.81/cp/",
        caixa: "http://10.98.14.42/cp/",
        titulo: "Cadastro Pessoal",
        urlImagem: "./imgs/Cadastro Pessoal.png",
    },
    {
        id: "link-callcheck",
        plansul: "http://172.32.1.81/playground2/",
        caixa: "http://10.98.14.42/playground2/",
        titulo: "CallCheck",
        urlImagem: "./imgs/CallCheck.png",
    },
    {
        id: "link-controle-de-pontos",
        plansul: "http://172.32.1.81/playground1/",
        caixa: "http://10.98.14.42/playground1/",
        titulo: "Controle de Pontos",
        urlImagem: "./imgs/Controle de Pontos.png",
    },
    {
        id: "link-skillup",
        plansul: null,
        caixa: "http://10.98.20.103:5000/",
        titulo: "Skill Up",
        urlImagem: "./imgs/Skill Up.png",
    },
];

document.addEventListener("DOMContentLoaded", () => {
    const isPlansul = window.location.href.includes("172.32.1.81") || window.location.href.includes("http://127.0.0.1:5500/");
    const isCaixa = window.location.href.includes("10.98.");

    const container = document.querySelector("main.row");

    // Ordena os links pelo título em ordem alfabética (case insensitive)
    const linksOrdenados = [...links].sort((a, b) =>
        a.titulo.localeCompare(b.titulo, "pt-BR", { sensitivity: "base" })
    );

    linksOrdenados.forEach((link) => {
        let href = null;

        if (isPlansul && link.plansul) {
            href = link.plansul;
        } else if (isCaixa && link.caixa) {
            href = link.caixa;
        }

        // Se não for para mostrar, nem cria o elemento
        if (!href) return;

        // Cria o elemento <a>
        const a = document.createElement("a");
        a.id = link.id;
        a.href = href;
        a.target = "_blank";
        a.className = "link-card";

        // Cria a overlay (título)
        const overlay = document.createElement("div");
        overlay.className = "overlay";
        overlay.textContent = link.titulo;

        // Cria a imagem
        const img = document.createElement("img");
        img.src = link.urlImagem;
        img.alt = link.titulo;

        // Monta o card
        a.appendChild(overlay);
        a.appendChild(img);
        container.appendChild(a);
    });
});
