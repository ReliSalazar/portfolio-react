import { ideaOrientedProgramming } from "./blog/ideaOrientedProgramming";
import { moreAboutMe } from "./blog/moreAboutMe";

const posts = [
  moreAboutMe,
  ideaOrientedProgramming
];

async function getAll() {
  return await posts;
}

async function getPost(id) {
  return await posts.filter((post) => post.id === id)[0];
}

const blogService = { getAll, getPost };
export default blogService;
