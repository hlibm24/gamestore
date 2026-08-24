import {type SystemRequirements } from "../type/Game";

interface RequirementsListProps {
    title: string,
    requirements: SystemRequirements
}

export const RequirementsList = ({title, requirements}: RequirementsListProps) => {

    const fields: {label: string, value: string}[] = [
        {label: 'OS', value: requirements.OS},
        {label: 'PROCESSOR', value: requirements.PROCESSOR},
        {label: 'MEMORY', value: requirements.MEMORY},
        {label: 'GRAPHICS', value: requirements.GRAPHICS},
        {label: 'DIRECTX', value: requirements.DIRECTX},
        {label: 'STORAGE', value: requirements.STORAGE},
    ];

    const filledFields = fields.filter((f)=> f.value);

    if(filledFields.length === 0) return null; 

    return (
        <div>
            <h3>{title}</h3>
                <ul>
                    {filledFields.map((f)=> (
                        <li key={f.label}>{f.label}: {f.value}</li>
                    ))}
                </ul>
        </div>
    )
}