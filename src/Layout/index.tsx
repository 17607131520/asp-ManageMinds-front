import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Layout, theme, Input, Menu } from 'antd';
import type { MenuProps } from 'antd';
import { Outlet, Link } from 'react-router-dom';
import XMSIcon from '@/assets/xmsImg.svg';
import LayoutHeader from './header';
import { routerList, getAllPaths, IMenuItem, convertToMenuItems } from './data';
import './index.less';

const { Content, Sider } = Layout;

const LayoutPages: React.FC = () => {
  const {
    token: { colorBgLayout },
  } = theme.useToken();
  const [searchText, setSearchText] = useState<string>('');

  const formatMenuItems = (items: IMenuItem[]): MenuProps['items'] => {
    if (!items || items.length === 0) return [];
    return items.map((item) => {
      return {
        key: item.id,
        label: item.children ? (
          item.title
        ) : item.path ? (
          <Link to={item.path}>{item.title}</Link>
        ) : (
          item.title
        ),
        title: item.title,
        icon: item.icon,
        children: item.children ? formatMenuItems(item.children) : undefined,
      };
    });
  };

  // 根据搜索文本过滤菜单
  const filterMenu = (items: IMenuItem[]): IMenuItem[] => {
    if (items.length === 0 || !items) return [];
    return items.filter((item) => {
      const match = item.label.toLowerCase().includes(searchText.toLowerCase());
      if (item.children) {
        const childMatch = filterMenu(item.children);
        return childMatch.length > 0 || match;
      }
      return match;
    });
  };

  const getSelectedKeys = () => {
    return routerList
      .flatMap((item) => getAllPaths(item as unknown as IMenuItem))
      .filter((p) => p.path === location.pathname)
      .map((p) => p.id);
  };

  return (
    <div className='layout-container'>
      <Layout style={{ height: '100%', width: '100%' }}>
        <Sider
          trigger={null}
          collapsible
          collapsedWidth='0'
          theme='light'
          style={{ borderRight: '1px solid rgb(233, 235, 237)' }}
        >
          <div className='layout-container-box'>
            <div className='layout-container-box-header'>
              <img src={XMSIcon} alt='' />
              售后管理系统
            </div>
          </div>
          <div className='layout-search'>
            <Input
              placeholder='菜单搜索'
              prefix={<SearchOutlined />}
              variant='filled'
              allowClear
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <div className='layout-menus'>
            <Menu
              theme='light'
              mode='inline'
              selectedKeys={getSelectedKeys()}
              items={formatMenuItems(
                filterMenu(convertToMenuItems(routerList as unknown as IMenuItem[])),
              )}
              defaultOpenKeys={routerList.map((item) => item.id)}
            />
          </div>
        </Sider>
        <Layout>
          <div className='layout-header'>
            <LayoutHeader />
          </div>
          <Content>
            <div className='layout-content' style={{ background: colorBgLayout }}>
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default LayoutPages;
