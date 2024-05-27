import { useRoutes } from "react-router-dom";
import HomePage from "../pages/home_page";
import LoginPage from "../pages/login";
import SignupPage from "../pages/signup";
import Tenders from "../pages/admin/tenders";
import CreateTender from "../pages/admin/create_tender";
import CreateLimitedTender from "../pages/admin/create_limited_tender";
import CreatExpressionInterestTender from "../pages/admin/create_expression_interest";
import CreateDirectPurchaseTender from "../pages/admin/create_direct_purchase_tender";
import Product from "../pages/products_trial";

const RoutesConfig: React.FC = () => {
  const routes = useRoutes([
    {
      path: "/home",
      element: <HomePage />,
      children: [{ path: "", element: <Tenders /> }],
    },

    { path: "/", element: <LoginPage /> },
    { path: "/signup", element: <SignupPage /> },

    {
      path: "create_tender",
      element: <HomePage />,
      children: [{ path: "", element: <CreateTender /> }],
    },
    { path: "/products", element: <Product /> },
    {
      path: "add_limited_tender",
      element: <HomePage />,
      children: [{ path: "", element: <CreateLimitedTender /> }],
    },
    {
      path: "add_expression_interest_tender",
      element: <HomePage />,
      children: [{ path: "", element: <CreatExpressionInterestTender /> }],
    },
    {
      path: "add_direct_purchase_tender",
      element: <HomePage />,
      children: [{ path: "", element: <CreateDirectPurchaseTender/> }],
    },
  ]);

  return routes;
};

export default RoutesConfig;
