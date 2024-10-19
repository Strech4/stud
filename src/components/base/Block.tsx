"use client"
import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge';
import { motion } from "framer-motion"

interface BlockProps {
    className?: string;
    children?: ReactNode;
    initial?: { opacity: number; x: number };
    animate?: { opacity: number; x: number };
}

export const Block: React.FC<BlockProps> = ({ className, children, initial, animate, ...props }) => {
    return (
        <motion.div
            className={twMerge(
                "col-span-4 p-5",
                className
            )}
            initial={initial}
            animate={animate}
            {...props}
        >
            {children}
        </motion.div>
    )
}
