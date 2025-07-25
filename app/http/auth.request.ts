import client from "./client";

export default async function authRequest(credentials: { [k: string]: FormDataEntryValue }, url: string) {
    await client.get('sanctum/csrf-cookie');

    const formData = new FormData();

    for (const key in credentials)
        formData.append(key, credentials[key]);

    const response = await client.post(`api${url}`, formData);

    return response;
};