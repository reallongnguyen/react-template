import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import SoftPhone from './pages/SoftPhone';

function App() {
  return (
    <div className='h-screen w-screen bg-gray-50'>
      <BrowserRouter>
        <div className='flex border-b border-gray-300'>
          <NavLink to='/' className='h-full px-3 py-2'>
            Home
          </NavLink>
          <NavLink to='/soft-phone' className='h-full px-3 py-2'>
            Soft Phone
          </NavLink>
        </div>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/soft-phone' component={SoftPhone} />
          <Route path='*'>
            <div className=''>404 Not Found.</div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
