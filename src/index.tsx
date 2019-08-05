import ReactDOM from 'react-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
// 载入默认全局样式 normalize
import './styles/main.scss'
import './untils/clicklove'
import '@/assets/materialize/sass/materialize.scss'
import '@/assets/materialize/js/bin/materialize'
import '@/assets/awesome/css/font-awesome.css'
import router from './router';

const ICE_CONTAINER = document.getElementById('ice-container');
AOS.init();
if (!ICE_CONTAINER) {
    throw new Error('当前页面不存在 <div id="ice-container"></div> 节点.');
}

ReactDOM.render(router(), ICE_CONTAINER);
