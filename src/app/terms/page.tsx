'use client';

import { ArrowLeft, FileText, Shield, Users, Gavel, AlertCircle, CheckCircle } from 'lucide-react';

export default function TermsAndConditions() {
  const sections = [
    {
      icon: FileText,
      title: 'Ketentuan Penggunaan',
      content: [
        'Website ini disediakan untuk tujuan informasi dan komunikasi bisnis',
        'Pengguna setuju untuk menggunakan website secara bertanggung jawab',
        'Dilarang melakukan aktivitas ilegal atau merugikan pihak lain',
        'Pengguna bertanggung jawab atas keakuratan informasi yang diberikan',
      ]
    },
    {
      icon: Shield,
      title: 'Layanan Properti',
      content: [
        'Kami menyediakan layanan perdagangan properti profesional',
        'Informasi properti disajikan seakurat mungkin',
        'Harga dan ketersediaan properti dapat berubah sewaktu-waktu',
        'Kami tidak bertanggung jawab atas kesalahan informasi dari pihak ketiga',
      ]
    },
    {
      icon: Users,
      title: 'Kewajiban Pengguna',
      content: [
        'Memberikan informasi yang akurat dan lengkap',
        'Mematuhi semua perjanjian transaksi yang telah disepakati',
        'Melakukan pembayaran tepat waktu sesuai kesepakatan',
        'Menghormati hak privasi dan keamanan data pihak lain',
      ]
    },
    {
      icon: Gavel,
      title: 'Hukum dan Regulasi',
      content: [
        'Semua transaksi tunduk pada hukum yang berlaku di Indonesia',
        'Sengketa akan diselesaikan melalui musyawarah terlebih dahulu',
        'Jika tidak ada kesepakatan, sengketa akan diselesaikan di pengadilan',
        'Klien bertanggung jawab atas pajak dan biaya transaksi',
      ]
    },
    {
      icon: AlertCircle,
      title: 'Batasan Tanggung Jawab',
      content: [
        'Kami tidak bertanggung jawab atas kerugian tidak langsung',
        'Website dapat mengalami downtime untuk pemeliharaan',
        'Kami tidak menjamin ketersediaan properti tertentu',
        'Keputusan investasi sepenuhnya menjadi tanggung jawab klien',
      ]
    },
    {
      icon: CheckCircle,
      title: 'Jaminan dan Garansi',
      content: [
        'Kami berkomitmen memberikan layanan terbaik',
        'Informasi pribadi klien akan kami lindungi',
        'Proses transaksi akan dilakukan secara transparan',
        'Kami akan membantu menyelesaikan masalah dengan baik',
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/" className="flex items-center space-x-3">
                <img src="/logo.png" alt="PT UNCHU PROPERTI INDONESIA" className="h-8 w-auto" />
                <div>
                  <h1 className="text-sm font-bold text-slate-900">UNCHU PROPERTI</h1>
                  <p className="text-xs text-slate-600">INDONESIA</p>
                </div>
              </a>
            </div>
            <a
              href="/"
              className="inline-flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm font-medium">Kembali ke Beranda</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Syarat dan Ketentuan
          </h1>
          <p className="text-lg text-slate-600">
            PT UNCHU PROPERTI INDONESIA
          </p>
          <p className="text-sm text-slate-500 mt-2">
            Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Pendahuluan</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Selamat datang di PT UNCHU PROPERTI INDONESIA. Syarat dan Ketentuan ini 
            mengatur penggunaan website dan layanan yang kami sediakan. Dengan 
            mengakses atau menggunakan website kami, Anda setuju untuk terikat oleh 
            syarat dan ketentuan ini.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Jika Anda tidak setuju dengan bagian mana pun dari syarat dan ketentuan 
            ini, harap jangan menggunakan website atau layanan kami.
          </p>
        </div>

        {/* Terms Sections */}
        {sections.map((section, index) => (
          <div key={index} className="bg-white rounded-xl p-8 shadow-lg mb-6">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 rounded-lg p-3 flex-shrink-0">
                <section.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}

        {/* Additional Sections */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-6">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Proses Transaksi</h3>
          <p className="text-slate-600 mb-4">
            Transaksi properti melalui PT UNCHU PROPERTI INDONESIA mengikuti prosedur 
            standar industri untuk memastikan keamanan dan keabsahan setiap transaksi.
          </p>
          <ul className="space-y-2 text-slate-600">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 mt-1">1.</span>
              <span>Konsultasi awal dan identifikasi kebutuhan klien</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 mt-1">2.</span>
              <span>Presentasi properti yang sesuai dengan kriteria</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 mt-1">3.</span>
              <span>Negosiasi harga dan persyaratan transaksi</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 mt-1">4.</span>
              <span>Pemeriksaan dokumen dan legalitas properti</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 mt-1">5.</span>
              <span>Penandatanganan perjanjian dan proses pembayaran</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 mt-1">6.</span>
              <span>Serah terima dan dokumentasi transaksi</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg mb-6">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Pembatalan dan Pengembalian</h3>
          <p className="text-slate-600 mb-4">
            Kebijakan pembatalan dan pengembalian dana mengikuti ketentuan yang 
            telah disepakati dalam perjanjian transaksi. Umumnya:
          </p>
          <ul className="space-y-2 text-slate-600">
            <li>• Pembatalan sebelum perjanjian final: biaya administrasi minimal</li>
            <li>• Pembatalan setelah perjanjian final: sesuai ketentuan dalam kontrak</li>
            <li>• Pengembalian dana diproses dalam 14-30 hari kerja</li>
            <li>• Force majeur (bencana alam, perubahan regulasi) menjadi pengecualian</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg mb-6">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Perubahan Ketentuan</h3>
          <p className="text-slate-600 mb-4">
            PT UNCHU PROPERTI INDONESIA berhak mengubah syarat dan ketentuan ini 
            sewaktu-waktu. Perubahan akan berlaku efektif setelah diumumkan melalui 
            website atau komunikasi langsung kepada klien.
          </p>
          <p className="text-slate-600">
            Penggunaan terus-menerus layanan kami setelah perubahan dianggap sebagai 
            persetujuan Anda terhadap syarat dan ketentuan yang diperbarui.
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg mb-6">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Hubungi Kami</h3>
          <p className="text-slate-600 mb-4">
            Untuk pertanyaan atau klarifikasi mengenai syarat dan ketentuan ini, 
            silakan hubungi kami:
          </p>
          <div className="space-y-2 text-slate-600">
            <p><strong>Email:</strong> legal@unchuproperti.co.id</p>
            <p><strong>Telepon:</strong> 082382466172</p>
            <p><strong>Alamat:</strong> Jl. Muh. Toha KM 6 Ruko Duta Indah Sentoha B.47, 
            Kel. Periuk, Kec. Periuk, Kota Tangerang, Prov. Banten</p>
          </div>
        </div>

        {/* Agreement Section */}
        <div className="bg-blue-50 rounded-xl p-6 text-center">
          <p className="text-blue-900 font-medium mb-2">
            Pernyataan Persetujuan
          </p>
          <p className="text-blue-700 text-sm mb-4">
            Dengan menggunakan website dan layanan PT UNCHU PROPERTI INDONESIA, 
            Anda menyatakan telah membaca, memahami, dan menyetujui syarat dan ketentuan ini.
          </p>
          <div className="bg-white rounded-lg p-4 inline-block">
            <p className="text-slate-700 font-semibold">
              PT UNCHU PROPERTI INDONESIA
            </p>
            <p className="text-slate-600 text-sm">
              Perdagangan Properti Profesional Terpercaya
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <img src="/logo.png" alt="PT UNCHU PROPERTI INDONESIA" className="h-8 w-auto" />
              <div className="ml-2">
                <h3 className="font-bold">UNCHU PROPERTI</h3>
                <p className="text-xs text-slate-400">INDONESIA</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              © 2024 PT UNCHU PROPERTI INDONESIA. Hak Cipta Dilindungi.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="/" className="text-slate-400 hover:text-white transition-colors text-sm">
                Beranda
              </a>
              <a href="/privacy" className="text-slate-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="/terms" className="text-slate-400 hover:text-white transition-colors text-sm">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}