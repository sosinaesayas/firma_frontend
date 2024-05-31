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
import PostTendersPage from "../pages/admin/tenders_page";
import Product from "../pages/products_trial";
import SignUp from "../pages/company/SignUp";
import ProtectedRoute from "./protected_route";
import CompanyHomePage from "../pages/company/company_home";
import BidTender1 from "../pages/company/bid_tender_1";
import AllTenders from "../pages/company/all_tenders";
import BidExpressionOfInterestPage from "../pages/company/bid_expression_of_interest";
import BidTender2 from "../pages/company/bid_tender_2";


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

      path: "/admin",
      element: (
        <ProtectedRoute allowedRoles={["Admin"]}>
          <HomePage />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "",
          element: <Tenders />,
        },

        {
          path: "add-public-tender",
          element: <CreatePublicTender />,
        },
        { path: "products", element: <Product /> },
        {
          path: "add-limited-tender",
          element: <CreateLimitedTender />,
        },
        {
          path: "add-expression-interest-tender",
          element: <CreatExpressionInterestTender />,
        },
        {
          path: "add-direct-purchase-tender",
          element: <CreateDirectPurchaseTender />,
        },
        {
          path: "post-tenders",
          element: <PostTendersPage />,
        },
      ],
    },
    {
      path: "/company/",
      element: <CompanyHomePage />,
      children: [
        {
          path: "",
          element: <AllTenders />,
        },
        {
          path: "bid-eoi/:tenderId",
          element: <BidExpressionOfInterestPage />,
        },
        {
          path: "bid-tender-1",
          element: <BidTender1 />,
        },
        {
          path: "bid-tender-2",
          element: <BidTender2 />,
        },
      ],
    },

    { path: "/", element: <LoginPage /> },
    { path: "/signup", element: <SignUp /> },

  ]);

  return routes;
};

export default RoutesConfig;
