import Vue from 'vue';
import Router from 'vue-router';
import OpenCourse from '@/components/OpenCourse';
import Technology from '@/components/Technology';
import College from '@/components/College';
import More from '@/components/More'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'OpenCourse',
      component: OpenCourse
    },
    {
      path: '/openCourse',
      name: 'OpenCourse',
      component: OpenCourse
    },
    {
      path: '/technology',
      name: 'Technology',
      component: Technology
    },
    {
      path: '/college',
      name: 'College',
      component: College
    },
    {
      path: '/more',
      name: 'More',
      component: More
    },
  ],
});
