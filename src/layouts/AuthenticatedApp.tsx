import { Outlet } from "react-router-dom";
import { Layout } from "./index";

export const AuthenticatedApp = () => {
    return (
        <Layout>
            <Outlet />
        </Layout>
    );
};
