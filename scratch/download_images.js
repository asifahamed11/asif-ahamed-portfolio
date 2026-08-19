const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '../public/projects');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const downloads = [
  {
    url: 'https://raw.githubusercontent.com/asifahamed11/skin-lesion-classifier/main/demo.png',
    dest: 'skin-lesion-classifier.png'
  },
  {
    url: 'https://raw.githubusercontent.com/asifahamed11/pop-cat-recycle-bin/main/screenshots/pop-cat-demo.gif',
    dest: 'pop-cat-demo.gif'
  },
  {
    url: 'https://raw.githubusercontent.com/asifahamed11/pop-cat-recycle-bin/main/screenshots/before.png',
    dest: 'pop-cat-before.png'
  },
  {
    url: 'https://raw.githubusercontent.com/asifahamed11/amazon-ecommerce-db-schema/main/amazon%20rdbms.jpg',
    dest: 'amazon-ecommerce-schema.jpg'
  },
  {
    url: 'https://raw.githubusercontent.com/asifahamed11/MediLinx/main/logo.png',
    dest: 'medilinx-logo.png'
  },
  {
    url: 'https://raw.githubusercontent.com/asifahamed11/VU_FYDP/main/VU_Logo.png',
    dest: 'vu-fydp-logo.png'
  }
];

function downloadFile(url, destName) {
  return new Promise((resolve) => {
    const file = fs.createWriteStream(path.join(targetDir, destName));
    const proto = url.startsWith('https') ? https : http;
    proto.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Successfully downloaded ${destName} (${fs.statSync(path.join(targetDir, destName)).size} bytes)`);
          resolve(true);
        });
      } else {
        console.log(`Failed to download ${destName}: status ${res.statusCode}`);
        file.close();
        fs.unlinkSync(path.join(targetDir, destName));
        resolve(false);
      }
    }).on('error', (err) => {
      console.log(`Error downloading ${destName}:`, err.message);
      resolve(false);
    });
  });
}

async function run() {
  for (const item of downloads) {
    await downloadFile(item.url, item.dest);
  }
  console.log('Finished downloads.');
}

run();
