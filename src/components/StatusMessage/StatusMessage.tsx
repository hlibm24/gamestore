import type { ReactNode } from "react";

import './StatusMessage.css';

interface StatusMessageProps {
    title?: string;
    text?: string;
    children?: ReactNode;
}

export const StatusMessage = ({ title, text, children }: StatusMessageProps) => (
    <section className="status-message container">
        <h1>{title}</h1>
        {text && <p>{text}</p>}
        {children}
    </section>
);