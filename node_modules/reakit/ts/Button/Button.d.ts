import * as React from "react";
import { TabbableOptions, TabbableHTMLProps } from "../Tabbable/Tabbable";
export declare type ButtonOptions = TabbableOptions;
export declare type ButtonHTMLProps = TabbableHTMLProps & React.ButtonHTMLAttributes<any>;
export declare type ButtonProps = ButtonOptions & ButtonHTMLProps;
export declare const useButton: {
    (options?: TabbableOptions | undefined, htmlProps?: ButtonHTMLProps | undefined): ButtonHTMLProps;
    __keys: readonly any[];
    __propsAreEqual?: ((prev: import("..").BoxOptions & {
        disabled?: boolean | undefined;
        focusable?: boolean | undefined;
        unstable_clickKeys?: string[] | undefined;
    } & React.HTMLAttributes<any> & React.RefAttributes<any> & {
        unstable_wrap?: ((children: React.ReactNode) => JSX.Element) | undefined;
    } & {
        disabled?: boolean | undefined;
    } & React.ButtonHTMLAttributes<any>, next: import("..").BoxOptions & {
        disabled?: boolean | undefined;
        focusable?: boolean | undefined;
        unstable_clickKeys?: string[] | undefined;
    } & React.HTMLAttributes<any> & React.RefAttributes<any> & {
        unstable_wrap?: ((children: React.ReactNode) => JSX.Element) | undefined;
    } & {
        disabled?: boolean | undefined;
    } & React.ButtonHTMLAttributes<any>) => boolean) | undefined;
};
export declare const Button: import("reakit-system/src/createComponent").Component<"button", TabbableOptions>;
