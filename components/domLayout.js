import renderToDom from '../utils/renderToDom';

const domLayout = () => {
  let domString = '';
  domString += `
  <p id="joke"></p>
  <p id="punchline"></p>
  <div id="getJoke"></div>
  <div id="punchLine"></div>
  <div id="getNewJoke"></div>`;

  renderToDom('#app', domString);
};

export default domLayout;
