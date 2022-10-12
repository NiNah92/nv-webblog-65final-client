import Vue from 'vue'
import Router from 'vue-router'
import UserIndex from '@/components/Users/Index'
import UserEdit from '@/components/Users/EditUser'
import UserShow from '@/components/Users/ShowUser'
import UserCreate from '@/components/Users/CreateUser'

import CourseIndex from '@/components/Courses/Index'
import CourseEdit from '@/components/Courses/EditCourse'
import CourseShow from '@/components/Courses/ShowCourse'
import CourseCreate from '@/components/Courses/CreateCourse'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/user/create',
      name: 'user-create',
      component: UserCreate
    },
    {
      path: '/user/edit/:userId',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    },
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    


    {
      path: '/course/create',
      name: 'course-create',
      component: CourseCreate
    },
    {
      path: '/course/edit/:courseId',
      name: 'course-edit',
      component: CourseEdit
    },
    {
      path: '/course/:courseId',
      name: 'course',
      component: CourseShow
    },
    {
      path: '/courses',
      name: 'courses',
      component: CourseIndex
    },

    

  ]
})
