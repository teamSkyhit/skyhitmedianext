type JsonPrimitive = string | number | boolean | null;
type JsonValue = JsonPrimitive | JsonValue[] | { [key: string]: JsonValue };

export interface ExternalLeadPayload {
  first_name: string;
  last_name: string;
  email: FormDataEntryValue | string | null;
  phone: FormDataEntryValue | string | null;
  company: string;
  source: string;
  status: string;
  metadata?: Record<string, JsonValue | FormDataEntryValue | null>;
}

const DEFAULT_API_BASE = "https://marketing.dxbhost.agency";

function trimTrailingSlash(value: string) {
  return value.replace(/\/+$/, "");
}

function isLocalDevelopment() {
  if (typeof window === "undefined") return false;

  return window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
}

export async function submitExternalLead(payload: ExternalLeadPayload) {
  const endpoint = process.env.NEXT_PUBLIC_EXTERNAL_LEADS_ENDPOINT;
  const apiKey = process.env.NEXT_PUBLIC_EXTERNAL_LEADS_API_KEY;
  const apiBase =
    process.env.NEXT_PUBLIC_EXTERNAL_LEADS_API_BASE ||
    process.env.NEXT_PUBLIC_API_BASE ||
    DEFAULT_API_BASE;

  const useLocalProxy = isLocalDevelopment();
  const url = useLocalProxy
    ? "/api/external-leads"
    : endpoint || (apiKey ? `${trimTrailingSlash(apiBase)}/api/v1/external-leads` : "");

  if (!url) {
    return;
  }

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (!useLocalProxy && apiKey) {
    headers["X-API-Key"] = apiKey;
  }

  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`External lead request failed with status ${response.status}`);
  }
}
