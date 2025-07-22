type IncomingEvent = {
    event: {
        cached: boolean;
        description: string;
        id: string;
        manualMetadata: unknown;
        name: string;
        queued: boolean;
        sourceId: string;
    };
    source: {
        description: string;
        id: string;
        name: string;
        events: unknown[];
    };
    meta: unknown;
    isManual: boolean;
    isRetrigger: boolean;
}