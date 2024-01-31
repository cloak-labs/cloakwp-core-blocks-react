/// <reference types="react" resolution-mode="require"/>
export declare const button: (userOverrides?: Partial<{
    variantsRouter: (block: import("cloakcms").BlockDataWithExtraContext<import("react").ComponentClass<any, any> | import("react").FunctionComponent<any>, import("cloakwp").RestApiBlockData>) => "link" | "default";
    variants: {
        default: {
            dataRouter: import("cloakwp").WPDataRouter;
            component: import("react").ForwardRefExoticComponent<import("react").ButtonHTMLAttributes<HTMLButtonElement> & {
                variants?: import("@cloakui/react-primitives").ButtonVariants;
                children?: import("react").ReactNode;
                asChild?: boolean;
            } & import("react").RefAttributes<HTMLButtonElement>>;
        };
        link: {
            dataRouter: import("cloakwp").WPDataRouter;
            component: ({ href, children, ...rest }: any) => import("react/jsx-runtime").JSX.Element;
        };
    };
}>) => import("@cloakwp/react").WPBlocksConfigReact;