declare global {
    namespace NodeJS {
        interface ProcessEnv {
            botToken: string;
            guildId: string;
            environment: "dev" | "prod" | "debug";
            port: string;
            displayname : string;
            UseEmailForUserName: string;
        }
    }
}

export {};
