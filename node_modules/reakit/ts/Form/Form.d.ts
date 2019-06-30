import * as React from "react";
import { BoxOptions, BoxHTMLProps } from "../Box/Box";
import { unstable_FormStateReturn } from "./FormState";
export declare type unstable_FormOptions = BoxOptions & Pick<unstable_FormStateReturn<any>, "submit">;
export declare type unstable_FormHTMLProps = BoxHTMLProps & React.FormHTMLAttributes<any>;
export declare type unstable_FormProps = unstable_FormOptions & unstable_FormHTMLProps;
export declare const unstable_useForm: {
    (options?: unstable_FormOptions | undefined, htmlProps?: unstable_FormHTMLProps | undefined): unstable_FormHTMLProps;
    __keys: readonly any[];
    __propsAreEqual?: ((prev: BoxOptions & Pick<unstable_FormStateReturn<any>, "submit"> & React.HTMLAttributes<any> & React.RefAttributes<any> & {
        unstable_wrap?: ((children: React.ReactNode) => JSX.Element) | undefined;
    } & React.FormHTMLAttributes<any>, next: BoxOptions & Pick<unstable_FormStateReturn<any>, "submit"> & React.HTMLAttributes<any> & React.RefAttributes<any> & {
        unstable_wrap?: ((children: React.ReactNode) => JSX.Element) | undefined;
    } & React.FormHTMLAttributes<any>) => boolean) | undefined;
};
export declare const unstable_Form: import("reakit-system/src/createComponent").Component<"form", unstable_FormOptions>;
