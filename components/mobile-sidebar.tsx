'use client'

import { Menu } from 'lucide-react'
import Sidebar from '@/components/sidebar'
import { Button } from '@/components/ui/button'
import {  Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useEffect, useState } from 'react'


interface MobileSideBarProps{
  apiLimitCount: number,
  isPro: boolean
}

const MobileSidebar = ({
  apiLimitCount= 0,
  isPro = false
}:MobileSideBarProps) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }
  
  function handle() {
  
    const sideBar = document.getElementById('closeButton')
     sideBar?.click()
}

  return (
    <Sheet >
      <SheetTrigger>
      <Button variant='ghost' size='icon' id='closeButton'
      className='md:hidden '>
        <Menu/>
      </Button>
      </SheetTrigger>
      <SheetContent side='left' className='p-0' onClick={handle} >
        <Sidebar isPro={isPro} apiLimitCount={apiLimitCount}  />
      </SheetContent>
    </Sheet>
  )
}

export default MobileSidebar