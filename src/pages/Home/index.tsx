import React from 'react';
import { Button } from 'antd';
import { useGoLogin } from '@/hooks/routerHooks';

const Home: React.FC = () => {
  const goLogin = useGoLogin();
  return (
    <div>
      <>Home Page</>
      <Button type='primary' onClick={goLogin}>
        去登陆
      </Button>
      asdnajsdnjasbdh
    </div>
  );
};

export default Home;
