import { ScriptModules as FirebotScriptModules } from "@crowbartools/firebot-custom-scripts-types"
import { EventEmitter } from "node:events"

type HttpServerManagerOverride = FirebotScriptModules["httpServer"] & EventEmitter;
type EventManagerOverride = FirebotScriptModules["eventManager"] & EventEmitter;

type ScriptModules = FirebotScriptModules & {
    httpServer: HttpServerManagerOverride;
    eventManager: EventManagerOverride;
}