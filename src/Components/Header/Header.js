import $ from 'jquery';
import Mustache from 'mustache';
import template from './Header.html';
import './Header.scss';

export default class Header {
  constructor(){
    
  }
  render(node){
    const text = "Welcome Navindren Baskaran";

    $(node).html(
      Mustache.render(template,{text})
    );
  }
}
