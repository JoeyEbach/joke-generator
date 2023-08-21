import renderToDom from '../utils/renderToDom';

const jokeBtn = () => {
  const domstring = '<button type="button" id="joke-btn" class="btn btn-primary">Get A Joke</button>';
  renderToDom('#getJoke', domstring);
};

const punchlineBtn = () => {
  const domstring = '<button type="button" id="joke-btn" class="btn btn-primary">Show Punchline</button>';
  renderToDom('#punchLine', domstring);
};

const resetBtn = () => {
  const domstring = '<button type="button" id="joke-btn" class="btn btn-primary">Get Another Joke</button>';
  renderToDom('#getNewJoke', domstring);
};

export { jokeBtn, punchlineBtn, resetBtn };
