const menuRoutes = [{
    name: 'Dashboards',
    icon: {
      prefix: 'fas',
      iconName: 'home'
    },
    page: '/dashboards',
    children: []
  },
  {
    name: 'Environments',
    icon: {
      prefix: 'far',
      iconName: 'user'
    },
    page: '/environments',
    children: []
  },
  {
    name: 'Policies',
    icon: {
      prefix: 'far',
      iconName: 'user'
    },
    page: '/policies',
    children: []
  },
  {
    name: 'VM Images',
    icon: {
      prefix: 'far',
      iconName: 'user'
    },
    page: '/vmimages',
    children: []
  },
  {
    name: 'Courses',
    icon: {
      prefix: 'far',
      iconName: 'user'
    },
    page: '/showcourses',
    children: []
  },
  {
    name: 'Classes',
    icon: {
      prefix: 'far',
      iconName: 'user'
    },
    page: '/classes',
    children: []
  },
  {
    name: 'Reports',
    icon: {
      prefix: 'fas',
      iconName: 'gift'
    },
    page: '/reports',
    children: [{
        name: 'Users',
        page: '/reports/users'
      },
      {
        name: 'Grades',
        page: '/reports/grades'
      },
      {
        name: 'Usage',
        page: '/reports/usage'
      },
      {
        name: 'Virtual machines',
        page: '/reports/vmachines'
      },
      {
        name: 'Storage',
        page: '/reports/storage'
      },
    ]
  },
  {
    name: 'Administration',
    icon: {
      prefix: 'fas',
      iconName: 'gift'
    },
    page: '/admin',
    children: [{
        name: 'Users',
        page: '/admin/users'
      },
      {
        name: 'Grades',
        page: '/admin/grades'
      },
    ]
  },
];

export default menuRoutes;
