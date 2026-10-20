import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
} from "react-native";

import defaultStyles from "./../utils/defaultStyles";

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
            <View key={item.label} style={styles.stat}>
              <Text style={styles.statValue}>{item.value}</Text>
              <Text style={styles.statLabel}>{item.label}</Text>
            </View>
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

        <Text style={styles.footer}>
          Developed by: Guilherme Soares marciel
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultStyles.bg,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: defaultStyles.bg2,
    padding: defaultStyles.padding,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: defaultStyles.colorMain,
  },
  icon: {
    width: 50,
    height: 50,
  },
  pageMain: {
    flexGrow: 1,
    padding: defaultStyles.padding * 2,
    gap: defaultStyles.gap * 3,
  },
  hero: {
    alignItems: "center",
    gap: defaultStyles.gap,
    paddingVertical: defaultStyles.padding * 2,
  },
  brand: {
    fontSize: 48,
    fontWeight: "bold",
    color: defaultStyles.colorMain,
  },
  brandAccent: {
    color: defaultStyles.colorOn,
  },
  tagline: {
    fontSize: 22,
    fontWeight: "600",
    color: defaultStyles.colorMuted,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: defaultStyles.colorMain,
    textAlign: "center",
    opacity: 0.9,
  },
  button: {
    marginTop: defaultStyles.gap,
    backgroundColor: defaultStyles.colorOn,
    paddingVertical: defaultStyles.padding * 1.5,
    paddingHorizontal: defaultStyles.padding * 3,
    borderRadius: defaultStyles.borderRadius * 3,
  },
  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.97 }],
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: defaultStyles.colorInk,
  },
  statsRow: {
    flexDirection: "row",
    gap: defaultStyles.gap,
  },
  stat: {
    flex: 1,
    alignItems: "center",
    backgroundColor: defaultStyles.grid,
    borderRadius: defaultStyles.borderRadius,
    paddingVertical: defaultStyles.padding * 1.5,
    paddingHorizontal: defaultStyles.padding / 2,
    gap: 4,
  },
  statValue: {
    fontSize: 22,
    fontWeight: "bold",
    color: defaultStyles.colorOn,
  },
  statLabel: {
    fontSize: 12,
    color: defaultStyles.colorMain,
    textAlign: "center",
  },
  section: {
    gap: defaultStyles.gap * 1.5,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: defaultStyles.colorMain,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: defaultStyles.gap * 1.5,
    backgroundColor: defaultStyles.bg2,
    borderRadius: defaultStyles.borderRadius * 1.5,
    padding: defaultStyles.padding * 1.5,
    borderWidth: 1,
    borderColor: defaultStyles.grid,
  },
  cardIcon: {
    width: 52,
    height: 52,
    borderRadius: defaultStyles.borderRadius * 1.5,
    backgroundColor: defaultStyles.grid,
    alignItems: "center",
    justifyContent: "center",
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
    color: defaultStyles.colorOn,
  },
  cardText: {
    fontSize: 14,
    lineHeight: 20,
    color: defaultStyles.colorMain,
    opacity: 0.85,
  },
  about: {
    gap: defaultStyles.gap * 1.5,
    backgroundColor: defaultStyles.bg2,
    borderRadius: defaultStyles.borderRadius * 2,
    padding: defaultStyles.padding * 2,
    borderLeftWidth: 4,
    borderLeftColor: defaultStyles.colorOn,
  },
  aboutText: {
    fontSize: 15,
    lineHeight: 23,
    color: defaultStyles.colorMain,
    opacity: 0.9,
  },
  footer: {
    fontSize: 12,
    color: defaultStyles.colorMuted,
    textAlign: "center",
    paddingBottom: defaultStyles.padding * 2,
  },
});
