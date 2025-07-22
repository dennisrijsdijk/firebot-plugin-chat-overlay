type FirebotParsedMessagePart = {
    type: string;
    id?: string;
    text?: string;
    name?: string;
    origin?: string;
    position?: number;
    flagged?: boolean;
    length?: number;
    url?: string;
    animatedUrl?: string;
    amount?: number;
    color?: string;
};

type FirebotChatMessage = {
    id: string;
    username: string;
    userId: string;
    userDisplayName?: string;
    profilePicUrl?: string;
    isExtension?: boolean;
    roles: string[];
    badges: unknown[];
    customRewardId?: string;
    color?: string;
    rawText: string;
    parts: FirebotParsedMessagePart[];
    whisper: boolean;
    whisperTarget?: string;
    action: boolean;
    isAnnouncement?: boolean;
    announcementColor?: "PRIMARY" | "BLUE" | "GREEN" | "ORANGE" | "PURPLE";
    tagged: boolean;
    isFounder?: boolean;
    isBroadcaster?: boolean;
    isBot?: boolean;
    isMod?: boolean;
    isSubscriber?: boolean;
    isVip?: boolean;
    isCheer?: boolean;
    isHighlighted?: boolean;
    isAutoModHeld?: boolean;
    autoModStatus?: string;
    autoModReason?: string;
    isFirstChat?: boolean;
    isReturningChatter?: boolean;
    isRaider?: boolean;
    raidingFrom?: string;
    isSuspiciousUser?: boolean;
    isReply?: boolean;
    replyParentMessageId?: string;
    replyParentMessageText?: string;
    replyParentMessageSenderUserId?: string;
    replyParentMessageSenderDisplayName?: string;
    threadParentMessageId?: string;
    threadParentMessageSenderUserId?: string;
    threadParentMessageSenderDisplayName?: string;
    isSharedChatMessage: boolean;
    sharedChatRoomId?: string;
};

type AnnouncementMetadata = {
    username: string;
    userId: string;
    userDisplayName: string;
    twitchUserRoles: unknown[];
    messageText: string;
    messageId: string;
}

type BanMetadata = {
    username: string;
    userId: string;
    userDisplayName: string;
    moderatorUsername: string;
    moderatorId: string;
    moderatorDisplayName: string;
    moderator: string;
    modReason: string;
}

type TimeoutMetadata = {
    username: string;
    userId: string;
    userDisplayName: string;
    moderatorUsername: string;
    moderatorId: string;
    moderatorDisplayName: string;
    moderator: string;
    timeoutDuration: string | number;
    modReason: string;
}

type ChatMessageDeletedMetadata = {
    username: string;
    messageText: string;
    messageId: string;
}

type ChatMessageMetadata = {
    username: string;
    userId: string;
    userDisplayName: string;
    twitchUserRoles: unknown[];
    messageText: string;
    messageId: string;
    chatMessage: FirebotChatMessage;
}

type IncomingEvent<T = unknown> = {
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
    meta: T;
    isManual: boolean;
    isRetrigger: boolean;
}