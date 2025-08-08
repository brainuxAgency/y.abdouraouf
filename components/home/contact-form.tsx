/* eslint-disable react/no-unescaped-entities */
"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { motion } from "framer-motion"
import { Phone, Mail, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const projectTypes = ["Application Web", "Application Mobile", "Création de Contenu", "Automatisation IA"]

const budgetRanges = ["500€ - 1000€", "1000€ - 2500€", "2500€ - 5000€", "5000€ - 10000€", "Plus de 10000€"]

const formSchema = z
  .object({
    fullName: z.string().min(2, "Le nom complet est requis"),
    email: z.string().email("Email invalide"),
    phone: z.string().min(10, "Numéro de téléphone invalide"),
    isCompany: z.boolean().default(false),
    companyName: z.string().optional(),
    companyWebsite: z.string().url("URL invalide").optional().or(z.literal("")),
    projectType: z.string({
      required_error: "Sélectionnez un type de projet",
    }),
    budget: z.string({
      required_error: "Sélectionnez un budget",
    }),
    message: z.string().min(10, "Le message est requis"),
  })
  .refine(
    (data) => {
      if (data.isCompany) {
        return !!data.companyName
      }
      return true
    },
    {
      message: "Le nom de l'entreprise est requis",
      path: ["companyName"],
    },
  )

export default function ContactForm() {
  const [isCompany, setIsCompany] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      isCompany: false,
      companyName: "",
      companyWebsite: "",
      projectType: "",
      budget: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <section id="contact" className="relative w-full flex items-center justify-center py-32 bg-gradient-to-b from-gray-900 via-[#0f1729] to-gray-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e0693,transparent)]" />

      <div className="lg:container px-4 md:px-6 relative flex items-center justify-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-purple-400 text-2xl">*</span>
                <span className="text-purple-400 uppercase text-sm tracking-wider">Contactez-nous</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4">
                PRENONS CONTACT <span className="italic">AUJOURD'HUI</span>
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Prêt à faire passer votre présence numérique au niveau supérieur ? Que vous soyez une startup cherchant
                à établir votre marque ou une entreprise établie souhaitant rafraîchir votre identité en ligne et à automatiser certaines tâches, moi et mon équipe sommes là pour aider.
              </p>
            </div>

            <div className=" flex flex-wrap gap-4">
              <div className="flex items-center gap-4 bg-gray-900/50 backdrop-blur-xl p-4 rounded-lg ring-1 ring-gray-800/50">
                <div className="bg-purple-500/10 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">TÉLÉPHONE</div>
                  <div className="text-white">+33 7 73 19 50 85</div>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-gray-900/50 backdrop-blur-xl p-4 rounded-lg ring-1 ring-gray-800/50">
                <div className="bg-purple-500/10 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">EMAIL</div>
                  <div className="text-white">youssouf.abdouraouf4@gmail.com</div>
                </div>
              </div>
            </div>


          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-75" />
            <div className="relative bg-gray-900/50 backdrop-blur-xl p-4 md:p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-6">LAISSEZ UN MESSAGE</h3>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Nom Complet *" {...field} className="bg-gray-800/50 text-white" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Téléphone *" {...field} className="bg-gray-800/50 text-white" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid text-white grid-cols-1 md:grid-cols-[1fr,auto] gap-4 items-center">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Email *" {...field} className="bg-gray-800/50" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                     <FormField
                      control={form.control}
                      name="isCompany"
                      render={({ field }) => (
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={(checked) => {
                                field.onChange(checked)
                                setIsCompany(checked as boolean)
                              }}
                              className="border-white data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal text-white">Je suis une entreprise</FormLabel>
                        </FormItem>
                      )}
                    />
                  </div>

                  {isCompany && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="companyName"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="Nom de l'entreprise *" {...field} className="bg-gray-800/50 text-white" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="companyWebsite"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="Site web (optionnel)" {...field} className="bg-gray-800/50 text-white" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="projectType"
                      render={({ field }) => (
                        <FormItem>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-gray-800/50 text-white placeholder:text-white/70">
                                <SelectValue placeholder="Type de Projet *" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-purple-600">
                              {projectTypes.map((type) => (
                                <SelectItem key={type} value={type.toLowerCase()} className="text-white ">
                                  {type}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-gray-800/50 text-white placeholder:text-white/70">
                                <SelectValue placeholder="Budget *" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-purple-600">
                              {budgetRanges.map((range) => (
                                <SelectItem key={range} value={range.toLowerCase()} className="text-white">
                                  {range}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>


                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            placeholder="Votre Message *"
                            className="resize bg-gray-800/50 min-h-[120px] text-white"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 gap-2"
                  >
                    ENVOYER <ArrowRight className="w-4 h-4" />
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

