import type { APIRequest } from "./interfaces/keystrike";

export const verifySeq = async (request: APIRequest) => {
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
	} catch (error) {
		console.error("Error in POST request:", error);
	}
};

export const verifyApprox = async (request: APIRequest) => {
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
	} catch (error) {
		console.error("Error in POST request:", error);
	}
};
