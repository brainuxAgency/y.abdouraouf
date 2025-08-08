/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Heart,
  Share2,
  MessageSquare,
  Github,
  FileText,
  Table,
  FolderGit2,
  Lock,

  ExternalLink,
  Check,
  ArrowBigUp,
  ArrowBigDown,
  Award,
  Share,
  MoreVertical,
  Trash2,
  Pencil,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react"
import { FaGoogleDrive } from "react-icons/fa"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { useParams } from "next/navigation"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MyPayPalButton } from "@/components/paypal-btn"
import { PayPalApprovalDetails } from "@/src/types/paypal-type"
import { toast } from "@/hooks/use-toast"
import { processPurchase } from "@/actions/purshase.action"

type ResourceType = "github" | "gdrive" | "gdoc" | "gsheet"

interface Resource {
  type: ResourceType
  title: string
  description: string
  url: string

}



const ResourceIcon = ({ type }: { type: ResourceType }) => {
  switch (type) {
    case "github":
      return <Github className="w-5 h-5 text-purple-400" />
    case "gdrive":
      return <FaGoogleDrive className="w-5 h-5 text-purple-400" />
    case "gdoc":
      return <FileText className="w-5 h-5 text-purple-400" />
    case "gsheet":
      return <Table className="w-5 h-5 text-purple-400" />
    default:
      return <FolderGit2 className="w-5 h-5" />
  }
}

// This would come from your database
const resourceDetails = {
  id: "1",
  title: "Comment créer une application React Native avec IA",
  description:
    "Tutoriel complet sur la création d'une application mobile moderne avec React Native et intégration d'IA",
  youtubeId: "g53h-5e6CIA", // Example YouTube video ID
  type: "mobile",
  views: 1200,
  likes: 85,
  isPaid: true,
  price: 29.99,
  resources: [
    {
      type: "github",
      title: "Code source complet",
      description: "Accédez au code source du projet sur GitHub",
      url: "https://github.com/example/repo",
    },
    {
      type: "gdrive",
      title: "Assets du projet",
      description: "Téléchargez tous les assets (images, icons, etc.)",
      url: "https://drive.google.com/...",
    },
    {
      type: "gdoc",
      title: "Documentation détaillée",
      description: "Guide complet d'implémentation",
      url: "https://docs.google.com/...",
    },

  ],
  comments: [
    {
      id: "1",
      user: {
        name: "Thomas Martin",
        avatar: "/placeholder.svg",
      },
      content: "Super tutoriel ! La partie sur l'intégration de l'IA est particulièrement bien expliquée. Est-ce que tu prévois une suite sur l'optimisation des performances ?",
      votes: 25,
      timestamp: "2024-02-14T12:00:00",
      replies: [
        {
          id: "1.1",
          user: {
            name: "Julie Dubois",
            avatar: "/placeholder.svg",
          },
          content: "Je rejoins Thomas, j'aimerais aussi en savoir plus sur la gestion de la mémoire avec les modèles d'IA.",
          votes: 12,
          timestamp: "2024-02-14T13:30:00",
        }
      ]
    },
    {
      id: "2",
      user: {
        name: "Marc Bernard",
        avatar: "/placeholder.svg",
      },
      content: "As-tu pensé à utiliser TensorFlow Lite pour optimiser les performances sur mobile ? Ça pourrait être intéressant pour réduire la consommation de ressources.",
      votes: 18,
      timestamp: "2024-02-14T14:00:00",
      replies: [
        {
          id: "2.1",
          user: {
            name: "Sophie Chen",
            avatar: "/placeholder.svg",
          },
          content: "On l'utilise dans notre projet et c'est vraiment efficace. La différence de performance est notable.",
          votes: 8,
          timestamp: "2024-02-14T15:20:00",
        },
        {
          id: "2.2",
          user: {
            name: "Thomas Martin",
            avatar: "/placeholder.svg",
          },
          content: "Excellente suggestion ! Je vais certainement l'explorer dans un prochain tutoriel.",
          votes: 5,
          timestamp: "2024-02-14T16:45:00",
        }
      ]
    },
    {
      id: "3",
      user: {
        name: "Emma Laurent",
        avatar: "/placeholder.svg",
      },
      content: "Le code est très bien structuré et les explications sont claires. Parfait pour les débutants comme moi qui veulent se lancer dans l'IA mobile !",
      votes: 15,
      timestamp: "2024-02-14T17:00:00",
    }
  ],
  technologies: ["React Native", "TypeScript", "Expo", "Firebase"],
}

interface Comment {
  id: string
  user: {
    name: string
    avatar: string
  }
  content: string
  votes: number
  timestamp: string
  replies?: Comment[]
}

