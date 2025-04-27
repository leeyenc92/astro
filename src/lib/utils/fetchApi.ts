interface Props {
  endpoint: string;
  query?: Record<string, string | true>;
  wrappedByKey?: string;
  wrappedByList?: boolean;
}

function buildQuery(query: Record<string, string | true>): string {
  return Object.entries(query)
    .map(([key, value]) => {
      if (value === true) return encodeURIComponent(key); // Only key
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`; // key=value
    })
    .join("&");
}

export default async function fetchApi<T>({
  endpoint,
  query,
  wrappedByKey,
  wrappedByList,
}: Props): Promise<T> {
  if (endpoint.startsWith("/")) {
    endpoint = endpoint.slice(1);
  }
  const baseUrl = `${import.meta.env.PUBLIC_STRAPI_API_URL || "http://localhost:1337"}/api/${endpoint}`;
  const queryString = query ? `?${buildQuery(query)}` : "";
  const url = baseUrl + queryString;

  const res = await fetch(url);
  let data = await res.json();
  
  if (wrappedByKey) {
    data = data[wrappedByKey];
  }

  if (wrappedByList) {
    data = data[0];
  }

  return data as T;
}
