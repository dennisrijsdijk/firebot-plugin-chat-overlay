import globals from "../globals";
import { JsonDB, Config } from "node-json-db";

const defaultSettings: SettingsDatabase = {
    actionMakeMessageItalic : true,
    actionMakeMessageUserColor : false,

    showTwitchEmotes : true,
    showFrankerFaceZEmotes : false,
    showBetterTTVEmotes : false,
    showSevenTVEmotes : false,

    showForeignSharedChatMessages : false,
    showSharedChatSourceChannel : true, // future feature

    customCss : "",
    showPronouns : false,
    showUserBadges : true,
    showUserColors : true,

    maxChatLines : 10,
    expireChatLines : true,
    maxChatLineDuration : 10
};

class ChatOverlaySettings {
    private _settingsStore: Partial<SettingsDatabase> = {};
    private _db: JsonDB;

    async setupDatabase() {
        this._db = new JsonDB(new Config(globals.scriptModules.path.join(globals.scriptDataPath, "settings.json"), true, true, '/'));
        await this._db.load();
        this._settingsStore = await this._db.getData("/");
        for (const [key, value] of Object.entries(defaultSettings)) {
            if (!(key in this._settingsStore)) {
                await this._db.push(`/${key}`, value, true);
                // @ts-expect-error
                this._settingsStore[key] = value; // Update the in-memory store as well
            }
        }
    }

    get(key: keyof SettingsDatabase): SettingsDatabase[keyof SettingsDatabase] {
        return this._settingsStore[key] as SettingsDatabase[keyof SettingsDatabase];
    }

    async set<TSetting extends keyof SettingsDatabase>(key: TSetting, value: SettingsDatabase[TSetting]): Promise<void> {
        this._settingsStore[key] = value;
        await this._db.push(`/${key}`, value, true);
    }
}

export default new ChatOverlaySettings();