import { ResetPasswordEmailTemplate } from "@/components/email-templete/ResetPasswordEmail";


export default function PreviewResetPassword() {
  return (
    <ResetPasswordEmailTemplate  
      name="John Doe"
      otp="123456"
    />
  )
} 