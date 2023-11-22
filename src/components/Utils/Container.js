export const container_classes = [
    "max-w-full",
    "lg:max-w-8xl",
    "mx-auto",
    "px-6",
    "lg:px-8"
];

export const getContainerClasses = ( ...cls ) => {
    return [
        ...container_classes,
        ...cls
    ].join( " " );
}

export const isBrowser = typeof window !== "undefined";