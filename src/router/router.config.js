import PageIndex from '../page/index'
// import PageFreeTrial from '../page/freeTrial'
// import PageLogin from '../page/login'
// import PageRegist from '../page/regist'
// import PagePersonalCenter from '../page/personalCenter'
import PageClassList from '../page/classList'
import PageClassInfo from '../page/classInfo'
import PageApply from '../page/apply'
import PageBigData from '../page/bigData'
import PageLiveVedio from '../page/liveVedio'
import PageAboutUs from '../page/aboutUs'

const routes = [
    // {
    //     path: '/login',
    //     component: PageLogin,
    //     exact:true,
    // },
    //     {
    //         path: '/regist',
    //         component: PageRegist,
    //         // exact:true,
    //     },
        {
            path: '/liveVedio',
            component: PageLiveVedio,
            // exact:true,
        },
        {
            path: '/classInfo',
            component: PageClassInfo,
            exact: true,
        },
        {
            path: '/classList',
            component: PageClassList,
        },

        {
            path: '/apply',
            component: PageApply,
            // exact:true,
        },
        {
            path: '/aboutUs',
            component: PageAboutUs,
            // exact:true,
        },
    //     {
    //         path: '/plan',
    //         component: PagePlan,
    //         // exact:true,
    //     },
        {
            path: '/bigData',
            component: PageBigData,
            // exact:true,
        },
    {
        path: '',
        component: PageIndex,
        exact: true,
    },

];

export default routes;