"use strict";

const skills = {
  isSort: false,
  data: [
    {
                skillName: "html",
                skillLevel: 60,
                skillImage: "html.svg",
            },
            {
                skillName: "css",
                skillLevel: 50,
                skillImage: "css.svg",
            },
            {
                skillName: "python",
                skillLevel: 60,
                skillImage: "python.svg",
            },
            {
                skillName: "cpp",
                skillLevel: 40,
                skillImage: "c++.svg",
            },
            {
                skillName: "c#",
                skillLevel: 50,
                skillImage: "csharp.svg",
            },
            {
                skillName: "photoshop",
                skillLevel: 30,
                skillImage: "photoshop.svg",
            },
  ],
  generateList: function (parentElement) {
    parentElement.innerHTML = "";
    this.data.forEach((item) => {
      const dt = document.createElement("dt");
      const dd = document.createElement("dd");
      const div = document.createElement("div");
      dt.classList.add("skill-item");
      dd.classList.add("skill-level");
      dt.textContent = item.skillName;
      div.textContent = item.skillLevel + "%";
      dt.style.backgroundImage = "url(./image/skills/" + item.skillImage;
      div.style.width = item.skillLevel + "%";
      dd.append(div);
      parentElement.append(dt, dd);
    });
  },

  sortList: function(type){
    switch (type) {
      case "name":
        console.log("сортировка по имени");
        sortByName(this.data);
        break;

      case "level":
        console.log("сортировка по уровню");
        sortByLevel(this.data);
        break;

      default:
        console.log("неизвестная кнопка");
    }
  }
};

const skillSort = document.querySelector("div.sort");


skillSort.addEventListener("click", (e) => {
  let target = e.target;
  if (target.nodeName == "BUTTON") {
    switch (target.dataset.type){
      case 'name':
        sortByName();
        break;
      case 'level':
        sortByLevel();
        break;
      default:
        console.log('неизвестная кнопка')
    }
    // console.log(e.target);
  }
});

function sortByName() {

  if (skills.isSort !== "name") {
    skills.data.sort(getComparer("skillName"));
    skills.isSort = "name";

    console.log("отсортировали данные по имени");
  } else {
    skills.data.reverse();

    console.log("инвертировали порядок сортировки");
  }

  skills.generateList(skillList);
};

function sortByLevel() {

  if (skills.isSort !== "level") {
    skills.data.sort(getComparer("skillLevel"));
    skills.isSort = "level";

    console.log("отсортировали данные по уровню");
  } else {
    skills.data.reverse();

    console.log("инвертировали порядок сортировки");
  }

  skills.generateList(skillList);
};

function getComparer(prop) {
  return function (a, b) {

    if(a[prop] < b[prop]) {
      return -1;
    }

    if (a[prop] > b[prop]) {
      return 1;
    }

    return 0;
  }
}
 

const skillList = document.querySelector("dl.skill-list");

skills.generateList(skillList);

const mainNav = document.querySelector("nav.main-nav")
const navBtn = document.querySelector(".nav-btn")

navBtn.addEventListener("click", (e) => {
  if(e.target.classList.contains("nav-btn_open")){
    menu.open();
  }
  else {
    menu.close();
  }
});

function closeMenu() {
  mainNav.classList.add("main-nav_closed");
  navBtn.classList.remove("nav-btn_close");
  navBtn.classList.add("nav-btn_open");
  navBtn.innerHTML = '<span class="visually-hidden">Открыть меню</span>';
}

function openMenu() {
  mainNav.classList.remove("main-nav_closed");
  navBtn.classList.remove("nav-btn_open");
  navBtn.classList.add("nav-btn_close");
  navBtn.innerHTML = '<span class="visually-hidden">Закрыть меню</span>';
}

const menu = {
  close: function () {
    mainNav.classList.add("main-nav_closed");
    navBtn.classList.remove("nav-btn_close");
    navBtn.classList.add("nav-btn_open");
    navBtn.innerHTML = '<span class="visually-hidden">Открыть меню</span>';
  },

  open: function () {
    mainNav.classList.remove("main-nav_closed");
    navBtn.classList.remove("nav-btn_open");
    navBtn.classList.add("nav-btn_close");
    navBtn.innerHTML = '<span class="visually-hidden">Закрыть меню</span>';
  },
};

menu.close();

const switchCheckbox = document.querySelector(".switch-checkbox");

function switchTheme() {
  if (switchCheckbox.checked) {
    document.body.classList.remove("dark-theme");
    localStorage.setItem("theme", true);
  } else {
    document.body.classList.add("dark-theme");
    localStorage.setItem("theme", false);
  }
}

switchCheckbox.addEventListener("change", (e) => {
  switchTheme();
});

function startTheme() {
  if (localStorage.getItem("theme") == "true") {
    document.body.classList.remove("dark-theme");
    switchCheckbox.checked = true;
    console.log("test1");
  }
  if (localStorage.getItem("theme") == "false") {
    document.body.classList.add("dark-theme");
    switchCheckbox.checked = false;
    console.log(localStorage.getItem("theme"));
  }
}

startTheme();