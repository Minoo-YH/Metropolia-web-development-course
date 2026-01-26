// 1. وارد کردن ماژول‌ها
const fs = require('fs');
const os = require('os');

// 2. نوشتن یک فایل متنی
fs.writeFile('sample.txt', 'This is some text', (err) => {
  if (err) {
    console.error('Error writing sample.txt:', err);
    return;
  }
  console.log('sample.txt created');

  // 3. خواندن فایل بعد از ساخته شدن
  fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading sample.txt:', err);
      return;
    }
    console.log('File contents:', data);
  });
});

// 4. اطلاعات سیستم عامل (بلافاصله اجرا می‌شود)
console.log('Hostname:', os.hostname());
console.log('OS Platform:', os.platform());
console.log('CPU Cores:', os.cpus().length);

// =====================
// OPTIONAL TASK 👇
// =====================

// 5. ذخیره اطلاعات سیستم داخل فایل
const systemInfo = `
Hostname: ${os.hostname()}
Platform: ${os.platform()}
CPU Cores: ${os.cpus().length}
`;

fs.writeFile('output.txt', systemInfo, (err) => {
  if (err) {
    console.error('Error writing output.txt:', err);
    return;
  }
  console.log('System info written to output.txt');
});
