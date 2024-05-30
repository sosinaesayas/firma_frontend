import { useRoutes } from "react-router-dom";
import HomePage from "../pages/admin/home_page";
import LoginPage from "../pages/login";
import Tenders from "../pages/admin/table_tenders";
import CreatePublicTender from "../pages/admin/create_public_tender";
import CreateLimitedTender from "../pages/admin/create_limited_tender";
import CreatExpressionInterestTender from "../pages/admin/create_expression_interest";
import CreateDirectPurchaseTender from "../pages/admin/create_direct_purchase_tender";
import PostTendersPage from "../pages/admin/tenders_page";
import Product from "../pages/products_trial";
import SignUp from "../pages/company/SignUp";
import ProtectedRoute from "./protected_route";

const RoutesConfig: React.FC = () => {
  const routes = useRoutes([
    {
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

    { path: "/", element: <LoginPage /> },
    { path: "/signup", element: <SignUp /> },
  ]);

  return routes;
};

export default RoutesConfig;
