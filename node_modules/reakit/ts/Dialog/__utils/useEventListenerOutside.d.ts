import * as React from "react";
export declare function useEventListenerOutside(targetRef: React.RefObject<HTMLElement>, disclosureRef: React.RefObject<HTMLElement>, nestedDialogs: Array<React.RefObject<HTMLElement>>, event: string, listener?: (e: Event) => void, shouldListen?: boolean): void;
