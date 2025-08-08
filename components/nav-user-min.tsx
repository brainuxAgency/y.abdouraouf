'use client';

import { authClient } from '@/auth-client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Loader2, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useAuthSession } from '@/hooks/useSessionStatut';

export function NavUserMin() {
  const { user, isPending } = useAuthSession();
  const router = useRouter()
  const [isPendingLogout, setIsPendingLogout] = useState(false)

  const handleSignOut = async () => {
    try {
      setIsPendingLogout(true)
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push("/ressources")
          }
        }
      })
    } catch (error) {
      console.error('Error signing out :', error)
    }
    finally {
      setIsPendingLogout(false)
    }
  }
  // Si on est en train de récupération la session, on affiche un message de chargement
  if (isPending) {
    return <div><Loader2 className='animate-spin text-[#9333EA]' /></div>;
  }

  if (user) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="ghost" 
            className="relative h-8 w-8 rounded-lg hover:bg-red-500 transition-colors"
          >
            <Avatar className="h-9 w-9 rounded-lg border">
              {user?.image ? (
                <AvatarImage src={user?.image} alt={user?.name} />
              ) : null}
              <AvatarFallback className='rounded-lg bg-[#1F2937] text-[#F8FAFC]'>
                {user?.name
                  .split(' ')
                  .map((word: string) => {
                    if (user?.name.split(' ').length === 1) {
                      return word.slice(0, 2);
                    } else {
                      return word[0];
                    }
                  })
                  .join('')
                  .toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg bg-[#0F172A] border border-[#1F2937]"
          side="bottom"
          align="end"
          sideOffset={4}
        >
          <DropdownMenuLabel className="p-0 font-normal">
            <div className="flex items-center gap-2 p-2 text-left text-sm border-b border-[#1F2937]">
              <Avatar className="h-8 w-8 rounded-lg border">
                {user?.image ? (
                  <AvatarImage src={user?.image} alt={user?.name} />
                ) : null}
                <AvatarFallback className='rounded-lg bg-[#1F2937] text-[#F8FAFC]'>
                  {user?.name
                    .split(' ')
                    .map((word: string) => {
                      if (user?.name.split(' ').length === 1) {
                        return word.slice(0, 2);
                      } else {
                        return word[0];
                      }
                    })
                    .join('')
                    .toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold text-[#F8FAFC]">{user?.name}</span>
                <span className="truncate text-xs text-[#F8FAFC]/60">{user?.email}</span>
              </div>
            </div>
          </DropdownMenuLabel>
          {isPendingLogout ? (
            <div className="p-2 flex justify-center">
              <Loader2 className="animate-spin text-[#9333EA]" />
            </div>
          ) : (
            <DropdownMenuItem 
              onClick={handleSignOut}
              className="flex items-center gap-2 p-2 text-[#F8FAFC] hover:bg-red-500 hover:text-[#F8FAFC]  cursor-pointer"
            >
              <LogOut className="h-4 w-4" />
              <span>Déconnexion</span>
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  // Si la session est nulle et que isAuth est faux, rien n'est affiché
  return null;
}
