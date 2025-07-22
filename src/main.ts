import { Firebot } from "@crowbartools/firebot-custom-scripts-types";
import { setupBackend, cleanupBackend } from "./backend";
import globals from "./globals";
import { ScriptModules } from "./types/overrides";

interface Params {

}

const script: Firebot.CustomScript<Params> = {
  getScriptManifest: () => {
    return {
      name: "Chat Overlay",
      description: "A Firebot plugin to display chat messages in an overlay",
      author: "DennisOnTheInternet",
      version: "1.0",
      firebotVersion: "5",
      startupOnly: true
    };
  },
  getDefaultParameters: () => {
    return {

    };
  },
  run: async (runRequest) => {
    globals.accounts = runRequest.firebot.accounts;
    globals.scriptModules = runRequest.modules as ScriptModules;
    await setupBackend();
  },
  stop: async () => {
    await cleanupBackend();
  }
};

export default script;
