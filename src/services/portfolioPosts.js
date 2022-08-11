/**
 ** Example link
 * <a href='url' target='_blank' rel='noopener noreferrer'> text </a>
 ** Example span
 * <span> text </span>
 * ------------------------------------------------------------------
 ** Properties
 * id, title, date, editDate, author, img, header, body
 ** contentTypes
 * subtitle, paragraph, image, note
 */

const posts = [
  {
    id: "template-simple",
    title: "Template 1 - Simple",
    date: "August 10, 2022",
    editDate: "",
    author: "Reli",
    img: "/PortfolioImages/template-simple/miniature.png",
    header: "/PortfolioImages/template-simple/header.png",
    body: [
      {
        contentType: "paragraph",
        content:
          "This project is a template I make today, just to star putting more stuff here on my portfolio showing what kind of stuff I do in a normal day of work. It takes me 8 hours from start to get it online, and there are some resaltable parts of it.",
      },
      {
        contentType: "paragraph",
        content:
          "but first, if you want to check a live version, you can go to a live version <a href='https://template-simple.relisalazar.com/' target='_blank' rel='noopener noreferrer'>here</a>, and you can go to the <a href='https://github.com/ReliSalazar/template-simple' target='_blank' rel='noopener noreferrer'>Github Repository</a> if you want to check the code.",
      },
      {
        contentType: "image",
        content: "/PortfolioImages/template-simple/header.png",
      },
      {
        contentType: "paragraph",
        content:
          "The first thing I want to show is the navbar. It is just a normal navbar, but I did the logic to get some breakpoints and a nice burger button on small screens with a cute animation. It also has an effect that I love, a small bar that appears on hover on links. I made that from scratch too.",
      },
      {
        contentType: "image",
        content: "/PortfolioImages/template-simple/burger.png",
      },
      {
        contentType: "paragraph",
        content:
          "I wanted to start using carrousels on my websites, so I create this one with some offers. You can put images, links and all that stuff there if you want.",
      },
      {
        contentType: "image",
        content: "/PortfolioImages/template-simple/offers.png",
      },
      {
        contentType: "paragraph",
        content:
          "And the most funny to do is the gallery with some modals. This is very similar to the art gallery on this website, but here is made it with React and it reorders everything based on images width and height, this one is made with Vue and it doesn't reorder anything, just change the flex-basis property and adapts rows for different sizes.",
      },
      {
        contentType: "image",
        content: "/PortfolioImages/template-simple/gallery.png",
      },
      {
        contentType: "paragraph",
        content:
          "This project could not seem too impresive by itself, but I'm actually really pround of the fact that I made something like this just in 8 hours of work. Just give me an API and it could be connected to a backend easily. Just need to set an store and change all the jsons that I set on the data() function on components and that's it. Just dispatch to de store on mounthed and from there use a service function to make an axios call.",
      },
      {
        contentType: "note",
        content:
          "You can probably made those changes in 1 or 2 hours actually.",
      },
      {
        contentType: "paragraph",
        content:
          "And as I've said before, this is just a template to start putting more stuff on my portfolio. I'll probably start posting more templates here. If you want to contact to me to use the code or talk with me, you have everything you need at the footer of this page! bye, bye. <3",
      },
    ],
  },
  {
    id: "this-website",
    title: "This website",
    date: "April 3, 2022",
    editDate: "",
    author: "Reli",
    img: "/PortfolioImages/this-website/miniature.png",
    header: "/PortfolioImages/this-website/header.png",
    body: [
      {
        contentType: "paragraph",
        content:
          "This portfolio itself is one of my biggest projects actually. I has a lot of concepts on it and with more time, I pretend to still updating all the stuff on the code.\nThis is my third version of my portfolio, at the first time, it was something really simple made with pure HTML, CSS and JS if I remember well. Then I update it some months later to the last version.",
      },
      {
        contentType: "image",
        content: "/PortfolioImages/this-website/old portfolio.png",
      },
      {
        contentType: "paragraph",
        content:
          "This old portfolio was made using Vue2 and Bootstrap, and has a lot of the contents that are actually here, but for my new version I think to make it better. Make a similar jump like the last one, new technology, more sophisticated, etc.",
      },
      {
        contentType: "note",
        content: "The Vue one was really a bit... weird, but I still like it.",
      },
      {
        contentType: "image",
        content: "/PortfolioImages/this-website/header.png",
      },
      {
        contentType: "paragraph",
        content:
          "So, for the new one, I think of my favorite library, React and my new CSS library, Tailwind. I also wanted to apply my new personal style of my projects to this new portfolio, so I started the project with all the configuration part and on my social media I've been posting my progress, and also deploying those versions on my <a href='https://demo.relisalazar.com/' target='_blank' rel='noopener noreferrer'>demo site</a>. I also wanted to start using some new toys, like the last version of React, (v18) and Jest for some unit testing. Also, I've prepared services that simulates API calls so I could replace ALL the content with a CRUD and an API with a database later, so, make posts will be easier.",
      },
      {
        contentType: "note",
        content:
          "And actually is really easy tho, everything is on different json files.",
      },
      {
        contentType: "paragraph",
        content:
          "There are a lot of parts of this project that I'm proud of, for example, how this page reads all the contents and depending of it's contentType property, it renders every section on a different way, I think that was very clean. Also, there is the art section, with all those images and it's arrangement and the moday that blurs the rest of the view. Take a look for all the page! and if you want to, you also can take a look at the code, because I made it public and you can found it at this <a href='https://github.com/ReliSalazar/portfolio-react' target='_blank' rel='noopener noreferrer'>github repository</a>!",
      },
    ],
  },
  {
    id: "flask-todoer",
    title: "Flask todoer",
    date: "April 3, 2022",
    editDate: "",
    author: "Reli",
    img: "/PortfolioImages/flask-todoer/miniature.webp",
    header: "",
    body: [
      {
        contentType: "paragraph",
        content:
          "This was my first project working with Flask and MySQL and I think this is going well, it was a really interesting experience.\nI choise a todo-list because is the most common project to test stuff, and definitively I learnet a lot about MySQL with this, and my previous experience with MongoDB and ReactJS, maked this project really commfy to code, I did it in something like 10 hours in a row, and, I'm fine with the final result.",
      },
      {
        contentType: "paragraph",
        content:
          "I will make a lot of future changes to this, the CSS is the thing where I dedicated less time in this project, so, it's really bad right now, also, I think the connection to the database can be more secure, but that isn't a real big problem right now, because I don't plan to put it in a public server or something like that, It's just a test and for personal use.",
      },
      {
        contentType: "image",
        content: "/PortfolioImages/flask-todoer/header.webp",
      },
      {
        contentType: "paragraph",
        content:
          "If you want, you can take a look at the code if yo go to this <a href='https://github.com/ReliSalazar/flask-todoer' target='_blank' rel='noopener noreferrer'>github repository</a>.",
      },
    ],
  },
  {
    id: "tui-email-client",
    title: "TUI email client",
    date: "April 3, 2022",
    editDate: "",
    author: "Reli",
    img: "/PortfolioImages/tui-email-client/miniature.webp",
    header: "/PortfolioImages/tui-email-client/header.webp",
    body: [
      {
        contentType: "paragraph",
        content:
          "This is a small project for my Python course on youtube. It can receive emails, and the idea is that in the future it can send them too.\nI was preparing future projects for the Python programming course that I do on youtube. The idea was to work with libraries to send emails to understand the three most popular protocols for this task, and little by little, one thing led to another.",
      },
      {
        contentType: "paragraph",
        content:
          "I ended up creating a couple of scripts, one to send emails with an image attached and one to receive unread email information from a given account. Then I decide to create a TUI, a Textual User Interface using npyscreen with some of its widgets, showing how to make modifications to them, obtain user input from them and process that information to show an output as well as alerts, etc.",
      },
      {
        contentType: "image",
        content: "/PortfolioImages/tui-email-client/header.webp",
      },
      {
        contentType: "paragraph",
        content:
          "If you want, you can take a look at it, you can go to the <a href='https://github.com/ReliSalazar/TUI-Email-Client' target='_blank' rel='noopener noreferrer'>github repository</a>.",
      },
    ],
  },
  {
    id: "my-art",
    title: "My art",
    date: "April 3, 2022",
    editDate: "",
    author: "Reli",
    img: "/PortfolioImages/my-art/miniature.webp",
    header: "/PortfolioImages/my-art/header.png",
    body: [
      {
        contentType: "paragraph",
        content:
          "I really, really love to draw, is one of my favorite things to do. The problem with drawing is that it can be expensive and slow, but since I made an investment to be able to draw directly in digital with a tablet, my productivity has incresed a lot.",
      },
      {
        contentType: "paragraph",
        content:
          "Whenever I have spent too much time studying computer science and I am not especially inspired to write music, I draw. It's a fairly comfortable exercise, as well as being a very good tool to be able to explain things, as well as to be able to make plans for the interfaces quickly and comfortably.",
      },
      {
        contentType: "image",
        content: "/PortfolioImages/my-art/header.png",
      },
      {
        contentType: "paragraph",
        content:
          "You can see my at this website at the <a href='https://www.relisalazar.com/art'>art section</a>.",
      },
    ],
  },
  {
    id: "pomodoro-clock",
    title: "Pomodoro clock",
    date: "April 3, 2022",
    editDate: "",
    author: "Reli",
    img: "/PortfolioImages/pomodoro-clock/miniature.png",
    header: "/PortfolioImages/pomodoro-clock/header.png",
    body: [
      {
        contentType: "paragraph",
        content:
          "This is one of the pojects I did for the freecodecamp fron end certification.\nI really like this project, I use it practically daily to be able to take breaks while I work, since I usually lose track of time completely, so this project helps me not to be in front of the computer all the time and to be able to rest my eyes.",
      },
      {
        contentType: "image",
        content: "/PortfolioImages/pomodoro-clock/miniature.png",
      },
      {
        contentType: "paragraph",
        content:
          "Althouf surely a better use would be for physical activity, in any case, you can choose the time you want for each sesion and rest.\nI was very happy when someone tellsme that, they used my pomodoro clock for their study sessions on a discord server, and then ask me if I could put buttons with pressets for their times, and surely I did it!",
      },
      {
        contentType: "paragraph",
        content:
          "If you want, you can take a look at the code in the <a href='https://github.com/ReliSalazar/pomodoro-clock' target='_blank' rel='noopener noreferrer'>github repository</a> or you can use it by clicking in the <a href='https://relisalazar.github.io/pomodoro-clock/' target='_blank' rel='noopener noreferrer'>github pages link</a>.",
      },
    ],
  },
  {
    id: "drum-machine",
    title: "Drum machine",
    date: "April 3, 2022",
    editDate: "",
    author: "Reli",
    img: "/PortfolioImages/drum-machine/miniature.webp",
    header: "/PortfolioImages/drum-machine/header.webp",
    body: [
      {
        contentType: "paragraph",
        content:
          "This is one of the pojects I did for the freecodecamp fron end certification.\nYes, another project related to music. For this project I used ReactJS and actually was really fun the process of code it. I have nothing really special to say about this project, except that it was the first time that I made interactions with the keyboard, and I was beginning to test the aesthetics that now most of my personal projects has.",
      },
      {
        contentType: "image",
        content: "/PortfolioImages/drum-machine/header.webp",
      },
      {
        contentType: "paragraph",
        content:
          "If you want, you can take a look at the code in <a href='https://codepen.io/Reli_/full/OJMEajr' target='_blank' rel='noopener noreferrer'>codepen</a>.",
      },
    ],
  },
  {
    id: "markdown-previewer",
    title: "Markdown previewer",
    date: "April 3, 2022",
    editDate: "",
    author: "Reli",
    img: "/PortfolioImages/markdown-previewer/miniature.webp",
    header: "/PortfolioImages/markdown-previewer/header.webp",
    body: [
      {
        contentType: "paragraph",
        content:
          "This is one of the pojects I did for the freecodecamp fron end certification.\nThis is one of my favorite projects, although I admit it's a bit ugly, that doesn't make it any less fun to use!\nFor this project I used ReactJs and marked for the markdown stuff. I was learned how to use markdown with this project too!",
      },
      {
        contentType: "image",
        content: "/PortfolioImages/markdown-previewer/header.webp",
      },
      {
        contentType: "paragraph",
        content:
          "If you want, you can take a look at the code in <a href='https://codepen.io/Reli_/full/QWyxvaZ' target='_blank' rel='noopener noreferrer'>codepen</a>.",
      },
    ],
  },
  {
    id: "random-quote-machine",
    title: "Random quote machine",
    date: "April 3, 2022",
    editDate: "",
    author: "Reli",
    img: "/PortfolioImages/random-quote-machine/miniature.webp",
    header: "/PortfolioImages/random-quote-machine/header.webp",
    body: [
      {
        contentType: "paragraph",
        content:
          "This is one of the pojects I did for the freecodecamp fron end certification.\nThis is a simple as it sounds, a random quote generator, not much more. I use an objects array to get the quote and the author. Something to note is that it was the first time I used bootstrap, it was a very good experience!",
      },
      {
        contentType: "paragraph",
        content:
          "If you want, you can take a look at the code in <a href='https://codepen.io/Reli_/full/QWyrRBY' target='_blank' rel='noopener noreferrer'>codepen</a>.",
      },
    ],
  },
  {
    id: "milkytracker-documentation",
    title: "Milkytracker documentation",
    date: "April 3, 2022",
    editDate: "",
    author: "Reli",
    img: "/PortfolioImages/milkytracker-documentation/header.webp",
    header: "/PortfolioImages/milkytracker-documentation/header.webp",
    body: [
      {
        contentType: "paragraph",
        content:
          "This is one of the projects I did for the freecodecamp responsive web design certification.",
      },
      {
        contentType: "image",
        content: "/PortfolioImages/milkytracker-documentation/header.webp",
      },
      {
        contentType: "paragraph",
        content:
          "I opted to make a page with the milkyTracker documentation since the official one seems somewhat ugly to me, although I never finished writing the entire documentation. One of these days I will, I promise!",
      },
      {
        contentType: "note",
        content:
          "MilkyTracker it's a really cool tool for chiptune music, if you want to make this kind of music, you should check it out!",
      },
      {
        contentType: "paragraph",
        content:
          "If you want, you can take a look at the code in <a href='https://codepen.io/Reli_/full/mdVJmqw' target='_blank' rel='noopener noreferrer'>codepen</a>.",
      },
    ],
  },
  {
    id: "lambda-lain",
    title: "My first code blog",
    date: "April 3, 2022",
    editDate: "",
    author: "Reli",
    img: "/PortfolioImages/lambda-lain/miniature.webp",
    header: "/PortfolioImages/lambda-lain/header.webp",
    body: [
      {
        contentType: "paragraph",
        content:
          'I\'m really really proud of this project. It was the first "real" website I ever made. I had hardly any knowledge, just loose things and I had seen from time to time and after a streak of 11 hours of continous work I was able to finish code it. It has many design issues that I discover after learning responsive and web development in general, but I want to leave it as is, as a reminder of where I started.',
      },
      {
        contentType: "note",
        content:
          "Actually, 11 hours of works is very normal for me, especially on my own projects, but in that time, that was very impresive for me",
      },
      {
        contentType: "image",
        content: "/PortfolioImages/lambda-lain/header.webp",
      },
      {
        contentType: "paragraph",
        content:
          "This page started with the idea of write a blog about what I learned and what I reflect about technology, as well as a series of programming couyrses that I planned from start to finish, although the format quickly fell short and I decided to move this idea to my youtube channel that you can also find in the portfolio or the footer.",
      },
      {
        contentType: "paragraph",
        content:
          "If you want, you can take a look at the code in the <a href='https://github.com/ReliSalazar/Lambda_Lain' target='_blank' rel='noopener noreferrer'>github repository</a> or you can visit the page itself in the <a href='https://relisalazar.github.io/Lambda_Lain/' target='_blank' rel='noopener noreferrer'>github pages link</a>.",
      },
    ],
  },
  {
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
  },
];

async function getAll() {
  return await posts;
}

async function getPost(id) {
  return await posts.filter((post) => post.id === id)[0];
}

const portfolioService = { getAll, getPost };
export default portfolioService;

/*
* Later we will need to do something like this

import axios from "axios";
const baseUrl = "http://localhost:3001/api/portfolioPosts";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};

const deletePost = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

const portfolioService = { getAll, create, update, deletePost };
export default portfolioService;
*/
