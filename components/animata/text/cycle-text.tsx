import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface CycleTextProps {
    words: string[]; // Textos que se ciclan
    template?: (word: string) => string; // Función para personalizar la plantilla
    interval?: number; // Intervalo entre cambios
}

export default function CycleText({
    words,
    template = (word) => word, // Plantilla predeterminada es el texto tal cual
    interval = 1300
}: CycleTextProps) {
    const [index, setIndex] = useState(0);
    const total = words.length;

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((current) => (current + 1) % total);
        }, interval);
        return () => clearInterval(timer);
    }, [total, interval]);

    return (
        <div>
            <span className="font-mono text-lg text-primary pt-2">
                <AnimatePresence mode="wait">
                    <motion.h1
                        key={`words_${index}`}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.2 }}
                        className="inline-block text-3xl md:text-5xl font-bold text-primary"
                    >
                        {template(words[index])}
                    </motion.h1>
                </AnimatePresence>
            </span>
        </div>
    );
}
