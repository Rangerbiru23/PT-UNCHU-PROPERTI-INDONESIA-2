'use client';

import { ArrowLeft, Shield, Eye, Database, User, Lock, Globe } from 'lucide-react';

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: Eye,
      title: 'Informasi yang Kami Kumpulkan',
      content: [
        'Informasi pribadi yang Anda berikan secara sukarela (nama, email, nomor telepon, alamat)',
        'Informasi properti yang Anda minati atau tawarkan',
        'Data penggunaan website (IP address, browser, waktu akses)',
        'Informasi komunikasi (pesan, permintaan konsultasi)',
      ]
    },
    {
      icon: Database,
      title: 'Penggunaan Informasi',
      content: [
        'Untuk merespons permintaan dan pertanyaan Anda',
        'Untuk menyediakan layanan konsultasi properti',
        'Untuk mengirimkan informasi properti yang relevan',
        'Untuk meningkatkan kualitas layanan kami',
        'Untuk keperluan analisis dan pengembangan website',
      ]
    },
    {
      icon: Lock,
      title: 'Keamanan Data',
      content: [
        'Kami menggunakan enkripsi untuk melindungi data pribadi Anda',
        'Akses ke data pribadi dibatasi untuk staf yang berwenang',
        'Kami melakukan backup data secara berkala',
        'Sistem kami dilengkapi dengan firewall dan keamanan berlapis',
      ]
    },
    {
      icon: User,
      title: 'Hak Pengguna',
      content: [
        'Hak untuk mengakses data pribadi Anda',
        'Hak untuk memperbaiki data yang tidak akurat',
        'Hak untuk menghapus data pribadi Anda',
        'Hak untuk menolak pemasaran langsung',
        'Hak untuk membuat keluhan tentang penggunaan data',
      ]
    },
    {
      icon: Globe,
      title: 'Cookies dan Tracking',
      content: [
        'Website kami menggunakan cookies untuk meningkatkan pengalaman pengguna',
        'Cookies membantu kami mengingat preferensi Anda',
        'Kami menggunakan Google Analytics untuk analisis traffic',
        'Anda dapat menonaktifkan cookies melalui browser settings',
      ]
    },
    {
      icon: Shield,
      title: 'Berbagi Informasi',
      content: [
        'Kami tidak menjual data pribadi kepada pihak ketiga',
        'Informasi hanya dibagikan dengan persetujuan Anda',
        'Data dapat dibagikan kepada mitra bisnis terpercaya untuk layanan',
        'Informasi dapat diungkapkan jika diwajibkan oleh hukum',
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
            Kebijakan Privasi
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
            Selamat datang di PT UNCHU PROPERTI INDONESIA. Kami sangat memperhatikan privasi 
            dan keamanan data pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami 
            mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi Anda saat 
            menggunakan website dan layanan kami.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Dengan menggunakan website kami, Anda menyetujui pengumpulan dan penggunaan 
            informasi sesuai dengan kebijakan ini. Jika Anda tidak setuju dengan ketentuan 
            dalam kebijakan ini, harap jangan menggunakan website kami.
          </p>
        </div>

        {/* Privacy Sections */}
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
          <h3 className="text-xl font-bold text-slate-900 mb-4">Penyimpanan Data</h3>
          <p className="text-slate-600 mb-4">
            Data pribadi Anda akan disimpan selama diperlukan untuk tujuan yang telah 
            disebutkan dalam kebijakan ini, kecuali periode penyimpanan yang lebih lama 
            diwajibkan atau diizinkan oleh hukum.
          </p>
          <p className="text-slate-600">
            Kami akan menghapus data pribadi Anda ketika tidak lagi diperlukan untuk 
            tujuan pengumpulan atau saat Anda meminta penghapusan data.
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg mb-6">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Perubahan Kebijakan</h3>
          <p className="text-slate-600 mb-4">
            Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu untuk 
            mencerminkan perubahan dalam praktik kami atau karena perubahan hukum yang berlaku.
          </p>
          <p className="text-slate-600">
            Perubahan signifikan akan diberitahukan melalui website atau email. 
            Penggunaan terus-menerus website kami setelah perubahan berarti Anda 
            menerima kebijakan yang diperbarui.
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg mb-6">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Hubungi Kami</h3>
          <p className="text-slate-600 mb-4">
            Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau ingin 
            menggunakan hak privasi Anda, silakan hubungi kami:
          </p>
          <div className="space-y-2 text-slate-600">
            <p><strong>Email:</strong> privacy@unchuproperti.co.id</p>
            <p><strong>Telepon:</strong> 082382466172</p>
            <p><strong>Alamat:</strong> Jl. Muh. Toha KM 6 Ruko Duta Indah Sentoha B.47, 
            Kel. Periuk, Kec. Periuk, Kota Tangerang, Prov. Banten</p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="bg-blue-50 rounded-xl p-6 text-center">
          <p className="text-blue-900 font-medium mb-2">
            Komitmen Kami Terhadap Privasi Anda
          </p>
          <p className="text-blue-700 text-sm">
            PT UNCHU PROPERTI INDONESIA berkomitmen untuk melindungi privasi dan 
            keamanan data pribadi Anda dengan standar tertinggi.
          </p>
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