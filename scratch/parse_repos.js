const fs = require('fs');
const raw = fs.readFileSync('C:/Users/Admin/.gemini/antigravity-ide/brain/e8e17a44-80e8-4f6d-860d-c26a2946c35a/.system_generated/steps/469/content.md', 'utf8');
const jsonStart = raw.indexOf('[');
const jsonStr = raw.slice(jsonStart);
const repos = JSON.parse(jsonStr);

console.log(`Total repos: ${repos.length}`);
const summary = repos.map(r => ({
  name: r.name,
  description: r.description,
  url: r.html_url,
  language: r.language,
  stars: r.stargazers_count,
  forks: r.forks_count,
  topics: r.topics,
  updated_at: r.updated_at
}));

fs.writeFileSync('C:/Users/Admin/.gemini/antigravity-ide/brain/e8e17a44-80e8-4f6d-860d-c26a2946c35a/scratch/repos_summary.json', JSON.stringify(summary, null, 2));
console.log('Saved to repos_summary.json');
