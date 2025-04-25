import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConfigProvider } from 'antd';
import ZhCN from 'antd/locale/zh_CN';
import { store, persist } from './store';
import routers from './router';
import './index.less';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persist}>
      <React.StrictMode>
        <ConfigProvider locale={ZhCN}>
          <Suspense fallback={<div>...加载中</div>}>
            <RouterProvider router={routers} />
          </Suspense>
        </ConfigProvider>
      </React.StrictMode>
    </PersistGate>
  </Provider>,
);
