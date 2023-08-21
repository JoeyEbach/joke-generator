// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import domLayout from '../components/domLayout';
import { jokeBtn } from '../components/buttons';
import jokeEvents from '../components/events/jokeEvents';
import 'bootstrap';
import '../styles/main.scss';

const init = () => {
  domLayout();
  jokeBtn();
  jokeEvents();
};

init();
