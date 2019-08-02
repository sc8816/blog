import Dashboard from '@/pages/Dashboard';
import BasicLayout from '@/layouts/BasicLayout';
import Tags from '@/pages/Tags/tags'
import ArticleList from '@/pages/Tags/components/ArticleList/articleList'

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
                path: '/tags',
                component: Tags,
                children: [
                    {
                        path: '/article',
                        component: ArticleList,
                    }
                ]
            },
            {
                path: '/category',
                component: Dashboard,
            }
        ],
    },
];

export default routerConfig;
