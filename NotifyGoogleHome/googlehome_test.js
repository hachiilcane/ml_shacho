// 引数で指定した文字列をGoogle Homeにしゃべらせるプログラムです

console.log('Start Process');
// 引数チェック
const args = process.argv.slice(2);
if (args.length < 1) {
  showUsageAndExit();
}

const googlehome = require('google-home-notifier')
const language = 'ja';

// googlehome.device('Google-Home-xxxx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', language);
googlehome.device('Google Home', language);
console.log('Google Home');

googlehome.ip('172.20.10.6', language);
console.log('172.20.10.6');

googlehome.notify(args[0], function(res) {
  console.log(res);
});

console.log('End Process');
process.exit(0);



function showUsageAndExit() {
  const path = require('path');
  const basename = path.basename(process.argv[1]);
  console.error(`Usage: node ${basename} <any>`);
  process.exit(1);
}

