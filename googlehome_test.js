const googlehome = require('google-home-notifier')
const language = 'ja';

// googlehome.device('Google-Home-xxxx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', language);
googlehome.ip('192.168.8.174', language);

googlehome.notify('しゃちょう。いん。', function(res) {
  console.log(res);
});
