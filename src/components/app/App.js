import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner";

const Error404Page = lazy(() => import('../pages/error404Page/Error404Page'));
const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleComicPage = lazy(() => import('../pages/singleComicPage/SingleComicPage'));

const App = () => {
    return (
        <Router>
            <div className="app">
                <AppHeader />
                <main>
                    <Suspense fallback={<Spinner />}>
                        <AnimatedRoutes />
                    </Suspense>
                </main>
            </div>
        </Router>
    );
};

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <SwitchTransition>
            <CSSTransition
                key={location.key}
                classNames="page"
                timeout={300}
                unmountOnExit
            >
                <Routes location={location}>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/comics" element={<ComicsPage />} />
                    <Route path="/comics/:comicId" element={<SingleComicPage />} />
                    <Route path="*" element={<Error404Page />} />
                </Routes>
            </CSSTransition>
        </SwitchTransition>
    );
};

export default App;