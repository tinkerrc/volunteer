import { createConnectTransport } from "@connectrpc/connect-web";

export const transport = createConnectTransport({
    baseUrl: "https://api.yolovms.org",
    // baseUrl: "http://localhost:443",
});