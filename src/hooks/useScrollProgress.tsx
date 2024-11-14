import React, { useState, useEffect } from 'react';

const useScrollProgress = () => {
    const [completion, setCompletion] = useState<number>(0);  // Tipado a number

    useEffect(() => {
        const updateScrollCompletion = () => {
            const currentProgress = window.scrollY;
            const scrollHeight = document.body.scrollHeight - window.innerHeight;

            if (scrollHeight) {
                const progress = (currentProgress / scrollHeight) * 100;
                setCompletion(Number(progress.toFixed(2)));  // Asegura que el resultado sea un número
            }
        };

        window.addEventListener('scroll', updateScrollCompletion);
        return () => window.removeEventListener('scroll', updateScrollCompletion);  // Limpieza del evento
    }, []);

    return completion;
}

export default useScrollProgress;
