/** @link https://github.com/TypeStrong/ts-loader/issues/37#issuecomment-381375624 */
declare const isBrowser: boolean;
declare const PORT: number;
declare const ENDPOINT_CLIENT: string;
declare const ENDPOINT_SERVER: string;
declare const window: any;

const _isBrowser = isBrowser;
const _PORT = PORT;
const _ENDPOINT_CLIENT = ENDPOINT_CLIENT;
const _ENDPOINT_SERVER = ENDPOINT_SERVER;
const _window = _isBrowser ? window : {};

export { _isBrowser as isBrowser };
export { _PORT as PORT };
export { _ENDPOINT_CLIENT as ENDPOINT_CLIENT };
export { _ENDPOINT_SERVER as ENDPOINT_SERVER };
export { _window as window };
