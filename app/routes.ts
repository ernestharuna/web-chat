import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),

    // route('URL', 'path to File')
    layout("auth/layout.tsx", [
        route("login", "./auth/login/login.tsx"),
        route("register", "./auth/register/register.tsx"),
    ]),

    layout("layout.tsx", [
        route("chats", "./chats/chats.tsx"),
    ]),

] satisfies RouteConfig;
