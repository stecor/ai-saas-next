import { Avatar,AvatarImage } from "@/components/ui/avatar"



const BotAvatar = () => {
  return (
      <Avatar className='h-8 w-8'>
          <AvatarImage className="p-1" src="/logo.png" sizes="h-8 w-8"/>
        </Avatar>
  )
  }

export default BotAvatar