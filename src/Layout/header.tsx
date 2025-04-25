import React from 'react';
import { UserOutlined, BellOutlined } from '@ant-design/icons';
import './header.less';

const LayoutHeader: React.FC = () => {
  return (
    <div className='layout-header-box'>
      <div className='header-notice'>
        <BellOutlined />
      </div>
      <div className='layout-user'>
        <div className='layout-user-logo'>
          <div className='layout-user-logo-icon'>
            <UserOutlined />
          </div>
          用户名称
        </div>
        <div className='layout-user-permissions'>超级管理员</div>
      </div>
    </div>
  );
};

export default LayoutHeader;
