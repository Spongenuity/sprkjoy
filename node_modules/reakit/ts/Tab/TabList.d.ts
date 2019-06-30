/// <reference types="react" />
import { BoxOptions, BoxHTMLProps } from "../Box/Box";
import { TabStateReturn } from "./TabState";
export declare type TabListOptions = BoxOptions & Pick<Partial<TabStateReturn>, "orientation">;
export declare type TabListHTMLProps = BoxHTMLProps;
export declare type TabListProps = TabListOptions & TabListHTMLProps;
export declare const useTabList: {
    (options?: TabListOptions | undefined, htmlProps?: BoxHTMLProps | undefined): BoxHTMLProps;
    __keys: readonly any[];
    __propsAreEqual?: ((prev: BoxOptions & Pick<Partial<TabStateReturn>, "orientation"> & import("react").HTMLAttributes<any> & import("react").RefAttributes<any> & {
        unstable_wrap?: ((children: import("react").ReactNode) => JSX.Element) | undefined;
    }, next: BoxOptions & Pick<Partial<TabStateReturn>, "orientation"> & import("react").HTMLAttributes<any> & import("react").RefAttributes<any> & {
        unstable_wrap?: ((children: import("react").ReactNode) => JSX.Element) | undefined;
    }) => boolean) | undefined;
};
export declare const TabList: import("reakit-system/src/createComponent").Component<"div", TabListOptions>;
