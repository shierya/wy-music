import React, { memo,Suspense} from 'react';
import { Provider } from 'react-redux';

import {BrowserRouter} from 'react-router-dom'
import routes from './router';
import {renderRoutes} from 'react-router-config'
import store from './store';

import WYHeader from '@/components/wy-header';
import WYFooter from '@/components/wy-footer';
import PlayerBar from '@/components/player-bar';

const App = memo(() => {
  return (
    <Provider store={store}>
      <Suspense fallback={<div>loadding</div>}>
        <BrowserRouter>
          <WYHeader/>
          {renderRoutes(routes)}
          <WYFooter/>
          <PlayerBar/>
        </BrowserRouter>
      </Suspense>
    </Provider>
  );
});

export default App;