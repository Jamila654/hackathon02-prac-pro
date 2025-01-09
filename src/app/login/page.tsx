import * as React from "react"
 
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import Link from "next/link"

export default function page() {
  return (
    <div className=" w-full min-h-screen flex items-center">
      <div className="image w-[60%] hidden md:flex lg:p-20">
        <Image src={'/Side Image.png'} width={805} height={781} alt=""/>
      </div>
      <div className="card w-[40%] lg:p-20 md:mt-20 lg:mt-0">
      <Card className="w-[371px] h-[530px] border-none">
      <CardHeader>
        <CardTitle>Log in to Exclusive</CardTitle>
        <CardDescription className=" text-black">Enter you details below</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Input id="name" placeholder="Email or Phone Number" className=" border-none"/>
              <div className="line w-full border-t-2 ml-3"></div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Input id="name" placeholder="Password" className=" border-none"/>
              <div className="line w-full border-t-2 ml-3"></div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Button className=" bg-[#db4543] hover:bg-[#e36765]">Create Account</Button>
            </div>
            <div className="flex flex-col space-y-1.5">
             <Button className=" bg-white border-2 hover:bg-slate-200">
              <Image src={'/Frame 748.png'} alt="" width={100} height={100}/>
             </Button>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-around">
        <h1>Already have account?</h1>
        <Link href={'/login'} className=" hover:underline hover:underline-offset-4 decoration-[#b3aeae]">Log in</Link>
      </CardFooter>
    </Card>
      </div>
      
    </div>
  )
}
