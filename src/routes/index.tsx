import MainLayout from "@/layout/MainLayout";
import UnknowPage from "@/pages/404Page";
import HomePage from "@/pages/HomePage";
import { Route, BrowserRouter , Routes } from "react-router-dom";

export default function AppRoutes () {
    return (
        <BrowserRouter >
            <MainLayout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<UnknowPage />} />
                </Routes>
            </MainLayout>
        </BrowserRouter>
    );
}