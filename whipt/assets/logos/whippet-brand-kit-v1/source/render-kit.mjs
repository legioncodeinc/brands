import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const sharp = require(process.env.WHIPT_SHARP_PATH || 'sharp');
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const manifest = JSON.parse(await fs.readFile(path.join(root,'manifest.json'),'utf8'));
const jobs = [];
for (const asset of manifest.exports) {
  const input = await fs.readFile(path.join(root,asset.svg));
  for (const output of asset.png) jobs.push({asset,input,output});
}
let index=0,done=0;
async function worker() {
  while(index<jobs.length) {
    const job=jobs[index++];
    const destination=path.join(root,job.output.path);
    await fs.mkdir(path.dirname(destination),{recursive:true});
    const rasterWidth=Math.max(256,job.output.width);
    const density=72*rasterWidth/job.asset.viewBox[2];
    await sharp(job.input,{density})
      .resize(job.output.width,job.output.height,{fit:'fill',kernel:'lanczos3'})
      .png({compressionLevel:9,adaptiveFiltering:true})
      .toFile(destination);
    done++;
    if(done%48===0 || done===jobs.length) process.stdout.write(`Rendered ${done}/${jobs.length}\n`);
  }
}
await Promise.all([worker(),worker(),worker(),worker()]);
await sharp(path.join(root,'source/overview-build.svg'),{density:108})
.resize(2000,1660).png({compressionLevel:9}).toFile(path.join(root,'preview/overview.png'));
process.stdout.write('Saved preview/overview.png\n');

