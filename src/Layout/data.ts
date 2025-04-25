export const routerList = [
    {
      id: 'fec15ac3-88de-422a-914b-5fbdd9f5e92d',
      parentId: null,
      key: '1-1',
      title: '首页',
      code: 'XMS_HOME',
      type: '菜单',
      icon: null,
      path: '/',
      sortOrder: 1,
      description: '',
      remark: '',
      children: [],
    },
    {
      id: '36f6e3d8-35a5-41b4-9f2f-a2c0b6fb8988',
      parentId: null,
      key: '1-2',
      title: '系统配置',
      code: 'CONTENT_SYSTEM_CONFIG',
      type: '目录',
      icon: null,
      path: '/menu',
      sortOrder: 2,
      description: '',
      remark: '',
      children: [
        {
          id: '8d2931c7-3c14-4bf9-b366-5f57226424f7',
          parentId: null,
          key: '1-2-1-2',
          title: '用户管理',
          code: 'ROLE_BASE_ADMIN',
          type: '菜单',
          icon: null,
          path: '/user-manager',
          sortOrder: 0,
          description: '',
          remark: '',
          children: [],
        },
        {
          id: '995d9b2d-f582-4f78-b9e1-92a01c4c9373',
          parentId: null,
          key: '1-2-1-1',
          title: '菜单管理',
          code: ' ROLE_AUTHORITY',
          type: '菜单',
          icon: null,
          path: '/menu-manager/menu',
          sortOrder: 0,
          description: '',
          remark: '',
          children: [],
        },
      ],
    },
    {
      id: 'a1aee221-ca12-4b9d-a0b4-3835b4754f38',
      parentId: null,
      key: '1-3',
      title: '工单管理',
      code: 'CONTENT_ORDER_MANAGE',
      type: '菜单',
      icon: null,
      path: '/order',
      sortOrder: 3,
      description: '',
      remark: '',
      children: [
        {
          id: 'c16b35c2-884c-4524-b171-870a683294ed',
          parentId: null,
          key: '1-3-1-1',
          title: '服务单管理',
          code: 'ROLE_AS_SEARCH',
          type: '菜单',
          icon: null,
          path: '/order-home',
          sortOrder: 0,
          description: '',
          remark: '',
          children: [],
        },
      ],
    },
  ];
  
  export interface IMenuItem {
    id: string;
    key: string;
    title: string;
    label: string;
    code: string;
    path: string;
    icon?: React.ReactNode | null;
    sortOrder: number;
    children?: Array<IMenuItem> | undefined;
  }
  
  export const convertToMenuItems = (data: IMenuItem[]): IMenuItem[] => {
    return data.map((item) => {
      return {
        id: item.id,
        key: item.key,
        label: item?.title,
        title: item?.title,
        code: item.code,
        path: item.path,
        icon: item.icon,
        sortOrder: item.sortOrder,
        children:
          item.children && item.children.length > 0 ? convertToMenuItems(item.children) : undefined,
      };
    });
  };
  
  // 递归获取所有路径
  export const getAllPaths = (item: IMenuItem): Array<{ id: string; path: string }> => {
    if (item.path) return [{ id: item.id, path: item.path }];
    return item.children?.flatMap(getAllPaths) || [];
  };
  