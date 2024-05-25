import { useRoutes } from 'react-router-dom';
import HomePage from "../pages/home_page";
import LoginPage from "../pages/login";
import SignupPage from "../pages/signup";
import Tenders from "../pages/admin/tenders";
import CreateTender from "../pages/admin/create_tender";
import PublicTender from '../pages/public_tender';
import Product from "../pages/products_trial";
const RoutesConfig: React.FC = () => {
  const routes = useRoutes([
    { 
      path: "/", 
      element: <HomePage />, 
      children: [
        { path: '', element: <Tenders/> }
      ]
  },

    { path: "/login", element: <LoginPage /> },
    { path: "/signup", element: <SignupPage /> },
   
    { 
      path: "create_tender", 
      element: <PublicTender/>, 
      children: [
        { path: '', element: <CreateTender/> }
      ]
  },
  {path: "/products", element:<Product/> },
  ]);

  return routes;
};

export default RoutesConfig;
