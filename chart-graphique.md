// Charte Graphique pour Y.Abdouraouf

const brandColors = {
  // Couleurs Principales
  primary: {
    main: "#9333EA",     // Purple-600 - Couleur principale
    light: "#A855F7",    // Purple-500 - Pour les accents
    dark: "#7E22CE",     // Purple-700 - Pour les hover
  },
  
  // Couleurs Secondaires
  secondary: {
    pink: "#EC4899",     // Pour les gradients
    blue: "#3B82F6",     // Pour les éléments tech
    red: "#EF4444",      // Pour YouTube
  },

  // Couleurs Neutres
  neutral: {
    dark: "#0F172A",     // Fond principal
    gray: "#1F2937",     // Éléments d'interface
    light: "#F8FAFC",    // Texte clair
  },

  // Gradients Signature
  gradients: {
    primary: "linear-gradient(to right, #9333EA, #EC4899, #9333EA)",  // Textes importants
    background: "linear-gradient(to bottom, #0F172A, #1E1B4B)",       // Fonds
    glow: "radial-gradient(circle at 50% 50%, #3E0693, transparent)"  // Effets lumineux
  }
}

const typography = {
  // Police principale
  fontFamily: "system-ui, -apple-system, sans-serif",
  
  // Hiérarchie des tailles
  sizes: {
    heading1: "3.5rem",    // 56px - Grands titres
    heading2: "2.5rem",    // 40px - Titres de section
    heading3: "2rem",      // 32px - Sous-titres
    body: "1.125rem",      // 18px - Texte courant
    small: "0.875rem"      // 14px - Texte secondaire
  }
}

const spacing = {
  container: "max-w-7xl",
  padding: {
    page: "2rem",
    section: "8rem 0",
    element: "1.5rem"
  }
}

const effects = {
  shadows: {
    soft: "0 0 15px rgba(147, 51, 234, 0.2)",
    medium: "0 0 30px rgba(147, 51, 234, 0.3)",
    strong: "0 0 50px rgba(147, 51, 234, 0.4)"
  },
  borderRadius: {
    small: "0.5rem",
    medium: "1rem",
    large: "1.5rem",
    full: "9999px"
  }
}