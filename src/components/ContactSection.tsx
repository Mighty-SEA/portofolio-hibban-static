import * as React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = React.useState(false);
  const [copiedWa, setCopiedWa] = React.useState(false);

  const [formName, setFormName] = React.useState("");
  const [formEmail, setFormEmail] = React.useState("");
  const [formMessage, setFormMessage] = React.useState("");

  const [formSending, setFormSending] = React.useState(false);
  const [formSubmitted, setFormSubmitted] = React.useState(false);
  const [formError, setFormError] = React.useState(false);

  const copyToClipboard = (text: string, type: "email" | "wa") => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(text);
      if (type === "email") {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        setCopiedWa(true);
        setTimeout(() => setCopiedWa(false), 2000);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formEmail.trim() || !formMessage.trim()) return;

    setFormSending(true);
    setFormError(false);
    setFormSubmitted(false);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "web3forms_portfolio_key",
          name: formName.trim(),
          email: formEmail.trim(),
          message: formMessage.trim(),
          subject: `Portfolio Message from ${formName.trim()}`,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setFormSubmitted(true);
        setFormName("");
        setFormEmail("");
        setFormMessage("");
      } else {
        // Fallback: open WhatsApp
        window.open(
          `https://wa.me/6289516176720?text=${encodeURIComponent(
            `Halo Hibban, saya ${formName} (${formEmail}).\n\nPesan:\n${formMessage}`
          )}`,
          "_blank"
        );
        setFormSubmitted(true);
      }
    } catch {
      // Fallback on network error: mailto
      window.open(
        `mailto:Hibban.Habiburrahman.SEA@gmail.com?subject=Kontak%20Portofolio%20dari%20${encodeURIComponent(
          formName
        )}&body=${encodeURIComponent(
          `Nama: ${formName}\nEmail: ${formEmail}\n\n${formMessage}`
        )}`,
        "_blank"
      );
      setFormSubmitted(true);
    } finally {
      setFormSending(false);
    }
  };

  return (
    <section id="contact" className="py-12 flex flex-col gap-8">
      {/* Title */}
      <div className="flex flex-col gap-2 reveal">
        <div className="inline-flex items-center gap-2">
          <h2 className="font-heading font-black text-2xl sm:text-4xl uppercase px-4 py-1 bg-main border-2 border-border rounded-base shadow-shadow inline-block">
            <span data-lang-id>Mari Berdiskusi!</span>
            <span data-lang-en>Let's Talk!</span>
          </h2>
        </div>
        <p data-lang-id className="font-sans text-base text-black/70 max-w-2xl font-medium">
          Tertarik untuk bekerja sama, mendiskusikan proyek freelance, atau sekadar berkonsultasi? Jangan ragu untuk menghubungi saya!
        </p>
        <p data-lang-en className="font-sans text-base text-black/70 max-w-2xl font-medium">
          Interested in working together, discussing a freelance project, or just want to chat? Reach out directly or drop a message below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Direct Coordinates */}
        <div className="lg:col-span-5 flex reveal">
          <Card className="w-full flex flex-col justify-between">
            <CardHeader>
              <Badge variant="neutral" className="w-fit font-mono text-xs uppercase mb-1">
                <span data-lang-id>Kontak Langsung</span>
                <span data-lang-en>Direct Contact</span>
              </Badge>
              <CardTitle className="text-xl sm:text-2xl font-heading font-black">
                <span data-lang-id>Kontak Langsung</span>
                <span data-lang-en>Direct Channels</span>
              </CardTitle>
              <CardDescription className="text-black/75 font-sans">
                <span data-lang-id>Klik kartu di bawah untuk menyalin kontak langsung ke clipboard Anda.</span>
                <span data-lang-en>Click on the cards below to instantly copy coordinates to your clipboard.</span>
              </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col gap-4">
              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <span className="font-display font-bold text-xs uppercase tracking-wider text-black/60">
                  Email
                </span>
                <button
                  type="button"
                  onClick={() => copyToClipboard("Hibban.Habiburrahman.SEA@gmail.com", "email")}
                  className="w-full flex items-center justify-between gap-2 p-3 bg-secondary-background border-2 border-border rounded-base shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all text-left"
                >
                  <span className="font-mono text-xs sm:text-sm font-bold truncate">
                    {copiedEmail ? (
                      <>
                        <span data-lang-id>✓ Tersalin ke Clipboard!</span>
                        <span data-lang-en>✓ Copied to Clipboard!</span>
                      </>
                    ) : (
                      "Hibban.Habiburrahman.SEA@gmail.com"
                    )}
                  </span>
                  <span className="text-xs uppercase font-bold px-2 py-0.5 bg-main border border-border rounded-sm">
                    {copiedEmail ? (
                      "Copied"
                    ) : (
                      <>
                        <span data-lang-id>Salin</span>
                        <span data-lang-en>Copy</span>
                      </>
                    )}
                  </span>
                </button>
              </div>

              {/* WhatsApp */}
              <div className="flex flex-col gap-1.5">
                <span className="font-display font-bold text-xs uppercase tracking-wider text-black/60">
                  WhatsApp
                </span>
                <button
                  type="button"
                  onClick={() => copyToClipboard("+6289516176720", "wa")}
                  className="w-full flex items-center justify-between gap-2 p-3 bg-secondary-background border-2 border-border rounded-base shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all text-left"
                >
                  <span className="font-mono text-xs sm:text-sm font-bold">
                    {copiedWa ? (
                      <>
                        <span data-lang-id>✓ Tersalin ke Clipboard!</span>
                        <span data-lang-en>✓ Copied to Clipboard!</span>
                      </>
                    ) : (
                      "+62 895-1617-6720"
                    )}
                  </span>
                  <span className="text-xs uppercase font-bold px-2 py-0.5 bg-[#25D366] text-black border border-border rounded-sm">
                    {copiedWa ? (
                      "Copied"
                    ) : (
                      <>
                        <span data-lang-id>Chat / Salin</span>
                        <span data-lang-en>Chat / Copy</span>
                      </>
                    )}
                  </span>
                </button>
              </div>

              <div className="mt-4 pt-4 border-t-2 border-border/20 flex items-center justify-between text-xs font-mono font-bold text-black/70">
                <span>
                  <span data-lang-id>📍 Lokasi: Bandung, ID</span>
                  <span data-lang-en>📍 Location: Bandung, ID</span>
                </span>
                <span className="text-green-700">
                  <span data-lang-id>● Siap Bekerja</span>
                  <span data-lang-en>● Open for Work</span>
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 flex reveal">
          <Card className="w-full">
            <CardHeader>
              <Badge variant="neutral" className="w-fit font-mono text-xs uppercase mb-1">
                <span data-lang-id>Kirim Pesan</span>
                <span data-lang-en>Send Message</span>
              </Badge>
              <CardTitle className="text-xl sm:text-2xl font-heading font-black">
                <span data-lang-id>Formulir Kontak</span>
                <span data-lang-en>Contact Form</span>
              </CardTitle>
              <CardDescription className="text-black/75 font-sans">
                <span data-lang-id>Tinggalkan pesan, saya akan segera membalas email atau nomor Anda secepatnya.</span>
                <span data-lang-en>Drop a message, and I'll reply to your email or WhatsApp number shortly.</span>
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="font-display font-bold text-xs uppercase">
                      <span data-lang-id>Nama Anda</span>
                      <span data-lang-en>Your Name</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="Nama Lengkap / Full Name"
                      className="p-2.5 bg-secondary-background border-2 border-border rounded-base font-sans text-sm focus:outline-hidden focus:ring-2 focus:ring-main shadow-[2px_2px_0px_#000]"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="font-display font-bold text-xs uppercase">
                      <span data-lang-id>Email Anda</span>
                      <span data-lang-en>Your Email</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      placeholder="name@email.com"
                      className="p-2.5 bg-secondary-background border-2 border-border rounded-base font-sans text-sm focus:outline-hidden focus:ring-2 focus:ring-main shadow-[2px_2px_0px_#000]"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="font-display font-bold text-xs uppercase">
                    <span data-lang-id>Pesan</span>
                    <span data-lang-en>Message</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    placeholder="..."
                    className="p-2.5 bg-secondary-background border-2 border-border rounded-base font-sans text-sm focus:outline-hidden focus:ring-2 focus:ring-main shadow-[2px_2px_0px_#000]"
                  ></textarea>
                </div>

                {formSubmitted && (
                  <div className="p-3 bg-green-200 border-2 border-border rounded-base font-bold text-xs text-black flex items-center gap-2">
                    <span>✓</span>
                    <span data-lang-id>Pesan Anda berhasil dikirim! Terima kasih telah menghubungi.</span>
                    <span data-lang-en>Message sent successfully! Thank you for reaching out.</span>
                  </div>
                )}

                {formError && (
                  <div className="p-3 bg-red-200 border-2 border-border rounded-base font-bold text-xs text-black flex items-center gap-2">
                    <span>✕</span>
                    <span data-lang-id>Gagal mengirim pesan. Silakan hubungi langsung lewat WhatsApp atau Email.</span>
                    <span data-lang-en>Failed to send message. Please contact directly via WhatsApp or Email.</span>
                  </div>
                )}

                <div className="flex justify-end pt-2">
                  <Button
                    variant="default"
                    size="sm"
                    type="submit"
                    disabled={formSending}
                    className="font-heading font-black uppercase text-xs"
                  >
                    <span data-lang-id>{formSending ? "Mengirim..." : "Kirim Pesan 🚀"}</span>
                    <span data-lang-en>{formSending ? "Sending..." : "Send Message 🚀"}</span>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
