import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../home/HomePage.vue';
import SailorsPointPage from '../sailorsPoint/SailorsPoint.vue';
import ContactsPage from '../contacts/Contacts.vue';
import MeetingsPage from '../meetings/Meetings.vue';
import NewsPage from '../news/News.vue';
import CalendarPage from '../calendar/Calendar.vue';
import PhotosPage from '../photos/Photos.vue';
import EventsPage from '../events/Events.vue';
import JoinPage from '../join/Join.vue';
import SidebarStandard from '../sidebars/SidebarStandard.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    components: {
      default: HomePage,
      sidebar: SidebarStandard,
    },
  }, {
    path: '/sailorspoint',
    name: 'SailorsPoint',
    components: {
      default: SailorsPointPage,
      sidebar: SidebarStandard,
    },
  }, {
    path: '/contacts',
    name: 'Contacts',
    components: {
      default: ContactsPage,
      sidebar: SidebarStandard,
    },
  }, {
    path: '/meetings',
    name: 'Meetings',
    component: MeetingsPage,
  }, {
    path: '/news',
    name: 'News',
    component: NewsPage,
  }, {
    path: '/calendar',
    name: 'Calendar',
    component: CalendarPage,
  }, {
    path: '/photos',
    name: 'Photos',
    component: PhotosPage,
  }, {
    path: '/events',
    name: 'Events',
    component: EventsPage,
  }, {
    path: '/join',
    name: 'Join',
    component: JoinPage,
  }],
});
