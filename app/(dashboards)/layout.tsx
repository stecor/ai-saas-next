import Navbar from "@/components/navbar"
import Sidebar from "@/components/sidebar"
import { getApiLimitCount } from "@/lib/api-limit"
import { getApiLimitCountPaid } from "@/lib/api-limit-paid"
import { checkSubscription } from "@/lib/subscription"



const DashboardLayout = async ({children }: {children: React.ReactNode}) => {
  
  const apiLimitPaidCount = await getApiLimitCountPaid()
  const apiLimitCount = await getApiLimitCount()
  const isPro = await checkSubscription()

    return (
      <div className='bg-cover h-full relative bg-[#192339] text-white '>
        <div className='hidden h-full md:flex md:w-72
        md:flex-col md:fixed md:inset-y-0 
         bg-gray-900'>
          <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} apiLimitPaidCount={apiLimitPaidCount} />
        </div>
        <main className="md:pl-72">
          <Navbar/>
          {children}
        </main>
      </div>
    )
  }
  
  export default DashboardLayout