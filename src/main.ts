import { Firebot } from "@crowbartools/firebot-custom-scripts-types";

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
  run: (runRequest) => {

  },
};

export default script;
