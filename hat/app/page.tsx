import { client } from "../tina/__generated__/client";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import Image from "next/image";

export default async function HomePage() {
  const { data } = await client.queries.home({ relativePath: "home.json" });
  const p = data.home;
  const w = p.workshop;
  const pay = p.payment;

  return (
    <>
      {/* NAV */}
      <div className="nav-bar">
        <div className="nav-inner">
          <a className="nav-title" href="#">
            H.A.T. (Psychotherapie) <span>Workshop</span>
          </a>
          <ul className="nav-links">
            <li><a href="#wat-is-hat">Startpagina</a></li>
            <li><a href="#oorsprong">Over ons</a></li>
            <li><a href="#praktisch">Praktisch</a></li>
            <li><a href="#inschrijving">Inschrijving</a></li>
          </ul>
        </div>
      </div>

      <div className="page">
        <h1>Heart-Assisted Therapy</h1>
        <hr />

        {/* WAT IS HAT */}
        <section id="wat-is-hat">
          <h1>Wat is Heart Assisted Therapie ? © (H.A.T.)</h1>
          <TinaMarkdown content={p.what_is_hat} />
        </section>

        <hr />

        {/* OORSPRONG */}
        <section id="oorsprong">
          <h1>Hoe het begon : oorsprong van de H.A.T.</h1>
          <TinaMarkdown content={p.origins} />
          <TinaMarkdown content={p.effectiveness} />
          <hr />
          <TinaMarkdown content={p.book_reference} />
          <Image
            src="https://b6b97daf17.cbaul-cdnwnd.com/bc522009c017742993e2f5b223e6381e/200000007-8bdfa8bdfe/HAT.jpg?ph=b6b97daf17"
            alt="HAT afbeelding"
            width={600}
            height={400}
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <p>
            Cases : zie hierboven het boek van John Diepold, waarin 25 cases
            uitvoerig worden besproken.
          </p>
        </section>

        <hr />

        {/* 10 REDENEN */}
        <section>
          <h1><strong>Tien redenen om de H.A.T. te leren als psychotherapeut:</strong></h1>
          <p><strong>Hier vind je 10 redenen om met de H.A.T. te leren werken:</strong></p>
          <ul>
            {p.reasons?.map((item, i) => (
              <li key={i}>{item?.reason}</li>
            ))}
          </ul>
          <Image
            src="https://duyn491kcolsw.cloudfront.net/files/3e/3ev/3evmyq.jpg?ph=b6b97daf17"
            alt="Workshop afbeelding"
            width={600}
            height={400}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </section>

        <hr />

        {/* DOELSTELLINGEN */}
        <section>
          <p><strong>Doelstellingen van de workshop: Wat leert de deelnemer ?</strong></p>
          <ul>
            {p.goals?.map((item, i) => (
              <li key={i}>{item?.goal}</li>
            ))}
          </ul>
        </section>

        <hr />

        {/* PRAKTISCH */}
        <section id="praktisch">
          <h2><strong>Basic Workshop H.A.T. - Praktisch</strong></h2>

          <p><strong>1. Doelstelling</strong></p>
          <p>
            Tijdens de Basic Workshop leert u het protocol van de HAT Awareness
            Streaming aan, zodat u er onmiddellijk mee aan de slag kan met uw cliënten.
          </p>

          <p><strong>2. Methodologie.</strong></p>
          <TinaMarkdown content={w?.methodology} />

          <p><strong>3. Doelgroep</strong></p>
          <TinaMarkdown content={w?.target_group} />

          <p><strong>4. Programma</strong></p>
          <TinaMarkdown content={w?.program} />

          <p><strong>5. Terugkomdag met supervisie:</strong></p>
          <TinaMarkdown content={w?.return_day} />

          <p><strong>6. Locatie</strong></p>
          <TinaMarkdown content={w?.location} />

          <p><strong>7. Data en dagindeling</strong></p>
          <p>{w?.dates}</p>
          <p>{w?.schedule}</p>

          <p><strong>8. Prijs</strong></p>
          <p>
            Prijs voor de tweedaagse workshop HAT :{" "}
            <strong>{w?.price}</strong> ({w?.price_late} vanaf 1 maand voor de datum)
          </p>
          <p><strong>Inbegrepen: syllabus, lichte lunch (broodjes) en alle koffiepauzes.</strong></p>
          <p>De deelnemer ontvangt een bewijs van betaling en na afloop een deelname-attest.</p>
        </section>

        <hr />

        {/* BETALING */}
        <section id="betaling">
          <p><strong>9. Inschrijving en betaling</strong></p>
          <TinaMarkdown content={pay?.registration_instructions} />

          <div className="iban-block">
            IBAN : {pay?.iban}&nbsp;&nbsp;&nbsp;BIC/Swift : {pay?.bic}
            <br />
            Naam bestemmeling : Instituut voor Eclectische Psychologie
            <br />
            <em><strong>met vermelding</strong>: &quot;HAT Basic Workshop 2026 + Volledige naam&quot;</em>
          </div>

          <p><em>Betaling kan ook met QR-code:</em></p>
          <a
            href={`https://epc-qr.eu/?bname=Instituut%20voor%20Eclectische%20Psychologie&iban=${pay?.iban?.replace(/\s/g, "")}&euro=520&info=HAT%20Basic%20Workshop%202026&bic=${pay?.bic}`}
            target="_blank"
            rel="noopener noreferrer"
            className="qr-link"
          >
            <Image
              src="/qr-code.png"
              alt="QR code betaling — klik om te betalen"
              width={180}
              height={180}
              style={{ margin: "8px 0", border: "1px solid #ddd", padding: "6px", background: "#fff" }}
            />
          </a>
          <p style={{ fontSize: "13px", color: "#666" }}>
            Scan met uw bankapp om te betalen. Vergeet niet uw volledige naam te vermelden als mededeling.
          </p>
        </section>

        <hr />

        {/* ANNULATIE */}
        <section>
          <p><strong>10. Annulatie:</strong></p>
          <TinaMarkdown content={p.cancellation_policy} />
          <table className="ann-table">
            <thead>
              <tr>
                <th>Tijdstip van annulatie</th>
                <th>Terugbetaling</th>
              </tr>
            </thead>
            <tbody>
              {p.cancellation_rows?.map((row, i) => (
                <tr key={i}>
                  <td>{row?.timing}</td>
                  <td>{row?.refund}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <hr />

        {/* INSCHRIJVING */}
        <section id="inschrijving">
          <p><strong>11. Inschrijvingsformulier</strong></p>
          <p>Kies hoe u het inschrijvingsformulier wil invullen en verzenden:</p>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "16px" }}>
            <div>
              <a
                href={pay?.google_forms_url ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  background: "#1a1a2e",
                  color: "#fff",
                  textDecoration: "none",
                  padding: "12px 22px",
                  fontSize: "14px",
                  fontWeight: "bold",
                  borderRadius: "4px",
                }}
              >
                📋 Online invullen via Google Forms
              </a>
              <p style={{ fontSize: "12px", color: "#888", marginTop: "6px" }}>
                Vul het formulier in via uw browser.<br />Uw gegevens worden automatisch doorgestuurd.
              </p>
            </div>

            <div>
              <a
                href={`mailto:${pay?.contact_email}?subject=Inschrijving%20HAT%20Basic%20Workshop%202026`}
                style={{
                  display: "inline-block",
                  background: "#fff",
                  color: "#1a1a2e",
                  textDecoration: "none",
                  padding: "12px 22px",
                  fontSize: "14px",
                  fontWeight: "bold",
                  borderRadius: "4px",
                  border: "2px solid #1a1a2e",
                }}
              >
                ✉️ Inschrijven via e-mail
              </a>
              <p style={{ fontSize: "12px", color: "#888", marginTop: "6px" }}>
                Opent uw e-mailprogramma met het formulier<br />al ingevuld. Vul aan en klik op Verzenden.
              </p>
            </div>
          </div>

          <div style={{ marginTop: "16px" }}>
            <a href={pay?.stripe_url ?? "#"} target="_blank" rel="noopener noreferrer">
              Pay!
            </a>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer>
        <p>
          © Heart Assisted Therapy &nbsp;·&nbsp; Walter De Jongh &nbsp;·&nbsp;
          <a href={`mailto:${pay?.contact_email}`}>{pay?.contact_email}</a>
        </p>
      </footer>
    </>
  );
}
