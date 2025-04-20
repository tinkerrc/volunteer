import { createClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-web";
import { useMemo } from "react";
import { VolunteerService } from "../proto/api/v1/api_pb";

const transport = createConnectTransport({
    baseUrl: "https://api.yolovms.org"
})

function useClient(){
    return useMemo(() => createClient(VolunteerService, transport), [])
}

export default useClient