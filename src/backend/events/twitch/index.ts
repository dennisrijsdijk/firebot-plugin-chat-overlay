import handleAnnouncementEvent from "./announcement";
import handleBanOrTimeoutEvent from "./ban-timeout";
import handleChatClearedEvent from "./chat-cleared";
import handleChatMessageEvent from "./chat-message";
import handleChatMessageDeletedEvent from "./chat-message-deleted";

export default function handleTwitchEvent(event: IncomingEvent) {
    switch (event.event.id) {
        case "announcement":
            handleAnnouncementEvent(event.meta as AnnouncementMetadata);
            break;
        case "banned":
        case "timeout":
            handleBanOrTimeoutEvent(event.meta as BanMetadata | TimeoutMetadata);
            break;
        case "chat-cleared":
            handleChatClearedEvent();
            break;
        case "chat-message-deleted":
            handleChatMessageDeletedEvent(event.meta as ChatMessageDeletedMetadata);
            break;
        case "chat-message":
            handleChatMessageEvent(event.meta as ChatMessageMetadata);
            break;
        default:
            break;
    }
}