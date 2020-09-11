export const INCREMENT = "INCREMENT" as const;
export const DECREMENT = "DECREMENT" as const;

export const increment = (delta: number) => {
    return {
        type: INCREMENT,
        payload: {
            delta: delta
        }
    };
};

export const decrement = (delta: number) => {
    return {
        type: DECREMENT,
        payload: {
            delta: delta
        }
    }
}

export type CountAction = (
    | ReturnType<typeof increment>
    | ReturnType<typeof decrement>
);
