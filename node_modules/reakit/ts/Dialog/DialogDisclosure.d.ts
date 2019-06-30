/// <reference types="react" />
import { HiddenDisclosureOptions, HiddenDisclosureHTMLProps } from "../Hidden/HiddenDisclosure";
export declare type DialogDisclosureOptions = HiddenDisclosureOptions;
export declare type DialogDisclosureHTMLProps = HiddenDisclosureHTMLProps;
export declare type DialogDisclosureProps = DialogDisclosureOptions & DialogDisclosureHTMLProps;
export declare const useDialogDisclosure: {
    (options?: HiddenDisclosureOptions | undefined, htmlProps?: import("..").ButtonHTMLProps | undefined): import("..").ButtonHTMLProps;
    __keys: readonly any[];
    __propsAreEqual?: ((prev: import("..").BoxOptions & {
        disabled?: boolean | undefined;
        focusable?: boolean | undefined;
        unstable_clickKeys?: string[] | undefined;
    } & Pick<Partial<import("..").HiddenStateReturn>, "visible"> & Pick<import("..").HiddenStateReturn, "unstable_hiddenId" | "toggle"> & import("react").HTMLAttributes<any> & import("react").RefAttributes<any> & {
        unstable_wrap?: ((children: import("react").ReactNode) => JSX.Element) | undefined;
    } & {
        disabled?: boolean | undefined;
    } & import("react").ButtonHTMLAttributes<any>, next: import("..").BoxOptions & {
        disabled?: boolean | undefined;
        focusable?: boolean | undefined;
        unstable_clickKeys?: string[] | undefined;
    } & Pick<Partial<import("..").HiddenStateReturn>, "visible"> & Pick<import("..").HiddenStateReturn, "unstable_hiddenId" | "toggle"> & import("react").HTMLAttributes<any> & import("react").RefAttributes<any> & {
        unstable_wrap?: ((children: import("react").ReactNode) => JSX.Element) | undefined;
    } & {
        disabled?: boolean | undefined;
    } & import("react").ButtonHTMLAttributes<any>) => boolean) | undefined;
};
export declare const DialogDisclosure: import("reakit-system/src/createComponent").Component<"button", HiddenDisclosureOptions>;
