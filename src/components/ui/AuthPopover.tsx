import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { auth, signIn, signOut } from "@/auth"
import { ThemeToggle } from "./ThemeToggle"
import { CircleHelp } from "lucide-react"
import Image from "next/image"

export const AuthPopover = async () => {
  const session = await auth()

  return (
    <Popover>
      <PopoverTrigger>
        {session && session.user?.image ? (
          <Image
            width="30"
            height="30"
            alt="Profile Image"
            className="rounded-full"
            src={session && session.user?.image ? session?.user.image : "none"}
          />
        ) : (
          <CircleHelp />
        )}
      </PopoverTrigger>
      <PopoverContent className="flex w-fit flex-col items-center gap-4">
        {session && session.user ? (
          <form
            action={async () => {
              "use server"
              await signOut()
            }}
          >
            <Button type="submit">Signout</Button>
          </form>
        ) : (
          <form
            action={async () => {
              "use server"
              await signIn("github")
            }}
          >
            <Button type="submit">Signin with GitHub</Button>
          </form>
        )}
        <ThemeToggle />
      </PopoverContent>
    </Popover>
  )
}
