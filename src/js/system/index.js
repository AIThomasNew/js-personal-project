import WebpackLogo from './assets/webpack-logo.png';
import '../function/script-modal-window.js';
import '../function/script-modal-html.js';
import '../animation/script-for-three.js';
import '../../styles/scss/1-style.scss';
import '../../styles/css/1-style.css';
import json from './assets/json.json';
import '../animation/vanilla-anim.js';
import '../function/script-feedback';
import '../function/btn-order.js';
import '../animation/eye-anim.js';
import '../lib/vanilla-tilt.js';
import Post from './component';
import '../function/base.js';
import '../lib/jQuerry.js';
import './component.js';
import './analytics.js';

const post = new Post('Webpack Post Title', WebpackLogo);
console.log('Post to String:', post.toString());
console.log('JSON:', json);