const CommentComponent = ({ comment, isReply = false, isLastChild = false }: {
  comment: Comment,
  isReply?: boolean,
  isLastChild?: boolean
}) => {
  const hasReplies = comment.replies && comment.replies.length > 0
  const isLastReply = isReply && !hasReplies && isLastChild

  return (
    <div className={`relative group ${isReply ? 'ml-8 pl-6' : ''}`}>
      {isReply && (
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-400/20 to-blue-400/20 group-hover:from-purple-400/40 group-hover:to-blue-400/40 transition-colors rounded-full" />
      )}

      <div className={`
        bg-gray-800/50 hover:bg-gray-700/70 transition-all p-4 border-gray-700/50
        ${!isReply && !hasReplies ? 'rounded-xl' : ''} 
        ${!isReply && hasReplies ? 'rounded-t-xl rounded-l-xl' : ''}
        ${isReply && !isLastChild ? 'rounded-none' : ''}
        ${isLastReply ? 'rounded-b-xl' : ''}
      `}>
        <div className="flex items-start gap-4">
          <Avatar className="w-10 h-10 ring-2 ring-gray-700/50">
            <AvatarImage src={comment.user.avatar} />
            <AvatarFallback>{comment.user.name[0]}</AvatarFallback>
          </Avatar>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-semibold text-gray-200">{comment.user.name}</span>
              <span className="text-sm text-gray-400">• {new Date(comment.timestamp).toLocaleDateString()}</span>
            </div>

            <div className="mt-2 text-gray-300 leading-relaxed">
              {comment.content}
            </div>

            <div className="mt-4 flex items-center gap-2 md:gap-6">
              <div className="flex items-center bg-gray-900/50 rounded-full px-3 py-1">
                <Button variant="ghost" size="sm" className="hover:text-blue-400 text-gray-400 hover:bg-transparent transition-colors p-1">
                  <ThumbsUp size={16} />
                </Button>
                <span className="mx-1 text-sm font-medium text-gray-300">{comment.votes}</span>
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-1.5 text-gray-400 hover:text-blue-400 hover:bg-blue-500/20 transition-colors text-sm"
              >
                <MessageSquare size={16} />
                <span>Répondre</span>
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="ml-auto text-gray-500 hover:text-gray-300 hover:bg-gray-600/50 transition-colors p-1"
                  >
                    <MoreVertical size={16} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-40 bg-gray-800 border-gray-700">
                  <DropdownMenuItem className="text-gray-200 hover:text-white focus:text-white hover:bg-purple-500 cursor-pointer">
                    <Pencil className="w-4 h-4 mr-2" />
                    Modifier
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-red-400 hover:text-red-300 focus:text-red-300 hover:bg-red-500 cursor-pointer">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Supprimer
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>

      {/* Replies avec isLastChild */}
      {comment.replies?.map((reply, index) => (
        <CommentComponent
          key={reply.id}
          comment={reply}
          isReply={true}
          isLastChild={index === comment.replies!.length - 1}
        />
      ))}
    </div>
  )
}

