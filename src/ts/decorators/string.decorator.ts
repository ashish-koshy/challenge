export function join(key: string) {
    return (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ): void => {
        const originalMethod = descriptor.value;
        descriptor.value = function(...args: any[]) {
            const [arg] = args;
            (arg?.length) &&
            originalMethod.apply(this, [arg.join(key)]);
        };
    }
};

export function reverse(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
): void {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
        const [arg] = args;
        (arg?.length) &&
        originalMethod.apply(this, [arg.reverse()]);
    };
};


export function split(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
): void {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
        const [arg] = args;
        (typeof arg === 'string') &&
        originalMethod.apply(this, [arg.split('')]);
    };
};