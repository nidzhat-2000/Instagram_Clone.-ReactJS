import PrivateRoute from "./components/PrivateRoute";
import AuthLayout from "./pages/auth";
import Home from "./pages/Home";
import Login from "./pages/Login";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },

  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
];

const authCheck = (router) =>
  routes.map((route) => {
    if (route?.auth) {
      route.element = <PrivateRoute>{route.element}</PrivateRoute>;
    }
    if (route?.children) {
      route.children = authCheck(route.children);
    }
  });

export default routes;
