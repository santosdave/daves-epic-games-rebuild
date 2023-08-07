import React from 'react'

type Props = {
    children: React.ReactNode,
    classname?: React.HTMLAttributes<HTMLDivElement>['className']
}

export default function MainContainer({ children, classname }: Props) {
    return (
        <div className={`${classname} main-container `}>
            {children}
        </div>
    )
}