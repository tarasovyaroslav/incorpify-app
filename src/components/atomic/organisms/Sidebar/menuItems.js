const navitems = [
  {
    id: 'nav0',
    to: '/profile',
    text: 'My Business',
    icon: 'sidebar:mybusiness',
    home: true,
    indicator: true,
  },
  {
    id: 'nav1',
    to: '/profile',
    text: 'Company Profile',
    icon: 'sidebar:profile',
    separate: 'true',
  },
  {
    id: 'nav2',
    to: '/documents',
    text: 'Company Documents',
    icon: 'sidebar:documents',
  },
  {
    id: 'nav3',
    to: '/actions',
    text: 'Action Required',
    icon: 'sidebar:actions',
  },
  {
    id: 'nav4',
    to: '/services',
    text: 'Additional Services',
    icon: 'sidebar:services',
  },
  {
    id: 'nav5',
    to: '/mailbox',
    text: 'Mailbox',
    icon: 'sidebar:mailbox',
  },
];

const footeritems = [
  {
    id: 'footer1',
    to: '/billing',
    text: 'Billing',
    icon: 'sidebar:billing',
  },
  {
    id: 'footer2',
    to: '/support',
    text: 'Ticket Support',
    icon: 'sidebar:support',
  },
];

export { navitems, footeritems };
