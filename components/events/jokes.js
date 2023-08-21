import renderToDom from '../../utils/renderToDom';

const setup = (response) => {
  const domString = response.setup;
  renderToDom('#joke', domString);
};

const punchLine = (response) => {
  const domString = response.delivery;
  renderToDom('#punchline', domString);
};

export { setup, punchLine };
