import { RunRequest } from "@crowbartools/firebot-custom-scripts-types";
import { ScriptModules } from "./types/overrides";

class PluginGlobals {
    private _accounts: RunRequest<{}>["firebot"]["accounts"];
    private _scriptModules: ScriptModules;

    get accounts(): RunRequest<{}>["firebot"]["accounts"] {
        return this._accounts;
    }

    set accounts(accounts: RunRequest<{}>["firebot"]["accounts"]) {
        this._accounts = accounts;
    }

    get scriptModules(): ScriptModules {
        return this._scriptModules;
    }

    set scriptModules(modules: ScriptModules) {
        this._scriptModules = modules;
    }
}

export default new PluginGlobals();