'use client';

import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Home, Building, Info, FileText, ChevronRight, Star, Shield, TrendingUp, Users } from 'lucide-react';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Beranda', href: '#home', icon: Home },
    { name: 'Tentang Kami', href: '#about', icon: Info },
    { name: 'Layanan', href: '#services', icon: Building },
    { name: 'Kontak', href: '#contact', icon: Phone },
  ];

  const legalPages = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms & Conditions', href: '/terms' },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Terpercaya',
      description: 'Perusahaan properti terpercaya dengan reputasi terbaik di industri',
    },
    {
      icon: TrendingUp,
      title: 'Investasi Menguntungkan',
      description: 'Peluang investasi properti dengan potensi pengembalian yang tinggi',
    },
    {
      icon: Users,
      title: 'Layanan Profesional',
      description: 'Tim ahli siap membantu kebutuhan properti Anda',
    },
  ];

  const testimonials = [
    {
      name: 'Budi Santoso',
      role: 'Investor',
      content: 'Sangat puas dengan layanan PT UNCHU PROPERTI INDONESIA. Profesional dan terpercaya.',
      rating: 5,
    },
    {
      name: 'Siti Nurhaliza',
      role: 'Pemilik Properti',
      content: 'Tim yang sangat membantu dan responsif. Proses transaksi sangat mudah.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/logo.png" alt="PT UNCHU PROPERTI INDONESIA" className="h-10 w-auto" />
              <div className="ml-3">
                <h1 className="text-lg font-bold text-slate-900">UNCHU PROPERTI</h1>
                <p className="text-xs text-slate-600">INDONESIA</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-1 text-slate-700 hover:text-blue-600 transition-colors"
                >
                  <item.icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{item.name}</span>
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-700 hover:text-blue-600 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 px-3 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
                PT UNCHU PROPERTI
                <span className="text-blue-600 block">INDONESIA</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Mitra terpercaya Anda dalam perdagangan properti profesional. 
                Kami menyediakan solusi properti terbaik dengan layanan berkualitas 
                dan integritas yang tinggi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Hubungi Kami
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-700 font-medium rounded-lg border border-slate-300 hover:bg-slate-50 transition-colors"
                >
                  Lihat Layanan
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/hero-property.jpg" 
                alt="Modern Luxury Property" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Properti Premium</h3>
                  <p className="text-lg">Koleksi properti eksklusif dengan investasi menguntungkan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Tentang <span className="text-blue-600">PT UNCHU PROPERTI INDONESIA</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Perusahaan perdagangan properti profesional yang berkomitmen memberikan 
              layanan terbaik untuk kebutuhan properti Anda
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Visi & Misi Kami</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-blue-600 mb-2">Visi</h4>
                  <p className="text-slate-600">
                    Menjadi perusahaan properti terdepan yang menyediakan solusi properti 
                    inovatif dan terpercaya di Indonesia.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-600 mb-2">Misi</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      Memberikan layanan properti profesional dengan integritas tinggi
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      Menyediakan properti berkualitas dengan harga kompetitif
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      Membangun hubungan jangka panjang dengan klien
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8">
              <img 
                src="/team-meeting.jpg" 
                alt="Professional Team Meeting" 
                className="rounded-xl shadow-lg w-full h-auto mb-6"
              />
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold text-slate-900 mb-2">Legalitas Perusahaan</h4>
                  <p className="text-slate-600">
                    PT UNCHU PROPERTI INDONESIA adalah perusahaan resmi yang bergerak 
                    dalam bidang perdagangan properti dengan izin usaha lengkap.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold text-slate-900 mb-2">Layanan Utama</h4>
                  <p className="text-slate-600">
                    Perdagangan eceran properti profesional di luar pasar tradisional, 
                    memberikan pengalaman transaksi yang modern dan nyaman.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Layanan <span className="text-blue-600">Unggulan</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Solusi properti komprehensif untuk memenuhi kebutuhan Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 rounded-lg p-3 w-fit mb-6">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Apa Kata <span className="text-blue-600">Klien</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Testimoni dari pelanggan yang puas dengan layanan kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Hubungi <span className="text-blue-600">Kami</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Siap membantu kebutuhan properti Anda
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Building className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900">PT UNCHU PROPERTI INDONESIA</h4>
                    <p className="text-slate-600">Perusahaan Perdagangan Properti Profesional</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Alamat</h4>
                    <p className="text-slate-600">
                      Jl. Muh. Toha KM 6 Ruko Duta Indah Sentoha B.47, Kel. Periuk, 
                      Kec. Periuk, Kota Tangerang, Prov. Banten
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Telepon</h4>
                    <p className="text-slate-600">082382466172</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Email</h4>
                    <p className="text-slate-600">info@unchuproperti.co.id</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Kirim Pesan</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Pesan
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tuliskan pesan Anda..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/logo.png" alt="PT UNCHU PROPERTI INDONESIA" className="h-8 w-auto" />
                <div className="ml-2">
                  <h3 className="font-bold">UNCHU PROPERTI</h3>
                  <p className="text-xs text-slate-400">INDONESIA</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm">
                Perusahaan perdagangan properti profesional terpercaya di Indonesia.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Navigasi</h4>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Jual Beli Properti</li>
                <li>Konsultasi Properti</li>
                <li>Investasi Properti</li>
                <li>Manajemen Properti</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>082382466172</li>
                <li>info@unchuproperti.co.id</li>
                <li>Tangerang, Banten</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-400 text-sm mb-4 md:mb-0">
                © 2024 PT UNCHU PROPERTI INDONESIA. Hak Cipta Dilindungi.
              </p>
              <div className="flex space-x-6">
                {legalPages.map((page) => (
                  <a
                    key={page.name}
                    href={page.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {page.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}