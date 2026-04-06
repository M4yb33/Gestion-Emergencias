import React, { ReactNode } from "react";
import { X } from "@phosphor-icons/react";

interface ContextDrawerProps {
    open: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
}

const ContextDrawer: React.FC<ContextDrawerProps> = ({
    open,
    onClose,
    title,
    children,
}) => {
    if (!open) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex justify-end"
            role="dialog"
            aria-modal="true"
            aria-label={title}
        >
            <div
                className="absolute inset-0 bg-neutral-900 bg-opacity-50"
                onClick={onClose}
                aria-hidden="true"
            />
            <div className="relative w-full max-w-lg bg-card border-l border-border h-full flex flex-col slide-in-right">
                <div className="flex items-center justify-between px-6 py-4 border-b border-border">
                    <h2 className="text-lg font-medium text-foreground font-sans">
                        {title}
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-2 text-muted-foreground hover:text-foreground hover:bg-neutral-100 rounded-md transition-colors duration-150 cursor-pointer"
                        aria-label="Close panel"
                    >
                        <X size={18} weight="regular" />
                    </button>
                </div>
                <div className="flex-1 overflow-y-auto p-6">{children}</div>
            </div>
        </div>
    );
};

export default ContextDrawer;