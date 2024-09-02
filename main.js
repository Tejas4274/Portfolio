var typed = new Typed(".text", {
  strings: [
    "Coder 👾",
    "Creative Full Stack Dev 🌐",
    "Artistic Frontend Dev 🎨",
    "Efficient Backend Dev 🔧",
  ],
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 1200,
  startDelay: 500,
  loop: true,
  showCursor: true,
  cursorChar: "|",
  smartBackspace: true,
  shuffle: true,
  onStringTyped: (arrayPos, self) => {
    // Glitch effect by rapidly toggling text visibility
    setTimeout(() => {
      self.el.style.visibility = "hidden";
      setTimeout(() => {
        self.el.style.visibility = "visible";
        setTimeout(() => {
          self.el.style.visibility = "hidden";
          setTimeout(() => {
            self.el.style.visibility = "visible";
          }, 100);
        }, 100);
      }, 100);
    }, 100);

    // Dynamic color gradient based on string index
    const gradients = [
      "linear-gradient(45deg, #ff6b6b, #f94c00)",
      "linear-gradient(45deg, #24c6dc, #514a9d)",
      "linear-gradient(45deg, #d4fc79, #96e6a1)",
      "linear-gradient(45deg, #ff758c, #ff7eb3)",
    ];
    self.el.style.background = gradients[arrayPos % gradients.length];
    self.el.style.webkitBackgroundClip = "text";
    self.el.style.webkitTextFillColor = "transparent";
  },
  preStringTyped: (arrayPos, self) => {
    // Adding a unique zoom-in effect at the start of each string
    self.el.style.transition = "transform 0.3s ease-out";
    self.el.style.transform = "scale(1.3)";
    setTimeout(() => {
      self.el.style.transform = "scale(1)";
    }, 300);
  },
});

function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "tk9356964702@gmail.com",
    Password: "password",
    To: "tejaskamble4274@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New Contatct Form",
    Body:
      "Name:  " +
      document.getElementById("name").value +
      "<br> Email: " +
      document.getElementById("email").value +
      "<br> Subject: " +
      document.getElementById("sub").value +
      "<br> Message: " +
      document.getElementById("message").value,
  }).then((message) => alert("Message Send Successfully"));
}
