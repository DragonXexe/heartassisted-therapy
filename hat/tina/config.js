import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.GITHUB_BRANCH ?? process.env.VERCEL_GIT_COMMIT_REF ?? "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID ?? "",
  token: process.env.TINA_TOKEN ?? "",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      {
        name: "home",
        label: "Startpagina",
        path: "content",
        format: "json",
        ui: {
          // Only one document — no list view needed
          allowedActions: { create: false, delete: false },
          router: () => "/",
        },
        match: { include: "home" },
        fields: [
          // ── Meta ──────────────────────────────────────────────
          {
            type: "string",
            name: "title",
            label: "Paginatitel",
            isTitle: true,
            required: true,
          },

          // ── What is HAT ───────────────────────────────────────
          {
            type: "rich-text",
            name: "what_is_hat",
            label: "Wat is H.A.T.?",
          },

          // ── Origins ───────────────────────────────────────────
          {
            type: "rich-text",
            name: "origins",
            label: "Hoe het begon (oorsprong)",
          },

          // ── Effectiveness ─────────────────────────────────────
          {
            type: "rich-text",
            name: "effectiveness",
            label: "Effectiviteit (case-studies & onderzoek)",
          },

          // ── Book reference ────────────────────────────────────
          {
            type: "rich-text",
            name: "book_reference",
            label: "Boekverwijzing (*)",
          },

          // ── 10 Reasons (repeatable strings) ──────────────────
          {
            type: "object",
            name: "reasons",
            label: "10 redenen om H.A.T. te leren",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.reason ?? "Reden" }),
            },
            fields: [
              {
                type: "string",
                name: "reason",
                label: "Reden",
                required: true,
              },
            ],
          },

          // ── Workshop Goals (repeatable strings) ───────────────
          {
            type: "object",
            name: "goals",
            label: "Doelstellingen van de workshop",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.goal ?? "Doelstelling" }),
            },
            fields: [
              {
                type: "string",
                name: "goal",
                label: "Doelstelling",
                required: true,
              },
            ],
          },

          // ── Workshop Practical ────────────────────────────────
          {
            type: "object",
            name: "workshop",
            label: "Workshop Praktisch",
            fields: [
              {
                type: "rich-text",
                name: "methodology",
                label: "2. Methodologie",
              },
              {
                type: "rich-text",
                name: "target_group",
                label: "3. Doelgroep",
              },
              {
                type: "rich-text",
                name: "program",
                label: "4. Programma",
              },
              {
                type: "rich-text",
                name: "return_day",
                label: "5. Terugkomdag met supervisie",
              },
              {
                type: "rich-text",
                name: "location",
                label: "6. Locatie",
              },
              {
                type: "string",
                name: "dates",
                label: "7. Data",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "schedule",
                label: "7. Dagindeling",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "price",
                label: "8. Prijs (normaal)",
              },
              {
                type: "string",
                name: "price_late",
                label: "8. Prijs (laat inschrijven, vanaf 1 maand voor datum)",
              },
            ],
          },

          // ── Payment ───────────────────────────────────────────
          {
            type: "object",
            name: "payment",
            label: "Betaling",
            fields: [
              {
                type: "string",
                name: "iban",
                label: "IBAN",
              },
              {
                type: "string",
                name: "bic",
                label: "BIC/Swift",
              },
              {
                type: "rich-text",
                name: "registration_instructions",
                label: "9. Inschrijving & betaling (tekst)",
              },
              {
                type: "string",
                name: "google_forms_url",
                label: "Google Forms URL",
              },
              {
                type: "string",
                name: "stripe_url",
                label: "Stripe betaallink",
              },
              {
                type: "string",
                name: "contact_email",
                label: "Contact e-mailadres",
              },
            ],
          },

          // ── Cancellation ──────────────────────────────────────
          {
            type: "rich-text",
            name: "cancellation_policy",
            label: "10. Annulatiebeleid (inleidende tekst)",
          },
          {
            type: "object",
            name: "cancellation_rows",
            label: "10. Annulatietabel (rijen)",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.timing ?? "Rij" }),
            },
            fields: [
              {
                type: "string",
                name: "timing",
                label: "Tijdstip van annulatie",
                required: true,
              },
              {
                type: "string",
                name: "refund",
                label: "Terugbetaling",
                required: true,
              },
            ],
          },
        ],
      },
    ],
  },
});
