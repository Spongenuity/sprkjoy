import * as React from "react";
import { ButtonOptions, ButtonHTMLProps } from "../Button/Button";
import { unstable_FormStateReturn } from "./FormState";
export declare type unstable_FormSubmitButtonOptions = ButtonOptions & Pick<Partial<unstable_FormStateReturn<any>>, "submitting"> & Pick<unstable_FormStateReturn<any>, "baseId" | "submit">;
export declare type unstable_FormSubmitButtonHTMLProps = ButtonHTMLProps;
export declare type unstable_FormSubmitButtonProps = unstable_FormSubmitButtonOptions & unstable_FormSubmitButtonHTMLProps;
export declare const unstable_useFormSubmitButton: {
    (options?: unstable_FormSubmitButtonOptions | undefined, htmlProps?: ButtonHTMLProps | undefined): ButtonHTMLProps;
    __keys: readonly any[];
    __propsAreEqual?: ((prev: import("..").BoxOptions & {
        disabled?: boolean | undefined;
        focusable?: boolean | undefined;
        unstable_clickKeys?: string[] | undefined;
    } & Pick<Partial<unstable_FormStateReturn<any>>, "submitting"> & Pick<unstable_FormStateReturn<any>, "submit" | "baseId"> & React.HTMLAttributes<any> & React.RefAttributes<any> & {
        unstable_wrap?: ((children: React.ReactNode) => JSX.Element) | undefined;
    } & {
        disabled?: boolean | undefined;
    } & React.ButtonHTMLAttributes<any>, next: import("..").BoxOptions & {
        disabled?: boolean | undefined;
        focusable?: boolean | undefined;
        unstable_clickKeys?: string[] | undefined;
    } & Pick<Partial<unstable_FormStateReturn<any>>, "submitting"> & Pick<unstable_FormStateReturn<any>, "submit" | "baseId"> & React.HTMLAttributes<any> & React.RefAttributes<any> & {
        unstable_wrap?: ((children: React.ReactNode) => JSX.Element) | undefined;
    } & {
        disabled?: boolean | undefined;
    } & React.ButtonHTMLAttributes<any>) => boolean) | undefined;
};
export declare const unstable_FormSubmitButton: import("reakit-system/src/createComponent").Component<"button", unstable_FormSubmitButtonOptions>;
