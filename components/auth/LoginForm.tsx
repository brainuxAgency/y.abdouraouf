"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { useRouter } from "next/navigation"
import { authClient } from "@/auth-client"
import { Eye, EyeOff, Mail, Lock } from "lucide-react"
import { FcGoogle } from "react-icons/fc"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { toast } from "@/hooks/use-toast"

const formSchema = z.object({
  email: z.string().email("Email invalide"),
  password: z.string().min(6, "Mot de passe trop court"),
})

type ErrorType = {
  message: string;
  type: 'error' | 'warning' | 'info';
}

interface AuthError {
  code: string;
  message: string;
}

export function LoginForm({ redirectUrl }: { redirectUrl?: string }) {
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<ErrorType | null>(null)
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setError(null)
    setIsLoading(true)

    try {
      const { data, error } = await authClient.signIn.email({
        email: values.email,
        password: values.password,
      })

      if (error) {
        // Gestion des erreurs retournées par l'API
        const authError = error as AuthError
        switch (authError.code) {
          case "INVALID_CREDENTIALS":
            setError({
              message: "Email ou mot de passe incorrect",
              type: 'error'
            })
            break
          case "USER_NOT_FOUND":
            setError({
              message: "Aucun compte trouvé avec cet email",
              type: 'warning'
            })
            break
          case "EMAIL_NOT_VERIFIED":
            setError({
              message: "Veuillez vérifier votre email avant de vous connecter",
              type: 'info'
            })
            break
          default:
            setError({
              message: authError.message || "Une erreur est survenue. Veuillez réessayer plus tard.",
              type: 'error'
            })
        }

        toast({
          variant: "destructive",
          title: "Erreur de connexion",
          description: authError.message || "Une erreur est survenue",
        })
        return
      }

      if (data) {
        // Connexion réussie
        toast({
          title: "Connexion réussie",
          description: "Vous allez être redirigé...",
          variant: "default",
        })

        // Redirection après un court délai
        setTimeout(() => {
          if (redirectUrl) {
            router.push(redirectUrl)
          } else {
            router.push('/dashboard')
          }
        }, 1000)
      }
    } catch (err) {
      // Gestion des erreurs inattendues
      console.error("Erreur inattendue:", err)
      setError({
        message: "Une erreur inattendue est survenue. Veuillez réessayer plus tard.",
        type: 'error'
      })
      
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur inattendue est survenue",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6 w-full max-w-md">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">Bienvenue</h1>
        <p className="text-[#F8FAFC]/60">Connectez-vous à votre compte</p>
      </div>

      {error && (
        <Alert 
          variant={error.type === 'error' ? 'destructive' : 'default'} 
          className={error.type === 'warning' ? 'border-yellow-500 text-yellow-500' : 
                     error.type === 'info' ? 'border-blue-500 text-blue-500' : ''}
        >
          <AlertDescription>
            {error.message}
          </AlertDescription>
        </Alert>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 h-5 w-5 text-[#F8FAFC]/60" />
                    <Input
                      placeholder="Email"
                      {...field}
                      className="pl-10 bg-[#1F2937] border-none text-[#F8FAFC] placeholder:text-[#F8FAFC]/50"
                      disabled={isLoading}
                    />
                  </div>
                </FormControl>
                <FormMessage className="text-[#EF4444]" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Lock className="absolute left-3 top-2.5 h-5 w-5 text-[#F8FAFC]/60" />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Mot de passe"
                      {...field}
                      className="pl-10 pr-10 bg-[#1F2937] border-none text-[#F8FAFC] placeholder:text-[#F8FAFC]/50"
                      disabled={isLoading}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-2.5 text-[#F8FAFC]/60 hover:text-[#F8FAFC]"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </FormControl>
                <FormMessage className="text-[#EF4444]" />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <Button
              variant="link"
              className="px-0 font-normal text-xs text-[#F8FAFC]/60 hover:text-[#F8FAFC]"
              onClick={() => router.push('/forgot-password')}
              type="button"
            >
              Mot de passe oublié ?
            </Button>
          </div>
          <Button
            type="submit"
            className="w-full bg-[#9333EA] hover:bg-[#7E22CE] text-[#F8FAFC]"
            disabled={isLoading}
          >
            {isLoading ? "Connexion..." : "Se connecter"}
          </Button>
          
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#1F2937]"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-[#0F172A] px-2 text-[#F8FAFC]/60">Ou continuer avec</span>
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            className="w-full bg-transparent border-[#1F2937] hover:bg-[#1F2937] hover:text-white transition-colors"
            onClick={() => {/* TODO: Implement Google sign in */}}
          >
            <FcGoogle className="mr-2 h-5 w-5" />
            Google
          </Button>
        </form>
      </Form>
    </div>
  )
} 