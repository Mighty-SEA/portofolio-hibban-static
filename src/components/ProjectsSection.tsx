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
      en: "Price recommendation platform for Tokopedia products using XGBoost machine learning, Go, Python, Vue 3, and PostgreSQL. Includes automated Tokopedia web scraping and cross-validation with IBM SPSS.",
      id: "Platform rekomendasi harga jual untuk produk Tokopedia menggunakan machine learning XGBoost, Go, Python, Vue 3, dan PostgreSQL. Dilengkapi web scraping Tokopedia otomatis serta validasi silang dengan IBM SPSS.",
    },
    metrics: [
      "Go & Python Microservices",
      "XGBoost Regression (Scikit-Learn)",
      "Validated w/ IBM SPSS",
      "Automated Tokopedia Scraping",
    ],
    caseStudy: {
      problem: {
        en: "Online merchants often misprice products due to lack of live competitor benchmarking, while marketplaces like Tokopedia do not provide public APIs for competitor price checks.",
        id: "Penjual online kerap kesulitan menentukan harga jual karena ketiadaan data pembanding pasar, serta tidak adanya API publik resmi untuk mengecek harga kompetitor.",
      },
      solution: {
        en: "Built a data pipeline: headless web scrapers collect live Tokopedia product metrics, ingested by a Go REST API, and passed to a Python engine running an XGBoost regression model to calculate selling prices.",
        id: "Membangun data pipeline terintegrasi: scraper otomatis mengumpulkan data produk Tokopedia, diterima oleh Go REST API, lalu diproses oleh Python engine dengan model regresi XGBoost untuk menghitung rekomendasi harga jual.",
      },
      decision: {
        en: "Split the backend into two services: Go for concurrent scraping and API routing, paired with Python for Scikit-learn/NumPy computations. Exported CSV datasets were cross-validated with IBM SPSS (Pearson Correlation and Multiple Linear Regression).",
        id: "Memisahkan layanan backend: Go untuk scraping konkuren dan API routing, dipadukan dengan Python untuk komputasi Scikit-learn/NumPy. Dataset diekspor dan divalidasi silang dengan IBM SPSS (Korelasi Pearson dan Regresi Linear Berganda).",
      },
    },
    highlights: {
      en: [
        "Automated web scraper extracting live product metrics from Tokopedia marketplace",
        "XGBoost Regression model trained on Tokopedia datasets (Pandas, Scikit-learn, NumPy)",
        "Microservice architecture: Go API backend, Python ML engine, PostgreSQL, and Vue 3 Vite UI",
        "Exportable CSV datasets cross-validated with IBM SPSS (Pearson Correlation & R² Regression)",
      ],
      id: [
        "Web scraper otomatis yang mengambil metrik produk langsung dari marketplace Tokopedia",
        "Model Regresi XGBoost yang dilatih pada dataset Tokopedia (Pandas, Scikit-learn, NumPy)",
        "Arsitektur microservice: Backend Go API, Engine Python ML, PostgreSQL, dan Frontend Vue 3 Vite",
        "Ekspor dataset CSV yang divalidasi silang dengan IBM SPSS (Korelasi Pearson & Regresi R²)",
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
      en: "4Paws: Veterinary Clinic & POS System",
      id: "4Paws: Sistem Manajemen Klinik Hewan & POS",
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
      "Cloud Web & Desktop (.exe)",
      "SQLite & MySQL Support",
      "EMR & Queue Workflow",
      "Go Fiber + Vue 3",
    ],
    caseStudy: {
      problem: {
        en: "Veterinary clinics operate in physical counters where unstable internet can disrupt patient registration, medical records, and daily cashier transactions.",
        id: "Klinik hewan beroperasi di meja layanan fisik di mana koneksi internet yang tidak stabil dapat menghambat pendaftaran pasien, pencatatan rekam medis, dan transaksi kasir.",
      },
      solution: {
        en: "Handled end-to-end development from database schema design, Go Fiber backend API, and Vue 3 interface to deployment. Built as a single codebase running both as a web app and a Wails desktop app (.exe) with local SQLite support.",
        id: "Menangani pengembangan dari perancangan skema database, backend Go Fiber, antarmuka Vue 3, hingga instalasi di klinik. Dibangun dari satu basis kode yang berjalan sebagai web app maupun aplikasi desktop (.exe) via Wails dengan SQLite lokal.",
      },
      decision: {
        en: "Selected Wails over Electron so the desktop build stays lightweight on clinic cashier PCs without bundling a separate Chromium runtime, while keeping the same Go + Vue 3 stack used for the web version.",
        id: "Memilih Wails dibanding Electron agar aplikasi desktop tetap ringan di PC kasir klinik tanpa membundel runtime Chromium terpisah, sekaligus memakai stack Go + Vue 3 yang sama dengan versi web.",
      },
    },
    highlights: {
      en: [
        "End-to-end ownership: database design, Go Fiber API, Vue 3 UI, and staff onboarding at the clinic",
        "Dual deployment: Cloud Web App and offline-capable Desktop App (.exe via Wails)",
        "Electronic Medical Records (EMR), vaccination history, and veterinarian queue workflow",
        "Inpatient tracking, deposit handling, and integrated petshop POS cashier",
        "Stock movement audit log with FIFO/FEFO tracking and operational reports (revenue, handler performance, and low-stock alerts)",
      ],
      id: [
        "Ditangani menyeluruh: desain database, API Go Fiber, UI Vue 3, hingga pendampingan staf klinik",
        "Dual deployment: Cloud Web App dan aplikasi desktop offline (.exe via Wails)",
        "Rekam Medis Elektronik (RME), riwayat vaksinasi, dan alur antrean dokter",
        "Manajemen rawat inap, pencatatan deposit, dan kasir Point of Sale (POS) petshop",
        "Log audit stok berbasis FIFO/FEFO dan laporan operasional (omzet, kinerja handler, serta pengingat stok menipis)",
      ],
    },
    tags: ["Go (Fiber)", "Vue 3", "TypeScript", "Wails (.exe)", "SQLite", "Docker"],
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
      en: "WAGate (Meow): WhatsApp Gateway API",
      id: "WAGate (Meow): WhatsApp Gateway API",
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
      "High-Concurrency Goroutines",
      "Automated Webhook Dispatch",
      "Multi-Device QR Session",
      "Zero-Server Client Setup",
    ],
    caseStudy: {
      problem: {
        en: "Small businesses and indie developers need automated WhatsApp notifications and OTP verification, but official Cloud API rates or self-hosted server maintenance are costly and complex.",
        id: "Bisnis UMKM dan pengembang membutuhkan pengiriman notifikasi otomatis serta verifikasi OTP WhatsApp, namun biaya WhatsApp Cloud API resmi atau pengelolaan server bot sendiri cukup mahal dan rumit.",
      },
      solution: {
        en: "Built a WhatsApp Gateway API service in Go. Clients scan a QR code from the dashboard, integrate standard REST endpoints, and receive webhook events for inbound messages and delivery status.",
        id: "Membangun layanan WhatsApp Gateway API menggunakan Go. Klien memindai QR code dari dashboard, memanggil endpoint REST standar, dan menerima webhook untuk pesan masuk serta status pengiriman.",
      },
      decision: {
        en: "Used Go's native goroutines and channels to manage persistent multi-device websocket connections concurrently with minimal memory usage, preventing event loop blocking during message spikes.",
        id: "Memanfaatkan fitur Goroutines dan Channels bawaan Go untuk mengelola koneksi websocket multi-device secara konkuren dengan konsumsi memori minimal, mencegah lag saat pengiriman pesan massal.",
      },
    },
    highlights: {
      en: [
        "Go backend API for text messaging, media dispatch, and OTP verification",
        "Dashboard frontend built with Vue.js and shadcn/ui components",
        "Database and authentication backed by Supabase",
        "Webhooks capturing incoming messages and delivery receipt status (delivered, read)",
        "Automated multi-device QR connection & session management",
      ],
      id: [
        "Backend Go API untuk pengiriman pesan teks, media, dan verifikasi OTP",
        "Frontend dashboard dibangun dengan Vue.js dan komponen shadcn/ui",
        "Database dan autentikasi menggunakan Supabase",
        "Webhook untuk menangkap pesan masuk dan status pengiriman pesan (delivered, read)",
        "Manajemen koneksi dan sesi multi-device QR secara otomatis",
      ],
    },
    tags: ["Golang", "Vue", "shadcn", "Supabase", "WhatsApp API", "REST API"],
    link: "https://wagate.habiburrahman.web.id/",
    screenshots: [
      "/screenshoot/meow/wagate-1-landing.webp",
      "/screenshoot/meow/wagate-2-features.webp",
      "/screenshoot/meow/wagate-3-pricing.webp",
      "/screenshoot/meow/wagate-4-dashboard.webp",
      "/screenshoot/meow/wagate-5-api-docs.webp",
      "/screenshoot/meow/wagate-6-device.webp",
    ],
  },
  {
    id: "catatin",
    title: {
      en: "Catatin: Turn WhatsApp Chats into Structured Data",
      id: "Catatin: Ubah Chat WhatsApp Jadi Data Rapi",
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
      "Automated Order Parsing",
      "Real-Time Supabase Sync",
      "Multi-Agent Collaboration",
      "Image Receipt Ingestion",
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
        "Go & Supabase architecture for transactional data processing and storage",
        "User interface built with Vue.js and shadcn/ui",
        "Automated syncing for incoming chats, transaction receipt images, and customer contacts",
        "Centralized data management dashboard for financial reconciliation and bookkeeping",
        "Multi-agent workspace for customer service and operations teams",
      ],
      id: [
        "Arsitektur Go & Supabase untuk pemrosesan dan penyimpanan data transaksi",
        "Antarmuka menggunakan Vue.js dan shadcn/ui",
        "Sinkronisasi otomatis pesan masuk, foto bukti transaksi, dan kontak pelanggan",
        "Panel manajemen data terpusat untuk rekonsiliasi keuangan dan pembukuan bisnis",
        "Multi-agent dashboard untuk operasional tim bisnis & customer service",
      ],
    },
    tags: ["Golang", "Vue", "shadcn", "Supabase", "WhatsApp Automation"],
    link: "https://catatin.habiburrahman.web.id/",
    screenshots: [
      "/screenshoot/catatin/catatin-1-landing.webp",
      "/screenshoot/catatin/catatin-2-form.webp",
      "/screenshoot/catatin/catatin-3-data.webp",
      "/screenshoot/catatin/catatin-4-perangkat.webp",
    ],
  },
  {
    id: "vetrico",
    title: {
      en: "Vetrico: Veterinary Clinic SaaS (SOAP & SNI)",
      id: "Vetrico: SaaS Klinik Hewan & Rekam Medis SOAP",
    },
    category: {
      en: "SaaS & Healthcare",
      id: "SaaS & Healthcare",
    },
    desc: {
      en: "Independently designed and built SaaS for veterinary clinics following SNI 9184:2023 and SOAP DPJP standards. Connects front-desk queues, medical records, pharmacy, inpatient flowsheet, grooming, and multi-branch billing.",
      id: "Platform SaaS klinik hewan yang saya rancang mandiri agar sesuai standar rekam medis SOAP DPJP dan SNI 9184:2023. Menghubungkan antrean lobi, rekam medis, apotek, rawat inap, grooming, dan kasir multi-cabang.",
    },
    metrics: [
      "SOAP DPJP & SNI 9184:2023",
      "6-Digit PIN Record Lock",
      "Inpatient Flowsheet & Pharmacy",
      "Multi-Branch SaaS",
    ],
    caseStudy: {
      problem: {
        en: "Many veterinary clinics still use manual records or spreadsheets that do not meet Permentan No. 15/2021 and SNI 9184:2023 audit requirements, risking mixed-up prescriptions and unrecorded medicine usage.",
        id: "Banyak klinik hewan masih memakai catatan manual atau Excel yang belum memenuhi standar audit rekam medis Permentan No. 15/2021 dan SNI 9184:2023, sehingga rentan resep tertukar dan stok obat tidak terlacak.",
      },
      solution: {
        en: "Independently designed the clinical workflow and built the full-stack platform with Golang, Vue.js, and PostgreSQL. Covers vital-sign screening, SOAP forms with 6-digit DPJP PIN lock, pharmacy dispensing, inpatient ward flowsheets, and unified cashier billing.",
        id: "Merancang mandiri alur operasional klinik dan membangun sistemnya dengan Golang, Vue.js, serta PostgreSQL. Mencakup skrining TTV awal, form SOAP dengan kunci PIN 6-digit DPJP, resep apotek otomatis, flowsheet rawat inap, hingga kasir terpadu.",
      },
      decision: {
        en: "Structured the database and permissions around veterinary medicolegal rules (DPJP authorization and batch/stock deduction per prescription) while keeping daily forms fast on tablets and cashier PCs.",
        id: "Menyusun struktur database dan hak akses mengikuti aturan medikolegal dokter hewan (otorisasi DPJP serta pemotongan stok obat otomatis per resep), dengan tampilan form yang ringan dibuka dari tablet maupun komputer kasir.",
      },
    },
    highlights: {
      en: [
        "Independently designed system workflow aligned with SNI 9184:2023 & Permentan No. 15/2021",
        "Front-desk queue with emergency priority, vital signs (temperature/weight), and multi-pet owner lookup",
        "Standardized SOAP medical records locked with 6-digit attending veterinarian (DPJP) PIN",
        "Automated pharmacy prescription queue, label printing, and inpatient ward observation flowsheet",
        "Unified multi-payment cashier (cash, QRIS, transfer, split-bill) with multi-branch support",
      ],
      id: [
        "Merancang sendiri alur sistem agar sesuai standar rekam medis SNI 9184:2023 & Permentan No. 15/2021",
        "Antrean lobi dengan tanda kedaruratan, skrining TTV awal, dan pencarian pemilik multi-hewan",
        "Rekam medis SOAP terstandar dengan kunci otorisasi PIN 6-digit atas nama dokter (DPJP)",
        "Resep otomatis ke farmasi, cetak etiket obat, dan flowsheet observasi bangsal rawat inap",
        "Kasir terpadu (tunai, QRIS, transfer, split-bill), modul grooming/pet hotel, dan dukungan multi-cabang",
      ],
    },
    tags: ["Golang", "Vue.js", "PostgreSQL", "REST API", "SaaS"],
    link: "https://vetrico.id/",
    screenshots: [
      "/screenshoot/vetrico/landingvetrico.webp",
      "/screenshoot/vetrico/panel-kasir.webp",
      "/screenshoot/vetrico/panel-manajemen-rawat-inap.webp",
      "/screenshoot/vetrico/panelrwatinap.webp",
    ],
  },
  {
    id: "ohm-registration",
    title: {
      en: "OHM Registration: Course & Payment Portal",
      id: "OHM Registration: Portal Kursus & Pembayaran",
    },
    category: {
      en: "Client Web App",
      id: "Aplikasi Web Klien",
    },
    desc: {
      en: "Production web portal for a Japanese language course institution. Manages student registration, class groups and sessions, as well as manual transaction tracking and installment payments.",
      id: "Portal web aktif untuk lembaga kursus bahasa Jepang. Mengelola pendaftaran siswa, pembagian grup dan sesi kelas, serta pencatatan transaksi pembayaran dan cicilan siswa secara manual.",
    },
    metrics: [
      "Live Production App",
      "Installment Tracking",
      "Class Group & Sessions",
      "Client Project",
    ],
    caseStudy: {
      problem: {
        en: "Course administrators needed a single system to organize incoming student cohorts into class sessions while tracking partial and installment payments that are paid manually.",
        id: "Admin kursus membutuhkan satu sistem untuk membagi siswa baru ke dalam grup dan sesi kelas, sekaligus memantau status pembayaran dan cicilan yang transaksinya masih dilakukan manual.",
      },
      solution: {
        en: "Developed a web registration and administration portal handling student intake, class group/session assignment, and structured installment payment logs.",
        id: "Mengembangkan portal pendaftaran dan administrasi web yang menangani input data pendaftar, pengaturan grup/sesi kelas, serta pencatatan riwayat cicilan pembayaran siswa.",
      },
      decision: {
        en: "Designed around manual payment verification workflows so admin staff can record transfers, update installment balances, and monitor unpaid dues without rigid payment gateway lock-in.",
        id: "Merancang alur verifikasi pembayaran manual agar admin dapat mencatat bukti transfer, memperbarui sisa cicilan, dan memantau tagihan siswa sesuai operasional nyata di lapangan.",
      },
    },
    highlights: {
      en: [
        "Student registration portal and dedicated participant dashboard",
        "Class group and schedule session management",
        "Manual transaction recording, payment verification, and installment tracking",
        "Live in production at daftarkelasohm.com",
      ],
      id: [
        "Portal pendaftaran peserta kursus bahasa Jepang dilengkapi panel khusus user/peserta",
        "Manajemen grup belajar dan pembagian sesi kelas",
        "Verifikasi bukti pembayaran manual dan pemantauan status cicilan siswa",
        "Digunakan aktif di produksi pada daftarkelasohm.com",
      ],
    },
    tags: ["Golang", "Vue.js", "Tailwind CSS", "PostgreSQL", "Web App"],
    link: "https://daftarkelasohm.com/",
    screenshots: [
      "/screenshoot/ohmreg/halamandaftar.webp",
      "/screenshoot/ohmreg/paneldashboard.webp",
      "/screenshoot/ohmreg/halamanverifikasi.webp",
      "/screenshoot/ohmreg/panel-masterprogram.webp",
    ],
  },
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = React.useState<number>(0);
  const [isExpandedImage, setIsExpandedImage] = React.useState<boolean>(false);
  const [zoomLevel, setZoomLevel] = React.useState<number>(1);
  const [pan, setPan] = React.useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = React.useState<boolean>(false);
  const dragStartRef = React.useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const pinchDistRef = React.useRef<number | null>(null);
  const imageViewportRef = React.useRef<HTMLDivElement | null>(null);

  const resetZoom = () => {
    setZoomLevel(1);
    setPan({ x: 0, y: 0 });
    setIsDragging(false);
    pinchDistRef.current = null;
  };

  const openModal = (p: Project) => {
    setSelectedProject(p);
    setActiveImageIndex(0);
    setIsExpandedImage(false);
    resetZoom();
  };

  const closeModal = () => {
    resetZoom();
    setSelectedProject(null);
  };

  const prevImage = () => {
    if (!selectedProject || selectedProject.screenshots.length <= 1) return;
    setActiveImageIndex((prev) => (prev - 1 + selectedProject.screenshots.length) % selectedProject.screenshots.length);
    resetZoom();
  };

  const nextImage = () => {
    if (!selectedProject || selectedProject.screenshots.length <= 1) return;
    setActiveImageIndex((prev) => (prev + 1) % selectedProject.screenshots.length);
    resetZoom();
  };

  const applyZoom = (nextZoom: number) => {
    const clamped = Math.min(4, Math.max(1, Number(nextZoom.toFixed(2))));
    setZoomLevel(clamped);
    if (clamped <= 1) {
      setPan({ x: 0, y: 0 });
    }
  };

  React.useEffect(() => {
    if (!selectedProject) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowLeft") {
        prevImage();
      } else if (e.key === "ArrowRight") {
        nextImage();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  React.useEffect(() => {
    const el = imageViewportRef.current;
    if (!el || !selectedProject) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY < 0 ? 0.25 : -0.25;
      setZoomLevel((prev) => {
        const next = Math.min(4, Math.max(1, Number((prev + delta).toFixed(2))));
        if (next <= 1) {
          setPan({ x: 0, y: 0 });
        }
        return next;
      });
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [selectedProject, activeImageIndex]);

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
            role="button"
            tabIndex={0}
            aria-label={proj.title.id}
            className="flex flex-col justify-between hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black transition-all cursor-pointer group reveal bg-white"
            onClick={() => openModal(proj)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openModal(proj);
              }
            }}
          >
            <CardHeader>
              <div className="flex items-center justify-between gap-2 mb-1">
                <Badge variant="neutral" className="font-mono text-xs uppercase font-bold">
                  <span data-lang-id>{proj.category.id}</span>
                  <span data-lang-en>{proj.category.en}</span>
                </Badge>
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
                <div className="w-full aspect-[16/9] bg-black/10 border-2 border-border rounded-base overflow-hidden relative">
                  <img
                    src={proj.screenshots[0]}
                    alt={proj.title.en}
                    loading="lazy"
                    decoding="async"
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
                    className="text-xs font-mono font-bold px-2 py-0.5 bg-yellow-100 border border-black rounded-sm shadow-[1px_1px_0px_#000]"
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
                    className="text-xs font-mono font-bold px-2 py-0.5 bg-secondary-background border border-border rounded-sm shadow-[1px_1px_0px_#000]"
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
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border-2 border-black rounded-base text-xs font-heading font-black hover:bg-yellow-200 transition-all shadow-[1px_1px_0px_#000]"
                  >
                    <span>GitHub</span>
                  </a>
                )}
                {proj.link && (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Buka live demo aplikasi ${proj.title.en}`}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-sky-200 border-2 border-black rounded-base text-xs font-heading font-black hover:bg-sky-300 transition-all shadow-[1px_1px_0px_#000]"
                  >
                    <span>Demo</span>
                  </a>
                )}
              </div>
              <Button
                variant="default"
                size="xs"
                className="font-heading font-black"
                aria-label={`Pelajari arsitektur dan studi kasus ${proj.title.en}`}
              >
                <span data-lang-id>Studi Kasus</span>
                <span data-lang-en>Case Study</span>
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
                <span data-lang-id>Tutup</span>
                <span data-lang-en>Close</span>
              </Button>
            </div>

            {/* Screenshots Gallery if available */}
            {selectedProject.screenshots.length > 0 && (
              <div className="flex flex-col gap-3">
                <div
                  ref={imageViewportRef}
                  onMouseDown={(e) => {
                    if (zoomLevel <= 1) return;
                    e.preventDefault();
                    setIsDragging(true);
                    dragStartRef.current = { x: e.clientX - pan.x, y: e.clientY - pan.y };
                  }}
                  onMouseMove={(e) => {
                    if (!isDragging || zoomLevel <= 1) return;
                    setPan({
                      x: e.clientX - dragStartRef.current.x,
                      y: e.clientY - dragStartRef.current.y,
                    });
                  }}
                  onMouseUp={() => setIsDragging(false)}
                  onMouseLeave={() => setIsDragging(false)}
                  onDoubleClick={() => {
                    if (zoomLevel > 1) {
                      resetZoom();
                    } else {
                      applyZoom(2);
                    }
                  }}
                  onTouchStart={(e) => {
                    if (e.touches.length === 2) {
                      const dx = e.touches[0].clientX - e.touches[1].clientX;
                      const dy = e.touches[0].clientY - e.touches[1].clientY;
                      pinchDistRef.current = Math.hypot(dx, dy);
                    } else if (e.touches.length === 1 && zoomLevel > 1) {
                      setIsDragging(true);
                      dragStartRef.current = {
                        x: e.touches[0].clientX - pan.x,
                        y: e.touches[0].clientY - pan.y,
                      };
                    }
                  }}
                  onTouchMove={(e) => {
                    if (e.touches.length === 2 && pinchDistRef.current !== null) {
                      e.preventDefault();
                      const dx = e.touches[0].clientX - e.touches[1].clientX;
                      const dy = e.touches[0].clientY - e.touches[1].clientY;
                      const dist = Math.hypot(dx, dy);
                      const scaleDelta = (dist - pinchDistRef.current) * 0.008;
                      pinchDistRef.current = dist;
                      applyZoom(zoomLevel + scaleDelta);
                    } else if (e.touches.length === 1 && isDragging && zoomLevel > 1) {
                      e.preventDefault();
                      setPan({
                        x: e.touches[0].clientX - dragStartRef.current.x,
                        y: e.touches[0].clientY - dragStartRef.current.y,
                      });
                    }
                  }}
                  onTouchEnd={() => {
                    pinchDistRef.current = null;
                    setIsDragging(false);
                  }}
                  style={{ touchAction: zoomLevel > 1 ? "none" : "pan-y pinch-zoom" }}
                  className={`w-full bg-black/5 border-2 border-border rounded-base overflow-hidden flex items-center justify-center relative select-none resize-y min-h-[220px] ${
                    isExpandedImage ? "h-[60vh]" : "aspect-[16/9]"
                  } ${zoomLevel > 1 ? (isDragging ? "cursor-grabbing" : "cursor-grab") : "cursor-zoom-in"}`}
                >
                  <img
                    src={selectedProject.screenshots[activeImageIndex]}
                    alt={selectedProject.title.en}
                    draggable={false}
                    style={{
                      transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoomLevel})`,
                      transformOrigin: "center center",
                    }}
                    className={`w-full h-full object-contain pointer-events-none ${
                      isDragging ? "" : "transition-transform duration-100"
                    }`}
                  />
                </div>

                {/* Image Controls Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs font-mono font-bold">
                  {selectedProject.screenshots.length > 1 && (
                    <div className="flex items-center justify-between sm:justify-start gap-1.5">
                      <button
                        type="button"
                        onClick={prevImage}
                        className="px-3 py-1.5 bg-white border-2 border-black rounded-sm hover:bg-yellow-100 cursor-pointer"
                      >
                        Prev
                      </button>
                      <span className="px-2.5 py-1 text-black/80 text-center">
                        {activeImageIndex + 1} / {selectedProject.screenshots.length}
                      </span>
                      <button
                        type="button"
                        onClick={nextImage}
                        className="px-3 py-1.5 bg-white border-2 border-black rounded-sm hover:bg-yellow-100 cursor-pointer"
                      >
                        Next
                      </button>
                    </div>
                  )}

                  <div className="flex items-center justify-between sm:justify-end gap-1.5">
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => applyZoom(zoomLevel - 0.5)}
                        className="px-3 py-1.5 bg-white border-2 border-black rounded-sm hover:bg-yellow-100 cursor-pointer"
                        aria-label="Perkecil gambar"
                      >
                        -
                      </button>
                      <button
                        type="button"
                        onClick={resetZoom}
                        title="Reset zoom ke 100%"
                        className="px-2.5 py-1.5 bg-main border-2 border-black rounded-sm min-w-[54px] text-center hover:bg-yellow-300 cursor-pointer"
                      >
                        {Math.round(zoomLevel * 100)}%
                      </button>
                      <button
                        type="button"
                        onClick={() => applyZoom(zoomLevel + 0.5)}
                        className="px-3 py-1.5 bg-white border-2 border-black rounded-sm hover:bg-yellow-100 cursor-pointer"
                        aria-label="Perbesar gambar"
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => setIsExpandedImage((prev) => !prev)}
                      className="px-3 py-1.5 bg-white border-2 border-black rounded-sm hover:bg-yellow-100 cursor-pointer"
                    >
                      <span data-lang-id>{isExpandedImage ? "Normal" : "Tinggi"}</span>
                      <span data-lang-en>{isExpandedImage ? "Normal" : "Expand"}</span>
                    </button>
                  </div>
                </div>

                {selectedProject.screenshots.length > 1 && (
                  <div className="flex items-center gap-2 overflow-x-auto pb-2">
                    {selectedProject.screenshots.map((shot, idx) => (
                      <button
                        key={shot}
                        type="button"
                        onClick={() => {
                          setActiveImageIndex(idx);
                          resetZoom();
                        }}
                        className={`size-16 flex-shrink-0 border-2 rounded-base overflow-hidden transition-all cursor-pointer ${
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
              <ul data-lang-id className="flex flex-col gap-1.5 list-disc pl-5">
                {selectedProject.highlights.id.map((h, i) => (
                  <li key={i} className="text-sm text-black/85 font-sans">
                    {h}
                  </li>
                ))}
              </ul>
              <ul data-lang-en className="flex flex-col gap-1.5 list-disc pl-5">
                {selectedProject.highlights.en.map((h, i) => (
                  <li key={i} className="text-sm text-black/85 font-sans">
                    {h}
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
                      <span data-lang-id>Kode Sumber / GitHub</span>
                      <span data-lang-en>GitHub Repository</span>
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
                      Live Demo
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
