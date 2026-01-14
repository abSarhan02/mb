// Azkar statici per mattina e sera
const azkarData = {
    morning: [
  {
    arabicContent: "اللّهُ لاَ إِلٰهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ.",
    transliteration: "Allahu la ilaha illa huwa, al-hayyu al-qayyum, la ta’khudhuhu sinatun wa la nawm, lahu ma fi as-samawati wa ma fi al-ard, man dha allathee yashfa’u ‘indahu illa bi-idhnihi, ya’lamu ma bayna aydihim wa ma khalfahum, wa la yuhituna bishay-in min ‘ilmihi illa bima sha’a, wasi’a kursiyyuhu as-samawati wa al-ard, wa la ya’uduhu hifzuhuma wa huwa al-‘aliyyu al-‘azim.",
    maxNumber: 1,
    type: "morning"
  },
  {
    arabicContent: "قُلْ هُوَ ٱللَّهُ أَحَدٌ ٱللَّهُ ٱلصَّمَدُ لَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ.",
    transliteration: "Qul huwa Allahu ahad, Allahu assamad, lam yalid wa lam yulad, wa lam yakun lahu kufuwan ahad.",
    maxNumber: 3,
    type: "morning"
  },
  {
    arabicContent: "قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ مِن شَرِّ مَا خَلَقَ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ وَمِن شَرِّ ٱلنَّفَّـٰثَـٰتِ فِى ٱلْعُقَدِ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ.",
    transliteration: "Qul a'udhu birabbi al-falaq, min sharri ma khalaq, wa min sharri ghasiqin idha waqab, wa min sharri an-naffathati fi al-'uqad, wa min sharri hasidin idha hasad.",
    maxNumber: 3,
    type: "morning"
  },
  {
    arabicContent: "قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ مَلِكِ ٱلنَّاسِ إِلَـٰهِ ٱلنَّاسِ مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ.",
    transliteration: "Qul a'udhu birabbi an-nas, maliki an-nas, ilahi an-nas, min sharri al-waswas al-khannas, allathee yuwaswisu fi suduri an-nas, mina al-jinnati wa an-nas.",
    maxNumber: 3,
    type: "morning"
  },
  {
    arabicContent: "اللهم أنت ربي لا إله إلا أنت، خلقتني وأنا عبدك، وأنا على عهدك ووعدك ما استطعت، أعوذ بك من شر ما صنعت، أبوء لك بنعمتك علي، وأبوء بذنبي فاغفر لي، فإنه لا يغفر الذنوب إلا أنت.",
    transliteration: "Allahumma anta rabbi, la ilaha illa anta, khalaqtani wa ana ‘abduka, wa ana ‘ala ‘ahdika wa wa’dika ma istata’tu, a’udhu bika min sharri ma sana’tu, abu’u laka bini’matika ‘alayya, wa abu’u bidhambi faghfirli, fa innahu la yaghfiru adh-dhunuba illa anta.",
    maxNumber: 1,
    type: "morning"
  },
  {
    arabicContent: "اللهم بك أصبحنا، وبك أمسينا، وبك نحيا، وبك نموت، وإليك النشور.",
    transliteration: "Allahumma bika asbahna, wa bika amsayna, wa bika nahya, wa bika namutu, wa ilayka an-nushur.",
    maxNumber: 1,
    type: "morning"
  },
  {
    arabicContent: "اللهم إني أصبحت أشهدك وأشهد حملة عرشك وملائكتك وجميع خلقك أنك أنت الله لا إله إلا أنت، وحدك لا شريك لك، وأن محمداً عبدك ورسولك.",
    transliteration: "Allahumma inni asbahtu ushhiduka wa ushhidu hamalata ‘arshika wa mala’ikatika wa jamee’a khalqika annaka anta Allah la ilaha illa anta wahdaka la shareeka lak, wa anna Muhammadan ‘abduka wa rasuluk.",
    maxNumber: 4,
    type: "morning"
  },
  {
    arabicContent: "حَسْبِيَ اللهُ لاَ إِلٰهَ إِلاَّ هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ.",
    transliteration: "Hasbiya Allahu la ilaha illa huwa ‘alayhi tawakkaltu wa huwa rabbu al-‘arsh al-‘azim.",
    maxNumber: 7,
    type: "morning"
  },
  {
    arabicContent: "بِسْمِ اللهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلاَ فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ.",
    transliteration: "Bismillah alladhi la yadurru ma’asmihi shay’un fi al-ard wa la fi as-sama’ wa huwa as-sami’ al-‘alim.",
    maxNumber: 3,
    type: "morning"
  },
  {
    arabicContent: "رَضِيتُ بِاللهِ رَبًّا وَبِالإِسْلاَمِ دِينًا وَبِمُحَمَّدٍ نَبِيًّا.",
    transliteration: "Radeetu billahi rabban wa bil-islami dinan wa bi-Muhammadin nabiyya.",
    maxNumber: 3,
    type: "morning"
  }
],

evening: [
  {
    arabicContent: "اللّهُ لاَ إِلٰهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ",
    transliteration: "Allahu la ilaha illa huwa, al-hayyu al-qayyum, la ta’khudhuhu sinatun wa la nawm, lahu ma fi as-samawati wa ma fi al-ard, man dha allathee yashfa’u ‘indahu illa bi-idhnihi, ya’lamu ma bayna aydihim wa ma khalfahum, wa la yuhituna bishay-in min ‘ilmihi illa bima sha’a, wasi’a kursiyyuhu as-samawati wa al-ard, wa la ya’uduhu hifzuhuma wa huwa al-‘aliyyu al-‘azim",
    maxNumber: 1,
    type: "Sera"
  },
  {
    arabicContent: "قُلْ هُوَ ٱللَّهُ أَحَدٌ ٱللَّهُ ٱلصَّمَدُ لَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌ",
    transliteration: "Qul huwa Allahu ahad, Allahu assamad, lam yalid wa lam yulad, wa lam yakun lahu kufuwan ahad",
    maxNumber: 3,
    type: "Sera"
  },
  {
    arabicContent: "قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ مِن شَرِّ مَا خَلَقَ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ وَمِن شَرِّ ٱلنَّفَّـٰثَـٰتِ فِى ٱلْعُقَدِ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
    transliteration: "Qul a'udhu birabbi al-falaq, min sharri ma khalaq, wa min sharri ghasiqin idha waqab, wa min sharri an-naffathati fi al-'uqad, wa min sharri hasidin idha hasad",
    maxNumber: 3,
    type: "Sera"
  },
  {
    arabicContent: "قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ مَلِكِ ٱلنَّاسِ إِلَـٰهِ ٱلنَّاسِ مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ",
    transliteration: "Qul a'udhu birabbi an-nas, maliki an-nas, ilahi an-nas, min sharri al-waswas al-khannas, allathee yuwaswisu fi suduri an-nas, mina al-jinnati wa an-nas",
    maxNumber: 3,
    type: "Sera"
  },
  {
    arabicContent: "اللّهُمَّ بِكَ أَمْسَيْنَا وَبِكَ أَصْبَحْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ الْمَصِيرُ",
    transliteration: "Allahumma bika amsayna, wa bika asbahna, wa bika nahya, wa bika namootu, wa ilayka al-maseer",
    maxNumber: 1,
    type: "Sera"
  },
  {
    arabicContent: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ",
    transliteration: "Amsayna wa amsa al-mulku lillah walhamdu lillah, la ilaha illa Allah, wahdahu la sharika lah, lahul-mulku walahul-hamd, wahuwa 'ala kulli shay'in qadeer. Rabbi as'aluka khayra ma fi hadhihi al-laylah wa khayra ma ba'daha, wa a'udhu bika min sharri ma fi hadhihi al-laylah wa sharri ma ba'daha. Rabbi a'udhu bika minal-kasali wa su'il-kibar. Rabbi a'udhu bika min 'adhabin fi al-nar wa 'adhabin fi al-qabr",
    maxNumber: 1,
    type: "Sera"
  },
  {
    arabicContent: "اللّهُمَّ إِنِّي أَمْسَيْتُ أُشْهِدُكَ وَأُشْهِدُ حَمَلَةَ عَرْشِكَ وَمَلَائِكَتَكَ وَجَمِيعَ خَلْقِكَ أَنَّكَ أَنْتَ اللَّهُ لَا إِلَهَ إِلَّا أَنْتَ وَحْدَكَ لَا شَرِيكَ لَكَ وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُولُكَ",
    transliteration: "Allahumma inni amsaytu ushhiduka wa ushhidu hamalata 'arshika wa mala'ikatika wa jamee'a khalqika annaka anta Allah la ilaha illa anta wahdaka la sharika lak, wa anna Muhammadan 'abduka wa rasuluk",
    maxNumber: 4,
    type: "Sera"
  },
  {
    arabicContent: "اللّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا وَأَعُوذُ بِكَ مِنْ شَرِّ هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا",
    transliteration: "Allahumma inni as'aluka khayra hadhihi al-laylah wa khayra ma ba'daha, wa a'udhu bika min sharri hadhihi al-laylah wa sharri ma ba'daha",
    maxNumber: 1,
    type: "Sera"
  },
  {
    arabicContent: "اللّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ لَا إِلَهَ إِلَّا أَنْتَ",
    transliteration: "Allahumma inni a'udhu bika min al-kufri wal-faqri, wa a'udhu bika min 'adhabi al-qabri, la ilaha illa anta",
    maxNumber: 1,
    type: "Sera"
  },
  {
    arabicContent: "اللّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلًا مُتَقَبَّلًا",
    transliteration: "Allahumma inni as'aluka 'ilman nafi'an, wa rizqan tayyiban, wa 'amalan mutaqabbalan",
    maxNumber: 1,
    type: "Sera"
  }
],

};

