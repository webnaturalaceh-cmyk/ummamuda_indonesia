// script.js

const translations = {
    "nav_beranda": { id: "Beranda", en: "Home" },
    "nav_program": { id: "Program", en: "Programs" },
    "nav_wilayah": { id: "Fokus Wilayah", en: "Focus Areas" },
    "nav_galeri": { id: "Galeri", en: "Gallery" },
    "nav_kontak": { id: "Kontak", en: "Contact" },
    "nav_cta": { id: "Kontak Kami", en: "Contact Us" },
    "stat_regions_label": { id: "Wilayah Fokus", en: "Focus Regions" },
    "stat_pillars_label": { id: "Pilar Utama", en: "Main Pillars" },
    "stat_beneficiaries_label": { id: "Keluarga Terbantu", en: "Families Impacted" },
    "stat_partners_label": { id: "Mitra Global", en: "Global Partners" },
    "modal_open_btn": { id: "Buka Peta Interaktif &rarr;", en: "Open Interactive Map &rarr;" },
    "hero_badge": { id: "UMMA MUDA INDONESIA", en: "UMMA MUDA INDONESIA" },
    "hero_title1": { id: "Aksi Dari Timur Indonesia", en: "Action From Eastern Indonesia" },
    "hero_title2": { id: "Langkah kecil untuk hidup yang lebih layak", en: "Small steps towards a better life" },
    "hero_desc": { id: "Berkomitmen menghadirkan akses dasar air bersih, sanitasi yang layak, intervensi gizi terpadu, dan perlindungan inklusif bagi saudara kita di wilayah 3T.", en: "Committed to providing basic access to clean water, proper sanitation, integrated nutrition interventions, and inclusive protection for our brothers and sisters in 3T regions." },
    "hero_btn1": { id: "Lihat Dokumentasi", en: "View Documentation" },
    "hero_btn2": { id: "Lihat Program", en: "View Programs" },
    "pillar_title": { id: "4 Pilar Program Utama", en: "4 Main Program Pillars" },
    "pillar_desc": { id: "Inisiatif kami berfokus pada pendekatan holistik untuk menyelesaikan akar permasalahan di daerah sasaran melalui aksi nyata.", en: "Our initiatives focus on a holistic approach to solving root problems in target areas through real action." },
    "pillar1_title": { id: "Air Bersih", en: "Clean Water" },
    "pillar1_desc": { id: "Membangun instalasi air bersih dan menerapkan teknologi filtrasi sederhana berbasis masyarakat untuk memastikan akses air minum yang aman dan berkelanjutan.", en: "Building clean water installations and applying community-based simple filtration technology to ensure safe and sustainable access to drinking water." },
    "pillar2_title": { id: "Sanitasi Kemanusiaan", en: "Humanitarian Sanitation" },
    "pillar2_desc": { id: "Pengadaan fasilitas MCK yang layak serta edukasi masif terkait Perilaku Hidup Bersih dan Sehat (PHBS) untuk menekan angka penyakit menular.", en: "Provision of proper sanitation facilities and massive education regarding Clean and Healthy Living Behaviors (PHBS) to reduce infectious diseases." },
    "pillar3_title": { id: "Gizi & Tumbuh Kembang", en: "Nutrition & Growth" },
    "pillar3_desc": { id: "Pemberian intervensi gizi terpadu, pemantauan kesehatan ibu dan anak, serta program konkret pencegahan stunting secara komprehensif.", en: "Provision of integrated nutrition interventions, maternal and child health monitoring, and comprehensive concrete stunting prevention programs." },
    "pillar4_title": { id: "Inklusi Disabilitas", en: "Disability Inclusion" },
    "pillar4_desc": { id: "Mendorong pemberdayaan ekonomi, penyediaan alat bantu aksesibilitas, serta advokasi hak-hak dasar bagi penyandang disabilitas di daerah terpencil.", en: "Encouraging economic empowerment, providing accessibility aids, and advocating for the basic rights of people with disabilities in remote areas." },
    "focus_title": { id: "Wilayah Intervensi Fokus", en: "Focus Intervention Areas" },
    "focus_desc": { id: "Mendedikasikan sumber daya pada titik-titik krusial di Indonesia Timur yang sangat membutuhkan akselerasi pembangunan dasar.", en: "Dedicating resources to crucial points in Eastern Indonesia that desperately need acceleration of basic development." },
    "focus1_title": { id: "Papua", en: "Papua" },
    "focus1_desc": { id: "Titik mula pergerakan kami. Memfokuskan pada pembangunan sanitasi perintis dan penyediaan akses air di wilayah pedalaman.", en: "The starting point of our movement. Focusing on pioneer sanitation development and water access provision in remote areas." },
    "focus2_title": { id: "Nusa Tenggara Barat (NTB)", en: "West Nusa Tenggara (NTB)" },
    "focus2_desc": { id: "Intervensi difokuskan pada penanganan gizi spesifik, penyediaan air bersih di daerah krisis air, dan penguatan kelompok rentan.", en: "Interventions are focused on specific nutrition handling, clean water provision in water crisis areas, and strengthening vulnerable groups." },
    "focus3_title": { id: "Nusa Tenggara Timur (NTT)", en: "East Nusa Tenggara (NTT)" },
    "focus3_desc": { id: "Mengatasi tingginya angka stunting melalui kolaborasi lintas sektor serta pemenuhan infrastruktur sanitasi komunal yang adaptif.", en: "Overcoming the high rate of stunting through cross-sector collaboration and the fulfillment of adaptive communal sanitation infrastructure." },
    "focus4_title": { id: "Sulawesi", en: "Sulawesi" },
    "focus4_desc": { id: "Penguatan infrastruktur air bersih pesisir, penanganan stunting terpadu, dan pemberdayaan inklusif di wilayah Sulawesi Selatan dan sekitarnya.", en: "Strengthening coastal clean water infrastructure, integrated stunting intervention, and inclusive empowerment in South Sulawesi and surrounding areas." },
    "focus5_title": { id: "Bali", en: "Bali" },
    "focus5_desc": { id: "Fokus pada pemberdayaan disabilitas berbasis komunitas, sanitasi ramah lingkungan, serta dukungan ketahanan pangan bagi keluarga rentan.", en: "Focusing on community-based disability empowerment, eco-friendly sanitation, and food security support for vulnerable families." },
    "focus6_title": { id: "Maluku", en: "Maluku" },
    "focus6_desc": { id: "Menjangkau pulau-pulau terpencil dengan penyediaan sistem filtrasi air bersih, penanganan stunting kepulauan, dan aksesibilitas dasar.", en: "Reaching remote outer islands with clean water filtration systems, island stunting interventions, and basic accessibility." },
    "mitra_title": { id: "Mitra & Pendukung", en: "Partners & Supporters" },
    "mitra_desc": { id: "Kolaborasi strategis demi mewujudkan pembangunan inklusif dan berkelanjutan di Indonesia.", en: "Strategic collaboration to realize inclusive and sustainable development in Indonesia." },
    "mitra_hosted": { id: "Hosted by", en: "Hosted by" },
    "mitra_organized": { id: "Organized by", en: "Organized by" },
    "mitra_strategic": { id: "Strategic / Program Partner", en: "Strategic / Program Partner" },
    "gallery_title": { id: "Galeri Kegiatan", en: "Activity Gallery" },
    "gallery_desc": { id: "Dokumentasi aksi nyata dan rekam jejak terkini @ummamudaindonesia dalam merajut asa di pelosok Indonesia.", en: "Real action documentation and latest track record of @ummamudaindonesia in weaving hope across remote Indonesia." },
    "gallery_btn": { id: "Kunjungi Instagram", en: "Visit Instagram" },
    "gal_link_text": { id: "Lihat di Instagram", en: "View on Instagram" },
    "gal1_tag": { id: "Kemandirian", en: "Independence" },
    "gal1_title": { id: "Kemandirian Mulai Dari Rasa Percaya", en: "Independence Begins with Trust" },
    "gal1_desc": { id: "Membangun kepercayaan keluarga dan masyarakat untuk mendukung kemandirian penyandang disabilitas.", en: "Building trust within families and communities to support the independence of people with disabilities." },
    "gal2_tag": { id: "Otonomi", en: "Autonomy" },
    "gal2_title": { id: "Berikan Pilihan, Bukan Perintah", en: "Offer Choices, Not Commands" },
    "gal2_desc": { id: "Menghormati hak dan preferensi penyandang disabilitas dalam menentukan apa yang terbaik bagi mereka.", en: "Respecting the rights and preferences of people with disabilities in determining what is best for them." },
    "gal3_tag": { id: "Aksesibilitas", en: "Accessibility" },
    "gal3_title": { id: "Aktivitas Harian Adalah Hak Semua Orang", en: "Everyday Activities Are a Right for Everyone" },
    "gal3_desc": { id: "Menghapus hambatan agar setiap individu bebas beraktivitas, berkumpul, dan menikmati ruang publik setara.", en: "Removing barriers so every individual can freely participate, gather, and enjoy equal public spaces." },
    "gal4_tag": { id: "Pemberdayaan", en: "Empowerment" },
    "gal4_title": { id: "Dukungan Tumbuh Tanpa Membatasi", en: "Support Growth Without Limiting Potential" },
    "gal4_desc": { id: "Memberikan ruang eksplorasi dan kebebasan belajar bagi penyandang disabilitas untuk membangun rasa percaya diri.", en: "Giving space to explore and freedom to learn for people with disabilities to build self-confidence." },
    "gal5_tag": { id: "Program ISF", en: "ISF Program" },
    "gal5_title": { id: "Kick-Off Inclusive Seed Fund (ISF) 2026", en: "Inclusive Seed Fund (ISF) 2026 Kick-Off" },
    "gal5_desc": { id: "Langkah awal kolaborasi bersama Nathan's Foundation dalam mendanai inisiatif dampak sosial yang inklusif.", en: "A new collaborative journey with Nathan's Foundation in funding inclusive social impact initiatives." },
    "gal6_tag": { id: "Kolaborasi", en: "Collaboration" },
    "gal6_title": { id: "Sesi Kolaborasi & Pembelajaran Digital", en: "Digital Learning & Collaboration Session" },
    "gal6_desc": { id: "Terhubung dan bertukar ide dari mana saja untuk memperkuat dampak positif bagi masyarakat luas.", en: "Connecting and exchanging ideas from anywhere to strengthen positive impact for broader communities." },
    "contact_title": { id: "Hubungi Kami", en: "Contact Us" },
    "contact_desc": { id: "Untuk informasi lebih lanjut mengenai dokumentasi dan kegiatan Umma Muda Indonesia, Anda dapat menghubungi kami melalui kontak di bawah ini.", en: "For more information regarding Umma Muda Indonesia documentation and activities, you can contact us via the contacts below." },
    "contact_hq": { id: "Kantor Pusat", en: "Head Office" },
    "contact_hq_desc": { id: "Jl. Contoh Alamat No. 123<br>Banda Aceh, Indonesia", en: "123 Example Address St<br>Banda Aceh, Indonesia" },
    "contact_email": { id: "Email Kami", en: "Our Email" },
    "contact_phone": { id: "Telepon / WhatsApp", en: "Phone / WhatsApp" },
    "footer_initiative": { id: "Sebuah Inisiatif dari Perempuan Muda Indonesia", en: "An Initiative of Perempuan Muda Indonesia" },
    "footer_desc": { id: "Hadir untuk menyambung asa dan memastikan hak-hak dasar masyarakat di pelosok negeri terpenuhi.", en: "Present to weave hope and ensure the basic rights of communities in remote areas of the country are fulfilled." },
    "footer_links": { id: "Navigasi", en: "Navigation" },
    "footer_contact_title": { id: "Kontak & Sekretariat", en: "Contact & Secretariat" },
    "footer_secretariat_label": { id: "Daftar Sekretariat", en: "Secretariats" },
    "footer_item_loc": { id: "Pangkep (Sulsel), Maros (Sulsel), Gowa (Sulsel), Kupang (NTT), dan Teluk Bintuni (Papua Barat).", en: "Pangkep (South Sulawesi), Maros (South Sulawesi), Gowa (South Sulawesi), Kupang (East Nusa Tenggara), and Teluk Bintuni (West Papua)." },
    "footer_item_email": { id: "ummamudaindo@gmail.com", en: "ummamudaindo@gmail.com" },
    "footer_item_phone": { id: "+62 821-9895-0801", en: "+62 821-9895-0801" },
    "footer_privacy": { id: "Kebijakan Privasi", en: "Privacy Policy" },
    "footer_terms": { id: "Syarat & Ketentuan", en: "Terms & Conditions" },
    "footer_copyright": { id: "&copy; 2024 Umma Muda Indonesia Hak Cipta Dilindungi.", en: "&copy; 2024 Umma Muda Indonesia. All Rights Reserved." }
};

