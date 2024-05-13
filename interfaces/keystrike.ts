interface Attestation {
	cseq: number;
	signature: string;
}

interface Data {
	attestations: Attestation[];
	message: string;
	public_key: string;
	alg?: string;
}

export type APIRequest = {
	url: string;
	data: Data;
};
