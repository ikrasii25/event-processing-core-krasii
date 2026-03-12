"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processEvent = processEvent;
exports.logEvent = logEvent;
function processEvent(event) {
    if (!event) {
        return "Empty event";
    }
    const message = `[EVENT]: ${event}`;
    console.log(`Log event: ${event}`);
    return message;
}
function logEvent(event) {
    console.log(`Log event: ${event}`);
}
//# sourceMappingURL=core.js.map