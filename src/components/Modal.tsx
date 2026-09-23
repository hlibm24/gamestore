import { type ReactNode, useEffect } from "react";

interface ModalProps {
    children: ReactNode;
}

export const Modal = ({children}: ModalProps) => {

    useEffect(()=> {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    return (
        <div className="modal-overlay">
            <div className="modal-content"
            onClick={(e)=> e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}