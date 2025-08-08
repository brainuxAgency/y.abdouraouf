import { Button, Heading, Hr, Section, Text } from '@react-email/components';
import * as React from 'react';
import { BaseTemplate, styles } from './BaseTemplate';

interface WelcomeEmailProps {
  userFirstname: string;
}

export const WelcomeEmail = ({
  userFirstname = 'John',
}: WelcomeEmailProps) => (
  <BaseTemplate previewText="Bienvenue dans la communauté Y.Abdouraouf">
    <Heading style={styles.heading}>
      Bienvenue {userFirstname} 👋
    </Heading>
    
    <Text style={styles.text}>
      Nous sommes ravis de vous accueillir dans la communauté Y.Abdouraouf ! 
      Votre inscription marque le début d&apos;une nouvelle aventure dans le monde du développement web et mobile.
    </Text>
    
    <Section style={{ padding: '12px 0' }}>
      <Text style={styles.text}>
        <strong style={{ color: '#A855F7' }}>Ce qui vous attend :</strong>
      </Text>
      <ul style={{ ...styles.text, paddingLeft: '20px' }}>
        <li style={{ marginBottom: '8px' }}>Des projets web et mobile innovants</li>
        <li style={{ marginBottom: '8px' }}>Une expertise en développement full-stack</li>
        <li style={{ marginBottom: '8px' }}>Des solutions sur mesure pour vos besoins</li>
      </ul>
    </Section>
    
    <Section style={{ padding: '24px 0' }}>
      <Button
        href="https://y-abdouraouf.com/dashboard"
        style={styles.button}
      >
        Découvrir nos services
      </Button>
    </Section>
    
    <Hr style={{ borderTop: '1px solid #1F2937', margin: '32px 0' }} />
    
    <Text style={styles.text}>
      Besoin d&apos;un devis ou d&apos;une consultation ? Notre équipe est là pour vous accompagner 
      dans la réalisation de vos projets. N&apos;hésitez pas à nous contacter pour discuter 
      de vos besoins spécifiques.
    </Text>

    <Section style={{ padding: '12px 0' }}>
      <Text style={{ ...styles.text, fontSize: '14px' }}>
        <strong style={{ color: '#A855F7' }}>Nos services incluent :</strong>
      </Text>
      <ul style={{ ...styles.text, fontSize: '14px', paddingLeft: '20px' }}>
        <li>Développement d&apos;applications web</li>
        <li>Création d&apos;applications mobiles</li>
        <li>Design UI/UX</li>
        <li>Consulting technique</li>
      </ul>
    </Section>
    
    <Text style={styles.text}>
      Pour toute question ou demande spécifique, notre équipe est disponible 
      par email ou téléphone. Nous nous engageons à vous répondre dans les plus brefs délais.
    </Text>
    
    <Text style={styles.footer}>
      Cordialement,<br />
      L&apos;équipe Y.Abdouraouf<br />
      Email: contact@y-abdouraouf.com<br />
      Tél: +33 6 XX XX XX XX
    </Text>
  </BaseTemplate>
);

export default WelcomeEmail; 