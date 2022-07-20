import { AUTO_STYLE } from '@angular/animations';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DestinasiService {

  public search = new BehaviorSubject<string>("");

  constructor() { }

  // detail
  datafoto = [
    {
      id: 1,
      judul: "Ngarsopuro Solo",
      img: "../../../assets/foto/w644.jpg",
      img1: "../../../assets/foto/ng1.jpg",
      img2: "../../../assets/foto/ng3.jpg",
      jam: "Hanya buka hari sabtu dari jam 18.00 – 22.45",
      tiket: "Gratis",
      lokasi: "Jl. Diponegoro, Keprabon, Kec. Banjarsari, Kota Surakarta, Jawa Tengah 57131",
      info: "Kota Surakarta atau Solo terkenal dengan warisan budaya adat-jawa yang sangat kental. Adanya Istana Mangkunegaran di Surakarta, semakin mempertegas kedudukanya sebagai kota budaya. Namun yang menjadi pokok bahasan artikel ini adalah kawasan di depan Istana Mangkunegaran yaitu Ngarsopuro Night Market Pasar ini berada di Jalan Diponegoro.Dimana dulunya merupakan area yang tidak tertata.Jalanan menjadi semrawut karena kios barang antik dan toko elektronik yang tumpang tindih.Namun sekarang kawasan ini sudah lebih bagus dan berkembang.Berbeda dengan pasar-pasar umumnya, pasar ini mulai beroperasi dari sore hingga malam. Dan juga hanya buka satu kali dalam seminggu yaitu dihari Sabtu."
    },
    {
      id: 2,
      judul: "Lawang Sewu",
      img: "../../../assets/foto/ls.jpg",
      img1: "../../../assets/foto/ls1.jpg",
      img2: "../../../assets/foto/ls2.jpg",
      jam: "Weekday 07.00-17.00, Weekend 07.00-21.00",
      tiket: "Dewasa Rp 20.000, Anak-Anak Rp 10.000, Wisatawan Mancanegara Rp 30.000",
      lokasi: "Jl. Pemuda, Sekayu, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50132",
      info: "Lawang Sewu adalah gedung bersejarah milik PT Kereta Api Indonesia (Persero) yang awalnya digunakan sebagai Kantor Pusat perusahaan kereta api swasta Nederlandsch-Indische Spoorweg Maatschappij (NISM). Gedung Lawang Sewu dibangun secara bertahap di atas lahan seluas 18.232 m2. Bangunan utama dimulai pada 27 Februari 1904 dan selesai pada Juli 1907. Sedangkan bangunan tambahan dibangun sekitar tahun 1916 dan selesai tahun 1918.Selain menjadi tempat wisata sejarah, Gedung Lawang Sewu juga dapat disewa untuk kegiatan Pameran,Ruang Pertemuan,Pemotretan,Shooting, Pesta Pernikahan, Festival, Bazar, Pentas Seni, Workshop, dll.Sedangkan setiap akhir pekan atau hari libur dihadirkan pula live music."
    },
    {
      id: 3,
      judul: "Taman Karimunjawa",
      img: "../../../assets/foto/kj2.jpg",
      img1: "../../../assets/foto/kj1.jpg",
      img2: "../../../assets/foto/kj.jpg",
      jam: "24 jam",
      tiket: "Wisatawan lokal Rp. 5.000 – Rp. 10.000, Wisatawan Mancanegara Rp 150.000 - Rp 225.000",
      lokasi: "Karimunjawa, Kabupaten Jepara, Jawa Tengah",
      info: "Taman Nasional Karimun Jawa adalah kawasan wisata yang berupa kepulauan. Terletak di Laut Jawa, dan menjadi Obyek wisata di Jawa Tengah, berjarak kurang lebih 83 km dari kota Jepara menuju arah utara. Luas daratannya 7.120 ha dengan jumlah pulau 27 buah. Namun, yang berpenghuni hanya 5 pulau. Kelima pulau tersebut adalah Karimunjawa, Kemujan, Parang, Nyamuk dan Genting. Dengan penduduk sebagian besar adalah nelayan.Dari segi flora, ada tiga tumbuhan yang dilindungi di kawasan ini, yaitu Pohon Dewandaru, Pohon Kalimasada, dan Pohon Stigi. Sedangkan dari segi fauna di Taman Nasional Karimunjawa terrdapat sejumlah hewan baik yang hidup di daratan maupun di air. Fauna daratan berupa rusa, trenggiling, landak, ular, bangau tongn-tong, elang laut dada putih, hingga wedi-wedi. Sedangkan fauna air di kawasan ini berupa terumbu karang, spons, karang lunak, akar bahar, kerang merah, penyu hijau dan sisik, hingga ikan hias."
    },
    {
      id: 4,
      judul: "Candi Borobudur",
      img: "../../../assets/foto/cb2.jpg",
      img1: "../../../assets/foto/cb.jpg",
      img2: "../../../assets/foto/cb3.jpg",
      jam: "06.30 - 16.30",
      tiket: "Rp25.000 - Rp75.000",
      lokasi: "Jl. Badrawati, Kw. Candi Borobudur, Borobudur, Magelang, Jawa Tengah, Indonesia, 56553",
      info: "Candi Borobudur didirikan secara bertahap oleh tenaga kerja sukarela yang bergotong royong demi kebaktian ajaran agama pada masa pemerintahan Dinasti Syailendra antara tahun 750-842 M.Candi ini merupakan bukti sejarah perkembangan agama Buddha di Indonesia. Hal ini dapat dilihat dari pahatan relief, susunan patung, maupun figur-figur Buddha yang diarcakan.Hingga saat ini belum diketahui pasti alasan mengapa candi- candi di satuan ruang geografis Borobudur ditinggalkan.Pada tanggal 23 Februari 1983, Candi Borobudur selesai dipugar dan resmi dibuka oleh Presiden Soeharto untuk dikunjungi masyarakat luas. Kemudian pada tahun 1991,Candi Borobudur yang terletak di Kota Magelang ditetapkan UNESCO sebagai Warisan Budaya Dunia yang diberi nama Borobudur Temple Compounds."
    },
    {
      id: 5,
      judul: "Gunung Merbabu",
      img: "../../../assets/foto/mb.jpg",
      img1: "../../../assets/foto/mb1.jpg",
      img2: "../../../assets/foto/mb2.jpg",
      jam: "24 jam",
      tiket: "Rp15.000",
      lokasi: "Suroteleng, Kec. Selo, Kabupaten Boyolali, Jawa Tengah",
      info: "Gunung Merbabu secara administrasi terletak di tiga kabupaten yakni Kabupaten Semarang, Kabupaten Boyolali, dan Kabupaten Magelang. Pada zaman dulu gunung ini dikenal dengan nama Gunung Pamarihan atau Gunung Damalung.Nama Merbabu sendiri baru muncul di catatan milik Belanda yang secara bahasa terdiri dari kata Meru atau Gunung dan Abu.Gunung Merbabu pernah beberapa kali meletus yakni pada abad ke 15 dan juga abad ke 17.Tinggi gunung ini mencapai kisaran 3145 mdpl dengan suhu rata-rata sekitar 20-10 derajat Celcius. Gunung ini memiliki beberapa puncak yakni puncak syarif, puncak triangulasi, dan kenteng songo yang hanya berjarak sekitar 30 menit."
    },
    {
      id: 6,
      judul: "Kawah Sikidang",
      img: "../../../assets/foto/ks.jpg",
      img1: "../../../assets/foto/ks1.jpg",
      img2: "../../../assets/foto/ks2.jpg",
      jam: "07.00 - 15.00",
      tiket: "Rp 20.000",
      lokasi: "Bakal Buntu, Dieng Kulon, Batur, Banjarnegara, Jawa Tengah, Indonesia, 53456",
      info: "Kawah Sikidang merupakan lapangan perkawahan di Dataran Tinggi Dieng yang berada paling dekat dengan kawasan percandian Dieng, mudah dicapai, dan dinikmati karena terletak di tanah datar, sehingga juga menjadi kawah yang paling dikunjungi wisatawan.Kawah ini berada di Desa Dieng Kulon,Kabupaten Banjarnegara.Kawah sikidang ini merupakan kawah aktif tersbesar yang ada di Dataran Tinggi Dieng.Kawah ini memiliki satu telaga air panas kecil dengan air yang selalu mendidih dan lapangan celah gas dengan titik- titik yang selalu berpindah - pindah di dalam suatu lapangan seluas lebih kurang 4 hektare.Dari karakter inilah namanya berasal, karena penduduk setempat melihatnya seperti kijang(kidang dalam bahasa Jawa) yang melompat-lompat. Dari sisi geologi,kawah ini tergolong muda.Jika pengunjung ingin mengunjungi Candi Arjuna,pengunjung tanpa harus membeli tiket lagi karena 1 tiket itu bisa digunakan di 2 tempat wisata."
    },
    {
      id: 7,
      judul: "Museum Kereta Api",
      img: "../../../assets/foto/mka2.jpg",
      img1: "../../../assets/foto/mka1.jpg",
      img2: "../../../assets/foto/mka.jpg",
      jam: "08.00 - 16.00",
      tiket: "Usia 3-12th Rp 10.000, Pelajar Rp 10.000, Mahasiswa Rp 20.000, Dewasa Rp 20.000, Wisatawan Mancanegara Rp 30.000.",
      lokasi: "Jl. Stasiun No.1, Panjang Kidul, Panjang, Kec. Ambarawa, Kabupaten Semarang, Jawa Tengah",
      info: "Museum Kereta Api Indonesia (Indonesian Railway Museum) awalnya adalah sebuah stasiun yang bernama Stasiun Willem I. Stasiun ini dibangun oleh Nedherlandsch Indische Spoorweg Maatschappij (NISM) yang diresmikan pada tanggal 21 Mei 1873 bersamaan pembukaan lintas  Kedungjati-Ambarawa.Ambarawa dapat dikatakan kota militer, keberadaan kota ini menyokong kota garnizum Magelang guna mengontrol daerah pedalaman.Pada tahun 1873 dibangun jaringan kereta api di Ambarawa oleh perusahaan kereta api swasta Nedherlandsch Indische Spoorweg Maatschappij(NISM).Pembangunan tersebut merupakan syarat yang harus dipenuhi NISM guna mendapatkan ijin konsensi pembangunan jalur kereta api pertama Semarang- Vorstenlanden(Solo - Yogyakarta),sepanjang 37 km guna keperluan militer."
    },
    {
      id: 8,
      judul: "Baturaden",
      img: "../../../assets/foto/bt.jpg",
      img1: "../../../assets/foto/bt1.jpg",
      img2: "../../../assets/foto/bt2.jpg",
      jam: "07.00 - 15.00",
      tiket: "Weekend Rp 25.000, Weekday Rp 20.000",
      lokasi: "Kec. Baturaden,Kabupaten Banyumas,Jawa Tengah",
      info: "Salah satu obyek wisata yang sayang untuk dilewatkan adalah Lokawisata Baturraden.Pengunjung yang datang ke sini biasanya ingin menikmati udara sejuk dan suguhan keindahan lereng Gunung Slamet.Selain beragam aktivitas dan wahana yang tidak kalah seru.Kolam renang, sepeda air, air mancur, serta beberapa aktvitas lainnya.Di lokawisata Baturraden ini juga terdapat tempat berkemah, atau bumi perkemahan yang dilengkapi dengan alat- alat out bond yang menjadi sarana dan prasarana disana.Bahkan lokasi ini pernah menjadi tempat Jambore Nasional Pramuka se-Indonesia pada tahun 2001."
    },

  ]

  akomodasi = [
    {
      id: 1,
      judul: "Hotel",
      img: "../../../assets/foto/hotel.jpg",
      detail1: "Lorin Solo Hotel",
      detail2: "Gumaya Tower Hotel Semarang",
      detail3: "Alila Solo",
      detail4: "The Royal Surakarta Heritage Solo MGallery Collection",
      detail5: "Puri Asri Hotel,Plataran Heritage Borobudur Hotel",
      detail6: "Louis Kienne Hotel Pandanan",
      detail7: "COR Hotel Purwokerto",
      detail8: "Java Heritage",
      detail9: "Aston Inn Pandanaran",
      detail10: "Grand Amira Hotel",
      alamat1: "Jl. Adi Sucipto No.47, Kenaiban, Blulukan, Kec. Colomadu, Kabupaten Karanganyar, Jawa Tengah 57174•(0271) 724500",
      idr1: "Rp 485.000",
      alamat2: "Gumaya Tower Hotel, Jl. Gajahmada No.59-61, Kembangsari, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50134",
      idr2: "Rp 1.250.000",
      alamat3: "Slamet Riyadi St No.562, Jajar, Laweyan, Surakarta City, Central Java 57144",
      idr3: "Rp 1.416.015",
      alamat4: "Jl Slamet Riyadi No 6, Pasar Kliwon, Solo, Jawa Tengah, Indonesia, 57111",
      idr4: "Rp 544.500",
      alamat5: "Dusun Kretek, Karangrejo, Borobudur, Magelang Regency, Central Java 56553,Tlp(0293) 3301888",
      idr5: "Rp 1.131.900",
      alamat6: "Jl. Ahmad Yani No.137, Pleburan, Kec. Semarang Sel., Kota Semarang, Jawa Tengah 50241•(024) 8319888",
      idr6: "Rp 500.000",
      alamat7: "Jl. Jend. Sudirman No.508 - 511, Kauman Lama, Purwokerto Lor, Kec. Purwokerto Tim., Kabupaten Banyumas, Jawa Tengah 53141",
      idr7: "Rp 345.600",
      alamat8: "Jl. Dr. Angka No.71, Karangkobar, Sokanegara, Kec. Purwokerto Tim., Kabupaten Banyumas, Jawa Tengah 53115",
      idr8: "Rp 870.000",
      alamat9: "Jl. Pandanaran No.40, Pekunden, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50134,Telp(024) 76442237",
      idr9: "Rp 1,055,700",
      alamat10: "Jl. Veteran No.18, Ps. Kliwon, Kec. Ps. Kliwon, Kota Surakarta, Jawa Tengah 57118,Telp (0271) 632323",
      idr10: "Rp 250.000",

    },
    {
      id: 2,
      judul: "Apartemen",
      img: "../../../assets/foto/apartemen.jpg",
      detail1: "Star Apartment",
      detail2: "Simpang Lima Residence",
      detail3: "Candiland Apartment",
      detail4: "Lodie Apartment Simpang Lima Semarang",
      detail5: "Marina Seaview Apartement",
      detail6: "Apartemen Paltrow City Pedalangan Banyumanik Semarang",
      detail7: "Apartement MG Suites",
      detail8: "Apartemen di Solo Urbana",
      detail9: "Sun Apartment Semarang",
      detail10: "Apartment WR Louis Kienne",
      alamat1: "Jl. kanguru Bar. I No.9, Gayamsari, Kec. Gayamsari, Kota Semarang, Jawa Tengah 50161",
      idr1: "",
      alamat2: "Jl. Kh Ahmad Dahlan No.6B, Pekunden, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50134,Telp (024) 8453949",
      idr2: "",
      alamat3: "Candiland Apartment, Jl. Diponegoro No.24B, Tegalsari, Candisari, Semarang City, Central Java 50614,Telp 0811 - 2777 - 987",
      idr3: "",
      alamat4: "Jl. Ahmad Yani No.137, Pleburan, Kec. Semarang Sel., Kota Semarang, Jawa Tengah 50241,Telp: (024) 8319888",
      idr4: "",
      alamat5: "9MP2+Q64, Unnamed Road, Tegalsambi, Tahunan, Jepara Regency, Central Java 59427,Telp 0812 - 1133 - 2060",
      idr5: "",
      alamat6: "WCVJ+PFW, Pedalangan, Banyumanik, Semarang City, Central Java 50268,Telp (024) 8411441",
      idr6: "",
      alamat7: "Jl. Petempen Jl. Gajahmada No.294, Kembangsari, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50133,Telp (024) 33001888",
      idr7: "",
      alamat8: "Jl. Mojo, Gulon, Mojosongo, Kec. Jebres, Kota Surakarta, Jawa Tengah 57127,Telp 0822-1111-9800",
      idr8: "",
      alamat9: "Gd. Horison Ultima Semarang (Apartment, Jl. MT. Haryono No.972, Lamper Kidul, Kec. Semarang Sel., Kota Semarang, Jawa Tengah 50249,Telp 0857-9979-9127",
      idr9: "",
      alamat10: " Jl. Ahmad Yani No.137, Pleburan, Kec. Semarang Sel., Kota Semarang, Jawa Tengah 50241,Telp (024) 8319888",
      idr10: "",
    },
    {
      id: 3,
      judul: "Vila",
      img: "../../../assets/foto/vila.jpg",
      detail1: "Balkondes Bumiharjo (Kampung Dolanan)",
      detail2: "Villa Aquin,Villa Petra Ungaran",
      detail3: "Jawa Dwipa Villa wonosobo",
      detail4: "Kasuari Exotic Resort Magelang",
      detail5: "DeepSky Villa,New Cottage Asri",
      detail6: "Sunrise View Village",
      detail7: "Kura Kura Resort",
      detail8: "Villa Tengkek Karimunjawa",
      detail9: "Bunga Jabe",
      detail10: "Mangrove Inn",
      alamat1: " Sigug, Bumiharjo, Borobudur, Magelang,Telp 0856-4339-6075",
      idr1: "",
      alamat2: "Jl. Nusa Indah No.18, Ungaran, Duren, Kec. Ungaran Bar., Kabupaten Semarang, Jawa Tengah 50614,Telp (024) 6925005",
      idr2: "",
      alamat3: "Jl. Lurah Sudarto, Limbangan, Mudal, Kec. Mojotengah, Kabupaten Wonosobo, Jawa Tengah 56361,Telp 0813-2577-7172",
      idr3: "",
      alamat4: "Sawah Jurang, RT.1/RW.7, Trasan, Kec. Bandongan, Kabupaten Magelang, Jawa Tengah 56151,Telp 0822-4741-4243",
      idr4: "",
      alamat5: "Jl. I. J. Kasimo, Karimunjawa, Kabupaten Jepara, Jawa Tengah 59455,Telp 0821-5832-8128",
      idr5: "",
      alamat6: "Jl. Kapuran R RT 4 RW 01, Karimun Jawa 59455 Indonesia",
      idr6: "",
      alamat7: "Jl. Puspogiwang Dalam I No.13, Gisikdrono, Kec. Semarang Barat, Kota Semarang, Jawa Tengah 50149,Telp (024) 76632510",
      idr7: "",
      alamat8: " 6F2H+76H, Kemujan, Karimunjawa, Jelamun, Central Java 59455,Telp 0822 - 4302 - 0233",
      idr8: "",
      alamat9: "Jl. Soegijapranata, Kemujan, Karimunjawa, Kabupaten Jepara, Jawa Tengah 59455,Telp 0853-2648-0858",
      idr9: "",
      alamat10: "4CMM+842, Karimunjawa, Jepara Regency, Central Java",
      idr10: "",
    },
    {
      id: 4,
      judul: "Camp",
      img: "../../../assets/foto/camp.jpg",
      detail1: "Sunrise Camp Gunung Prau",
      detail2: "Camp Area Umbul Bengkok",
      detail3: "Wana Campsite Nglimut",
      detail4: "Mawar Camp - Gunung Ungaran",
      detail5: "Tlogo Dringo,Camp Ground Promasan",
      detail6: "Bumi Perkemahan Sekipan",
      detail7: "Camping Ground Pinus Cunthel",
      detail8: "Camp Ground Sikunir",
      detail9: "Bumi Perkemahan Kajar",
      detail10: "Bumi Perkemahan Candra Birawa Gunung Pati",
      alamat1: "Bakulan, Dieng, Kejajar, Wonosobo Regency, Central Java,Telp 0813-2505-2088",
      idr1: "",
      alamat2: " Desa, Dusun II, Karangsalam, Kec. Baturaden, Kabupaten Banyumas, Jawa Tengah 53151,Telp 0813-2731-2233",
      idr2: "",
      alamat3: "Nglimut, Gonoharjo, Limbangan, Kendal Regency, Central Java 51383,Telp  0877-0031-8687",
      idr3: "",
      alamat4: "Jl. Goa Jepang No.KM.5, Kluwihan, Sidomukti, Bandungan, Kabupaten Semarang, Jawa Tengah 50661,Telp  0813-2887-3541",
      idr4: "",
      alamat5: "R9H2+CQ6, Hutan, Kec. Ungaran Bar., Kabupaten Semarang, Jawa Tengah 51383",
      idr5: "",
      alamat6: "84GW+XM5 Bumi Perkemahan Sekipan, Area Hutan, Kalisoro, Kec. Tawangmangu, Kabupaten Karanganyar, Jawa Tengah 57792",
      idr6: "",
      alamat7: "Unnamed Road, Sundel, Kopeng, Kec. Getasan, Kabupaten Semarang, Jawa Tengah 50774,Telp 0856-4185-5585",
      idr7: "",
      alamat8: "Desa Sembungan, Kecamatan Kejajar, Kabupaten Wonosobo Regency, Provinsi Jawa Tengah. Berjarak sekitar 22,6 Km dari pusat kota wonosobo",
      idr8: "",
      alamat9: "8VCV+F29, Dersaya, Kajar, Kec. Dawe, Kabupaten Kudus, Jawa Tengah 59353",
      idr9: "",
      alamat10: "Jl. Candrabirawa, Sumurrejo, Karanggeneng, Kota Semarang, Jawa Tengah 50226,Telp (024) 6921185",
      idr10: "",
    },
  ]

  kuliner = [
    {
      id: 1,
      judul: "Es Dawet Ayu",
      img: "../../../assets/foto/dawet.jpg",
      detail: "Dawet ayu adalah minuman khas dari Kabupaten Banjarnegara, minuman ini memiliki ciri tersendiri salah satunya aroma daun pandan yang kuat, dari daun pandan asli,sehingga membuat warna cendolnya berwarna hijau. Selain daun pandan, dawet ayu dibuat menggunakan tepung aren,dan sebagai pemanisnya biasanya menggunakan gula Jawa yang dicairkan.Jika akan menikmatinya cukup mudah dicari,dan harganyapun terjangkau mulai dari Rp 5000 - Rp 8000 per gelas"
    },
    {
      id: 2,
      judul: "Lumpia",
      img: "../../../assets/foto/lumpia.jpg",
      detail: "Lumpia menjadi makanan khas Semarang bermula dari perkawinan kuliner Tiongkok dan Jawa sejak ratusan lalu. Sajian bercitarasa manis nan gurih berisi rebung, ayam, udang dan digulung kulit tipis berbahan dasar terigu ini menghiasi di setiap sudut ibu kota Provinsi Jawa Tengah, Semarang.Jajanan ini sangat digemari karena banyak dijual di warung pinggir jalan dan rumah makan hingga menjadi oleh-oleh khas kota Semarang.Untuk harganya sendiri Rp 18.000 perBok"
    },
    {
      id: 6,
      judul: "Garang Asem",
      img: "../../../assets/foto/gasem.jpg",
      detail: "Garang asem adalah masakan khas Pekalongan,Jawa Tengah yang rasanya asam segar karena menggunakan belimbing wuluh. Selain belimbing wuluh, ciri khas garang asem juga menggunakan santan dan cara membuatnya dibungkus daun pisang seperti botok. Namun, kalau sedang mengurangi santan kamu bisa tidak menggunakannya. Selain itu, kamu bisa membuat garang asem tanpa daun pisang. Sehingga cara masaknya bukan dikukus melainkan direbus.Untuk harga normal satu porsi garang asem telor sekitar Rp 23.000 dan garang asam biasa dibandrol Rp 18.000."
    },
    {
      id: 9,
      judul: "Skoteng",
      img: "../../../assets/foto/skoteng.webp",
      detail: "Sekoteng adalah minuman khas Jawa Tengah yang dibuat dari air jahe yang biasa dihidangkan dalam keadaan panas dan dikonsumsi pada malam hari. Bahan yang biasanya ditambahkan ke dalam sekoteng adalah kacang hijau, kacang tanah, pacar cina, dan potongan roti tawar.Sekoteng sangat baik dikonsumsi oleh semua kalangan.Dengan seduhan jahe yang memiliki khasiat luar biasa bagi kesehatan,sekoteng bahkan bisa menetralkan tubuh setelah mengonsumsi gorengan."
    },
    {
      id: 4,
      judul: "Nasi Grombyang",
      img: "../../../assets/foto/grombyang.jpg",
      detail: "Nasi grombyang adalah sejenis nasi campur yang merupakan makanan khas dari masyarakat Pemalang,Jawa Tengah.Nama makanan ini berasal dari bentuk penyajiannya,yaitu antara isi dan kuah lebih banyak kuahnya sehingga kelihatan bergoyang-goyang.Ramuan nasi grombyang terdiri dari nasi, irisan daging sapi dan kuah,disajikan dalam mangkuk kecil.Ciri khas lainnya dari nasi grombyang terletak pada tempat jualannya yang berupa kuali besar,tempat nasi ditutupi dengan kain merah,diserta penerangan remang-remang lampu templok."
    },
    {
      id: 5,
      judul: "Mie Ongklok",
      img: "../../../assets/foto/ongklok.jpg",
      detail: "Mi (atau bakmi) ongklok adalah mi rebus khas kota Wonosobo dan sekitarnya. Mi rebus ini dibuat dengan menggunakan kol, potongan daun kucai, dan kuah kental berkanji yang disebut loh. Mi ini banyak dijajakan di berbagai warung, rumah makan, maupun dijajakan keliling memakai gerobak di kota tersebut.Menurut cerita masyrakat sekitar, sejarah mie ongklok berasal dari pencipta resep makanan lezat ini yang bernama Pak Muhadi. Yaitu seorang juru masak sebuah warung makan bakmi.Untuk harganya sendiri kisaran Rp 10.000 - Rp 15.000."
    },
    {
      id: 3,
      judul: "Mendoan",
      img: "../../../assets/foto/mendoan.jpg",
      detail: "Mendoan adalah makanan sejenis gorengan yang berasal dari Keresidenan Banyumas,Jawa Tengah.Kata mendoan dianggap berasal dari Bahasa Banyumasan,yaitu mendo yang berarti setengah matang atau lembek.Mendoan yang artinya memasak dengan minyak panas yang banyak dengan cepat sehingga masakan tidak benar-benar matang.Bahan makanan yang paling sering dibuat menjadi berbagai Mendoan adalah tempe dan tahu.Lebih enak jika membuat tempe mendoan dengan jenis tempe khusus untuk mendoan,bentuknya sangat tipis."
    },
    {
      id: 7,
      judul: "Serabi",
      img: "../../../assets/foto/serabi.jpg",
      detail: "Serabi Solo adalah sebuah makanan ringan yang berasal dari Solo, Jawa Tengah.Makanan ini terbuat dari tepung beras yang dicampur dengan santan dan digoreng di atas arang mirip pancake (roti loyang) atau pancake.Srabi adalah jajanan khas dari Solo yang terbuat dari santan kelapa dicampur dengan sedikit tepung, yang menjadikannya bercitarasa gurih.Biasa juga diberi taburan berupa potongan pisang, nangka atau bahkan meses dan keju bila suka.Srabi yang terkenal berasal dari daerah Notokusuman,yang sering disingkat menjadi Notosuman(Srabi Notosuman)."
    },
    {
      id: 8,
      judul: "Wedang Ronde",
      img: "../../../assets/foto/ronde.jpg",
      detail: "wedang ronde pertama kali mulai populer di daerah Jawa tengah seperti di kota Solo dan Salatiga. Sebutan wedang ronde berasal dari bahasa Jawa. Wedang berarti minuman dan ronde berarti adonan bulat yang biasa dibuat dari tepung ketan.Wedang ronde cocok dinikmati pada sore atau malam hari. Karena berbahan dasar jahe, wedang ronde memiliki cita rasa yang menghangatkan tenggorokan,dan untuk harganyapun terjangkau mulai dari Rp 5000 - Rp 10.000 perGelas"
    },
    {
      id: 10,
      judul: "Buntil",
      img: "../../../assets/foto/buntil.jpg",
      detail: "Buntil adalah makanan tradisional khas jawa yang berbahan dasar parutan kelapa di campurkan dengan ikan teri beserta bumbu rempah istimewa dan dibungkus daun talas/pepaya pilihan yang kemudian direbus kedalam santan.Kendati terlihat sederhana, pembuatan buntil sebetulnya memakan waktu yang lumayan panjang. Sebelum dibungkus daun, isian buntil terlebih dahulu sudah dimasak. Setelah dimasak, buntil juga masih direbus lagi."
    },
  ]
  pantai = [
    {
      id: 1,
      judul: "Pantai Nampu, Wonogiri",
      img1: "../../../assets/kategori/pantai/pn1.jpg",
    },
    {
      id: 2,
      judul: "Pantai Menganti, Kebumen",
      img1: "../../../assets/kategori/pantai/mk1.jpg",
    },
    {
      id: 3,
      judul: "Pantai Widuri, Pemalang",
      img1: "../../../assets/kategori/pantai/pw1.jpg",
    },
    {
      id: 4,
      judul: "Pantai Dewaruci Jatimalang, Purworejo",
      img1: "../../../assets/kategori/pantai/pd1.jpg",
    },
    {
      id: 5,
      judul: "Pantai Alam Indah, Tegal",
      img1: "../../../assets/kategori/pantai/pa1.jpg",
    },
    {
      id: 6,
      judul: "Pantai Marina, Semarang",
      img1: "../../../assets/kategori/pantai/pm2.jpg"
    },
  ]
  gunung = [
    {
      id: 1,
      judul: " Gunung Sumbing, ",
      img1: "../../../assets/kategori/gunung/sumbing.jpg",
    },
    {
      id: 2,
      judul: "Gunung Merbabu, ",
      img1: "../../../assets/kategori/gunung/gm.jpg",
    },
    {
      id: 3,
      judul: "Gunung Sindoro, ",
      img1: "../../../assets/kategori/gunung/gs.jpg",
    },
    {
      id: 4,
      judul: "Gunung  Andong, ",
      img1: "../../../assets/kategori/gunung/ga.jpg",
    },
    {
      id: 5,
      judul: "Gunung Prau, ",
      img1: "../../../assets/kategori/gunung/gp.jpg",
    },
    {
      id: 6,
      judul: "Gunung Lawu, ",
      img1: "../../../assets/kategori/gunung/gl.jpg"
    },
  ]


  candi = [
    {
      id: 1,
      judul: "Candi Borobudur",
      img1: "../../../assets/kategori/candi/cb.jpg",
    },
    {
      id: 2,
      judul: "Candi Mendut",
      img1: "../../../assets/kategori/candi/cm.jpg",
    },
    {
      id: 3,
      judul: "Candi Plaosan",
      img1: "../../../assets/kategori/candi/cp.jpg",
    },
    {
      id: 4,
      judul: "Candi Prambanan",
      img1: "../../../assets/kategori/candi/cpr.jpg",
    },
    {
      id: 5,
      judul: "Candi Sewu",
      img1: "../../../assets/kategori/candi/cs.jpg",
    },
    {
      id: 6,
      judul: "Candi Arjuna",
      img1: "../../../assets/kategori/candi/ca.jpg"
    },
  ]

  kategori = [
    {
      id: 1,
      judul: "Pantai Nampu, Wonogiri",
      img: "../../../assets/kategori/pantai/pn1.jpg",
      kategori: "pantai"
    },
    {
      id: 2,
      judul: "Pantai Menganti, Kebumen",
      img: "../../../assets/kategori/pantai/mk1.jpg",
      kategori: "pantai"
    },
    {
      id: 3,
      judul: "Pantai Widuri, Pemalang",
      img: "../../../assets/kategori/pantai/pw1.jpg",
      kategori: "pantai"
    },
    {
      id: 4,
      judul: "Pantai Dewaruci Jatimalang, Purworejo",
      img: "../../../assets/kategori/pantai/pd1.jpg",
      kategori: "pantai"
    },
    {
      id: 5,
      judul: "Pantai Alam Indah, Tegal",
      img: "../../../assets/kategori/pantai/pa1.jpg",
      kategori: "pantai"
    },
    {
      id: 6,
      judul: "Pantai Marina, Semarang",
      img: "../../../assets/kategori/pantai/pm2.jpg",
      kategori: "pantai"
    },
    {
      id: 7,
      judul: " Gunung Sumbing, ",
      img: "../../../assets/kategori/gunung/sumbing.jpg",
      kategori: "gunung"
    },
    {
      id: 8,
      judul: "Gunung Merbabu, ",
      img: "../../../assets/kategori/gunung/gm.jpg",
      kategori: "gunung"
    },
    {
      id: 9,
      judul: "Gunung Sindoro, ",
      img: "../../../assets/kategori/gunung/gs.jpg",
      kategori: "gunung"
    },
    {
      id: 10,
      judul: "Gunung  Andong, ",
      img: "../../../assets/kategori/gunung/ga.jpg",
      kategori: "gunung"
    },
    {
      id: 11,
      judul: "Gunung Prau, ",
      img: "../../../assets/kategori/gunung/gp.jpg",
      kategori: "gunung"
    },
    {
      id: 12,
      judul: "Gunung Lawu, ",
      img: "../../../assets/kategori/gunung/gl.jpg",
      kategori: "gunung"
    },
    {
      id: 13,
      judul: "Candi Borobudur",
      img: "../../../assets/kategori/candi/cb.jpg",
      kategori: "candi"
    },
    {
      id: 14,
      judul: "Candi Mendut",
      img: "../../../assets/kategori/candi/cm.jpg",
      kategori: "candi"
    },
    {
      id: 15,
      judul: "Candi Plaosan",
      img: "../../../assets/kategori/candi/cp.jpg",
      kategori: "candi"
    },
    {
      id: 16,
      judul: "Candi Prambanan",
      img: "../../../assets/kategori/candi/cpr.jpg",
      kategori: "candi"
    },
    {
      id: 17,
      judul: "Candi Sewu",
      img: "../../../assets/kategori/candi/cs.jpg",
      kategori: "candi"
    },
    {
      id: 18,
      judul: "Candi Arjuna",
      img: "../../../assets/kategori/candi/ca.jpg",
      kategori: "candi"
    },
  ]

}
