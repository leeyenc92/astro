

export default function buildQuery(query: Record<string, string | true>): string {
    return Object.entries(query)
        .map(([key, value]) => {
            if (value === true) return encodeURIComponent(key); // Only key
            return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`; // key=value
        })
        .join("&");
}
