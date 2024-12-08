import React from 'react';
import { RecoilRoot } from 'recoil';
import Header from '@components/Header/Header';
import Todo from '@pages/Todo';

const App: React.FC = () => (
  <RecoilRoot>
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Todo />
    </div>
  </RecoilRoot>
);

export default App;
