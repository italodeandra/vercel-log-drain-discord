export default interface Log {
    id: string
    message: string
    timestamp: string
    source: "build" | "static" | "external" | "lambda"
    projectId: string
    deploymentId: string
    buildId: string
    host: string

    type?: "stdout" | "stderr"
    entrypoint?: string

    requestId?: string
    statusCode?: string
    destination?: string
    path?: string
    proxy?: {
        timestamp: string
        method: string
        scheme: string
        host: string
        path: string
        userAgent: string
        referer: string
        statusCode: string
        clientIp: string
        region: string
        cacheId: string
    }
}