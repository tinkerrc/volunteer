import { type DescService } from "@bufbuild/protobuf";
import { Client, createClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-web";
import { useMemo } from "react";

const transport = createConnectTransport({
    baseUrl: "https://api.yolovms.org",
    // baseUrl: "http://localhost:443",
});

export function useClient<T extends DescService>(service: T): Client<T> {
    // We memoize the client, so that we only create one instance per service.
    return useMemo(() => createClient(service, transport), [service]);
}