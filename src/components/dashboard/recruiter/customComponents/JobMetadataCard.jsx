import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

const JobMetadataCard = ({ icon, title, desc }) => {
    return (
        <Card className="shadow-md">
            <CardContent>
                <div className='flex items-center gap-x-3'>
                    <span className=' p-2.5 rounded-4xl bg-gray-200/50'>{icon}</span>
                    <div>
                        <p className="text-3xl font-bold">{title} </p>
                        <p className="text-sm text-muted-foreground">{desc}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default JobMetadataCard
