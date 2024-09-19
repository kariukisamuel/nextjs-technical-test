import React from 'react'
import { ReactNode } from 'react'

type AnchorSection = {
    id: string;
    title ?: string;
    children: ReactNode;

}

const AnchorSection = ({ id, title, children }: AnchorSection) => {
    return (
        <section id={id} className="w-full pt-20">
            <div className="xs:w-[94%] lg:w-[70%] mx-auto">
                <div>
                    <h2 className="text-center text-gray-700 text-2xl font-montserrat font-bold">
                        {title}
                    </h2>
                </div>
                {children}
            </div>
        </section>
    )
}

export default AnchorSection
