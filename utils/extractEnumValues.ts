export const extractEnumValues = <T extends object>(en: T): (T[keyof T])[] => {
    return Object.values(en);
}