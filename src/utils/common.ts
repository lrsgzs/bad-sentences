﻿export async function commonFetch<T>(url: string, options?: RequestInit) {
    const response = await fetch(url, options);
    if (response.ok) {
        const data: T = await response.json();
        return data;
    } else {
        const errorData = await response.text();
        console.error('commonFetch error', response.status, errorData);
        // 在这里理论上搞 Today Eat Sentry 也不是不行，只是没必要
        throw new Error(errorData);
    }
}
