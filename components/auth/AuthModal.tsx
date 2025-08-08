"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LoginForm } from "./LoginForm"
import { RegisterForm } from "./RegisterForm"
import { DialogTitle } from "@radix-ui/react-dialog"

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  redirectUrl?: string
}

export function AuthModal({ isOpen, onClose, redirectUrl }: AuthModalProps) {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login")

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className=" sm:max-w-[425px]  min-h-[500px] bg-[#0F172A] text-[#F8FAFC] p-0 overflow-hidden">
        <DialogTitle className="sr-only">Connexion ou inscription</DialogTitle>
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "login" | "register")} className="h-full">

          <div className="p-6">
            <TabsContent value="login" className="mt-0 border-none">
              <LoginForm redirectUrl={redirectUrl} />
            </TabsContent>
            <TabsContent value="register" className="mt-0 border-none">
              <RegisterForm redirectUrl={redirectUrl} />
            </TabsContent>
          </div>
          <TabsList className="flex-1 mx-4 my-4 bg-[#1F2937] grid gap-2 grid-cols-2 rounded-lg border-none">
            <TabsTrigger
              value="login"
              className="data-[state=active]:bg-[#9333EA] rounded border-none hover:bg-gray-900 text-[#F8FAFC]/60 data-[state=active]:text-[#F8FAFC] data-[state=active]:shadow-none"
            >
              Connexion
            </TabsTrigger>
            <TabsTrigger
              value="register"
              className="data-[state=active]:bg-[#9333EA] rounded border-none hover:bg-gray-900 text-[#F8FAFC]/60 data-[state=active]:text-[#F8FAFC] data-[state=active]:shadow-none"
            >
              Inscription
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
} 