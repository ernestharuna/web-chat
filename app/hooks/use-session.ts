import client from "~/lib/interceptor";
import Cookies from "js-cookie";
import { storageKeys } from "~/lib/keys";

export default function useSession() {
    async function validateSession() {
        try {
            const response = await client.get(`api/user`);
            storeUser(response?.data);
            return response?.data;
        } catch (error) {
            Cookies.remove(storageKeys.user);
            throw error;
        }
    }

    async function getUserType() {
        try {
            const user: User = await getUser();

            if (!user)
                return null;

            return user.accountType;
        } catch (error) {
            throw error;
        }
    }

    async function storeUser(user: User) {
        try {
            const data = JSON.stringify(user);
            Cookies.set(storageKeys.user, data, { expires: 1 });
        } catch (error) {
            throw error;
        }
    }

    async function getUser(): Promise<User> {
        const cookieData = Cookies.get(storageKeys.user);

        if (cookieData)
            try {
                return JSON.parse(cookieData) as User;
            } catch {
                Cookies.remove(storageKeys.user);
            }
        ;

        return await validateSession();
    }

    return { validateSession, getUserType, getUser };
}