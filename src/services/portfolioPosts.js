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

import { drumMachine } from "./portfolio/drumMachine";
import { flaskTodoer } from "./portfolio/flaskTodoer";
import { lambdaLain } from "./portfolio/lambdaLain";
import { markdownPreviewer } from "./portfolio/markdownPreviewer";
import { milkyTrackerDocumentation } from "./portfolio/milkyTrackerDocumentation";
import { pomodoroClock } from "./portfolio/pomodoroClock";
import { randomQuoteMachine } from "./portfolio/randomQuoteMachine";
import { securePassword } from "./portfolio/securePassword";
import { templateDashboard } from "./portfolio/templateDashboard";
import { templateSimple } from "./portfolio/templateSimple";
import { thisWebsite } from "./portfolio/thisWebsite";
import { tuiEmail } from "./portfolio/tuiEmail";

const posts = [
  templateDashboard,
  templateSimple,
  thisWebsite,
  flaskTodoer,
  tuiEmail,
  pomodoroClock,
  drumMachine,
  markdownPreviewer,
  randomQuoteMachine,
  milkyTrackerDocumentation,
  lambdaLain,
  securePassword,
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
