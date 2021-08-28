import Post from './component';
import json from './assets/json.json';
import '../../styles/css/1-style.css';
import '../../styles/scss/1-style.scss';
import WebpackLogo from './assets/webpack-logo.png';

const post = new Post('Webpack Post Title', WebpackLogo);
console.log('Post to String:', post.toString());
console.log('JSON:', json);
