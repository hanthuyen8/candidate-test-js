export function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function fetchData(url: string) {
    const res = await fetch(url);
    if (res.ok) {
        return res.text();
    }
    throw new Error("Failed to fetch data");
}