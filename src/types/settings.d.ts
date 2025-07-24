type SettingsDatabase = {
    // /me messages
    actionMakeMessageItalic: boolean;
    actionMakeMessageUserColor: boolean;

    // emotes
    showTwitchEmotes: boolean;
    showFrankerFaceZEmotes: boolean;
    showBetterTTVEmotes: boolean;
    showSevenTVEmotes: boolean;

    // shared chat
    showForeignSharedChatMessages: boolean;
    showSharedChatSourceChannel: boolean;

    customCss: string;
    showPronouns: boolean;
    showUserBadges: boolean;
    showUserColors: boolean;

    // chat lines
    maxChatLines: number;
    expireChatLines: boolean;
    maxChatLineDuration: number;
}