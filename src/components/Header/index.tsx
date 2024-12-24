/* eslint-disable @typescript-eslint/no-explicit-any */
import "./header.css";

import { ChevronDown, Globe, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

import { i18n } from "../../../languages";

export default async function Header({ params }:{params : any}) {
  const {language,sub_page,franchise}=  await params || {};
  const getPath=(lang:{id:string})=>{
    let path=`/${lang.id}`
    if(franchise){
      path=`${path}/${franchise}`
    }
    if(sub_page){
      path=`${path}/${sub_page}`    
    }
    return path
  }

    return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="border-b">
        <div className="flex justify-end items-center px-4 py-2">
          {/* ZIP/Postal Code Input (Centered on Mobile) */}
          <Input
            type="text"
            placeholder="ZIP/Postal Code"
            className="h-8 w-48 bg-gray-50 mb-2 hidden sm:block"
          />

          <div className="flex items-center gap-4 ml-10">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                <span>{ language?.toUpperCase() || "EN"}</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Languages</DropdownMenuLabel>
                <DropdownMenuSeparator />

                {i18n.languages.map((lang) => (
                  <Link href={getPath(lang)} key={lang.id}>
                    <DropdownMenuItem>{lang.title}</DropdownMenuItem>
                  </Link>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Login Link */}
            <Link
              href="/login"
              className="flex items-center gap-1 text-sm text-green-800"
            >
              <User className="h-5 w-5" />
              <span>Login</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="border-b">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.svg"
              alt="Weed Man"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="group relative">
              <Button variant="ghost" className="flex items-center gap-2">
                Services
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
            <div className="group relative">
              <Button variant="ghost" className="flex items-center gap-2">
                Learn
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
            <div className="group relative">
              <Button variant="ghost" className="flex items-center gap-2">
                Support
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </nav>

          {/* CTA Button */}
          <Button className="hidden sm:block px-4 md:px-6">
            GET STARTED
          </Button>
        </div>
      </div>
    </header>
  );
}
