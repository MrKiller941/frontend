import CAddProdPage from "../pages/CAddProdPage/CAddProdPage";
import CCatalogPage from "../pages/CCatalogPage/CCatalogPage";
import CDeleteProdPage from "../pages/CDeleteProdPage/CDeleteProdPage";
import CLogPage from "../pages/CLogPage/CLogPage";
import CRegPage from "../pages/CRegPage/CRegPage";

export const authRoutes = [
    {
        path: "/catalog",
        component: <CCatalogPage />
    },
    {
        path: "/products/add",
        component: <CAddProdPage />
    },
    {
        path: "/products/delete",
        component: <CDeleteProdPage />
    }
]

export const publicRoutes = [
    {
        path: "/",
        component: <CLogPage />
    },
    {
        path: "/register",
        component: <CRegPage />
    },
]