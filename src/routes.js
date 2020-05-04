import HomePage  from './components/homePage'
import inbox from './components/inbox'
import askquetionanser from './components/askquetionanser'
import askquation from './components/askquation'
import  question1_index from './components/question1_index'
import friends from './components/friends'
import notifications from './components/notifications'
const routes = [
    {path: "/", component: HomePage , children:
    [
      {path: "", component: askquation },


    ]
  
  },
    {path: "/inbox", component: inbox, children:
    [
      {path: "", component: question1_index },


    ]
  
  
  },
    {path: "/inbox/:id", component: askquetionanser , props :true},
    {path: "/notifications", component: notifications, children:
    [
      {path: "", component: question1_index },


    ]},
    {path: "/friends", component: friends},
    {path: "*", redirect:"/"},
  ];

export default routes ;
