"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyApprox = exports.verifySeq = void 0;
const verifySeq = async (request) => {
    try {
        const response = await fetch(request.url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(request.data),
        });
        if (!response.ok) {
            throw new Error("Failed to send request");
        }
        return await response.json();
    }
    catch (error) {
        console.error("Error in POST request:", error);
    }
};
exports.verifySeq = verifySeq;
const verifyApprox = async (request) => {
    try {
        const response = await fetch(request.url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(request.data),
        });
        if (!response.ok) {
            throw new Error("Failed to send attestations");
        }
        return await response.json();
    }
    catch (error) {
        console.error("Error in POST request:", error);
    }
};
exports.verifyApprox = verifyApprox;
