import Dashboard from '@/pages/Dashboard';
import BasicLayout from '@/layouts/BasicLayout';

const routerConfig = [
    {
        path: '/',
        component: BasicLayout,
        children: [
            {
                path: '/dashboard',
                component: Dashboard,
            },
            {
                path: '/',
                redirect: '/dashboard',
            },
            {
                path: '/category',
                component: Dashboard,
            }
        ],
    },
];

export default routerConfig;
