import MainLayout from "@/layout/MainLayout";
import { Route, BrowserRouter , Routes } from "react-router-dom";

export default function AppRoutes () {
    return (
        <BrowserRouter >
            <MainLayout>
                <Routes>
                    <Route path="/" element={<div>Home Page</div>} />
                    <Route path="/about" element={<div>About Page</div>} />
                    <Route path="*" element={<div>404 Not Found</div>} />
                </Routes>
            </MainLayout>
        </BrowserRouter>
    );
}