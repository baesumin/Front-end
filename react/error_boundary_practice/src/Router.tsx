import { BrowserRouter, Routes, Route, createBrowserRouter } from 'react-router-dom';
import ErrorComponent from './components/ErrorComponent';
import Header from './components/Header';
import { Root } from './Root';
import About from './screens/About';
import Home from './screens/Home';
import NotFound from './screens/NotFound';
import Followers from './screens/users/Followers';
import User from './screens/users/User';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />,
        errorElement: <ErrorComponent />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'users/:userId',
        element: <User />,
        children: [
          {
            path: 'followers',
            element: <Followers />
          }
        ]
      }
    ],
    errorElement: <NotFound />
  }
]);

// export default function Router() {
//   return (
//     <BrowserRouter>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
