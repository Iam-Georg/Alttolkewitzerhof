import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <main className="pt-32 md:pt-40 pb-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-4xl font-semibold mb-12 text-primary">Datenschutzerklärung</h1>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-primary">1. Datenschutz auf einen Blick</h2>

            <h3 className="text-xl font-semibold mb-3 text-primary mt-6">Allgemeine Hinweise</h3>
            <p className="text-muted-foreground mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
              passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
              persönlich identifiziert werden können.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-primary mt-6">Datenerfassung auf unserer Website</h3>
            <p className="text-muted-foreground mb-4">
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
              <br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können
              Sie dem Impressum dieser Website entnehmen.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>Wie erfassen wir Ihre Daten?</strong>
              <br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um
              Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch beim Besuch der
              Website durch unsere IT-Systeme erfasst.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>Wofür nutzen wir Ihre Daten?</strong>
              <br />
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten.
              Eine Analyse Ihres Nutzerverhaltens findet nicht statt.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
              <br />
              Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
              gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung,
              Sperrung oder Löschung dieser Daten zu verlangen.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              2. Allgemeine Hinweise und Pflichtinformationen
            </h2>

            <h3 className="text-xl font-semibold mb-3 text-primary mt-6">Datenschutz</h3>
            <p className="text-muted-foreground mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
              personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
              Datenschutzerklärung.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-primary mt-6">Hinweis zur verantwortlichen Stelle</h3>
            <div className="text-muted-foreground mb-4 bg-secondary p-4 rounded-lg">
              <p>Hotel & Restaurant Alttolkewitzerhof</p>
              <p>Dao Thi Hoai Phuong</p>
              <p>Alttolkewitz 7</p>
              <p>01279 Dresden</p>
              <p className="mt-2">Telefon: 0049 351 217 679 30</p>
              <p>E-Mail: info@alttolkewitzerhof.de</p>
            </div>

            <h3 className="text-xl font-semibold mb-3 text-primary mt-6">
              Widerruf Ihrer Einwilligung zur Datenverarbeitung
            </h3>
            <p className="text-muted-foreground mb-4">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine
              bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an
              uns.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-primary mt-6">SSL- bzw. TLS-Verschlüsselung</h3>
            <p className="text-muted-foreground mb-4">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-
              bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des
              Browsers von "http://" auf "https://" wechselt.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-primary">3. Datenerfassung auf unserer Website</h2>

            <h3 className="text-xl font-semibold mb-3 text-primary mt-6">Cookies</h3>
            <p className="text-muted-foreground mb-4">
              Unsere Internetseiten verwenden sogenannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an
              und enthalten keine Viren. Sie dienen dazu, die Website funktionsfähig, sicher und nutzerfreundlich zu
              gestalten.
            </p>

            <h4 className="font-semibold mb-2 text-primary">Verwendete Cookie-Kategorien:</h4>
            <p className="text-muted-foreground mb-4">
              <strong>Notwendige Cookies:</strong> Diese Cookies sind für das Funktionieren der Website erforderlich.
              Sie können nicht in Ihren Browsereinstellungen deaktiviert werden.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>Analyse- und Marketing-Cookies:</strong> Wir verwenden keine Analyse- oder Marketing-Cookies mehr.
              Es findet kein Tracking oder Profiling der Besucher statt.
            </p>

            <h4 className="font-semibold mb-2 text-primary">Cookie-Einwilligung:</h4>
            <p className="text-muted-foreground mb-4">
              Beim ersten Besuch unserer Website können Sie Ihre Cookie-Präferenzen über das Banner akzeptieren oder
              ablehnen. Ihre Entscheidung wird gespeichert und beim nächsten Besuch berücksichtigt. Sie können Ihre
              Präferenzen jederzeit über den Link am Ende jeder Seite ändern.
            </p>

            <h4 className="font-semibold mb-2 text-primary">Datenspeicherung:</h4>
            <p className="text-muted-foreground mb-4">
              Es werden keine personenbezogenen Daten erfasst. Notwendige Cookies speichern nur die minimalen
              Informationen, die für das Funktionieren der Website erforderlich sind. Es findet keine Weitergabe
              an Dritte statt.
            </p>

            <h4 className="font-semibold mb-2 text-primary">Widerruf:</h4>
            <p className="text-muted-foreground mb-4">
              Die Nutzung notwendiger Cookies kann nicht deaktiviert werden. Andere Cookies werden nicht verwendet.
              Sie können Ihre Einwilligung jederzeit ändern oder widerrufen.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-primary mt-6">Kontaktformular</h3>
            <p className="text-muted-foreground mb-4">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
              inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
              Anschlussfragen bei uns gespeichert.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-primary">4. Plugins und Tools</h2>

            <h3 className="text-xl font-semibold mb-3 text-primary mt-6">Buchungssystem</h3>
            <p className="text-muted-foreground mb-4">
              Für Zimmerbuchungen nutzen wir den Dienst Mews. Wenn Sie eine Buchung vornehmen, werden Sie auf die
              Buchungsplattform von Mews weitergeleitet. Die Datenerfassung erfolgt dann ausschließlich durch Mews.
              Bitte beachten Sie die dortigen Datenschutzbestimmungen.
            </p>
            <p className="text-muted-foreground mb-4">
              Mews Systems s.r.o.<br />
              Kladenska 153/6<br />
              160 00 Prag 6, Tschechische Republik
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Kontakt bei Fragen</h2>
            <p className="text-muted-foreground mb-4">
              Bei Fragen zum Datenschutz können Sie sich jederzeit unter der im{" "}
              <a href="/impressum" className="text-accent hover:underline">
                Impressum
              </a>{" "}
              angegebenen Adresse an uns wenden.
            </p>
            <p className="text-muted-foreground">
              <strong>Cookie-Einstellungen ändern:</strong> Sie können Ihre Cookie-Präferenzen jederzeit über den
              Link "Cookie-Einstellungen" am Ende jeder Seite anpassen.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

