// script.js

const translations = {
    "nav_beranda": { id: "Beranda", en: "Home" },
    "nav_program": { id: "Program Kami", en: "Our Programs" },
    "nav_wilayah": { id: "Wilayah Fokus", en: "Focus Areas" },
    "nav_galeri": { id: "Galeri", en: "Gallery" },
    "nav_kontak": { id: "Kontak", en: "Contact" },
    "hero_badge": { id: "Umma Muda Indonesia • Natural Aceh Corp", en: "Umma Muda Indonesia • Natural Aceh Corp" },
    "hero_title1": { id: "Cerita Dari Papua:", en: "Stories From Papua:" },
    "hero_title2": { id: "Langkah kecil untuk hidup yang lebih layak", en: "Small steps for a better life" },
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
    "mitra_title": { id: "Mitra & Pendukung", en: "Partners & Supporters" },
    "mitra_desc": { id: "Kolaborasi strategis demi mewujudkan pembangunan inklusif dan berkelanjutan di Indonesia.", en: "Strategic collaboration to realize inclusive and sustainable development in Indonesia." },
    "mitra_hosted": { id: "Hosted by", en: "Hosted by" },
    "mitra_organized": { id: "Organized by", en: "Organized by" },
    "mitra_strategic": { id: "Strategic / Program Partner", en: "Strategic / Program Partner" },
    "gallery_title": { id: "Galeri Kegiatan", en: "Activity Gallery" },
    "gallery_desc": { id: "Rekam jejak aksi nyata kami merajut asa dan membawa perubahan bagi masyarakat di ujung timur Indonesia.", en: "A track record of our real actions weaving hope and bringing change to communities in the eastern tip of Indonesia." },
    "gallery_btn": { id: "Lihat Semua Album", en: "View All Albums" },
    "gal1_tag": { id: "Papua", en: "Papua" },
    "gal1_title": { id: "Pembangunan Fasilitas Air Bersih", en: "Clean Water Facility Construction" },
    "gal1_desc": { id: "Penyediaan akses air minum perdana untuk 50 kepala keluarga.", en: "Provision of inaugural drinking water access for 50 families." },
    "gal2_tag": { id: "NTB", en: "NTB" },
    "gal2_title": { id: "Penyuluhan Gizi Ibu & Anak", en: "Maternal & Child Nutrition Counseling" },
    "gal2_desc": { id: "Program intervensi stunting dan pembagian makanan tambahan.", en: "Stunting intervention program and distribution of supplementary food." },
    "gal3_tag": { id: "NTT", en: "NTT" },
    "gal3_title": { id: "Pembangunan MCK Komunal", en: "Communal Sanitation Construction" },
    "gal3_desc": { id: "Membangun fasilitas sanitasi higienis dan ramah disabilitas.", en: "Building hygienic and disability-friendly sanitation facilities." },
    "gal_placeholder_title": { id: "Dokumentasi Mendatang", en: "Upcoming Documentation" },
    "gal_placeholder_desc": { id: "Ruang untuk aksi nyata selanjutnya", en: "Space for the next real actions" },
    "contact_title": { id: "Hubungi Kami", en: "Contact Us" },
    "contact_desc": { id: "Untuk informasi lebih lanjut mengenai dokumentasi dan kegiatan Umma Muda Indonesia, Anda dapat menghubungi kami melalui kontak di bawah ini.", en: "For more information regarding Umma Muda Indonesia documentation and activities, you can contact us via the contacts below." },
    "contact_hq": { id: "Kantor Pusat", en: "Head Office" },
    "contact_hq_desc": { id: "Jl. Contoh Alamat No. 123<br>Banda Aceh, Indonesia", en: "123 Example Address St<br>Banda Aceh, Indonesia" },
    "contact_email": { id: "Email Kami", en: "Our Email" },
    "contact_phone": { id: "Telepon / WhatsApp", en: "Phone / WhatsApp" },
    "footer_initiative": { id: "Sebuah Inisiatif dari Natural Aceh Corp", en: "An Initiative of Natural Aceh Corp" },
    "footer_desc": { id: "Hadir untuk menyambung asa dan memastikan hak-hak dasar masyarakat di pelosok negeri terpenuhi.", en: "Present to weave hope and ensure the basic rights of communities in remote areas of the country are fulfilled." },
    "footer_links": { id: "Tautan Cepat", en: "Quick Links" },
    "footer_legal": { id: "Legal & Informasi", en: "Legal & Information" },
    "footer_privacy": { id: "Kebijakan Privasi", en: "Privacy Policy" },
    "footer_terms": { id: "Syarat & Ketentuan", en: "Terms & Conditions" },
    "footer_report": { id: "Laporan Transparansi", en: "Transparency Report" },
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
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                     top: offsetPosition,
                     behavior: "smooth"
                });
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
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Raja_Ampat%2C_Mutiara_Indah_di_Timur_Indonesia.jpg/800px-Raja_Ampat%2C_Mutiara_Indah_di_Timur_Indonesia.jpg" alt="Papua" style="width: 100%; height: 120px; object-fit: cover; border-radius: 8px; margin-bottom: 12px; display: block;">
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
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Raja_Ampat%2C_Mutiara_Indah_di_Timur_Indonesia.jpg/800px-Raja_Ampat%2C_Mutiara_Indah_di_Timur_Indonesia.jpg" alt="Papua" style="width: 100%; height: 120px; object-fit: cover; border-radius: 8px; margin-bottom: 12px; display: block;">
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
            "ntt": {
                name: "Nusa Tenggara Timur (NTT)",
                coords: [-8.6500, 121.0833],
                zoom: 7,
                infoId: `
                    <div class="p-2 min-w-[220px]">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Padar_Island_in_Komodo_National_Park.jpg/800px-Padar_Island_in_Komodo_National_Park.jpg" alt="NTT" style="width: 100%; height: 120px; object-fit: cover; border-radius: 8px; margin-bottom: 12px; display: block;">
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
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Padar_Island_in_Komodo_National_Park.jpg/800px-Padar_Island_in_Komodo_National_Park.jpg" alt="NTT" style="width: 100%; height: 120px; object-fit: cover; border-radius: 8px; margin-bottom: 12px; display: block;">
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
            "ntb": {
                name: "Nusa Tenggara Barat (NTB)",
                coords: [-8.6529, 117.3616],
                zoom: 7,
                infoId: `
                    <div class="p-2 min-w-[220px]">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Mount_Rinjani_from_Sembalun_Lawang.jpg/800px-Mount_Rinjani_from_Sembalun_Lawang.jpg" alt="NTB" style="width: 100%; height: 120px; object-fit: cover; border-radius: 8px; margin-bottom: 12px; display: block;">
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
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Mount_Rinjani_from_Sembalun_Lawang.jpg/800px-Mount_Rinjani_from_Sembalun_Lawang.jpg" alt="NTB" style="width: 100%; height: 120px; object-fit: cover; border-radius: 8px; margin-bottom: 12px; display: block;">
                        <h3 class="font-bold text-lg mb-1 text-primary-900">NTB Province</h3>
                        <p class="text-xs text-gray-500 mb-3 border-b pb-2"><i>Source: BPS & SSGI Kemenkes (2022)</i></p>
                        <ul class="text-sm space-y-2 text-gray-700">
                            <li><i class="fas fa-seedling text-primary-600 w-4"></i> <b>Nutrition (Stunting):</b> Still relatively high at 32.7%.</li>
                            <li><i class="fas fa-hand-holding-water text-primary-600 w-4"></i> <b>Water & Sanitation:</b> Needs improved communal sanitation in remote areas.</li>
                            <li><i class="fas fa-wheelchair text-primary-600 w-4"></i> <b>Disability:</b> Focus on empowering vulnerable groups.</li>
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
        }

        closeMapModal.addEventListener('click', closeModal);

        // Close when clicking outside modal content
        mapModal.addEventListener('click', (e) => {
            if (e.target === mapModal) {
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
});
