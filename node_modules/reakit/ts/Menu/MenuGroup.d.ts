/// <reference types="react" />
import { BoxOptions, BoxHTMLProps } from "../Box/Box";
export declare type MenuGroupOptions = BoxOptions;
export declare type MenuGroupHTMLProps = BoxHTMLProps;
export declare type MenuGroupProps = MenuGroupOptions & MenuGroupHTMLProps;
export declare const useMenuGroup: {
    (options?: BoxOptions | undefined, htmlProps?: BoxHTMLProps | undefined): BoxHTMLProps;
    __keys: readonly any[];
    __propsAreEqual?: ((prev: BoxOptions & import("react").HTMLAttributes<any> & import("react").RefAttributes<any> & {
        unstable_wrap?: ((children: import("react").ReactNode) => JSX.Element) | undefined;
    }, next: BoxOptions & import("react").HTMLAttributes<any> & import("react").RefAttributes<any> & {
        unstable_wrap?: ((children: import("react").ReactNode) => JSX.Element) | undefined;
    }) => boolean) | undefined;
};
export declare const MenuGroup: import("reakit-system/src/createComponent").Component<"div", BoxOptions>;
