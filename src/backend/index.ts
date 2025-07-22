import * as overlay from "../overlay";
import handleFirebotEvent from "./events";
import globals from "../globals";

export async function setupBackend() {
    const { eventManager, httpServer } = globals.scriptModules;

    httpServer.registerCustomRoute("chat-overlay", "", "GET", async (req, res) => {
        res.setHeader("Content-Type", "text/html");
        res.end(overlay.template);
    });

    httpServer.registerCustomRoute("chat-overlay", "chat.css", "GET", async (req, res) => {
        res.setHeader("Content-Type", "text/css");
        res.end(overlay.styles);
    });

    httpServer.registerCustomRoute("chat-overlay", "chat.js", "GET", async (req, res) => {
        res.setHeader("Content-Type", "application/javascript");
        res.end(overlay.script);
    });

    eventManager.on("event-triggered", handleFirebotEvent);
};

export async function cleanupBackend() {
    const { eventManager, httpServer } = globals.scriptModules;

    httpServer.unregisterCustomRoute("chat-overlay", "", "GET");
    httpServer.unregisterCustomRoute("chat-overlay", "chat.css", "GET");
    httpServer.unregisterCustomRoute("chat-overlay", "chat.js", "GET");

    eventManager.off("event-triggered", handleFirebotEvent);
}