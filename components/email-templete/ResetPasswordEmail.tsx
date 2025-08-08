/* eslint-disable react/no-unescaped-entities */
import { BaseTemplate,styles } from './BaseTemplate'
import { Text,  Section } from '@react-email/components'

interface ResetPasswordEmailProps {
  name: string
  otp: string
}

export const ResetPasswordEmailTemplate = ({ name, otp }: ResetPasswordEmailProps) => {
  return (
    <BaseTemplate previewText="Réinitialisation du mot de passe">
      <Text style={text}>Bonjour {name},</Text>
      <Text style={text}>
        Vous avez demandé la réinitialisation de votre mot de passe. Voici votre code de vérification :
      </Text>
      <Section style={codeContainer}>
        <Text style={text}>
          Cliquez sur le lien ci-dessous pour réinitialiser votre mot de passe :
        </Text>
        <Section style={{padding: '12px 0'}}>
          <a href={otp} style={styles.button}>
            Réinitialiser le mot de passe
          </a>
        </Section>
     
      </Section>
      <Text style={text}>
        Ce lien est valable pendant 5 minutes. Si vous n'avez pas demandé cette réinitialisation, 
        vous pouvez ignorer cet email.
      </Text>
    </BaseTemplate>
  )
}

const text = {
  color: '#fff',
  fontSize: '16px',
  lineHeight: '24px',
}

const codeContainer = {
  textAlign: 'center' as const,
  margin: '32px 0',
}

// const code = {
//   fontSize: '32px',
//   fontWeight: 'bold',
//   color: '#6366f1',
//   letterSpacing: '8px',
// } 