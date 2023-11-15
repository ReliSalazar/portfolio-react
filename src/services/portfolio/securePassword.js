export const securePassword = {
  id: "secure-password-validator-and-generator",
  title: "Secure password validator and generator",
  date: "April 3, 2022",
  editDate: "",
  author: "Reli",
  img: "/PortfolioImages/secure-password-validator-and-generator/miniature.webp",
  header: "",
  body: [
    {
      contentType: "paragraph",
      content:
        "This is just a curiosity that I did one day when I was bored, I was learning about regular expressions and I wanted to test if I was able to create a program that validates how secure a password is following a couple of conditions.",
    },
    {
      contentType: "image",
      content:
        "/PortfolioImages/secure-password-validator-and-generator/header.webp",
    },
    {
      contentType: "paragraph",
      content:
        "The regex I used is the next: <span>/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.\\s]).{12,}$/</span>",
    },
    {
      contentType: "paragraph",
      content:
        "It basically summarizes in at least 1 upper, 1 lower, 1 number, 1 symbol and a min length of 12 and I just use vanilla HTML, CSS and JS to this project.",
    },
    {
      contentType: "paragraph",
      content:
        "If you want, you can take a look at the code in the <a href='https://github.com/ReliSalazar/secure-password-validator-and-generator' target='_blank' rel='noopener noreferrer'>github repository</a> or you can use the theremin itself in the <a href='https://relisalazar.github.io/secure-password-validator-and-generator/' target='_blank' rel='noopener noreferrer'>github pages link</a>.",
    },
  ],
};
