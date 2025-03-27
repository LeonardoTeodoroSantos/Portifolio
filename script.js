const menuBtn = document.getElementById("menu_btn");
const navLinks = document.getElementById("nav_links");
const menuBTNicon = document.querySelector("i");

menuBTNicon.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

const isOpen = navLinks.classList.contains("open");
menuBTNicon.setAttribute("class", isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBTNicon.setAttribute("class", "fa-solid fa-bars");
});

document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove a classe active de todos os itens
            navItems.forEach(nav => nav.classList.remove('active'));
            // Adiciona a classe active ao item clicado
            this.classList.add('active');
        });
    });
});

const images = document.querySelectorAll('.projectImage');

images.forEach(function(image) {
  image.addEventListener('mouseover', function() {
    setTimeout(function() {
        image.src = image.getAttribute('data-hover');
    }, 500);
  });

  image.addEventListener('mouseout', function() {
    setTimeout(function() {
        image.src = image.src.replace('ToDoGIF.gif', 'ToDoUnchecked.png').replace('image4', 'image3').replace('image6', 'image5');
    }, 300);
  });
});