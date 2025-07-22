import handleTwitchEvent from "./twitch";

export default function handleFirebotEvent(event: IncomingEvent) {
    switch (event.source.id) {
        case "twitch":
            handleTwitchEvent(event);
            break;
        default:
            break;
    }
}