import { Html, Head, Body, Container, Text, Link, Preview, Section, Row, Column, Img } from '@react-email/components'

// Couleurs de la charte graphique
const colors = {
  primary: {
    main: '#9333EA',
    light: '#A855F7',
    dark: '#7E22CE',
  },
  neutral: {
    dark: '#0F172A',
    gray: '#1F2937',
    light: '#F8FAFC',
  }
}

interface BaseTemplateProps {
  children: React.ReactNode
  previewText: string
}

export const BaseTemplate = ({ children, previewText }: BaseTemplateProps) => {
  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          {children}
          
          <Section style={footerSection}>
            {/* Header avec photo et infos */}
            <Row style={headerRow}>
              <Column>
                <Img
                  src="https://y-abdouraouf.netlify.app/profil.png"
                  width={48}
                  height={48}
                  alt="Photo de profil"
                  style={avatar}
                />
              </Column>
              <Column style={headerInfo}>
                <Text style={name}>Abdouraouf Youssouf</Text>
                <Text style={title}>Développeur Full Stack</Text>
              </Column>
            </Row>

            {/* Technologies */}
            <Row style={techRow}>
              <Column style={techContainer}>
                <Text style={techBadge}>React</Text>
                <Text style={techBadge}>Next.js</Text>
                <Text style={techBadge}>Node.js</Text>
                <Text style={techBadge}>TypeScript</Text>
              </Column>
            </Row>

            {/* Social Links */}
            <Row style={socialRow}>
              <Column style={socialContainer}>
                <Link href="https://y.abdouraouf.com" style={socialLink}>
                 
                  <span style={socialText}>Website</span>
                </Link>
                <Link href="https://github.com/abdourakhman" style={socialLink}>
                  <Img
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                    width={20}
                    height={20}
                    alt="GitHub"
                    style={socialIcon}
                  />
                  <span style={socialText}>GitHub</span>
                </Link>
                <Link href="https://linkedin.com/in/abdouraouf-youssouf" style={socialLink}>
                  <Img
                    src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"
                    width={20}
                    height={20}
                    alt="LinkedIn"
                    style={socialIcon}
                  />
                  <span style={socialText}>LinkedIn</span>
                </Link>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: colors.neutral.dark,
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  maxWidth: '560px',
}

const footerSection = {
  marginTop: '32px',
  borderTop: `1px solid ${colors.neutral.gray}`,
  paddingTop: '32px',
}

const headerRow = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '16px',
}

const avatar = {
  borderRadius: '50%',
  border: `2px solid ${colors.primary.main}`,
}

const headerInfo = {
  paddingLeft: '12px',
}

const name = {
  fontSize: '18px',
  color: colors.neutral.light,
  fontWeight: 'bold',
  margin: '0',
}

const title = {
  fontSize: '14px',
  color: `${colors.neutral.light}cc`, // Ajout de transparence
  margin: '4px 0 0',
}

const techRow = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '20px',
  gap: '8px',
}

const techContainer = {
  display: 'flex',
  justifyContent: 'center',
  gap: '8px',
}

const techBadge = {
  fontSize: '12px',
  color: colors.neutral.light,
  backgroundColor: colors.primary.main,
  padding: '4px 12px',
  borderRadius: '9999px',
  border: `1px solid ${colors.primary.light}`,
  whiteSpace: 'nowrap' as const,
}

const socialRow = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '24px',
  gap: '8px',
}

const socialContainer = {
  display: 'flex',
  justifyContent: 'center',
  gap: '24px',
}

const socialLink = {
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  color: colors.neutral.light,
  textDecoration: 'none',
  whiteSpace: 'nowrap' as const,
}

const socialIcon = {
  opacity: 0.8,
}

const socialText = {
  fontSize: '14px',
}

// Export des styles pour réutilisation
export const styles = {
  text: {
    color: colors.neutral.light,
    fontSize: '16px',
    lineHeight: '24px',
    margin: '24px 0',
  },
  heading: {
    color: colors.neutral.light,
    fontSize: '24px',
    fontWeight: '600',
    lineHeight: '40px',
    margin: '0 0 24px',
  },
  button: {
    backgroundColor: colors.primary.main,
    borderRadius: '4px',
    color: colors.neutral.light,
    fontSize: '16px',
    fontWeight: '600',
    textDecoration: 'none',
    textAlign: 'center' as const,
    display: 'inline-block',
    padding: '12px 20px',
  },
  footer: {
    color: `${colors.neutral.light}99`,
    fontSize: '14px',
    margin: '48px 0 0',
  }
} 