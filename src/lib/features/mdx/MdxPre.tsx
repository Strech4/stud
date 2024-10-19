import { cn } from '@/lib/utils';
import { ComponentPropsWithoutRef, ReactNode } from 'react'

export type MdxPreProps = ComponentPropsWithoutRef<"pre"> & {
    'data-language'?: string;
    "data-file-name"?: string;
};

export const MdxPre = ({ children, ...props }: MdxPreProps) => {
    return (
        <div className='bg-accent'>
            <div className='flex justify-between w-fiull'>
                <div>
                    {props["data-file-name"] ? props["data-file-name"] : null}
                </div>
                <div>
                    {props["data-language"] ? props["data-language"] : null}
                </div>
            </div>
            <pre
                className={cn("relative overflow-auto lg:text-base")}
                style={{ marginTop: 0, marginBottom: 0, }}
                {...props}
            >
                {children}
            </pre>
        </div>
    )
}
