import { StyleSheet, View, Text, ScrollView } from "react-native";

import defaultStyles from "./../utils/defaultStyles";

const {
  background,
  surface,
  border,
  textPrimary,
  accent,
  accentSecondary,
  padding,
  gap,
  borderRadius,
} = defaultStyles;

const name = "StoreStar";

const terms = [
  {
    title: "Sobre o app",
    text: `O ${name} foi criado para ajudar pequenos empreendedores a gerir suas lojas e negócios, organizando e controlando as vendas de forma fácil.`,
  },
  {
    title: "Recursos gratuitos",
    text: `Gráficos e ferramentas que normalmente são pagos estão disponíveis gratuitamente no ${name}.`,
  },
  {
    title: "Fase inicial",
    text: `O ${name} está no início do desenvolvimento. Apesar de todos os esforços, não nos responsabilizamos por eventuais perdas de dados.`,
  },
  {
    title: "Nosso compromisso",
    text: "O desenvolvedor trabalha continuamente para entregar a melhor e mais segura versão possível. Faça bom proveito da ferramenta!",
  },
];

function TermItem({ title, text }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardText}>{text}</Text>
    </View>
  );
}

export default function PageTerms() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.pageMain}
      >
        <View style={styles.hero}>
          <Text style={styles.brand}>
            <Text style={styles.brandAccent}>Termos</Text> de uso
          </Text>
          <Text style={styles.tagline}>Leia com atenção antes de começar.</Text>
        </View>

        <View style={styles.section}>
          {terms.map((item) => (
            <TermItem key={item.title} {...item} />
          ))}
        </View>

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
    fontSize: 36,
    fontWeight: "bold",
    color: textPrimary,
  },
  brandAccent: {
    color: accent,
  },
  tagline: {
    fontSize: 18,
    fontWeight: "600",
    color: accentSecondary,
    textAlign: "center",
  },

  section: {
    gap: gap * 1.5,
  },
  card: {
    gap: gap / 2,
    backgroundColor: surface,
    borderRadius: borderRadius * 2,
    padding: padding * 2,
    borderWidth: 1,
    borderColor: border,
    borderLeftWidth: 4,
    borderLeftColor: accent,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: accent,
  },
  cardText: {
    fontSize: 15,
    lineHeight: 23,
    color: textPrimary,
    opacity: 0.9,
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
