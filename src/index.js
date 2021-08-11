import './style.css';
import renderLayout from './layout.js';
import { asyncGetScores } from './consumeAPI.js';
import {getScores, setScores} from './consumeAPiHandler';

let component = () => {
  renderLayout();
  asyncGetScores();
  getScores();
  setScores();
}

component();