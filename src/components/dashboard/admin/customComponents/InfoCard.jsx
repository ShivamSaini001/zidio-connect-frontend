import { Card, CardContent, CardHeader } from '@/components/ui/card'
import React from 'react'

const InfoCard = ({title, icon, desc}) => {
  return (
    <Card className={'min-w-72 hover:scale-90 transition-all duration-300'}>
        <CardHeader className={'flex justify-between text-gray-900/55 dark:text-white/70'}>
            <p>{title}</p>
            <span className='hover:scale-90 transition-all'>{icon}</span>
        </CardHeader>
        <CardContent>
            <p className='text-3xl font-semibold'>
                {desc}
            </p>
        </CardContent>
    </Card>
  )
}

export default InfoCard
