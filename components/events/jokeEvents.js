import { jokeBtn, punchlineBtn, resetBtn } from '../buttons';
import getJoke from '../getAJoke';
import { setup, punchLine } from './jokes';
import renderToDom from '../../utils/renderToDom';
import domLayout from '../domLayout';

const jokeEvents = () => {
  getJoke().then((response) => {
    document.querySelector('#joke-btn').addEventListener('click', () => {
      setup(response);
      document.querySelector('#getJoke').innerHTML = '';
      punchlineBtn();
    });
    document.querySelector('#punchLine').addEventListener('click', () => {
      punchLine(response);
      document.querySelector('#punchLine').innerHTML = '';
      resetBtn();
    });
    document.querySelector('#getNewJoke').addEventListener('click', () => {
      renderToDom('#app', '');
      domLayout();
      jokeBtn();
      jokeEvents();
    });
  });
};

export default jokeEvents;
