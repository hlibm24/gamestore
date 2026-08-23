import {type SystemRequirements } from "../type/Game";

interface RequirementsListProps {
    title: string,
    requirements: SystemRequirements
}

export const RequirementsList = ({title, requirements}: RequirementsListProps) => {
    return (
        <div>
            <h3>{title}</h3>
                <ul className="minimum_requirements">
                    <li>OS: {requirements.OS}</li>
                    <li>PROCESSOR: {requirements.PROCESSOR}</li>
                    <li>MEMORY: {requirements.MEMORY}</li>
                    <li>GRAPHICS: {requirements.GRAPHICS}</li>
                    <li>DIRECTX: {requirements.DIRECTX}</li>
                    <li>STORAGE: {requirements.STORAGE}</li>
                </ul>
        </div>
    )
}