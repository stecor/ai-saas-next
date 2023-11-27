'use client'

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

import {MAX_PAID_COUNTS} from "@/constants"
import { SubscriptionButton } from "@/components/subscription-button"
import { Button } from "./ui/button"
import { Zap } from "lucide-react"
import { useProModal } from "@/hooks/use-pro-modal"

interface PaidCounterProps{
    apiLimitPaidCount: number
    isPro: boolean
}

const PaidCounter = ({
    apiLimitPaidCount = 0,
    isPro = true,
  
}: PaidCounterProps) => {

    const proModal = useProModal();
    const [mounted, setMounted] = useState(false)
    
    useEffect(() => {
        setMounted(true)
    }, [])
    
    if (!mounted) {
        return null
    }
    
    if (apiLimitPaidCount === MAX_PAID_COUNTS) {
       
        isPro = false
        return (
            <div className="px-3">
            <Card className="bg-white/10 border-0">
                <CardContent className="py-6">
                    <div className="text-center text-sm text-white mb-4 space-y-2">
                   
                    </div>
                    <Button onClick={proModal.onOpen} className="w-full" variant='premium' >
                        Upgrade
                        <Zap className="w-4 h-4 ml-2 fill-white"/>
                    </Button>
                </CardContent>
            </Card>
        </div>
        )
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