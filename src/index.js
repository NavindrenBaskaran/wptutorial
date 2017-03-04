import $ from 'jquery';

window.onload = function(){
if(document.querySelectorAll('.button-area').length){
    require.ensure([], () => {
      const Button = require('./Components/Button').default;
      const button = new Button('google.com');

      button.render('.button-area');
    });
}
};
