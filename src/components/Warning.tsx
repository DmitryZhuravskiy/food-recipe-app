import React, { FC } from 'react'

interface WarningProps {
    warning: string;
}

const Warning: FC<WarningProps> = (warning) => {
    return (
        <div className="warning">
            <h2>{warning}</h2>
        </div>
    )
}

export default Warning;