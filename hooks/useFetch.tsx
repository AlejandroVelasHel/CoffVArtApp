import {useState} from "react";

function isJson(str: string) {
    try {
        JSON.parse(str);
        return true
    } catch (e) {
        return false;
    }
}

export const useFetch = (baseUrl: string) => {
    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>(false);

    const fetchData = async (
        url: string,
        method: 'GET' | 'POST' | 'PUT' | 'DELETE',
        body: any = null,
        file: boolean = false
    ) => {
        try {
            setLoading(true);
            setError(null);
            const config: any = file
                ? {
                    method,
                    url: `${baseUrl}${url}`,
                    mode: "no-cors",
                    body,
                }
                : {
                    method,
                    url: `${baseUrl}${url}`,
                    mode: "no-cors",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                };

            const response = config.method === 'GET' || config.method === 'DELETE'
                ? await fetch(config.url, {
                    method: config.method,
                    headers: config.headers,
                })
                : await fetch(config.url, {
                    method: config.method,
                    headers: config.headers,
                    body: config.body,
                });

            if (!response.ok) {
                const errorCatched = await response.json();
                throw new Error(isJson(JSON.stringify({ ...errorCatched })) ? JSON.stringify({ ...errorCatched }) : errorCatched || errorCatched.error);
            }

            const json: any = await response.json();
            setData(json);
        } catch (errorCatched: any) {
            setError(isJson(errorCatched.message) ? JSON.parse(errorCatched.message) : errorCatched.message);
        } finally {
            setLoading(false);
        }
    };

    const get = (url: string) => fetchData(url, 'GET');
    const post = (url: string, body: any) => fetchData(url, 'POST', body);
    const postFile = (url: string, body: any) => fetchData(url, 'POST', body, true);
    const put = (url: string, body: any) => fetchData(url, 'PUT', body);
    const del = (url: string) => fetchData(url, 'DELETE');

    return {
        data,
        loading,
        error,
        get,
        post,
        postFile,
        put,
        del,
    };
};