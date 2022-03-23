import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();


const AppRouter = () => (
    <HistoryRouter history={history}>
        <div>
            <Routes>
                <Route
                    path="/"
                    element={
                        <PublicRoute>
                            <LoginPage />
                        </PublicRoute>
                    }
                />
                <Route
                    path="dashboard"
                    element={
                        <PrivateRoute>
                            <DashboardPage />
                        </PrivateRoute>
                    } />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>

    </HistoryRouter>
)

export default AppRouter;

//                 <Route path="login" element={<LoginPage />} />