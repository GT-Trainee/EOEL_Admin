const menuItems = {
  items: [
    {
      id: 'navigation',
      title: 'Navigation',
      type: 'group',
      icon: 'icon-navigation',
      children: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'item',
          icon: 'feather icon-home',
          url: '/app/dashboard/analytics'
        }
      ]
    },
    {
      id: 'options',
      title: 'Main Menu',
      type: 'group',
      icon: 'icon-ui',
      children: [
        {
          id: 'component',
          title: 'Options',
          type: 'collapse',
          icon: 'feather icon-box',
          children: [
            {
              id: 'button',
              title: 'File Upload',
              type: 'item',
              url: '/FileUpload/FileUpload'
              
            },
            {
              id: 'badges',
              title: 'User',
              type: 'collapse', // Change type to 'collapse'
              url: '/basic/user',
              children: [ // Add child elements for 'User'
                {
                  id: 'profile',
                  title: 'User Details',
                  type: 'item',
                  url: '/user/UserDetails'
                },
                {
                  id: 'settings',
                  title: 'User Mapping',
                  type: 'item',
                  url: '/user/UserMapping'
                }
              ]
            },  
            {
              id: 'role',
              title: 'Role',
              type: 'collapse', // Change type to 'collapse'
              children: [ // Add child elements for 'Role'
                {
                  id: 'admin-role',
                  title: 'Role Details',
                  type: 'item',
                  url: '/Roles/Roles'
                },
                {
                  id: 'admin-role',
                  title: 'Role Mapping',
                  type: 'item',
                  url: '/Roles/RoleMapping'
                }
              ]
            },
                      
            {
              id: 'breadcrumb-pagination',
              title: 'Reports',
              type: 'item',
              url: '/Reports/IndianRailwayReport'
            },
          ]
        }
      ]
    },
    {
      id: 'support',
      title: 'Support',
      type: 'group',
      icon: 'icon-support',
      children: [
        {
          id: 'sample-page',
          title: 'Setting',
          type: 'item',
          url: '/sample-page',
          classes: 'nav-item',
          icon: 'feather icon-sidebar'
        },
        {
          id: 'documentation',
          title: 'Help',
          type: 'item',
          icon: 'feather icon-help-circle',
          classes: 'nav-item',
          url: 'https://codedthemes.gitbook.io/gradient-able-react/',
          target: true,
          external: true
        }
      ]
    },
    // {
    //   id: 'utilities',
    //   title: 'Utilities',
    //   type: 'group',
    //   icon: 'icon-ui',
    //   children: [
    //     {
    //       id: 'component',
    //       title: 'Component',
    //       type: 'collapse',
    //       icon: 'feather icon-box',
    //       children: [
    //         {
    //           id: 'button',
    //           title: 'Button',
    //           type: 'item',
    //           url: '/basic/button'
    //         },
    //         {
    //           id: 'badges',
    //           title: 'Badges',
    //           type: 'item',
    //           url: '/basic/badges'
    //         },
    //         {
    //           id: 'breadcrumb-pagination',
    //           title: 'Breadcrumb & Pagination',
    //           type: 'item',
    //           url: '/basic/breadcrumb-pagination'
    //         },
    //         {
    //           id: 'collapse',
    //           title: 'Collapse',
    //           type: 'item',
    //           url: '/basic/collapse'
    //         },
    //         {
    //           id: 'typography',
    //           title: 'Typography',
    //           type: 'item',
    //           url: '/basic/typography'
    //         },
    //         {
    //           id: 'tooltip-popovers',
    //           title: 'Tooltip & Popovers',
    //           type: 'item',
    //           url: '/basic/tooltip-popovers'
    //         }
    //       ]
    //     }
    //   ]
    // },
    // {
    //   id: 'auth',
    //   title: 'Authentication',
    //   type: 'group',
    //   icon: 'icon-pages',
    //   children: [
    //     {
    //       id: 'sign in',
    //       title: 'Login',
    //       type: 'item',
    //       icon: 'feather icon-lock',
    //       url: '/auth/signin-1',
    //       target: true,
    //       breadcrumbs: false
    //     },
    //     {
    //       id: 'sign Up',
    //       title: 'Register',
    //       type: 'item',
    //       icon: 'feather icon-log-in',
    //       url: '/auth/signup-1',
    //       target: true,
    //       breadcrumbs: false
    //     },
    //     {
    //       id: 'reset-pass',
    //       title: 'Reset Password',
    //       type: 'item',
    //       icon: 'feather icon-unlock',
    //       url: '/auth/reset-password-1',
    //       target: true,
    //       breadcrumbs: false
    //     }
    //   ]
    // },
    // {
    //   id: 'support',
    //   title: 'Support',
    //   type: 'group',
    //   icon: 'icon-support',
    //   children: [
    //     {
    //       id: 'sample-page',
    //       title: 'Sample Page',
    //       type: 'item',
    //       url: '/sample-page',
    //       classes: 'nav-item',
    //       icon: 'feather icon-sidebar'
    //     },
    //     {
    //       id: 'documentation',
    //       title: 'Documentation',
    //       type: 'item',
    //       icon: 'feather icon-help-circle',
    //       classes: 'nav-item',
    //       url: 'https://codedthemes.gitbook.io/gradient-able-react/',
    //       target: true,
    //       external: true
    //     }
    //   ]
    // }
  ]
};

export default menuItems;
