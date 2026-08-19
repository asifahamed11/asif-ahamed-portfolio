const fs = require('fs');
const https = require('https');
const path = require('path');

const repoData = JSON.parse(fs.readFileSync('C:/Users/Admin/.gemini/antigravity-ide/brain/e8e17a44-80e8-4f6d-860d-c26a2946c35a/scratch/repo_contents.json', 'utf8'));

for (const [repo, data] of Object.entries(repoData)) {
  console.log(`=== ${repo} ===`);
  const imageFiles = data.files.filter(f => f.name.match(/\.(png|jpg|jpeg|gif|webp|ico|svg)$/i));
  if (imageFiles.length > 0) {
    console.log('  Direct images:', imageFiles.map(f => f.name));
  }
  // Check markdown for image links
  const mdImages = [...data.readmeSample.matchAll(/!\[.*?\]\((.*?)\)/g)].map(m => m[1]);
  const htmlImages = [...data.readmeSample.matchAll(/<img.*?src=["'](.*?)["']/g)].map(m => m[1]);
  const allMdImages = [...mdImages, ...htmlImages];
  if (allMdImages.length > 0) {
    console.log('  Readme images:', allMdImages);
  }
}
