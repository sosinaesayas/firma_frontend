import { useRoutes } from "react-router-dom";
import HomePage from "../pages/admin/home_page";
import LoginPage from "../pages/login";
import SignupPage from "../pages/signup";
import Tenders from "../pages/admin/table_tenders";
import CreatePublicTender from "../pages/admin/create_public_tender";
import CreateLimitedTender from "../pages/admin/create_limited_tender";
import CreatExpressionInterestTender from "../pages/admin/create_expression_interest";
import CreateDirectPurchaseTender from "../pages/admin/create_direct_purchase_tender";
import TenderSidebarPage from "../pages/admin/tenders_page";
import Product from "../pages/products_trial";

const RoutesConfig: React.FC = () => {
  const routes = useRoutes([
    {
      path: "/tender-table",
      element: <HomePage />,
      children: [{ path: "", element: <Tenders /> }],
    },

    { path: "/", element: <LoginPage /> },
    { path: "/signup", element: <SignupPage /> },

    {
      path: "add-public-tender",
      element: <HomePage />,
      children: [{ path: "", element: <CreatePublicTender /> }],
    },
    { path: "/products", element: <Product /> },
    {
      path: "add-limited-tender",
      element: <HomePage />,
      children: [{ path: "", element: <CreateLimitedTender /> }],
    },
    {
      path: "add-expression-interest-tender",
      element: <HomePage />,
      children: [{ path: "", element: <CreatExpressionInterestTender /> }],
    },
    {
      path: "add-direct-purchase-tender",
      element: <HomePage />,
      children: [{ path: "", element: <CreateDirectPurchaseTender/> }],
    },
    {
      path: "tenders",
      element: <HomePage />,
      children: [{ path: "", element: <TenderSidebarPage/> }],
    },
  ]);

  return routes;
};

export default RoutesConfig;
