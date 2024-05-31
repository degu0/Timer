import { Route, Routes } from "react-router-dom";

import { Home } from "./page/Home";
import { Histoy } from "./page/History";
import { DefaultLayout } from "./layout/DefaultLayout";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/history" element={<Histoy />} />
            </Route>
        </Routes>
    );
}