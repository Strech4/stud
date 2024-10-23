"use client";

import { Button } from "@/components/ui/button";
import { Clipboard, ClipboardCheck } from "lucide-react";
import { useState } from "react";

export const CopyButton = ({ text }: { text: any }) => {
    const [isCopied, setIsCopied] = useState(false);

    const copy = async () => {
        await navigator.clipboard.writeText(text);
        setIsCopied(true);

        setTimeout(() => {
            setIsCopied(false);
        }, 2500);
    };

    return (
        <Button size="icon" disabled={isCopied} onClick={copy}>
            {isCopied ? <ClipboardCheck size={16} /> : <Clipboard size={16} />}
        </Button>
    );
};
