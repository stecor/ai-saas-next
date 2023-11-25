
import { UserButton } from '@clerk/nextjs'

import MobileSidebar from '@/components/mobile-sidebar'
import { getApiLimitCount } from '@/lib/api-limit'
import { checkSubscription } from '@/lib/subscription';
import { getApiLimitCountPaid } from '@/lib/api-limit-paid';

const Navbar = async () => {

    const apiLimitCount = await getApiLimitCount();
    const apiLimitPaidCount = await getApiLimitCountPaid()
    const isPro = await checkSubscription()

  return (
      <div className='flex items-center p-4'>
           <MobileSidebar isPro={isPro} apiLimitCount={apiLimitCount} apiLimitPaidCount={ apiLimitPaidCount} />
          <div className="flex w-full justify-end">
              <UserButton afterSignOutUrl='/'/>
          </div>
      </div>
  )
}

export default Navbar