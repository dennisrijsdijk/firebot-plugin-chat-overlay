import { Firebot } from "@crowbartools/firebot-custom-scripts-types";
import { setupBackend, cleanupBackend } from "./backend";
import globals from "./globals";
import { ScriptModules } from "./types/overrides";
import settings from "./backend/settings";

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
    // @ts-expect-error
    if (runRequest.scriptDataDir) {
      // @ts-expect-error
      globals.scriptDataPath = runRequest.scriptDataDir;
    } else {
      const scriptNameNormalized = (await script.getScriptManifest()).name.replace(/[#%&{}\\<>*?/$!'":@`|=\s-]+/g, "-").toLowerCase();
      globals.scriptDataPath = runRequest.modules.path.join(SCRIPTS_DIR, "..", "script-data", scriptNameNormalized);
    }
    if (!runRequest.modules.fs.existsSync(globals.scriptDataPath)) {
      runRequest.modules.fs.mkdirSync(globals.scriptDataPath, { recursive: true });
    }
    globals.scriptModules = runRequest.modules as ScriptModules;
    await setupBackend();
  },
  stop: async () => {
    await cleanupBackend();
  }
};

export default script;
