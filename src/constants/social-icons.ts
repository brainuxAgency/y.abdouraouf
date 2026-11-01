import { Github, Linkedin } from "lucide-react"
import { RiTiktokLine, RiInstagramLine, RiTwitterXLine, RiYoutubeLine } from "react-icons/ri"
import type { ElementType } from "react"

export const personalData = {
  email: "abdouraouf.dev@gmail.com",
  phone: "+212 773543330",
  socialMedia: {
    tiktok: "https://www.tiktok.com/@abdouraouf.dev",
    instagram: "https://www.instagram.com/abdouraouf.dev/",
    youtube: "https://youtube.com/@y.abdouraouf",
    github: "https://github.com/AbdouraoufYoussouf",
    linkedin: "https://www.linkedin.com/in/youssef-abdouraouf/",
    twitter: "https://twitter.com/abdouraouf.dev",
  },
} as const

export type SocialLink = {
  name: string
  url: string
  icon: ElementType
}

/** 4 réseaux principaux affichés dans le footer */
export const footerSocialLinks: SocialLink[] = [
  {
    name: "Instagram",
    url: personalData.socialMedia.instagram,
    icon: RiInstagramLine,
  },
  {
    name: "TikTok",
    url: personalData.socialMedia.tiktok,
    icon: RiTiktokLine,
  },
  {
    name: "YouTube",
    url: personalData.socialMedia.youtube,
    icon: RiYoutubeLine,
  },
  {
    name: "GitHub",
    url: personalData.socialMedia.github,
    icon: Github,
  },
]

/** Liste globale de tous les profils sociaux */
export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: personalData.socialMedia.github,
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: personalData.socialMedia.linkedin,
    icon: Linkedin,
  },
  {
    name: "Instagram",
    url: personalData.socialMedia.instagram,
    icon: RiInstagramLine,
  },
  {
    name: "YouTube",
    url: personalData.socialMedia.youtube,
    icon: RiYoutubeLine,
  },
  {
    name: "TikTok",
    url: personalData.socialMedia.tiktok,
    icon: RiTiktokLine,
  },
  {
    name: "Twitter",
    url: personalData.socialMedia.twitter,
    icon: RiTwitterXLine,
  },
]
