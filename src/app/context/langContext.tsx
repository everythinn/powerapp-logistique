'use client';
import { createContext, useContext, useState } from "react";

type LangContextType = {
    lang: string,
    setToEn: () => void,
    setToFr: () => void
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LangProvider({ children }: { children: React.ReactNode }){
    const [lang, setLang] = useState("FR");

    const setToEn = () => setLang("EN");
    const setToFr = () => setLang("FR");

    return (
        <LangContext.Provider value={{ lang, setToEn, setToFr }}>
            {children}
        </LangContext.Provider>
    )
}

export function useLang(){
    const context = useContext(LangContext);
    if (context === undefined){
        throw new Error("useContext must be used withing a LangProvider");
    }
    return context;
}