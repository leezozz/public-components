export const menuLists = [
  {
    title: 'xx管理',
    icon: '',
    path: '',
    children: [
      {
        title: 'xx管理1',
        icon: 'icon-quanxianguanli',
        path: '/authority-management',
        children: [
          {
            title: 'xx管理1-1',
            icon: '',
            path: '/authority-management/business-organization-management',
            // test  xxxxx
            children: [
              {
                title: 'xx管理1-1-1',
                icon: '',
                path: 'xx管理1-1-1',
                children: [
                  {
                    title: 'xx管理1-1-2',
                    icon: '',
                    path: 'xx管理1-1-2'
                  }
                ]
              }
            ]
          },
          {
            title: 'xx管理1-2',
            icon: '',
            path: '/authority-management/role-manage'
          },
          {
            title: 'xx管理1-3',
            icon: '',
            path: '/authority-management/user-management'
          },
          {
            title: 'xx管理1-4',
            icon: '',
            path: '/authority-management/approve-management'
          }
        ]
      },
      {
        title: 'xx管理2',
        icon: 'icon-shujucaiji',
        path: '/data-collection',
        children: [
          {
            title: 'xx管理2-1',
            icon: '',
            path: '/data-collection/data-import'
          },
          {
            title: 'xx管理2-2',
            icon: '',
            path: '/data-collection/account-statement-item-map'
          }
        ]
      }
    ]
  },
  {
    title: 'xx信息',
    icon: '',
    path: '',
    children: [
      {
        title: 'xx信息1',
        icon: 'icon-gongshangxinxi',
        path: '/business-information'
      },
      {
        title: 'xx信息2',
        icon: 'icon-shuiwuxinxi',
        path: '/tax-information'
      }
    ]
  }
]

