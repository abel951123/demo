import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import newsBulletin from '@/components/NewsBulletin'
import serviceGuide from '@/components/ServiceGuide'
import servicelssueDetails from '@/serviceGuide/serviceIssueDetails'
import serviceIssueList from '@/serviceGuide/serviceIssueList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '*',
      name: 'index',
      component: index
    },
    {
      path: '/newsBulletin',
      name: 'NewsBulletin',
      component: newsBulletin
    },
    {
      path: '/serviceGuide',
      name: 'ServiceGuide',
      component: serviceGuide,
      children: [
        {
          path: 'servicelssueDetails',
          name: 'ServicelssueDetails',
          component: servicelssueDetails
        },
        {
          path: 'serviceIssueList',
          name: 'ServiceIssueList',
          component: serviceIssueList
        }
      ]
    }
  ]
})
