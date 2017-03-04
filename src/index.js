import $ from 'jquery';

window.onload = function(){

// If we have .button-area, render the button component on it
if(document.querySelectorAll('.button-area').length){
    require.ensure([], () => {
      const Button = require('./Components/Button/Button').default;
      const button = new Button('google.com');

      button.render('.button-area');
  },'button');
}


  if(document.querySelectorAll('h1').length){
    require.ensure([],()=> {
      const Header = require('./Components/Header/Header').default;
      new Header().render('h1');
  },'header');

  }
}
