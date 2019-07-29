import ReactDOM from 'react-dom';

// 载入默认全局样式 normalize
import './styles/main.scss'
import './untils/clicklove'
import '@/assets/materialize/sass/materialize.scss'
import '@/assets/materialize/js/bin/materialize.min'
import '@/assets/awesome/css/font-awesome.css'

import router from './router';

const ICE_CONTAINER = document.getElementById('ice-container');

if (!ICE_CONTAINER) {
    throw new Error('当前页面不存在 <div id="ice-container"></div> 节点.');
}

ReactDOM.render(router(), ICE_CONTAINER);
