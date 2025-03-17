/* tslint:disable */
/* eslint-disable */
/**
* @param {Memory} bytes
* @returns {string}
*/
export function base16_encode_lower(bytes: Memory): string;
/**
* @param {Memory} bytes
* @returns {string}
*/
export function base16_encode_upper(bytes: Memory): string;
/**
* @param {string} text
* @returns {Memory}
*/
export function base16_decode_mixed(text: string): Memory;
/**
* @param {string} text
* @returns {Memory}
*/
export function base16_decode_lower(text: string): Memory;
/**
* @param {string} text
* @returns {Memory}
*/
export function base16_decode_upper(text: string): Memory;
/**
* @param {Memory} data
* @returns {Memory}
*/
export function keccak256(data: Memory): Memory;
/**
*/
export class Keccak256Hasher {
  [Symbol.dispose](): void;
/**
*/
  constructor();
/**
* @returns {Keccak256Hasher}
*/
  clone(): Keccak256Hasher;
/**
* @param {Memory} data
*/
  update(data: Memory): void;
/**
* @returns {Memory}
*/
  finalize(): Memory;
}
/**
*/
export class Memory {
  [Symbol.dispose](): void;
/**
* @param {Uint8Array} inner
*/
  constructor(inner: Uint8Array);
/**
* @returns {number}
*/
  ptr(): number;
/**
* @returns {number}
*/
  len(): number;
/**
* @returns {Uint8Array}
*/
  get bytes(): Uint8Array;
}
/**
*/
export class NetworkMixin {
  [Symbol.dispose](): void;
/**
* @param {Memory} chain_memory
* @param {Memory} contract_memory
* @param {Memory} receiver_nonce
* @param {Memory} nonce_memory
*/
  constructor(chain_memory: Memory, contract_memory: Memory, receiver_nonce: Memory, nonce_memory: Memory);
/**
* @param {Memory} minimum_memory
* @returns {NetworkSecret}
*/
  generate(minimum_memory: Memory): NetworkSecret;
/**
* @param {Memory} secret_memory
* @returns {Memory}
*/
  verify_secret(secret_memory: Memory): Memory;
/**
* @param {Memory} proof_memory
* @returns {Memory}
*/
  verify_proof(proof_memory: Memory): Memory;
}
/**
*/
export class NetworkSecret {
  [Symbol.dispose](): void;
/**
* @returns {Memory}
*/
  to_secret(): Memory;
/**
* @returns {Memory}
*/
  to_proof(): Memory;
/**
* @returns {Memory}
*/
  to_value(): Memory;
}
/**
*/
export class Secp256k1SignatureAndRecovery {
  [Symbol.dispose](): void;
/**
* @returns {Memory}
*/
  to_bytes(): Memory;
}
/**
*/
export class Secp256k1SigningKey {
  [Symbol.dispose](): void;
/**
*/
  constructor();
/**
* @returns {Secp256k1SigningKey}
*/
  static random(): Secp256k1SigningKey;
/**
* @param {Memory} input
* @returns {Secp256k1SigningKey}
*/
  static from_bytes(input: Memory): Secp256k1SigningKey;
/**
* @returns {Memory}
*/
  to_bytes(): Memory;
/**
* @returns {Secp256k1VerifyingKey}
*/
  verifying_key(): Secp256k1VerifyingKey;
/**
* @param {Memory} hashed
* @returns {Secp256k1SignatureAndRecovery}
*/
  sign_prehash_recoverable(hashed: Memory): Secp256k1SignatureAndRecovery;
}
/**
*/
export class Secp256k1VerifyingKey {
  [Symbol.dispose](): void;
/**
* @param {Memory} input
* @returns {Secp256k1VerifyingKey}
*/
  static from_sec1_bytes(input: Memory): Secp256k1VerifyingKey;
/**
* @param {Memory} hashed
* @param {Secp256k1SignatureAndRecovery} signature
* @returns {Secp256k1VerifyingKey}
*/
  static recover_from_prehash(hashed: Memory, signature: Secp256k1SignatureAndRecovery): Secp256k1VerifyingKey;
/**
* @returns {Memory}
*/
  to_sec1_compressed_bytes(): Memory;
/**
* @returns {Memory}
*/
  to_sec1_uncompressed_bytes(): Memory;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_secp256k1signingkey_free: (a: number, b: number) => void;
  readonly secp256k1signingkey_new: () => number;
  readonly secp256k1signingkey_from_bytes: (a: number, b: number) => void;
  readonly secp256k1signingkey_to_bytes: (a: number) => number;
  readonly secp256k1signingkey_verifying_key: (a: number) => number;
  readonly secp256k1signingkey_sign_prehash_recoverable: (a: number, b: number, c: number) => void;
  readonly secp256k1signingkey_random: () => number;
  readonly __wbg_secp256k1signatureandrecovery_free: (a: number, b: number) => void;
  readonly secp256k1signatureandrecovery_to_bytes: (a: number) => number;
  readonly __wbg_secp256k1verifyingkey_free: (a: number, b: number) => void;
  readonly secp256k1verifyingkey_from_sec1_bytes: (a: number, b: number) => void;
  readonly secp256k1verifyingkey_recover_from_prehash: (a: number, b: number, c: number) => void;
  readonly secp256k1verifyingkey_to_sec1_compressed_bytes: (a: number) => number;
  readonly secp256k1verifyingkey_to_sec1_uncompressed_bytes: (a: number) => number;
  readonly __wbg_networksecret_free: (a: number, b: number) => void;
  readonly networksecret_to_secret: (a: number) => number;
  readonly networksecret_to_proof: (a: number) => number;
  readonly networksecret_to_value: (a: number) => number;
  readonly __wbg_networkmixin_free: (a: number, b: number) => void;
  readonly networkmixin_new: (a: number, b: number, c: number, d: number) => number;
  readonly networkmixin_generate: (a: number, b: number) => number;
  readonly networkmixin_verify_secret: (a: number, b: number) => number;
  readonly networkmixin_verify_proof: (a: number, b: number) => number;
  readonly keccak256: (a: number) => number;
  readonly __wbg_keccak256hasher_free: (a: number, b: number) => void;
  readonly keccak256hasher_new: () => number;
  readonly keccak256hasher_clone: (a: number) => number;
  readonly keccak256hasher_update: (a: number, b: number) => void;
  readonly keccak256hasher_finalize: (a: number) => number;
  readonly base16_encode_lower: (a: number, b: number) => void;
  readonly base16_encode_upper: (a: number, b: number) => void;
  readonly base16_decode_mixed: (a: number, b: number, c: number) => void;
  readonly base16_decode_lower: (a: number, b: number, c: number) => void;
  readonly base16_decode_upper: (a: number, b: number, c: number) => void;
  readonly __wbg_memory_free: (a: number, b: number) => void;
  readonly memory_new: (a: number, b: number) => number;
  readonly memory_ptr: (a: number) => number;
  readonly memory_len: (a: number) => number;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
