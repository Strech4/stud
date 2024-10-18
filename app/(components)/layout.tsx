// Layout "/components"
import { ComponentsNavigation } from "@/components/componentsPage/ComponentsNavigation";
import { ReactNode } from "react";

export type LayoutParams<T extends Record<string, string> = {}> = {
    params: T;
    children?: ReactNode | undefined;
};

export default async function RouteLayout(props: LayoutParams<{}>) {
    return (
        <div className="min-h-screen flex flex-col">
            <ComponentsNavigation>{props.children}</ComponentsNavigation>
        </div>
    );
}
