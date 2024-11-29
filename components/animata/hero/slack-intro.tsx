"use client";

import { useEffect, useState } from "react";


import { cn } from "@/lib/utils";
import TypingText from "../text/typing-text";

export interface CircleProps {
    height?: string;
    width?: string;
    bgColor?: string;
    borderRadius?: string;
}

interface CylinderProps {
    text?: string;
    height?: string;
    width?: string;
    bgColor?: string;
}

interface LineProps {
    className?: string;
    animationEnd: boolean;
}

function Circle({
    height = "h-8 md:h-16",
    width = "w-8 md:w-16",
    bgColor = "bg-secondary",
    borderRadius = "rounded-full",
}: CircleProps) {
    return <div className={cn(height, width, borderRadius, bgColor)} />;
}

function Cylinder({
    text,
    height = "h-8 md:h-16",
    width = "w-24 md:w-48",
    bgColor = "bg-slate-100",
}: CylinderProps) {
    return (
        <div
            className={cn(
                "relative flex items-center justify-center rounded-full",
                height,
                width,
                bgColor,
            )}
        >
            <TypingText
                className={cn("min-w-fit px-4 text-xl font-bold text-black md:px-6 md:text-5xl")}
                alwaysVisibleCount={0}
                delay={100}
                smooth
                text={text ?? ""}
                waitTime={2000}
            />
        </div>
    );
}

function LineOne({ className, animationEnd }: LineProps) {
    return (
        <div
            className={cn(
                className,
                "duration-500",
                animationEnd
                    ? "animate-out fade-out slide-out-to-left-full"
                    : "animate-in fade-in slide-in-from-right-full",
            )}
        >
            <Circle bgColor="bg-blue-900" borderRadius="rounded-t-full rounded-bl-full" />
            <Circle />
            <Cylinder bgColor="bg-primary" />
            <Cylinder bgColor="bg-secondary" width="w-56 md:w-[300px]" />
            <Cylinder bgColor="bg-secondary" />
        </div>
    );
}

function LineTwo({ className, animationEnd }: LineProps) {
    return (
        <div
            className={cn(
                className,
                "duration-700",
                animationEnd
                    ? "animate-out fade-out slide-out-to-right-full"
                    : "animate-in fade-in slide-in-from-left-full",
            )}
        >
            <Circle bgColor="bg-blue-900" />
            <Cylinder text="Introducing" width="w-64 md:w-[400px]" />
            <Circle bgColor="bg-blue-900" borderRadius="rounded-t-full rounded-bl-full" />
            <Circle bgColor="bg-blue-900" />
            <Cylinder bgColor="bg-primary" />
        </div>
    );
}

function LineThree({ className, animationEnd }: LineProps) {
    return (
        <div
            className={cn(
                className,
                "duration-700",
                animationEnd
                    ? "animate-out fade-out slide-out-to-left-full"
                    : "animate-in fade-in slide-in-from-right-full",
            )}
        >
            {/* <Cylinder bgColor="bg-secondary" /> */}
            <Circle bgColor="bg-primary" borderRadius="rounded-t-full rounded-br-full" />
            {/* <Circle bgColor="bg-secondary" />  */}
            <Cylinder text="the new" width="w-64 md:w-[600px]" />
            <Circle bgColor="bg-primary" />
            {/* <Cylinder bgColor="bg-secondary" /> */}
        </div>
    );
}

function LineFour({ className, animationEnd }: LineProps) {
    return (
        <div
            className={cn(
                className,
                "duration-700",
                animationEnd
                    ? "animate-out fade-out slide-out-to-right-full"
                    : "animate-in fade-in slide-in-from-left-full",
            )}
        >
            <Circle bgColor="bg-blue-900" />
            <Cylinder text="User Experience" width="w-96 md:w-[700px]" />
            <Circle bgColor="bg-blue-900" borderRadius="rounded-t-full rounded-br-full" />
        </div>
    );
}

function LineFive({ className, animationEnd }: LineProps) {
    return (
        <div
            className={cn(
                className,
                animationEnd
                    ? "animate-out fade-out slide-out-to-left-full"
                    : "animate-in fade-in slide-in-from-right-full",
            )}
        >
            <Cylinder bgColor="bg-primary" />
            <Cylinder bgColor="bg-secondary" width="w-32 md:w-[400px]" />
            <Circle bgColor="bg-secondary" />
            <Cylinder bgColor="bg-primary" />
        </div>
    );
}

export default function SlackIntro({
    animateOut,
}: {
    /**
     * If true, the lines will animate out
     */
    animateOut?: boolean;
}) {
    const [animationEnd, setAnimationEnd] = useState(false);

    useEffect(() => {
        if (!animateOut) {
            return;
        }

        const timer = setTimeout(() => {
            setAnimationEnd(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, [animateOut]);

    const common = "flex duration-1000 ease-in-out fill-mode-forwards";

    return (
        <div
            className={cn(
                "flex flex-col items-center justify-center gap-1 overflow-hidden bg-transparent py-8 md:gap-3 pt-20",
            )}
        >
            <LineOne className={common} animationEnd={animationEnd} />
            <LineTwo className={common} animationEnd={animationEnd} />
            <LineThree className={common} animationEnd={animationEnd} />
            <LineFour className={common} animationEnd={animationEnd} />
            <LineFive className={common} animationEnd={animationEnd} />
        </div>
    );
}
