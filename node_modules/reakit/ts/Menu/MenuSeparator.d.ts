/// <reference types="react" />
import { SeparatorOptions, SeparatorHTMLProps } from "../Separator/Separator";
export declare type MenuSeparatorOptions = SeparatorOptions;
export declare type MenuSeparatorHTMLProps = SeparatorHTMLProps;
export declare type MenuSeparatorProps = MenuSeparatorOptions & MenuSeparatorHTMLProps;
export declare const useMenuSeparator: {
    (options?: SeparatorOptions | undefined, htmlProps?: import("..").BoxHTMLProps | undefined): import("..").BoxHTMLProps;
    __keys: readonly any[];
    __propsAreEqual?: ((prev: import("..").BoxOptions & {
        orientation?: "horizontal" | "vertical" | undefined;
    } & import("react").HTMLAttributes<any> & import("react").RefAttributes<any> & {
        unstable_wrap?: ((children: import("react").ReactNode) => JSX.Element) | undefined;
    }, next: import("..").BoxOptions & {
        orientation?: "horizontal" | "vertical" | undefined;
    } & import("react").HTMLAttributes<any> & import("react").RefAttributes<any> & {
        unstable_wrap?: ((children: import("react").ReactNode) => JSX.Element) | undefined;
    }) => boolean) | undefined;
};
export declare const MenuSeparator: import("reakit-system/src/createComponent").Component<"hr", SeparatorOptions>;
