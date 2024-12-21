/* eslint-disable @typescript-eslint/no-explicit-any */
import { config } from '@/constants'
import { createDataAttribute } from 'next-sanity';
import React from 'react'

export default function VisualEditWrapper(props: any) {
    const { id, type, path, children } = props;
    return (
        <div
            data-sanity={createDataAttribute({
                ...config,
                id,
                type,
                path,
            }).toString()}
        >
            {children}
        </div>
    )
}
