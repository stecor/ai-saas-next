'use client'

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

import {MAX_PAID_COUNTS} from "@/constants"

interface PaidCounterProps{
    apiLimitPaidCount: number
    isPro: boolean
}

const PaidCounter = ({
    apiLimitPaidCount = 0,
    isPro = false,
  
}: PaidCounterProps) => {

   
    const [mounted, setMounted] = useState(false)
    
    useEffect(() => {
        setMounted(true)
    }, [])
    
    if (!mounted) {
        return null
    }

    if (isPro) {
       
            return (
                <div className="px-3">
                    <Card className="bg-white/10 border-0">
                        <CardContent className="py-6">
                            <div className="text-center text-sm text-white mb-4 space-y-2">
                                <p>
                                    {apiLimitPaidCount}/{MAX_PAID_COUNTS} Generations
                                </p>
                                <Progress
                                    className="h-3"
                                    value={(apiLimitPaidCount/MAX_PAID_COUNTS)*100}
                                />
                                <br/>
                                <p>Pro-User</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )
    }

}

export default PaidCounter