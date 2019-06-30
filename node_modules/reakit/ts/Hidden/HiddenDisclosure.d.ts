/// <reference types="react" />
import { ButtonOptions, ButtonHTMLProps } from "../Button/Button";
import { HiddenStateReturn } from "./HiddenState";
export declare type HiddenDisclosureOptions = ButtonOptions & Pick<Partial<HiddenStateReturn>, "visible"> & Pick<HiddenStateReturn, "toggle" | "unstable_hiddenId">;
export declare type HiddenDisclosureHTMLProps = ButtonHTMLProps;
export declare type HiddenDisclosureProps = HiddenDisclosureOptions & HiddenDisclosureHTMLProps;
export declare const useHiddenDisclosure: {
    (options?: HiddenDisclosureOptions | undefined, htmlProps?: ButtonHTMLProps | undefined): ButtonHTMLProps;
    __keys: readonly any[];
    __propsAreEqual?: ((prev: import("..").BoxOptions & {
        disabled?: boolean | undefined;
        focusable?: boolean | undefined;
        unstable_clickKeys?: string[] | undefined;
    } & Pick<Partial<HiddenStateReturn>, "visible"> & Pick<HiddenStateReturn, "unstable_hiddenId" | "toggle"> & import("react").HTMLAttributes<any> & import("react").RefAttributes<any> & {
        unstable_wrap?: ((children: import("react").ReactNode) => JSX.Element) | undefined;
    } & {
        disabled?: boolean | undefined;
    } & import("react").ButtonHTMLAttributes<any>, next: import("..").BoxOptions & {
        disabled?: boolean | undefined;
        focusable?: boolean | undefined;
        unstable_clickKeys?: string[] | undefined;
    } & Pick<Partial<HiddenStateReturn>, "visible"> & Pick<HiddenStateReturn, "unstable_hiddenId" | "toggle"> & import("react").HTMLAttributes<any> & import("react").RefAttributes<any> & {
        unstable_wrap?: ((children: import("react").ReactNode) => JSX.Element) | undefined;
    } & {
        disabled?: boolean | undefined;
    } & import("react").ButtonHTMLAttributes<any>) => boolean) | undefined;
};
export declare const HiddenDisclosure: import("reakit-system/src/createComponent").Component<"button", HiddenDisclosureOptions>;
