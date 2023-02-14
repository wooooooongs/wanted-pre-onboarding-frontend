import { createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root';
import NotFound from './pages/NotFound';
import Authentication from './pages/Authenticationcopy';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/signup',
        element: <Authentication authType='signUp' />,
      },
      {
        path: '/signin',
        element: <Authentication authType='signIn' />,
      },
    ],
  },
]);

export default router;
