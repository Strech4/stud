import { cn } from '@/lib/utils';
import { ComponentPropsWithoutRef } from 'react'
import { CopyButton } from '../CopyButton';

export type MdxPreProps = ComponentPropsWithoutRef<"pre"> & {
    'data-language'?: string;
    "data-file-name"?: string;
    raw?: unknown;
};

export const MdxPre = ({ children, raw, ...props }: MdxPreProps) => {
    return (
        <div>
            <pre
                className={cn("relative overflow-auto lg:text-base")}
                style={{ marginTop: 0, marginBottom: 0, }}
                {...props}
            >
                <div className='flex justify-between w-full'>
                    <div>
                        {props["data-file-name"] ? props["data-file-name"] : null}
                    </div>
                    <div>
                        {props["data-language"] === "bash" ? (
                            <CopyButton text={raw} />
                        ) : (
                            props["data-language"]
                        )}
                    </div>
                </div>
                {children}
            </pre>
        </div>
    )
}
