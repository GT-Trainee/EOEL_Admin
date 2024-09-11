import React, { Suspense, Fragment, lazy } from 'react';
import { Routes, Navigate, Route } from 'react-router-dom';

// Project import
import Loader from './components/Loader/Loader';
import AdminLayout from './layouts/AdminLayout';

import { BASE_URL } from './config/constant';

// ==============================|| ROUTES ||============================== //

const renderRoutes = (routes = []) => (
  <Suspense fallback={<Loader />}>
    <Routes>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Element = route.element;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            element={
              <Guard>
                <Layout>{route.routes ? renderRoutes(route.routes) : <Element props={true} />}</Layout>
              </Guard>
            }
          />
        );
      })}
    </Routes>
  </Suspense>
);

export const routes = [
  {
    path: '/',
    element: () => <Navigate to="/auth/signin-1" /> // Redirect to SignIn1 initially
  },
  {
    exact: 'true',
    path: '/auth/signup-1',
    element: lazy(() => import('./views/auth/signup/SignUp1'))
  },
  {
    exact: 'true',
    path: '/auth/signin-1',
    element: lazy(() => import('./views/auth/signin/SignIn1'))
  },
  {
    exact: 'true',
    path: '/auth/reset-password-1',
    element: lazy(() => import('./views/auth/reset-password/ResetPassword1'))
  },
  {
    path: '*',
    layout: AdminLayout,
    routes: [
      {
        exact: 'true',
        path: '/app/dashboard/analytics',
        element: lazy(() => import('./views/dashboard'))
      },
      {
        exact: 'true',
        path: '/FileUpload/FileUpload',
        element: lazy(() => import('./modules/UploadFile/UploadFile'))
      },
      {
        exact: 'true',
        path: '/user/AddUser',
        element: lazy(() => import('./modules/User/Add/AddUser'))
      },
      {
        exact: 'true',
        path: '/user/editDetails',
        element: lazy(() => import('./modules/User/Edit/EditDetails'))
      },
      {
        exact: 'true',
        path: '/user/UserDetails',
        element: lazy(() => import('./modules/User/UserDetails'))
      },
      {
        exact: 'true',
        path: '/user/UserMapping',
        element: lazy(() => import('./modules/UserMapping/UserMappingForm'))
      },
      {
        exact: 'true',
        path: '/Roles/Roles',
        element: lazy(() => import('./modules/Roles/Roles'))
      },
      {
        exact: 'true',
        path: '/Roles/RoleMapping',
        element: lazy(() => import('./modules/RolesMapping/RoleMappingForm'))
      },
      {
        exact: 'true',
        path: '/Roles/AddRoles',
        element: lazy(() => import('./modules/Roles/Add/AddRoles'))
      },
      {
        exact: 'true',
        path: '/Reports/IndianRailwayReport',
        element: lazy(() => import('./modules/Reports/IndianRailwayReport'))
      },
      {
        exact: 'true',
        path: '/basic/collapse',
        element: lazy(() => import('./views/ui-elements/BasicCollapse'))
      },
      {
        exact: 'true',
        path: '/basic/typography',
        element: lazy(() => import('./views/ui-elements/BasicTypography'))
      },
      {
        exact: 'true',
        path: '/basic/tooltip-popovers',
        element: lazy(() => import('./views/ui-elements/BasicTooltipsPopovers'))
      },
      {
        exact: 'true',
        path: '/sample-page',
        element: lazy(() => import('./views/extra/SamplePage'))
      },
      {
        path: '*',
        exact: 'true',
        element: () => <Navigate to={BASE_URL} />
      }
    ]
  }
];

export default renderRoutes;
