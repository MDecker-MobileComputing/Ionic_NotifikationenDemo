
/**
 * Klasse kapselt alle Attribute einer Benachrichtigung, die auf der Nutzeroberfläche
 * in der Liste angezeigt werden sollen.
 */
export class Benachrichtigung {

    /** Zeitpunkt (Datum + Uhrzeit), zu dem die Nachricht empfangen wurde. */
    private empfangszeitpunkt: Date = null;

    constructor(public titel: string,
                public nachrichtenBody: string,
                public eigenesAttribut: string,
                public imHintergrundEmpfangen: boolean) {

        this.empfangszeitpunkt = new Date();
    }

    /**
     * Gibt String mit Info zurück, der besagt, ob Nachricht empfangen wurde, 
     * während App im Hintergrund oder Vordergrund war.
     * 
     * @returns Entweder "Im Hintergrund empfangen" oder "Im Vordergrund empfangen"
     */
    public getEmpfangsmodus(): string {

        if (this.imHintergrundEmpfangen === true) {

            return "Im Hintergrund empfangen";

        } else {

            return "Im Vordergrund empfangen";
        }
    }

    /**
     * Gibt String mit Datum und Uhrzeit des Empfangs der Nachricht zurück.
     * 
     * @returns String mit Datum und Uhrzeit für die Anzeige auf UI, z.B. 
     *          "27.6.2021, 16:17 Uhr".
     */
    public getEmpfangszeitpunkt(): string {


        const tag   = this.empfangszeitpunkt.getDate();
        const monat = this.empfangszeitpunkt.getMonth() + 1;
        const jahr  = this.empfangszeitpunkt.getFullYear();

        const stunde = this.empfangszeitpunkt.getHours();
        const minute = this.empfangszeitpunkt.getMinutes();
        const minuteStr = minute < 10 ? `0${minute}` : `${minute}`;

        return `${tag}.${monat}.${jahr}, ${stunde}:${minuteStr} Uhr`;
    }

    /**
     * Getter für Payload (Body) der Nachricht.
     * 
     * @returns Text aus Body der Nachricht oder entsprechender Hinweis, wenn Body
     *          leer war (d.h. nur aus Leerzeichen bestand); in der Web-Oberfläche 
     *          kann keine Notifikation abgeschickt werden, wenn nicht mindestens
     *          ein paar Leerzeichen für den Body der Nachricht eingegeben wurden,
     *          aber im Hintergrund empfangene Nachrichten haben einen leeren Body.
     */
    public getNachrichtenBody(): string {

        if (!this.nachrichtenBody || this.nachrichtenBody.trim().length === 0) {

            return "<Nachricht hat leeren Body>";

        } else {

            return this.nachrichtenBody.trim();
        }
    }

    /**
     * Getter für Wert von Custom Attribut mit Schlüssel "eigenes_attribut".
     * 
     * @returns Wert von Attribut oder Hinweis, dass eigenes Attribut nicht gesetzt war.
     */
    public getInhaltEigenesAttribut(): string {

        if (!this.eigenesAttribut) {

            return "Nachricht enthielt keine Daten unter Schlüssel \"eigenes_attribut\".";

        } else {

            return this.eigenesAttribut;
        }

    }

}
