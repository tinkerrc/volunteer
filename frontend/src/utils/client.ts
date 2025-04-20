import { VolunteerService } from "@/proto/api/v1/api_pb";
import { createClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-web";
import { useMemo } from "react";

const transport = createConnectTransport({
    // baseUrl: "https://api.yolovms.org",
    baseUrl: "http://localhost:443",
});

export function useClient() {
    return useMemo(() => createClient(VolunteerService, transport), []);
}