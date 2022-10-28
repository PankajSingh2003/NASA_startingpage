var limit = 1001;
space = document.getElementById("space");

stars = {
  rand: function () {
    return Math.random();
  },

  createStar: function () {
    let star = document.createElement("div");
    star.className = "star";

    return star;
  },

  create: function () {
    for (let i = 0; i <= limit; i++) {
      let star = this.createStar();
      star.style.top = `${this.rand() * 100}%`;
      star.style.left = `${this.rand() * 100}%`;
      star.style.animationDelay = `${this.rand() * 8}s`;
      space.appendChild(star);
    }
  }
};

stars.create();

function light_dark_mode() {
  const body = document.body;
  body.classList.toggle("light-mode");
  const moon = document.querySelector('.bg3')  
  moon.classList.toggle("moon_invert");
  if (document.getElementById("mode_button").innerHTML.trim() == "Light Mode") document.getElementById("mode_button").innerHTML = "Dark Mode";
  else document.getElementById("mode_button").innerHTML = "Light Mode";
}


