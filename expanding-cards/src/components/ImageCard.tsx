import React from 'react';

type ImageCardProps = {
    title: string;
    backgroundImage: string;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
} & React.HTMLAttributes<HTMLDivElement>;

export const ImageCard = React.forwardRef<HTMLDivElement, ImageCardProps>(
    ({ title, backgroundImage, onClick, ...attr }, ref) => {
        return (
            <div
                className={`panel ${attr.className || ''}`}
                style={{ backgroundImage: `url(${backgroundImage})` }}
                onClick={onClick}
                role='button'
                ref={ref}
            >
                <h3>{title}</h3>
            </div>
        );
    })