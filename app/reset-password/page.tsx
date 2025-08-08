/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { authClient } from "@/auth-client";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Eye, EyeOff, Lock, ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const resetPasswordSchema = z.object({
	password: z.string()
		.min(8, "Le mot de passe doit contenir au moins 8 caractères")
		.regex(/[A-Z]/, "Le mot de passe doit contenir au moins une majuscule")
		.regex(/[0-9]/, "Le mot de passe doit contenir au moins un chiffre"),
	confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
	message: "Les mots de passe ne correspondent pas",
	path: ["confirmPassword"],
});

type ErrorType = {
	message: string;
	type: 'error' | 'warning' | 'info';
}

function ResetPasswordContent() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const tokenError = searchParams.get("error");
	const [error, setError] = useState<ErrorType | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const token = useSearchParams().get("token");


	const form = useForm<z.infer<typeof resetPasswordSchema>>({
		resolver: zodResolver(resetPasswordSchema),
		defaultValues: {
			password: "",
			confirmPassword: "",
		},
	});

  if (!token) {
    // Handle the error
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0F172A] p-4">
        <div className="w-full max-w-md space-y-8 bg-[#1F2937] p-8 rounded-xl shadow-lg relative overflow-hidden">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
              Lien invalide 
            </h1>
            <p className="text-[#F8FAFC]/60">
              Ce lien de réinitialisation est invalide ou a expiré.
            </p>
          </div>
        </div>
      </div>
    );
  }
	const onSubmit = async (data: z.infer<typeof resetPasswordSchema>) => {
		setError(null);
		setIsLoading(true);

		try {
			const { error: resetError } = await authClient.resetPassword({
				newPassword: data.password,
				token: token,
			});

			if (resetError) {
				let errorMessage = resetError.message;
				let errorType: 'error' | 'warning' = 'error';

				// Personnalisation des messages d'erreur
				switch (resetError.code) {
					case "INVALID_TOKEN":
						errorMessage = "Le lien de réinitialisation est invalide ou a expiré";
						errorType = 'warning';
						break;
					case "PASSWORD_TOO_WEAK":
						errorMessage = "Le mot de passe est trop faible";
						errorType = 'warning';
						break;
					default:
						errorMessage = resetError.message || "Une erreur est survenue";
				}

				setError({
					message: errorMessage,
					type: errorType
				});
				
				toast({
					title: "Erreur",
					description: errorMessage,
					variant: "destructive",
				});
			} else {
				toast({
					title: "Succès",
					description: "Mot de passe réinitialisé avec succès. Connectez-vous pour continuer.",
				});
				router.push("/ressources");
			}
		} catch (err) {
			console.error("Erreur inattendue:", err);
			setError({
				message: "Une erreur inattendue est survenue",
				type: 'error'
			});
			toast({
				variant: "destructive",
				title: "Erreur",
				description: "Une erreur inattendue est survenue",
			});
		} finally {
			setIsLoading(false);
		}
	};

	if (tokenError === "invalid_token") {
		return (
			<div className="min-h-screen flex items-center justify-center bg-[#0F172A] p-4">
				<div className="w-full max-w-md space-y-8 bg-[#1F2937] p-8 rounded-xl shadow-lg relative overflow-hidden">
					<div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-transparent opacity-50" />
					<div className="relative z-10">
						<div className="text-center space-y-4">
							<h1 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
								Lien invalide
							</h1>
							<p className="text-[#F8FAFC]/60">
								Ce lien de réinitialisation est invalide ou a expiré.
							</p>
							<Button
								onClick={() => router.push('/forgot-password')}
								className="mt-4 bg-[#9333EA] hover:bg-[#7E22CE] text-[#F8FAFC]"
							>
								Demander un nouveau lien
							</Button>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen flex items-center justify-center bg-[#0F172A] p-4">
			<div className="w-full max-w-md space-y-8 bg-[#1F2937] p-8 rounded-xl shadow-lg relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-transparent opacity-50" />
				
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
							Réinitialisation du mot de passe
						</h1>
						<p className="text-[#F8FAFC]/60 text-sm">
							Choisissez un nouveau mot de passe sécurisé
						</p>
					</div>

					{error && (
						<Alert 
							variant={error.type === 'error' ? 'destructive' : 'default'} 
							className={`mb-6 ${
								error.type === 'warning' ? 'border-yellow-500 text-yellow-500' : 
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
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<div className="relative">
												<Lock className="absolute left-3 top-2.5 h-5 w-5 text-[#F8FAFC]/60" />
												<Input
													type={showPassword ? "text" : "password"}
													placeholder="Nouveau mot de passe"
													{...field}
													className="pl-10 pr-10 bg-[#1F2937] border-[#374151] focus:border-[#9333EA] text-[#F8FAFC] placeholder:text-[#F8FAFC]/50"
													disabled={isLoading}
												/>
												<button
													type="button"
													onClick={() => setShowPassword(!showPassword)}
													className="absolute right-3 top-2.5 text-[#F8FAFC]/60 hover:text-[#F8FAFC] transition-colors"
												>
													{showPassword ? (
														<EyeOff className="h-5 w-5" />
													) : (
														<Eye className="h-5 w-5" />
													)}
												</button>
											</div>
										</FormControl>
										<FormMessage className="text-[#EF4444] text-sm mt-2" />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="confirmPassword"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<div className="relative">
												<Lock className="absolute left-3 top-2.5 h-5 w-5 text-[#F8FAFC]/60" />
												<Input
													type={showConfirmPassword ? "text" : "password"}
													placeholder="Confirmer le mot de passe"
													{...field}
													className="pl-10 pr-10 bg-[#1F2937] border-[#374151] focus:border-[#9333EA] text-[#F8FAFC] placeholder:text-[#F8FAFC]/50"
													disabled={isLoading}
												/>
												<button
													type="button"
													onClick={() => setShowConfirmPassword(!showConfirmPassword)}
													className="absolute right-3 top-2.5 text-[#F8FAFC]/60 hover:text-[#F8FAFC] transition-colors"
												>
													{showConfirmPassword ? (
														<EyeOff className="h-5 w-5" />
													) : (
														<Eye className="h-5 w-5" />
													)}
												</button>
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
										Réinitialisation en cours...
									</div>
								) : (
									<>
										<span className="relative z-10">Réinitialiser le mot de passe</span>
										<div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity" />
									</>
								)}
							</Button>
						</form>
					</Form>
				</div>
			</div>
		</div>
	);
}

export default function ResetPassword() {
	return (
		<Suspense>
			<ResetPasswordContent />
		</Suspense>
	);
}
