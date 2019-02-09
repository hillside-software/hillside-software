/*global grecaptcha */
'use strict';
/*
Add in src doc:
<script src='https://www.google.com/recaptcha/api.js'></script>
<script src='./recaptcha-client.js'></script>
<div class="g-recaptcha" data-sitekey="6Le-dxsUAAAAACNBQTRFvtHly94_gLM80PLtN8Nq"></div>
*/
function CaptchaHelper(element, options = {
  theme: 'dark',
  sitekey: '6Le-dxsUAAAAACNBQTRFvtHly94_gLM80PLtN8Nq',
}) {
  if (!options.sitekey) {
    throw new Error('Please provide your sitekey via CaptchaHelper options');
  }
  grecaptcha.render(element, options);

  return {
    grecaptcha, element,

    response: function(callback) {
      return grecaptcha.getResponse();
    },
    reload: function() {
      return grecaptcha.reload();
    },
    destroy: function() {
      return grecaptcha.destroy();
    }
  }
}
