export type Emoji = {
    code: string[],
    emoji: string,
    name: string,
    category: string,
    subcategory: string
}

export type EmojiData = {
    "@version": string,
    "@author": string,
    "@copyright": string,
    "@see": string,
    "@license": string,
    emojis: Emoji[]
}