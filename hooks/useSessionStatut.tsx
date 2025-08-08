"use client"

import { authClient } from "@/auth-client"
import { User } from "better-auth"
import { useState, useEffect } from 'react'


export interface ExtendedUser extends User {
  role?: string
  banned?: boolean | null
  banReason?: string | null
  banExpires?: Date | null
}

export interface AuthSession {
  user: ExtendedUser | null
  isPending: boolean
  error: Error | null
  isAdmin: boolean
}

export function useAuthSession(): AuthSession {

const {data: session,isPending,error} = authClient.useSession()
  const [authSession, setAuthSession] = useState<AuthSession>({
    user: null,
    isPending: true,
    error: null,
    isAdmin: false
  })

  useEffect(() => {
    setAuthSession({
      user: session?.user ?? null,
      isPending,
      error: error ?? null,
      isAdmin: session?.user?.role === 'admin'
    })
  }, [session, isPending, error])

  return authSession
}