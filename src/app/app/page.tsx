import { auth } from "@/services/auth";
import { UserInfo } from "./_components/user-info";

export default async function Page() {
  const session = await auth()
  
  return <UserInfo user={session?.user} />
}