let currentLang = 'id';

document.addEventListener('DOMContentLoaded', () => {
    const toggleBtns = document.querySelectorAll('.lang-toggle-btn');
    
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentLang = currentLang === 'id' ? 'en' : 'id';
            
            // Update button texts
            toggleBtns.forEach(b => {
                b.innerHTML = currentLang === 'id' ? 'ID' : 'EN';
            });
            
            // Translate elements
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[key]) {
                    el.innerHTML = translations[key][currentLang];
                }
            });

            // Update map popups if map exists
            if (window.updateMapLanguage) {
                window.updateMapLanguage(currentLang);
            }
        });
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const icon = mobileMenuBtn.querySelector('i');

    function toggleMenu() {
        mobileMenu.classList.toggle('hidden');
        if (mobileMenu.classList.contains('hidden')) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        } else {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        }
    }

    mobileMenuBtn.addEventListener('click', toggleMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!mobileMenu.classList.contains('hidden')) {
                toggleMenu();
            }
        });
    });

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            navbar.classList.add('shadow-md');
            navbar.classList.remove('shadow-sm');
        } else {
            navbar.classList.remove('shadow-md');
            navbar.classList.add('shadow-sm');
        }
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId === '') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // ==========================================
    // Map Modal Logic (Leaflet)
    // ==========================================
    const mapModal = document.getElementById('map-modal');
    const closeMapModal = document.getElementById('close-map-modal');
    const regionCards = document.querySelectorAll('.region-card');
    
    if (mapModal && typeof L !== 'undefined') {
        let modalMap = null;
        let currentMarker = null;
        let activeRegionKey = null;

        const locations = {
            "papua": {
                name: "Papua",
                coords: [-4.2699, 138.0803],
                zoom: 6,
                infoId: `
                    <div class="p-2 min-w-[220px]">
                        <img src="wilayah_papua.jpg" alt="Anak-anak Papua" style="width: 100%; height: 120px; object-fit: cover; border-radius: 8px; margin-bottom: 12px; display: block;">
                        <h3 class="font-bold text-lg mb-1 text-primary-900">Provinsi Papua</h3>
                        <p class="text-xs text-gray-500 mb-3 border-b pb-2"><i>Sumber: BPS & SSGI Kemenkes (2022)</i></p>
                        <ul class="text-sm space-y-2 text-gray-700">
                            <li><i class="fas fa-seedling text-primary-600 w-4"></i> <b>Gizi (Stunting):</b> Prevalensi tinggi mencapai 34,6%.</li>
                            <li><i class="fas fa-hand-holding-water text-primary-600 w-4"></i> <b>Air & Sanitasi:</b> Akses sanitasi komunal dan sumber air bersih masih tertinggal.</li>
                            <li><i class="fas fa-wheelchair text-primary-600 w-4"></i> <b>Disabilitas:</b> Geografi menantang menyulitkan penyaluran alat bantu.</li>
                        </ul>
                    </div>
                `,
                infoEn: `
                    <div class="p-2 min-w-[220px]">
                        <img src="wilayah_papua.jpg" alt="Children of Papua" style="width: 100%; height: 120px; object-fit: cover; border-radius: 8px; margin-bottom: 12px; display: block;">
                        <h3 class="font-bold text-lg mb-1 text-primary-900">Papua Province</h3>
                        <p class="text-xs text-gray-500 mb-3 border-b pb-2"><i>Source: BPS & SSGI Kemenkes (2022)</i></p>
                        <ul class="text-sm space-y-2 text-gray-700">
                            <li><i class="fas fa-seedling text-primary-600 w-4"></i> <b>Nutrition (Stunting):</b> High prevalence reaching 34.6%.</li>
                            <li><i class="fas fa-hand-holding-water text-primary-600 w-4"></i> <b>Water & Sanitation:</b> Access to communal sanitation and clean water is lagging.</li>
                            <li><i class="fas fa-wheelchair text-primary-600 w-4"></i> <b>Disability:</b> Challenging geography makes distributing aids difficult.</li>
                        </ul>
                    </div>
                `
            },
            "ntb": {
                name: "Nusa Tenggara Barat (NTB)",
                coords: [-8.6529, 117.3616],
                zoom: 7,
                infoId: `
                    <div class="p-2 min-w-[220px]">
                        <img src="wilayah_ntb.jpg" alt="Anak-anak NTB" style="width: 100%; height: 120px; object-fit: cover; border-radius: 8px; margin-bottom: 12px; display: block;">
                        <h3 class="font-bold text-lg mb-1 text-primary-900">Provinsi NTB</h3>
                        <p class="text-xs text-gray-500 mb-3 border-b pb-2"><i>Sumber: BPS & SSGI Kemenkes (2022)</i></p>
                        <ul class="text-sm space-y-2 text-gray-700">
                            <li><i class="fas fa-seedling text-primary-600 w-4"></i> <b>Gizi (Stunting):</b> Masih tergolong tinggi di angka 32,7%.</li>
                            <li><i class="fas fa-hand-holding-water text-primary-600 w-4"></i> <b>Air & Sanitasi:</b> Butuh peningkatan akses MCK komunal di pelosok.</li>
                            <li><i class="fas fa-wheelchair text-primary-600 w-4"></i> <b>Disabilitas:</b> Fokus pada pemberdayaan kelompok rentan.</li>
                        </ul>
                    </div>
                `,
                infoEn: `
                    <div class="p-2 min-w-[220px]">
                        <img src="wilayah_ntb.jpg" alt="Children of NTB" style="width: 100%; height: 120px; object-fit: cover; border-radius: 8px; margin-bottom: 12px; display: block;">
                        <h3 class="font-bold text-lg mb-1 text-primary-900">NTB Province</h3>
                        <p class="text-xs text-gray-500 mb-3 border-b pb-2"><i>Source: BPS & SSGI Kemenkes (2022)</i></p>
                        <ul class="text-sm space-y-2 text-gray-700">
                            <li><i class="fas fa-seedling text-primary-600 w-4"></i> <b>Nutrition (Stunting):</b> Still relatively high at 32.7%.</li>
                            <li><i class="fas fa-hand-holding-water text-primary-600 w-4"></i> <b>Water & Sanitation:</b> Needs improved communal sanitation in remote areas.</li>
                            <li><i class="fas fa-wheelchair text-primary-600 w-4"></i> <b>Disability:</b> Focus on empowering vulnerable groups.</li>
                        </ul>
                    </div>
                `
            },
            "ntt": {
                name: "Nusa Tenggara Timur (NTT)",
                coords: [-8.6500, 121.0833],
                zoom: 7,
                infoId: `
                    <div class="p-2 min-w-[220px]">
                        <img src="wilayah_ntt.jpg" alt="Anak-anak NTT" style="width: 100%; height: 120px; object-fit: cover; border-radius: 8px; margin-bottom: 12px; display: block;">
                        <h3 class="font-bold text-lg mb-1 text-primary-900">Provinsi NTT</h3>
                        <p class="text-xs text-gray-500 mb-3 border-b pb-2"><i>Sumber: BPS & SSGI Kemenkes (2022)</i></p>
                        <ul class="text-sm space-y-2 text-gray-700">
                            <li><i class="fas fa-seedling text-primary-600 w-4"></i> <b>Gizi (Stunting):</b> Tertinggi di Indonesia (35,3%).</li>
                            <li><i class="fas fa-hand-holding-water text-primary-600 w-4"></i> <b>Air & Sanitasi:</b> Rawan krisis air bersih, terutama saat kemarau.</li>
                            <li><i class="fas fa-wheelchair text-primary-600 w-4"></i> <b>Disabilitas:</b> Sangat minim fasilitas publik yang ramah disabilitas.</li>
                        </ul>
                    </div>
                `,
                infoEn: `
                    <div class="p-2 min-w-[220px]">
                        <img src="wilayah_ntt.jpg" alt="Children of NTT" style="width: 100%; height: 120px; object-fit: cover; border-radius: 8px; margin-bottom: 12px; display: block;">
                        <h3 class="font-bold text-lg mb-1 text-primary-900">NTT Province</h3>
                        <p class="text-xs text-gray-500 mb-3 border-b pb-2"><i>Source: BPS & SSGI Kemenkes (2022)</i></p>
                        <ul class="text-sm space-y-2 text-gray-700">
                            <li><i class="fas fa-seedling text-primary-600 w-4"></i> <b>Nutrition (Stunting):</b> Highest in Indonesia (35.3%).</li>
                            <li><i class="fas fa-hand-holding-water text-primary-600 w-4"></i> <b>Water & Sanitation:</b> Prone to clean water crises, especially in dry seasons.</li>
                            <li><i class="fas fa-wheelchair text-primary-600 w-4"></i> <b>Disability:</b> Very minimal disability-friendly public facilities.</li>
                        </ul>
                    </div>
                `
            },
            "sulawesi": {
                name: "Sulawesi",
                coords: [-4.8500, 119.6500],
                zoom: 7,
                infoId: `
                    <div class="p-2 min-w-[220px]">
                        <img src="wilayah_sulawesi.jpg" alt="Anak-anak Sulawesi" style="width: 100%; height: 120px; object-fit: cover; border-radius: 8px; margin-bottom: 12px; display: block;">
                        <h3 class="font-bold text-lg mb-1 text-primary-900">Wilayah Sulawesi</h3>
                        <p class="text-xs text-gray-500 mb-3 border-b pb-2"><i>Sumber: BPS & SSGI Kemenkes (2022)</i></p>
                        <ul class="text-sm space-y-2 text-gray-700">
                            <li><i class="fas fa-seedling text-primary-600 w-4"></i> <b>Gizi (Stunting):</b> Pendampingan gizi intensif balita dan ibu hamil di kawasan pesisir.</li>
                            <li><i class="fas fa-hand-holding-water text-primary-600 w-4"></i> <b>Air & Sanitasi:</b> Pembangunan sumur bor air tawar & fasilitas sanitasi komunal.</li>
                            <li><i class="fas fa-home text-primary-600 w-4"></i> <b>Sekretariat:</b> Simpul koordinasi di Pangkep, Maros, dan Gowa.</li>
                        </ul>
                    </div>
                `,
                infoEn: `
                    <div class="p-2 min-w-[220px]">
                        <img src="wilayah_sulawesi.jpg" alt="Children of Sulawesi" style="width: 100%; height: 120px; object-fit: cover; border-radius: 8px; margin-bottom: 12px; display: block;">
                        <h3 class="font-bold text-lg mb-1 text-primary-900">Sulawesi Region</h3>
                        <p class="text-xs text-gray-500 mb-3 border-b pb-2"><i>Source: BPS & SSGI Kemenkes (2022)</i></p>
                        <ul class="text-sm space-y-2 text-gray-700">
                            <li><i class="fas fa-seedling text-primary-600 w-4"></i> <b>Nutrition (Stunting):</b> Intensive nutrition counseling for toddlers and pregnant mothers.</li>
                            <li><i class="fas fa-hand-holding-water text-primary-600 w-4"></i> <b>Water & Sanitation:</b> Construction of fresh water wells & communal sanitation.</li>
                            <li><i class="fas fa-home text-primary-600 w-4"></i> <b>Secretariat:</b> Coordination hubs in Pangkep, Maros, and Gowa.</li>
                        </ul>
                    </div>
                `
            },
            "bali": {
                name: "Bali",
                coords: [-8.4095, 115.1889],
                zoom: 9,
                infoId: `
                    <div class="p-2 min-w-[220px]">
                        <img src="wilayah_bali.jpg" alt="Anak-anak Bali" style="width: 100%; height: 120px; object-fit: cover; border-radius: 8px; margin-bottom: 12px; display: block;">
                        <h3 class="font-bold text-lg mb-1 text-primary-900">Provinsi Bali</h3>
                        <p class="text-xs text-gray-500 mb-3 border-b pb-2"><i>Sumber: BPS & SSGI Kemenkes (2022)</i></p>
                        <ul class="text-sm space-y-2 text-gray-700">
                            <li><i class="fas fa-wheelchair text-primary-600 w-4"></i> <b>Inklusi Disabilitas:</b> Pemberdayaan kemandirian ekonomi & penyediaan alat bantu aksesibilitas.</li>
                            <li><i class="fas fa-hand-holding-water text-primary-600 w-4"></i> <b>Air & Sanitasi:</b> Edukasi sanitasi ramah lingkungan dan pelestarian sumber air bersih.</li>
                            <li><i class="fas fa-seedling text-primary-600 w-4"></i> <b>Gizi Keluarga:</b> Intervensi pangan bernutrisi bagi kelompok marginal.</li>
                        </ul>
                    </div>
                `,
                infoEn: `
                    <div class="p-2 min-w-[220px]">
                        <img src="wilayah_bali.jpg" alt="Children of Bali" style="width: 100%; height: 120px; object-fit: cover; border-radius: 8px; margin-bottom: 12px; display: block;">
                        <h3 class="font-bold text-lg mb-1 text-primary-900">Bali Province</h3>
                        <p class="text-xs text-gray-500 mb-3 border-b pb-2"><i>Source: BPS & SSGI Kemenkes (2022)</i></p>
                        <ul class="text-sm space-y-2 text-gray-700">
                            <li><i class="fas fa-wheelchair text-primary-600 w-4"></i> <b>Disability Inclusion:</b> Economic empowerment & accessibility aid distribution.</li>
                            <li><i class="fas fa-hand-holding-water text-primary-600 w-4"></i> <b>Water & Sanitation:</b> Eco-friendly sanitation education & watershed conservation.</li>
                            <li><i class="fas fa-seedling text-primary-600 w-4"></i> <b>Family Nutrition:</b> Nutritious food support for marginalized communities.</li>
                        </ul>
                    </div>
                `
            },
            "maluku": {
                name: "Maluku",
                coords: [-3.6547, 128.1906],
                zoom: 7,
                infoId: `
                    <div class="p-2 min-w-[220px]">
                        <img src="wilayah_maluku.jpg" alt="Anak-anak Maluku" style="width: 100%; height: 120px; object-fit: cover; border-radius: 8px; margin-bottom: 12px; display: block;">
                        <h3 class="font-bold text-lg mb-1 text-primary-900">Kepulauan Maluku</h3>
                        <p class="text-xs text-gray-500 mb-3 border-b pb-2"><i>Sumber: BPS & SSGI Kemenkes (2022)</i></p>
                        <ul class="text-sm space-y-2 text-gray-700">
                            <li><i class="fas fa-hand-holding-water text-primary-600 w-4"></i> <b>Air Bersih Kepulauan:</b> Instalasi filtrasi air tawar bagi desa pulau terpencil.</li>
                            <li><i class="fas fa-seedling text-primary-600 w-4"></i> <b>Gizi (Stunting):</b> Penyaluran makanan tambahan untuk menekan angka stunting (26,1%).</li>
                            <li><i class="fas fa-wheelchair text-primary-600 w-4"></i> <b>Disabilitas:</b> Dukungan alat mobilitas bagi warga disabilitas di pulau terluar.</li>
                        </ul>
                    </div>
                `,
                infoEn: `
                    <div class="p-2 min-w-[220px]">
                        <img src="wilayah_maluku.jpg" alt="Children of Maluku" style="width: 100%; height: 120px; object-fit: cover; border-radius: 8px; margin-bottom: 12px; display: block;">
                        <h3 class="font-bold text-lg mb-1 text-primary-900">Maluku Islands</h3>
                        <p class="text-xs text-gray-500 mb-3 border-b pb-2"><i>Source: BPS & SSGI Kemenkes (2022)</i></p>
                        <ul class="text-sm space-y-2 text-gray-700">
                            <li><i class="fas fa-hand-holding-water text-primary-600 w-4"></i> <b>Island Clean Water:</b> Fresh water filtration installations for remote island villages.</li>
                            <li><i class="fas fa-seedling text-primary-600 w-4"></i> <b>Nutrition (Stunting):</b> Supplementary food distribution to address stunting (26.1%).</li>
                            <li><i class="fas fa-wheelchair text-primary-600 w-4"></i> <b>Disability:</b> Mobility aid support for people with disabilities on outer islands.</li>
                        </ul>
                    </div>
                `
            }
        };

        const customIcon = L.divIcon({
            html: '<div style="background-color: #cc0096; color: white; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3); border: 2px solid white;"><i class="fas fa-map-marker-alt"></i></div>',
            className: 'custom-leaflet-icon',
            iconSize: [30, 30],
            iconAnchor: [15, 30],
            popupAnchor: [0, -30]
        });

        function openMapModal(regionKey) {
            const loc = locations[regionKey];
            if (!loc) return;

            activeRegionKey = regionKey;
            
            // Prevent background scrolling when modal is open
            document.body.classList.add('overflow-hidden');

            // Show modal
            mapModal.classList.remove('hidden');
            mapModal.classList.add('flex');
            
            // We need a tiny timeout so the modal's display:flex renders to the DOM
            // before Leaflet computes the container dimensions, preventing grey map tiles.
            setTimeout(() => {
                if (!modalMap) {
                    modalMap = L.map('modal-map').setView(loc.coords, loc.zoom);
                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        maxZoom: 18,
                        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    }).addTo(modalMap);
                } else {
                    modalMap.setView(loc.coords, loc.zoom);
                }

                modalMap.invalidateSize(); // Fixes tile rendering in modals

                if (currentMarker) {
                    modalMap.removeLayer(currentMarker);
                }

                currentMarker = L.marker(loc.coords, {icon: customIcon}).addTo(modalMap);
                currentMarker.bindPopup(currentLang === 'id' ? loc.infoId : loc.infoEn).openPopup();
                
            }, 100);
        }

        // Add click events to cards
        regionCards.forEach(card => {
            card.addEventListener('click', () => {
                const region = card.getAttribute('data-region');
                openMapModal(region);
            });
        });

        function closeModal() {
            mapModal.classList.add('hidden');
            mapModal.classList.remove('flex');
            activeRegionKey = null;

            // Restore background scrolling when modal is closed
            document.body.classList.remove('overflow-hidden');
        }

        closeMapModal.addEventListener('click', closeModal);

        // Close when clicking outside modal content
        mapModal.addEventListener('click', (e) => {
            if (e.target === mapModal) {
                closeModal();
            }
        });

        // Close when pressing Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !mapModal.classList.contains('hidden')) {
                closeModal();
            }
        });

        // Expose function to update popups when language changes
        window.updateMapLanguage = function(lang) {
            if (currentMarker && activeRegionKey && currentMarker.isPopupOpen()) {
                const loc = locations[activeRegionKey];
                currentMarker.setPopupContent(lang === 'id' ? loc.infoId : loc.infoEn);
                currentMarker.openPopup();
            }
        };
    }

    // ==========================================
    // Scroll Reveal Animations
    // ==========================================
    const reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && reveals.length > 0) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px'
        });

        reveals.forEach(el => revealObserver.observe(el));
    } else {
        reveals.forEach(el => el.classList.add('active'));
    }

    // ==========================================
    // Back to Top Button
    // ==========================================
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        }, { passive: true });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ==========================================
    // Active Navigation Scrollspy
    // ==========================================
    const sections = document.querySelectorAll('section[id], footer[id]');
    const navLinks = document.querySelectorAll('#navbar nav a[href^="#"]');

    if (sections.length > 0 && navLinks.length > 0) {
        window.addEventListener('scroll', () => {
            let currentSectionId = '';
            const scrollPosition = window.scrollY + 140;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    currentSectionId = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                const href = link.getAttribute('href').replace('#', '');
                if (href === currentSectionId) {
                    link.classList.add('text-primary-600', 'font-semibold');
                    link.classList.remove('text-gray-600');
                } else {
                    link.classList.remove('text-primary-600', 'font-semibold');
                    link.classList.add('text-gray-600');
                }
            });
        }, { passive: true });
    }
});
