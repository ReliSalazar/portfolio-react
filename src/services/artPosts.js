const posts = [
  "050.png",
  "048.png",
  "047.png",
  "045.png",
  "043.png",
  "041.png",
  "038.png",
  "037.png",
  "036.png",
  "035.png",
  "033.png",
  "032.png",
  "031.png",
  "030.png",
  "029.png",
  "027.png",
  "026 lineart.png",
  "025.png",
  "024.png",
  "023.png",
  "020.png",
  "017.png",
  "016.png",
  "011.png",
  "009.png",
  "006.png",
  "004.png",
  "003.png",
  "001.png",
  "wea.png",
  "relijpeg.jpeg",
  "spike_color.png",
  "vare.png",
  "first_digital.png",
  "keith.png",
  "owowo.jpeg",
  "sitcker.png",
  "manitos.png",
  "gril_color.png",
  "laincita avatar.png",
  "laincitas.png",
  "rincita_bw.png",
  "new avatar.png",
  "chandelure.jpeg",
];

async function getAll() {
  return await posts;
}

async function getPost(id) {
  return await posts[id];
}

const artService = { getAll, getPost };
export default artService;
