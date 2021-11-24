import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../components/Home';
import RedirectPage from '../components/RedirectPage';
import Dashboard from '../components/Dashboard';
import NotFoundPage from '../components/NotFoundPage';

class AppRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="main">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/redirect" element={<RedirectPage />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route component={<NotFoundPage />} />
                    </Routes>
                </div>
            </BrowserRouter>
        );
    }
}
export default AppRouter;