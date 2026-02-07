const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  const htmlPath = path.join(__dirname, 'resume-ats.html');
  await page.goto(`file://${htmlPath}`);
  
  await page.pdf({
    path: 'Alexander_Qin_Resume.pdf',
    format: 'Letter',
    margin: {
      top: '0.5in',
      right: '0.5in',
      bottom: '0.5in',
      left: '0.5in'
    },
    printBackground: true
  });
  
  await browser.close();
  console.log('PDF generated successfully: Alexander_Qin_Resume.pdf');
})();
