import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import defaultStyles from "./../utils/defaultStyles";

const {
  background,
  surface,
  border,
  textPrimary,
  textOnAccent,
  accent,
  accentSecondary,
  padding,
  gap,
  borderRadius,
} = defaultStyles;

const name = "StoreStar";

const features = [
  {
    icon: "🧾",
    title: "Registro de vendas",
    text: "Anote cada venda em poucos toques e tenha todo o histórico do seu negócio sempre à mão.",
  },
  {
    icon: "📊",
    title: "Controle total",
    text: "Acompanhe entradas, saídas e resultados para decidir com clareza e sem achismo.",
  },
  {
    icon: "🛠️",
    title: "Ferramentas gratuitas",
    text: "Recursos de apoio poderosos, sem custo, para você crescer sem pesar no bolso.",
  },
  {
    icon: "🔒",
    title: "Segurança de verdade",
    text: "Seus dados protegidos com responsabilidade, porque o seu negócio merece confiança.",
  },
];

const stats = [
  { value: "100%", label: "Gratuito para começar" },
  { value: "24h", label: "Acesso quando precisar" },
  { value: "+", label: "Ferramentas de apoio" },
];

function SectionTitle({ children }) {
  return <Text style={styles.sectionTitle}>{children}</Text>;
}

function StatItem({ value, label }) {
  return (
    <View style={styles.stat}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

function FeatureCard({ icon, title, text }) {
  return (
    <View style={styles.card}>
      <View style={styles.cardIcon}>
        <Text style={styles.cardIconText}>{icon}</Text>
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardText}>{text}</Text>
      </View>
    </View>
  );
}

export default function App() {
  const navigation = useNavigation();

  function handleStart() {}

  function handleTerms() {}

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{name}</Text>
        <Image style={styles.icon} source={require("./../assets/icon.png")} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.pageMain}
      >
        <View style={styles.hero}>
          <Text style={styles.brand}>
            <Text style={styles.brandAccent}>Store</Text>Star
          </Text>
          <Text style={styles.tagline}>Suas vendas, no seu controle.</Text>
          <Text style={styles.description}>
            O app que permite a pequenos empreendedores registrar e controlar
            suas vendas, com poderosas ferramentas de apoio totalmente
            gratuitas.
          </Text>

          <Pressable
            onPress={handleStart}
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
            ]}
          >
            <Text style={styles.buttonText}>Começar agora</Text>
          </Pressable>
        </View>

        <View style={styles.statsRow}>
          {stats.map((item) => (
            <StatItem key={item.label} {...item} />
          ))}
        </View>

        <View style={styles.section}>
          <SectionTitle>O que você encontra aqui</SectionTitle>
          {features.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </View>

        <View style={styles.about}>
          <SectionTitle>Sobre nós</SectionTitle>
          <Text style={styles.aboutText}>
            Desenvolvemos o {name} para ajudar pequenos empreendedores e grandes
            empresas a gerenciar seus negócios de forma segura e responsável,
            dando acesso a tecnologias de ponta que antes pareciam distantes.
          </Text>
          <Text style={styles.aboutText}>
            Acreditamos que organização e boas ferramentas não devem ser
            privilégio de poucos. Cada recurso é pensado para ser simples de
            usar e poderoso nos resultados.
          </Text>
        </View>

        <Pressable
          onPress={() => {
            navigation.navigate("Terms");
          }}
        >
          <Text style={styles.terms}>terms of use</Text>
        </Pressable>

        <Text style={styles.footer}>
          Developed by:{" "}
          <Text style={styles.footerName}>Guilherme Soares Marciel</Text>
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: surface,
    padding,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: textPrimary,
  },
  icon: {
    width: 50,
    height: 50,
  },

  pageMain: {
    flexGrow: 1,
    padding: padding * 2,
    gap: gap * 3,
  },

  hero: {
    alignItems: "center",
    gap,
    paddingVertical: padding * 2,
  },
  brand: {
    fontSize: 48,
    fontWeight: "bold",
    color: textPrimary,
  },
  brandAccent: {
    color: accent,
  },
  tagline: {
    fontSize: 22,
    fontWeight: "600",
    color: accentSecondary,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: textPrimary,
    textAlign: "center",
    opacity: 0.9,
  },

  button: {
    marginTop: gap,
    backgroundColor: accent,
    paddingVertical: padding * 1.5,
    paddingHorizontal: padding * 3,
    borderRadius: borderRadius * 3,
  },
  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.97 }],
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: textOnAccent,
  },

  statsRow: {
    flexDirection: "row",
    gap,
  },
  stat: {
    flex: 1,
    alignItems: "center",
    gap: 4,
    backgroundColor: border,
    borderRadius,
    paddingVertical: padding * 1.5,
    paddingHorizontal: padding / 2,
  },
  statValue: {
    fontSize: 22,
    fontWeight: "bold",
    color: accent,
  },
  statLabel: {
    fontSize: 12,
    color: textPrimary,
    textAlign: "center",
  },

  section: {
    gap: gap * 1.5,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: textPrimary,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: gap * 1.5,
    backgroundColor: surface,
    borderRadius: borderRadius * 1.5,
    padding: padding * 1.5,
    borderWidth: 1,
    borderColor: border,
  },
  cardIcon: {
    width: 52,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: border,
    borderRadius: borderRadius * 1.5,
  },
  cardIconText: {
    fontSize: 26,
  },
  cardBody: {
    flex: 1,
    gap: 4,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: accent,
  },
  cardText: {
    fontSize: 14,
    lineHeight: 20,
    color: textPrimary,
    opacity: 0.85,
  },

  about: {
    gap: gap * 1.5,
    backgroundColor: surface,
    borderRadius: borderRadius * 2,
    padding: padding * 2,
    borderLeftWidth: 4,
    borderLeftColor: accent,
  },
  aboutText: {
    fontSize: 15,
    lineHeight: 23,
    color: textPrimary,
    opacity: 0.9,
  },

  terms: {
    fontSize: 15,
    color: accent,
    textAlign: "center",
    textDecorationLine: "underline",
    padding,
  },
  footer: {
    fontSize: 15,
    color: accentSecondary,
    textAlign: "center",
    padding: padding / 5,
  },
  footerName: {
    color: textPrimary,
    fontWeight: "bold",
  },
});
