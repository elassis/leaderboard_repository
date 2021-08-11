import './style.css';
import renderLayout from './layout.js';
import { asyncGetScores } from './consumeAPI.js';
import { getScores, setScores } from './consumeAPiHandler.js';

const component = () => {
  renderLayout();
  asyncGetScores();
  getScores();
  setScores();
};

component();