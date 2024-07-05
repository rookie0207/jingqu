import { provide, inject } from 'vue';

const EventBusKey = Symbol();

export const provideEventBus = () => {
    const eventBus = createEventBus();
    provide(EventBusKey, eventBus);
};

export const injectEventBus = () => {
    return inject(EventBusKey);
};

export const createEventBus = () => {
    const listeners = {};

    const on = (event, callback) => {
        if (!listeners[event]) {
            listeners[event] = [];
        }
        listeners[event].push(callback);
    };

    const emit = (event, data) => {
        if (listeners[event]) {
            listeners[event].forEach(callback => {
                callback(data);
            });
        }
    };

    return {
        on,
        emit
    };
};
