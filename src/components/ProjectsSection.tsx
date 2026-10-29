import * as React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

interface LocalizedText {
  en: string;
  id: string;
}

interface LocalizedList {
  en: string[];
  id: string[];
}

interface EngineeringCaseStudy {
  problem: LocalizedText;
  solution: LocalizedText;
  decision: LocalizedText;
}

interface Project {
  id: string;
  title: LocalizedText;
  category: LocalizedText;
  desc: LocalizedText;
  metrics: string[];
  caseStudy: EngineeringCaseStudy;
  highlights: LocalizedList;
  tags: string[];
  link?: string;
  github?: string;
  screenshots: string[];
}

const projects: Project[] = [
  {
    id: "priceboost",
    title: {
      en: "PriceBoost (Thesis Project)",
      id: "PriceBoost (Tugas Akhir)",
    },
    category: {
      en: "AI & Microservice",
      id: "AI & Microservice",
    },
    desc: {
      en: "AI-powered price recommendation platform for Tokopedia products using XGBoost machine learning, Go, Python, Vue 3, and PostgreSQL. Features automated Tokopedia web scraping and cross-validation capabilities with IBM SPSS for academic research rigor.",
      id: "Platform rekomendasi harga jual bertenaga AI untuk produk Tokopedia menggunakan machine learning XGBoost, Go, Python, Vue 3, dan PostgreSQL. Dilengkapi web scraping Tokopedia otomatis serta validasi silang dengan IBM SPSS untuk riset skripsi.",
    },
    metrics: [
      "⚡ Go & Python Microservices",
      "🤖 XGBoost Regression (Scikit-Learn)",
      "📊 Validated w/ IBM SPSS",
      "🕷️ Automated Tokopedia Scraping",
    ],
    caseStudy: {
      problem: {
        en: "Online merchants often misprice products due to lack of real-time competitor benchmarking, while marketplaces like Tokopedia do not provide public APIs for dynamic competitor price intelligence.",
        id: "Penjual online kerap kesulitan menentukan harga jual optimal karena ketiadaan data pembanding pasar real-time, serta tidak adanya API publik resmi untuk analisis harga kompetitor.",
      },
      solution: {
        en: "Engineered a complete data pipeline: headless web scrapers collect live Tokopedia product metrics, ingested by a Go REST API, and passed to a Python machine learning engine running an XGBoost regression model to calculate optimal selling prices.",
        id: "Membangun data pipeline terintegrasi: scraper otomatis mengumpulkan data produk live Tokopedia, diterima oleh Go REST API, lalu diproses oleh Python ML engine dengan model regresi XGBoost untuk memprediksi harga jual optimal.",
      },
      decision: {
        en: "Decoupled microservices architecture: Go for high-concurrency scraping & API routing, paired with Python for Scikit-learn/NumPy computations. Exportable CSV datasets were cross-validated with IBM SPSS (Pearson Correlation & Multiple Linear Regression) ensuring academic rigor.",
        id: "Menerapkan arsitektur microservices terpisah: Go untuk scraping konkuren cepat & API routing, dipadukan dengan Python untuk komputasi Scikit-learn/NumPy. Dataset diekspor dan divalidasi silang dengan IBM SPSS (Korelasi Pearson & Regresi Linear Berganda) untuk akurasi metodologi ilmiah.",
      },
    },
    highlights: {
      en: [
        "Automated real-time web scrapper extracting live product metrics directly from Tokopedia marketplace",
        "XGBoost Regression Model & ML Engine trained on Tokopedia datasets (Pandas, Scikit-learn, NumPy)",
        "High-performance Microservice Architecture: Go API backend, Python ML engine, PostgreSQL, & Vue 3 Vite UI",
        "Academic Research Rigor: Exportable CSV datasets cross-validated with IBM SPSS (Pearson Correlation & R² Multiple Linear Regression)",
      ],
      id: [
        "Web scrapper otomatis real-time mengambil metrik produk secara langsung dari marketplace Tokopedia",
        "Model Regresi XGBoost & ML Engine yang dilatih pada dataset Tokopedia (Pandas, Scikit-learn, NumPy)",
        "Arsitektur Microservice Tinggi: Backend Go API, Engine Python ML, PostgreSQL, & Frontend Vue 3 Vite",
        "Ketepatan Metodologi Skripsi: Ekspor dataset CSV yang tervalidasi silang dengan IBM SPSS (Korelasi Pearson & Regresi R²)",
      ],
    },
    tags: ["Go", "Python (XGBoost)", "Vue 3", "PostgreSQL", "Web Scraping", "IBM SPSS"],
    github: "https://github.com/Mighty-SEA/PriceBoost",
    screenshots: [
      "/screenshoot/priceboost_dashboard.webp",
      "/screenshoot/priceboost_direktori.webp",
      "/screenshoot/priceboost_scrapper.webp",
      "/screenshoot/priceboost_xgboost.webp",
    ],
  },
  {
    id: "vetclinic",
    title: {
      en: "4Paws — Veterinary Clinic & POS System",
      id: "4Paws — Sistem Manajemen Klinik Hewan & POS",
    },
    category: {
      en: "Full-Stack & Desktop App",
      id: "Full-Stack & Desktop App",
    },
    desc: {
      en: "Full-stack veterinary clinic and petshop management application built for '4 Paws Pet Care'. Deployable both as a Cloud Web App and a Native Desktop GUI App (.exe) via Wails for offline clinic usage.",
      id: "Sistem manajemen klinik hewan dan petshop terintegrasi yang dibuat untuk '4 Paws Pet Care'. Dapat dijalankan sebagai Cloud Web App maupun Aplikasi Desktop GUI (.exe) via Wails untuk penggunaan offline.",
    },
    metrics: [
      "📦 ~15MB Native Binary (Wails)",
      "🔄 Offline-First SQLite & Cloud MySQL",
      "🐾 Full EMR & Queue Lifecycle",
      "⚡ Go Fiber Backend",
    ],
    caseStudy: {
      problem: {
        en: "Veterinary clinics operate in physical clinics where unstable internet can paralyze patient registration, electronic medical records (EMR), and retail checkout counters.",
        id: "Klinik hewan beroperasi di lingkungan fisik di mana koneksi internet yang tidak stabil dapat melumpuhkan antrean pendaftaran pasien, rekam medis hewan (RME), dan transaksi kasir.",
      },
      solution: {
        en: "Engineered a dual-deployment application from a single Go + Vue 3 codebase: runs seamlessly as a Cloud Web Application and compiles directly to an offline-capable native Windows executable (.exe) via Wails.",
        id: "Merancang aplikasi dual-deployment dari basis kode tunggal Go + Vue 3: dapat diakses sebagai Cloud Web App dan dikompilasi langsung menjadi aplikasi desktop native (.exe) dengan dukungan database lokal offline.",
      },
      decision: {
        en: "Selected Wails over Electron: Electron bundles Chromium/Node resulting in ~150MB+ installers and 300MB+ RAM usage that burdens clinic cash registers. Wails produces a lean ~15MB binary consuming under 60MB RAM with native OS webview integration.",
        id: "Memilih Wails dibanding Electron: Electron memakan installer 150MB+ dan RAM 300MB+ yang membebani PC kasir klinik. Wails menghasilkan installer sangat ringan (~15MB) dengan konsumsi RAM di bawah 60MB menggunakan webview native sistem operasi.",
      },
    },
    highlights: {
      en: [
        "Dual Deployment Architecture: Cloud Web App (Go Fiber/Vue 3) & Native Desktop App (.exe via Wails)",
        "Electronic Medical Records (EMR), Vaccination History, & Real-time Veterinarian Queue System",
        "Inpatient Accommodations, Deposit Tracking, & Integrated Petshop Point of Sale (POS)",
        "Inventory Audit Trail tracking stock restock, sales, and damaged item adjustments",
        "Business Intelligence Reports analyzing Handler Performance, Revenue Attribution, & Low Stock Alerts",
      ],
      id: [
        "Arsitektur Dual Deployment: Cloud Web App (Go Fiber/Vue 3) & Desktop GUI (.exe via Wails)",
        "Rekam Medis Elektronik (RME), Riwayat Vaksinasi, & Sistem Antrean Dokter Real-time",
        "Manajemen Rawat Inap, Uang Deposit, & Point of Sale (POS) Petshop Terpadu",
        "Audit Trail Inventori melacak restock barang, penjualan, dan penyesuaian stok rusak",
        "Laporan Business Intelligence menganalisis Kinerja Staf/Dokter, Revenue, & Peringatan Stok Kritis",
      ],
    },
    tags: ["Go (Fiber)", "Vue 3", "TypeScript", "Wails (.exe)", "MySQL/SQLite", "Docker"],
    link: "https://demo-petclinic.habiburrahman.web.id/",
    screenshots: [
      "/screenshoot/4paws-registration.webp",
      "/screenshoot/4paws-registration-detail.webp",
      "/screenshoot/4paws-POSpng.webp",
      "/screenshoot/4paws-invoice.webp",
      "/screenshoot/4paws-handlerpng.webp",
    ],
  },
  {
    id: "wagate",
    title: {
      en: "WAGate (Meow) — WhatsApp Gateway API",
      id: "WAGate (Meow) — WhatsApp Gateway API",
    },
    category: {
      en: "API & Microservice",
      id: "API & Microservice",
    },
    desc: {
      en: "WhatsApp Gateway service for developers and businesses. Send automated notification messages, verify OTP codes, and receive webhooks directly from client apps without having to rent or manage WhatsApp servers yourself.",
      id: "Layanan WhatsApp Gateway untuk developer dan bisnis. Kirim pesan notifikasi otomatis, verifikasi kode OTP, dan terima webhook langsung dari aplikasi klien tanpa perlu menyewa atau mengelola server WA sendiri.",
    },
    metrics: [
      "⚡ High-Concurrency Goroutines",
      "🔄 Automated Webhook Dispatch",
      "📱 Multi-Device QR Session",
      "🛡️ Zero-Server Client Setup",
    ],
    caseStudy: {
      problem: {
        en: "Small businesses and indie developers need automated WhatsApp notifications and OTP verification, but official Cloud API rates or self-hosted server maintenance are prohibitively expensive and complex.",
        id: "Bisnis UMKM dan pengembang membutuhkan pengiriman notifikasi otomatis serta verifikasi OTP WhatsApp, namun biaya WhatsApp Cloud API resmi atau pengelolaan server bot sendiri sangat mahal dan rumit.",
      },
      solution: {
        en: "Developed a high-throughput WhatsApp Gateway API service in Go. Clients simply scan a QR code from the dashboard, integrate standard REST endpoints, and receive real-time webhook events for inbound messages and delivery status.",
        id: "Membangun layanan WhatsApp Gateway API berkinerja tinggi menggunakan Go. Klien cukup memindai QR code dari dashboard, memanggil endpoint REST standar, dan menerima webhook real-time untuk pesan masuk serta status pengiriman.",
      },
      decision: {
        en: "Leveraged Go's native goroutines and channel architecture to manage persistent multi-device websocket connections concurrently with minimal memory footprint, preventing event loop blocking during high message volume spikes.",
        id: "Memanfaatkan fitur Goroutines dan Channels bawaan Go untuk mengelola koneksi websocket multi-device secara konkuren dengan konsumsi memori minimal, mencegah lag/blocking saat terjadi lonjakan pengiriman pesan massal.",
      },
    },
    highlights: {
      en: [
        "High-performance Go backend API for instant text messaging, media dispatch, and OTP verification",
        "Reactive dashboard frontend built with Vue.js and shadcn/ui components",
        "Database and realtime authentication/storage powered by Supabase",
        "Real-time webhooks capturing incoming messages and delivery receipt status (delivered, read)",
        "Stable automated multi-device QR connection & session management",
      ],
      id: [
        "Backend Go API berkinerja tinggi untuk pengiriman pesan teks, media, dan OTP instan",
        "Frontend dashboard reaktif dibangun dengan Vue.js dan komponen shadcn/ui",
        "Database & realtime auth/storage ditenagai oleh Supabase",
        "Webhook real-time untuk menangkap pesan masuk dan event status pesan (delivered, read)",
        "Multi-device QR connection & session management otomatis yang stabil",
      ],
    },
    tags: ["Golang", "Vue", "shadcn", "Supabase", "WhatsApp API", "REST API"],
    link: "https://wagate.habiburrahman.web.id/",
    screenshots: [
      "/screenshoot/meow/wagate-1-landing.png",
      "/screenshoot/meow/wagate-2-features.png",
      "/screenshoot/meow/wagate-3-pricing.png",
      "/screenshoot/meow/wagate-4-dashboard.png",
      "/screenshoot/meow/wagate-5-api-docs.png",
      "/screenshoot/meow/wagate-6-device.png",
    ],
  },
  {
    id: "catatin",
    title: {
      en: "Catatin — Turn WhatsApp Chats into Structured Data",
      id: "Catatin — Ubah Chat WhatsApp Jadi Data Rapi",
    },
    category: {
      en: "SaaS & Automation",
      id: "SaaS & Automation",
    },
    desc: {
      en: "Automated WhatsApp conversation management platform. Connect business WhatsApp numbers so every incoming message, photo proof of transfer/receipt, and contact is automatically organized into a tidy data panel.",
      id: "Platform otomatisasi pengelolaan percakapan WhatsApp. Menautkan nomor WhatsApp bisnis agar setiap pesan masuk, bukti foto transfer/struk, dan kontak tercatat otomatis ke dalam panel data yang tertata rapi.",
    },
    metrics: [
      "📊 Automated Order Parsing",
      "⚡ Real-Time Supabase Sync",
      "👥 Multi-Agent Collaboration",
      "📁 Image Receipt Ingestion",
    ],
    caseStudy: {
      problem: {
        en: "SMEs managing orders through WhatsApp lose hours manually copying customer addresses, transfer proof receipts, and financial tallies into disjointed spreadsheets, resulting in lost records and reconciliation errors.",
        id: "Pelaku usaha yang melayani pesanan via WhatsApp menghabiskan banyak waktu menyalin alamat, bukti transfer, dan catatan kas masuk secara manual ke Excel, yang berujung pada hilangnya pencatatan transaksi.",
      },
      solution: {
        en: "Built an automation engine that monitors linked WhatsApp numbers, extracts order conversations and receipt photos, and organizes them into a centralized, reactive database and operational dashboard.",
        id: "Membangun engine otomatisasi yang memantau nomor WhatsApp terhubung, mengekstraksi percakapan pesanan dan foto bukti transfer, lalu mengorganisasikannya ke dalam database reaktif dan dashboard kasir terpusat.",
      },
      decision: {
        en: "Architected with Go and Supabase realtime capabilities: Go provides rapid image & payload processing, while Supabase provides row-level security and instantaneous websocket updates across multiple customer service agents simultaneously.",
        id: "Menggunakan arsitektur Go dan Supabase realtime: Go memproses upload gambar dan payload webhook secara instan, sementara Supabase menyediakan sinkronisasi websocket langsung ke beberapa agen customer service secara bersamaan.",
      },
    },
    highlights: {
      en: [
        "Go & Supabase architecture for high-throughput transactional data processing and storage",
        "Clean and responsive user interface crafted with Vue.js and shadcn/ui",
        "Automated syncing for incoming chats, transaction receipt images, and customer contacts",
        "Centralized data management dashboard for financial reconciliation and business bookkeeping",
        "Multi-agent workspace for collaborative customer service and operations teams",
      ],
      id: [
        "Arsitektur Go & Supabase untuk pemrosesan dan penyimpanan data transaksi cepat",
        "Antarmuka responsif dan rapi menggunakan Vue.js dan shadcn/ui",
        "Sinkronisasi otomatis pesan masuk, foto bukti transaksi, dan kontak pelanggan",
        "Panel manajemen data terpusat untuk rekonsiliasi keuangan dan pembukuan bisnis",
        "Multi-agent dashboard untuk operasional tim bisnis & customer service",
      ],
    },
    tags: ["Golang", "Vue", "shadcn", "Supabase", "WhatsApp Automation"],
    link: "https://catatin.habiburrahman.web.id/",
    screenshots: [
      "/screenshoot/catatin/catatin-1-landing.png",
      "/screenshoot/catatin/catatin-2-form.png",
      "/screenshoot/catatin/catatin-3-data.png",
      "/screenshoot/catatin/catatin-4-perangkat.png",
    ],
  },
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = React.useState<number>(0);

  const openModal = (p: Project) => {
    setSelectedProject(p);
    setActiveImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-12 flex flex-col gap-8">
      {/* Section Header */}
      <div className="flex flex-col gap-2 reveal">
        <div className="inline-flex items-center gap-2">
          <h2 className="font-heading font-black text-2xl sm:text-4xl uppercase px-4 py-1 bg-main border-2 border-border rounded-base shadow-shadow inline-block">
            <span data-lang-id>Proyek Pilihan & Studi Kasus</span>
            <span data-lang-en>Featured Projects & Case Studies</span>
          </h2>
        </div>
        <p data-lang-id className="font-sans text-base text-black/80 max-w-2xl font-medium">
          Daftar aplikasi produksi, sistem microservices, dan arsitektur desktop yang pernah saya bangun. Dilengkapi analisis masalah, arsitektur, dan kode sumber.
        </p>
        <p data-lang-en className="font-sans text-base text-black/80 max-w-2xl font-medium">
          Production applications, microservice systems, and desktop architectures I've built. Includes architectural decisions, challenges, and source repositories.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj) => (
          <Card
            key={proj.id}
            className="flex flex-col justify-between hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all cursor-pointer group reveal bg-white"
            onClick={() => openModal(proj)}
          >
            <CardHeader>
              <div className="flex items-center justify-between gap-2 mb-1">
                <Badge variant="neutral" className="font-mono text-[11px] uppercase font-bold">
                  <span data-lang-id>{proj.category.id}</span>
                  <span data-lang-en>{proj.category.en}</span>
                </Badge>
                {proj.screenshots.length > 0 && (
                  <span className="text-[11px] font-mono font-bold bg-main px-2 py-0.5 border border-border rounded-sm shadow-neo-sm">
                    {proj.screenshots.length} Screenshots
                  </span>
                )}
              </div>
              <CardTitle className="text-xl sm:text-2xl font-heading font-black group-hover:text-black">
                <span data-lang-id>{proj.title.id}</span>
                <span data-lang-en>{proj.title.en}</span>
              </CardTitle>
              <CardDescription className="line-clamp-2 text-black/80 font-sans text-sm leading-relaxed mt-1">
                <span data-lang-id>{proj.desc.id}</span>
                <span data-lang-en>{proj.desc.en}</span>
              </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col gap-3">
              {proj.screenshots.length > 0 && (
                <div className="w-full aspect-[16/9] bg-black/5 border-2 border-border rounded-base overflow-hidden relative">
                  <img
                    src={proj.screenshots[0]}
                    alt={proj.title.en}
                    loading="lazy"
                    width={600}
                    height={338}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              {/* Engineering Metrics Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {proj.metrics.map((m, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] sm:text-[11px] font-mono font-bold px-2 py-0.5 bg-yellow-100 border border-black rounded-sm shadow-[1px_1px_0px_#000]"
                  >
                    {m}
                  </span>
                ))}
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] sm:text-[11px] font-mono font-bold px-2 py-0.5 bg-secondary-background border border-border rounded-sm shadow-[1px_1px_0px_#000]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>

            <CardFooter className="flex flex-wrap items-center justify-between gap-2 border-t-2 border-border pt-4 text-xs font-heading font-bold uppercase">
              <div className="flex items-center gap-1.5">
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Lihat repositori GitHub untuk ${proj.title.en}`}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 px-2 py-1 bg-white border-2 border-black rounded-base text-[11px] font-heading font-black hover:bg-yellow-200 transition-all shadow-[1px_1px_0px_#000]"
                  >
                    <span>GitHub ↗</span>
                  </a>
                )}
                {proj.link && (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Buka live demo aplikasi ${proj.title.en}`}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 px-2 py-1 bg-sky-200 border-2 border-black rounded-base text-[11px] font-heading font-black hover:bg-sky-300 transition-all shadow-[1px_1px_0px_#000]"
                  >
                    <span>Demo ↗</span>
                  </a>
                )}
              </div>
              <Button
                variant="default"
                size="xs"
                className="font-heading font-black"
                aria-label={`Pelajari arsitektur dan studi kasus ${proj.title.en}`}
              >
                <span data-lang-id>Studi Kasus →</span>
                <span data-lang-en>Case Study →</span>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Detail & Case Study Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-3 sm:p-4 backdrop-blur-xs"
          onClick={closeModal}
        >
          <div
            className="bg-white border-3 border-black rounded-base shadow-[8px_8px_0px_#000] w-full max-w-3xl max-h-[92vh] overflow-y-auto flex flex-col p-5 sm:p-7 gap-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b-2 border-border pb-4">
              <div className="flex flex-col gap-1">
                <Badge variant="neutral" className="w-fit font-mono text-xs uppercase font-bold">
                  <span data-lang-id>{selectedProject.category.id}</span>
                  <span data-lang-en>{selectedProject.category.en}</span>
                </Badge>
                <h3 className="font-heading font-black text-2xl sm:text-3xl uppercase text-foreground">
                  <span data-lang-id>{selectedProject.title.id}</span>
                  <span data-lang-en>{selectedProject.title.en}</span>
                </h3>
              </div>
              <Button variant="neutral" size="sm" onClick={closeModal} className="font-bold border-2 border-black">
                <span data-lang-id>✕ Tutup</span>
                <span data-lang-en>✕ Close</span>
              </Button>
            </div>

            {/* Screenshots Gallery if available */}
            {selectedProject.screenshots.length > 0 && (
              <div className="flex flex-col gap-3">
                <div className="w-full aspect-[16/9] bg-black/5 border-2 border-border rounded-base overflow-hidden flex items-center justify-center">
                  <img
                    src={selectedProject.screenshots[activeImageIndex]}
                    alt={selectedProject.title.en}
                    className="w-full h-full object-contain"
                  />
                </div>
                {selectedProject.screenshots.length > 1 && (
                  <div className="flex items-center gap-2 overflow-x-auto pb-2">
                    {selectedProject.screenshots.map((shot, idx) => (
                      <button
                        key={shot}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`size-16 flex-shrink-0 border-2 rounded-base overflow-hidden transition-all ${
                          activeImageIndex === idx
                            ? "border-black ring-2 ring-main shadow-shadow scale-105"
                            : "border-border/60 opacity-60 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={shot}
                          alt={`${selectedProject.title.en} screenshot ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Architecture & Engineering Case Study Box */}
            <div className="border-2 border-black rounded-base p-4 sm:p-5 bg-amber-50/70 shadow-[3px_3px_0px_#000] flex flex-col gap-3.5">
              <div className="flex items-center gap-2 border-b-2 border-black/20 pb-2">
                <span className="text-lg">⚙️</span>
                <h4 className="font-heading font-black text-sm sm:text-base uppercase tracking-tight text-black">
                  <span data-lang-id>Arsitektur Sistem & Keputusan Teknis</span>
                  <span data-lang-en>System Architecture & Engineering Decisions</span>
                </h4>
              </div>

              {/* Challenge / Problem */}
              <div className="flex flex-col gap-1 text-sm font-sans text-black/90">
                <span className="font-heading font-black text-xs uppercase tracking-wider text-black">
                  <span data-lang-id>1. Tantangan / Masalah:</span>
                  <span data-lang-en>1. Problem & Challenge:</span>
                </span>
                <p data-lang-id className="leading-relaxed pl-3 border-l-2 border-black/30">
                  {selectedProject.caseStudy.problem.id}
                </p>
                <p data-lang-en className="leading-relaxed pl-3 border-l-2 border-black/30">
                  {selectedProject.caseStudy.problem.en}
                </p>
              </div>

              {/* Solution */}
              <div className="flex flex-col gap-1 text-sm font-sans text-black/90">
                <span className="font-heading font-black text-xs uppercase tracking-wider text-black">
                  <span data-lang-id>2. Solusi Arsitektur:</span>
                  <span data-lang-en>2. Architectural Solution:</span>
                </span>
                <p data-lang-id className="leading-relaxed pl-3 border-l-2 border-black/30">
                  {selectedProject.caseStudy.solution.id}
                </p>
                <p data-lang-en className="leading-relaxed pl-3 border-l-2 border-black/30">
                  {selectedProject.caseStudy.solution.en}
                </p>
              </div>

              {/* Decision & Trade-offs */}
              <div className="flex flex-col gap-1 text-sm font-sans text-black/90">
                <span className="font-heading font-black text-xs uppercase tracking-wider text-black">
                  <span data-lang-id>3. Keputusan Teknis & Trade-offs:</span>
                  <span data-lang-en>3. Engineering Decisions & Trade-offs:</span>
                </span>
                <p data-lang-id className="leading-relaxed pl-3 border-l-2 border-black/30">
                  {selectedProject.caseStudy.decision.id}
                </p>
                <p data-lang-en className="leading-relaxed pl-3 border-l-2 border-black/30">
                  {selectedProject.caseStudy.decision.en}
                </p>
              </div>
            </div>

            {/* Technical Highlights */}
            <div className="flex flex-col gap-2">
              <h4 className="font-heading font-black text-base uppercase text-foreground">
                <span data-lang-id>Fitur Utama & Implementasi</span>
                <span data-lang-en>Key Features & Implementation</span>
              </h4>
              <ul data-lang-id className="flex flex-col gap-1.5">
                {selectedProject.highlights.id.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-black/85 font-sans">
                    <span className="font-black text-black">✓</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <ul data-lang-en className="flex flex-col gap-1.5">
                {selectedProject.highlights.en.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-black/85 font-sans">
                    <span className="font-black text-black">✓</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Engineering Metrics Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {selectedProject.metrics.map((mTag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-yellow-200 border-2 border-black rounded-sm text-xs font-mono font-bold shadow-[2px_2px_0px_#000]"
                >
                  {mTag}
                </span>
              ))}
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5">
              {selectedProject.tags.map((tTag) => (
                <span
                  key={tTag}
                  className="px-2 py-0.5 bg-gray-100 border border-black rounded-sm text-xs font-mono font-bold"
                >
                  {tTag}
                </span>
              ))}
            </div>

            {/* Modal Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t-2 border-border pt-4">
              <div className="flex items-center gap-2">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Buka repositori GitHub ${selectedProject.title.en}`}
                  >
                    <Button variant="default" size="sm" className="font-heading font-bold uppercase text-xs border-2 border-black shadow-neo-sm">
                      <span data-lang-id>Kode Sumber / GitHub ↗</span>
                      <span data-lang-en>GitHub Repository ↗</span>
                    </Button>
                  </a>
                )}
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Buka demo online ${selectedProject.title.en}`}
                  >
                    <Button variant="neutral" size="sm" className="font-heading font-bold uppercase text-xs border-2 border-black shadow-neo-sm">
                      Live Demo ↗
                    </Button>
                  </a>
                )}
              </div>
              <Button variant="noShadow" size="sm" onClick={closeModal} className="font-bold text-xs uppercase border border-black">
                <span data-lang-id>Tutup</span>
                <span data-lang-en>Close</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
