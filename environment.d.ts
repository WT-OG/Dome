declare global {
    namespace NodeJS {
        interface ProcessEnv
        {
            Token: string;
            ServerId: string;
            environment : "dev" | "prod" | "debug";
        }
    }
}

export{};