export default function ResourceDetail() {
  const [isLiked, setIsLiked] = useState(false)
  const [comment, setComment] = useState("")
  const params = useParams()
  const sourceId = params.id as string
  console.log(sourceId)
  const [isProcessing, setIsProcessing] = useState(false)

  const videoPlayerProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    className: "relative aspect-video rounded-xl overflow-hidden bg-black"
  }

  const handlePaymentApprove = async (details: PayPalApprovalDetails) => {
    try {
      setIsProcessing(true);
      const result = await processPurchase({
        ressourceName: resourceDetails.title,
        amount: resourceDetails.price,
        orderDetails: details,
      });

      if (result.success) {

        toast({
          title: "Succès",
          description: "Votre paiement a été effectué avec succès"
        });
      } else {
        throw new Error(result.error || "Erreur lors du traitement du paiement");
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors du traitement du paiement"
      });
      console.error('Erreur de paiement:', error);
    } finally {
      setIsProcessing(false);
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-[#0f1729] to-gray-900">
      <div className="container relative  mx-auto px-4 py-8">
        <div className="mt-12">
          <Breadcrumb
            items={[
              { label: "Ressources", href: "/ressources" },
              { label: "Comment créer une application React Native avec IA" }
            ]}
          />
        </div>

        {/* Desktop Layout */}
        <div className=" grid grid-cols-1 lg:grid-cols-[1fr,350px] mt-4 gap-8">
          {/* Main Content */}
          <div className="space-y-8">
            {/* Video Player */}
            <motion.div {...videoPlayerProps}>
              <iframe
                src={`https://www.youtube.com/embed/${resourceDetails.youtubeId}`}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>

            {/* Title and Actions */}
            <div className="space-y-4">
              <h1 className="text-xl md:text-3xl font-bold text-white">{resourceDetails.title}</h1>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-gray-400">
                  <span>{resourceDetails.views} vues</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`gap-2 ${isLiked ? "text-red-500" : "text-gray-400"}`}
                    onClick={() => setIsLiked(!isLiked)}
                  >
                    <Heart className="w-4 h-4" />
                    {resourceDetails.likes}
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <MessageSquare className="w-4 h-4" />
                    {resourceDetails.comments.length}
                  </Button>
                </div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="sm" className="gap-2 bg-purple-500/20 rounded-full text-white">
                        <Share2 className="w-4 h-4" />
                        Partager
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost">
                          Twitter
                        </Button>
                        <Button size="sm" variant="ghost">
                          Facebook
                        </Button>
                        <Button size="sm" variant="ghost">
                          Copier le lien
                        </Button>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-gray-300">{resourceDetails.description}</p>
              <div className="flex flex-wrap gap-2">
                {resourceDetails.technologies.map((tech) => (
                  <Badge key={tech} className="bg-purple-500/10 text-purple-400 hover:bg-purple-500/20">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:hidden space-y-6">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Ressources du Projet</CardTitle>
                  <CardDescription>Accédez à tous les fichiers nécessaires</CardDescription>
                </CardHeader>
                <CardContent className="p-4 space-y-6">
                  {/* Section Pack Premium ou Gratuit */}
                  {resourceDetails.isPaid ? (
                    <div className="relative overflow-hidden rounded-lg border border-purple-500/20">
                      <div className="absolute inset-0 bg-purple-500/10 backdrop-blur-sm" />
                      <div className="relative p-4">
                        <Badge className="absolute right-4 top-4 bg-purple-500 text-white">Premium</Badge>
                        <h3 className="text-lg font-semibold text-white mb-2">Pack Complet</h3>
                        <ul className="space-y-2 mb-4">
                          <li className="flex items-center text-gray-300">
                            <Check className="w-4 h-4 mr-2 text-purple-400" />
                            Code source complet
                          </li>
                          <li className="flex items-center text-gray-300">
                            <Check className="w-4 h-4 mr-2 text-purple-400" />
                            Assets et designs
                          </li>
                          <li className="flex items-center text-gray-300">
                            <Check className="w-4 h-4 mr-2 text-purple-400" />
                            Documentation détaillée
                          </li>
                          <li className="flex items-center text-gray-300">
                            <Check className="w-4 h-4 mr-2 text-purple-400" />
                            Ajout des nouvelles fonctionnalités
                          </li>
                        </ul>
                        <div className="flex items-center justify-between">
                          <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-bold text-white">{resourceDetails.price} €</span>
                            <span className="text-gray-400">avec un accès à vie</span>
                          </div>
                        </div>
                        <MyPayPalButton
                          amount={resourceDetails.price.toString()}
                          ressourceName={resourceDetails.title}
                          onApprove={handlePaymentApprove}
                          isDisabled={false}
                        />
                        {/* <Button className="bg-purple-600 text-white mt-2 w-full hover:bg-purple-700">
                        <Lock className="w-4 h-4 mr-2" />
                        Débloquer
                      </Button> */}
                      </div>
                    </div>
                  ) : (
                    <div className="relative overflow-hidden rounded-lg border border-green-500/20">
                      <div className="absolute inset-0 bg-green-500/10 backdrop-blur-sm" />
                      <div className="relative p-4">
                        <h3 className="text-lg font-semibold text-white mb-2">Ressources Gratuites</h3>
                        <p className="text-gray-300 mb-4">
                          Toutes les ressources sont accessibles gratuitement. Profitez-en !
                        </p>
                        <Badge className="bg-green-500 text-white">Gratuit</Badge>
                      </div>
                    </div>
                  )}

                  {/* Liste des ressources */}
                  <div className="space-y-3">
                    {resourceDetails.resources.map((resource, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-l from-purple-200/10 to-purple-500/0 group-hover:from-purple-500/5 group-hover:to-purple-500/10 rounded-lg transition-all duration-300" />
                        <div className="relative flex items-center p-3 rounded-lg hover:bg-gray-700/20 transition-colors">
                          <div className="p-2 mr-3 rounded-full bg-gray-700/50 group-hover:bg-gray-700/70">
                            <ResourceIcon type={resource.type as ResourceType} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-medium text-white truncate">{resource.title}</h4>
                            <p className="text-xs text-gray-400 truncate">{resource.description}</p>
                          </div>
                          {resourceDetails.isPaid ? (
                            <div className="ml-2 text-gray-500">
                              <Lock className="w-4 h-4" />
                            </div>
                          ) : (
                            <Button
                              size="sm"
                              variant="ghost"
                              className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                              asChild
                            >
                              <Link href={resource.url} target="_blank">
                                <ExternalLink className="w-4 h-4 text-purple-400" />
                                <span className="sr-only">Accéder</span>
                              </Link>
                            </Button>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Comments Section */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-white">Discussion</h2>

              {/* Add Comment */}
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
                <Textarea
                  placeholder="Participer à la discussion..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="min-h-[100px] bg-gray-900/50 border-gray-700 resize-none"
                />
                <div className="flex justify-end mt-2">
                  <Button className="bg-purple-600 hover:bg-purple-700">Commenter</Button>
                </div>
              </div>

              {/* Comments List */}
              <div className="space-y-6">
                {resourceDetails.comments.map((comment) => (
                  <CommentComponent key={comment.id} comment={comment} />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 hidden lg:block">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl text-white">Ressources du Projet</CardTitle>
                <CardDescription>Accédez à tous les fichiers nécessaires</CardDescription>
              </CardHeader>
              <CardContent className="p-4 space-y-6">
                {/* Section Pack Premium ou Gratuit */}
                {resourceDetails.isPaid ? (
                  <div className="relative overflow-hidden rounded-lg border border-purple-500/20">
                    <div className="absolute inset-0 bg-purple-500/10 backdrop-blur-sm" />
                    <div className="relative p-4">
                      <Badge className="absolute right-4 top-4 bg-purple-500 text-white">Premium</Badge>
                      <h3 className="text-lg font-semibold text-white mb-2">Pack Complet</h3>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-center text-gray-300">
                          <Check className="w-4 h-4 mr-2 text-purple-400" />
                          Code source complet
                        </li>
                        <li className="flex items-center text-gray-300">
                          <Check className="w-4 h-4 mr-2 text-purple-400" />
                          Assets et designs
                        </li>
                        <li className="flex items-center text-gray-300">
                          <Check className="w-4 h-4 mr-2 text-purple-400" />
                          Documentation détaillée
                        </li>
                        <li className="flex items-center text-gray-300">
                          <Check className="w-4 h-4 mr-2 text-purple-400" />
                          Ajout des nouvelles fonctionnalités
                        </li>
                      </ul>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col items-baseline  gap-1">
                          <span className="text-2xl font-bold text-white">{resourceDetails.price} €</span>
                          <span className="text-gray-400">avec un accès à vie</span>
                        </div>
                      </div>
                      <MyPayPalButton
                        amount={resourceDetails.price.toString()}
                        ressourceName={resourceDetails.title}
                        onApprove={handlePaymentApprove}
                        isDisabled={false}
                      />
                      {/* <Button className="bg-purple-600 text-white w-full hover:bg-purple-700">
                        <Lock className="w-4 h-4 mr-2" />
                        Débloquer
                      </Button> */}
                    </div>
                  </div>
                ) : (
                  <div className="relative overflow-hidden rounded-lg border border-green-500/20">
                    <div className="absolute inset-0 bg-green-500/10 backdrop-blur-sm" />
                    <div className="relative p-4">
                      <h3 className="text-lg font-semibold text-white mb-2">Ressources Gratuites</h3>
                      <p className="text-gray-300 mb-4">
                        Toutes les ressources sont accessibles gratuitement. Profitez-en !
                      </p>
                      <Badge className="bg-green-500 text-white">Gratuit</Badge>
                    </div>
                  </div>
                )}

                {/* Liste des ressources */}
                <div className="space-y-3">
                  {resourceDetails.resources.map((resource, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-l from-purple-200/10 to-purple-500/0 group-hover:from-purple-500/5 group-hover:to-purple-500/10 rounded-lg transition-all duration-300" />
                      <div className="relative flex items-center p-3 rounded-lg hover:bg-gray-700/20 transition-colors">
                        <div className="p-2 mr-3 rounded-full bg-gray-700/50 group-hover:bg-gray-700/70">
                          <ResourceIcon type={resource.type as ResourceType} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-white truncate">{resource.title}</h4>
                          <p className="text-xs text-gray-400 truncate">{resource.description}</p>
                        </div>
                        {resourceDetails.isPaid ? (
                          <div className="ml-2 text-gray-500">
                            <Lock className="w-4 h-4" />
                          </div>
                        ) : (
                          <Button
                            size="sm"
                            variant="ghost"
                            className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                            asChild
                          >
                            <Link href={resource.url} target="_blank">
                              <ExternalLink className="w-4 h-4 text-purple-400" />
                              <span className="sr-only">Accéder</span>
                            </Link>
                          </Button>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>


      </div>
    </div>
  )
}

