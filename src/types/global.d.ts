declare const SCRIPTS_DIR: string;

declare module '*.html' {
    const value: string;
    export default value;
}

declare module '*.css' {
    const value: string;
    export default value;
}

declare module '*.raw.js' {
    const value: string;
    export default value;
}