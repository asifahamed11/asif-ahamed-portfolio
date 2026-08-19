const fs = require('fs');
const path = require('path');

const src1 = 'C:/Users/Admin/.gemini/antigravity-ide/brain/e8e17a44-80e8-4f6d-860d-c26a2946c35a/portfolio_main_1787085072484.png';
const src2 = 'C:/Users/Admin/.gemini/antigravity-ide/brain/e8e17a44-80e8-4f6d-860d-c26a2946c35a/portfolio_universe_1787085089969.png';

const dest1 = path.join(__dirname, '../public/projects/asif-portfolio.png');
const dest2 = path.join(__dirname, '../public/projects/portfolio-universe.png');

if (fs.existsSync(src1)) {
  fs.copyFileSync(src1, dest1);
  console.log('Copied asif-portfolio.png');
}
if (fs.existsSync(src2)) {
  fs.copyFileSync(src2, dest2);
  console.log('Copied portfolio-universe.png');
}
