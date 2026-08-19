const https = require('https');
const fs = require('fs');
const path = require('path');

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
          resolve(data);
        }
      });
    }).on('error', () => resolve(null));
  });
}

function fetchRaw(url) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'NodeJS' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', () => resolve(''));
  });
}

async function run() {
  const results = {};
  for (const r of repos) {
    console.log(`Checking ${r}...`);
    const contents = await fetchJson(`https://api.github.com/repos/asifahamed11/${r}/contents`);
    const readme = await fetchRaw(`https://raw.githubusercontent.com/asifahamed11/${r}/main/README.md`) || await fetchRaw(`https://raw.githubusercontent.com/asifahamed11/${r}/master/README.md`);
    
    results[r] = {
      files: Array.isArray(contents) ? contents.map(f => ({ name: f.name, download_url: f.download_url, type: f.type, path: f.path })) : [],
      readmeSample: readme ? readme.slice(0, 1000) : ''
    };
  }
  fs.writeFileSync('C:/Users/Admin/.gemini/antigravity-ide/brain/e8e17a44-80e8-4f6d-860d-c26a2946c35a/scratch/repo_contents.json', JSON.stringify(results, null, 2));
  console.log('Done scanning repos');
}

run();
