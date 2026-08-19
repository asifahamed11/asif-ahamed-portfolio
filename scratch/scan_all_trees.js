const https = require('https');
const fs = require('fs');

const repos = [
  "Portfolio-Universe",
  "auto-wallpaper-changer",
  "pop-cat-recycle-bin",
  "hardinge-glofas-high-flow-forecasting",
  "group-aware-somatic-variant-classification",
  "VariFuse",
  "VU_FYDP",
  "MediLinx",
  "asif-ahamed-portfolio",
  "skin-lesion-classifier",
  "nova-monitor",
  "One-Click-GLUT",
  "MiniSocialMedia",
  "amazon-ecommerce-db-schema",
  "DocRater",
  "Task-Scheduler",
  "Java-Swing-Calculator"
];

function fetchJson(url) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'NodeJS' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          resolve(null);
        }
      });
    }).on('error', () => resolve(null));
  });
}

async function scanTree(repo) {
  const treeUrl = `https://api.github.com/repos/asifahamed11/${repo}/git/trees/main?recursive=1`;
  let tree = await fetchJson(treeUrl);
  if (!tree || !tree.tree) {
    const masterTree = `https://api.github.com/repos/asifahamed11/${repo}/git/trees/master?recursive=1`;
    tree = await fetchJson(masterTree);
  }
  if (!tree || !tree.tree) return [];
  return tree.tree
    .filter(f => f.type === 'blob' && f.path.match(/\.(png|jpg|jpeg|gif|webp|ico|svg)$/i))
    .map(f => f.path);
}

async function run() {
  const allImages = {};
  for (const r of repos) {
    const images = await scanTree(r);
    allImages[r] = images;
    console.log(`${r}: ${images.length} images ->`, images.slice(0, 5));
  }
  fs.writeFileSync('C:/Users/Admin/.gemini/antigravity-ide/brain/e8e17a44-80e8-4f6d-860d-c26a2946c35a/scratch/all_repo_images.json', JSON.stringify(allImages, null, 2));
}

run();