// Recupera il parametro 'type' dall'URL
const urlParams = new URLSearchParams(window.location.search);
const type = urlParams.get("type"); 

// Funzione per mostrare azkar statici per tipo
function displayAzkarByType(type) {
  const azkarContainer = document.getElementById("app");
  azkarContainer.innerHTML = "";

  const selectedAzkar = azkarData[type];

  if (!selectedAzkar) {
    azkarContainer.textContent = "Tipo di Azkar non trovato.";
    return;
  }

  selectedAzkar.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const arabicContent = document.createElement("h3");
    arabicContent.textContent = item.arabicContent;

    const italianContent = document.createElement("h4");
    italianContent.textContent = item.transliteration;

    const typeLabel = document.createElement("small");
    typeLabel.textContent = item.type;
    typeLabel.classList.add("type");

    const counterButton = document.createElement("button");
    counterButton.textContent = `Counter: 0 / ${item.maxNumber}`;
    let counter = 0;

    counterButton.addEventListener("click", function () {
      counter++;
      counterButton.textContent = `Counter: ${counter} / ${item.maxNumber}`;
      if (counter >= item.maxNumber) {
        card.classList.add("clicked");
        counterButton.disabled = true;
      }
    });

    card.appendChild(arabicContent);
    card.appendChild(italianContent);
    card.appendChild(counterButton);
    azkarContainer.appendChild(card);
  });
}

// Mostra azkar in base al tipo
displayAzkarByType(type);

// Pulsante Home
document.getElementById("backButton").onclick = function () {
  window.location.href = "../index.html";
};
