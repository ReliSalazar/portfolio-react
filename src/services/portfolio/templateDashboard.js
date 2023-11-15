export const templateDashboard = {
  id: "template-dashboard",
  title: "Template 2 - Dashboard",
  date: "September 1, 2022",
  editDate: "",
  author: "Reli",
  img: "/PortfolioImages/template-dashboard/miniature.png",
  header: "/PortfolioImages/template-dashboard/header.png",
  body: [
    {
      contentType: "paragraph",
      content:
        "This project is a small project I code some days ago, It took me 2 days of normal work. I had some problems on the process because the API I was suposed to use doesn't support <a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS' target='_blank' rel='noopener noreferrer'>CORS</a> until the time to finish over.",
    },
    {
      contentType: "paragraph",
      content:
        "but first, if you want to check a live version, you can go to a live version <a href='https://demo.relisalazar.com/' target='_blank' rel='noopener noreferrer'>here</a>, and you can go to the <a href='https://github.com/ReliSalazar/dashboard-challenge' target='_blank' rel='noopener noreferrer'>Github Repository</a> if you want to check the code.",
    },
    {
      contentType: "image",
      content: "/PortfolioImages/template-dashboard/header.png",
    },
    {
      contentType: "paragraph",
      content:
        "I've used basically just tailwind for the styles this time, but I used a bit of scss to do stuff like the smooth shadow on the cards. The project is more or less responsive. It was a challenge and I just work on this project two days, so, some complex systems to get the current <code>window.innerWidth</code> on real time and change classes etc are out of the scope, so, it just render the side panel width a default width based on the first load <code>window.innerWidth</code> value. But, the rest of components are actually responsive. The navbar, the widgets, etc.",
    },
    {
      contentType: "image",
      content: "/PortfolioImages/template-dashboard/responsive.png",
    },
    {
      contentType: "paragraph",
      content:
        "I also create a table component. This stuff always weird for me when it's time to make them responsive. This time I decided to just put an <code>overflow-x</code> on auto, with a cointainer to get some paddings and so on. I also do something different with the way I read the data and then rendering it on list evaluating the values to put those colors on the status value. That were fun to code tbh.",
    },
    {
      contentType: "image",
      content: "/PortfolioImages/template-dashboard/table.png",
    },
    {
      contentType: "paragraph",
      content:
        "I hope in the future I could finish this project, until then, you can use this code and use it you want to!",
    },
  ],
};
