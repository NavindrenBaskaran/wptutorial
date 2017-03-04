import $ from 'jquery';
import Button from './Components/Button';

window.onload = function(){
  const button = new Button('google.com');
  button.render('.button-area');
};
