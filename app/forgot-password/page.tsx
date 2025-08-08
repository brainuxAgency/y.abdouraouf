"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { Mail, ArrowLeft, Loader2 } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { authClient } from "@/auth-client"
import { toast } from "@/hooks/use-toast"
import Link from "next/link"

const formSchema = z.object({
    email: z.string().email("Email invalide"),
})

type ErrorType = {
    message: string;
    type: 'error' | 'warning' | 'info';
}

export default function ForgotPasswordPage() {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<ErrorType | null>(null)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setError(null)
        setIsLoading(true)

        try {
            const { data, error } = await authClient.forgetPassword({
                email: values.email,
                redirectTo:'/reset-password'
            })

            if (error) {
                setError({
                    message: error.message || "Une erreur est survenue lors de l'envoi du code",
                    type: 'error'
                })
                toast({
                    variant: "destructive",
                    title: "Erreur",
                    description: error.message || "Une erreur est survenue",
                })
                return
            }

            if (data) {
                toast({
                    title: "Code envoyé",
                    description: "Vérifiez votre boîte mail pour réinitialiser votre mot de passe",
                    variant: "default",
                })
            }
        } catch (err) {
            console.error("Erreur inattendue:", err)
            setError({
                message: "Une erreur inattendue est survenue",
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
        <div className="min-h-screen flex items-center justify-center bg-[#0F172A] p-4">
            <div className="w-full max-w-md space-y-8 bg-[#1F2937] p-8 rounded-xl shadow-lg relative overflow-hidden">
                {/* Effet de gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-transparent opacity-50" />

                {/* Contenu */}
                <div className="relative z-10">
                    <Link
                        href="/login"
                        className="inline-flex items-center text-sm text-[#F8FAFC]/60 hover:text-[#F8FAFC] transition-colors mb-6"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Retour à la connexion
                    </Link>

                    <div className="text-center space-y-2 mb-8">
                        <h1 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                            Mot de passe oublié ?
                        </h1>
                        <p className="text-[#F8FAFC]/60 text-sm">
                            Entrez votre email pour recevoir un code de réinitialisation
                        </p>
                    </div>

                    {error && (
                        <Alert
                            variant={error.type === 'error' ? 'destructive' : 'default'}
                            className={`mb-6 ${error.type === 'warning' ? 'border-yellow-500 text-yellow-500' :
                                    error.type === 'info' ? 'border-blue-500 text-blue-500' : ''
                                }`}
                        >
                            <AlertDescription>
                                {error.message}
                            </AlertDescription>
                        </Alert>
                    )}

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                                                    className="pl-10 bg-[#1F2937] border-[#374151] focus:border-[#9333EA] text-[#F8FAFC] placeholder:text-[#F8FAFC]/50"
                                                    disabled={isLoading}
                                                />
                                            </div>
                                        </FormControl>
                                        <FormMessage className="text-[#EF4444] text-sm mt-2" />
                                    </FormItem>
                                )}
                            />
                            <Button
                                type="submit"
                                className="w-full bg-[#9333EA] hover:bg-[#7E22CE] text-[#F8FAFC] transition-colors relative overflow-hidden group"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <div className="flex items-center justify-center">
                                        <Loader2 className="w-5 h-5 animate-spin mr-2" />
                                        Envoi en cours...
                                    </div>
                                ) : (
                                    <>
                                        <span className="relative z-10">Envoyer le code</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity" />
                                    </>
                                )}
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    )
} 