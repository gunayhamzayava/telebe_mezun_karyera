import React from "react";
import styles from "./Tedbirler.module.css";
import { Link } from "react-router-dom";
export const events = [
  {
    id: 1,
    title: "Şəxsi İnkişaf Festivalı",
    description: `
      Gənclərin İnkişaf və Karyera Mərkəzinin Quba-Xaçmaz regional nümayəndəliyi və Azərbaycan Dövlət Pedaqoji Universitetinin Quba filialının birgə təşkilatçılığı ilə “Şəxsi inkişaf festivalı” təşkil olunub. Festivalda gənclərə şəxsi inkişaf və karyera quruculuğunda incə bacarıqların (komanda işi, ünsiyyət, liderlik və s.) önəmi vurğulanıb.
    `,
    image: "tedbir1.jpg",
  },
  {
    id: 2,
    title:
      "Regionlarda ali təhsil: reallıqlar və perspektivlər – IV beynəlxalq elmi konfrans",
    description: `
      Oktyabrın 11-də Azərbaycan Dövlət Pedaqoji Universitetinin (ADPU) Quba filialında "Regionlarda ali təhsil: reallıqlar və perspektivlər" mövzusunda IV beynəlxalq elmi konfrans baş tutub. Konfransda yerli və xarici təhsil müəssisələrinin təmsilçiləri iştirak edərək ali təhsil problemləri və perspektivləri barədə müzakirələr aparıblar. 
      Bu konfransda həmçinin BMT-nin İqlim Dəyişikliyi üzrə Çərçivə Konvensiyasının Tərəflər Konfransının 29-cu sessiyasına hazırlıq çərçivəsində ölkənin elm və təhsil sahəsindəki səyləri müzakirə olunub.
    `,
    image: "tedbir2.jpg",
  },
  {
    id: 3,
    title: "Zəfərin təntənəsi!",
    description: `
      Azərbaycan Dövlət Pedaqoji Universitetinin Quba filialında 8 Noyabr-Zəfər Günü münasibəti ilə "Zəfərin təntənəsi!" mövzusunda bayram mərasimi keçirilib. Mərasimdə Quba rayon ictimaiyyətinin nümayəndələri, şəhid ailələri, qazilər, yerli təşkilatların rəhbərləri və təhsil ocağının kollektivləri iştirak edib. 
      Tədbirdə Vətən müharibəsi qazilərinin, şəhid ailələrinin xidmətləri təriflənib, qəhrəman Azərbaycan Ordusunun qazandığı tarixi Zəfər təntənə ilə qeyd edilib. Tədbirdə, həmçinin, fəxri fərmanlar təqdim olunub və zəngin ədəbi-bədii musiqili proqram nümayiş olunub.
    `,
    image: "telim3.jpg",
  },
  {
    id: 4,
    title: "İqlim dəyişikliyi və gənclər",
    description: `
      #Quba rayonu üzrə gənc eko-səfir Fəridə Allahverdiyevanın təqdimatında "İqlim dəyişikliyi və gənclər" mövzusunda görüş keçirilib. 🌍✨️ Görüş zamanı Azərbaycan Dövlət Pedaqoji Universitetinin Quba filialında təhsil alan bir qrup gəncə aşağıda sadalanan mövzular haqqında məlumat verilib: İqlim dəyişikliyi nədir? İqlim dəyişikliyinin eko sistemə təsiri; Ekoloji fəaliyyətlərdə gənclərin rolu; COP29-un əhəmiyyəti; Fərqindəlik yaratmaq üçün atmalı olduğumuz addımlar. 🌱 Gənclər həmçinin komandalara bölünərək ekoloji problemləri və onların həll yollarını müzakirə ediblər. Komanda işində iştirakçılar kreativ yanaşmaları ilə ətraf mühitin qorunmasına dair praktik təkliflər irəli sürüblər.

    `,
    image: "telim4.jpg",
  },
  {
    id: 5,
    title: "Süni intellekt",
    description: `24 oktyabr 2024-cü il tarixində Azərbaycan Dövlət Pedaqoji Universitetinin (ADPU) Quba filialında süni intellekt üzrə əhəmiyyətli təlim keçirilmişdir. Təlim "eTwinningPlus" layihəsinin iştirakçısı, İKT bacarıqları üzrə təlimçi Musa İsmayılov və ADPU-nun Quba filialının Tələbə, məzunlarla iş və karyera şöbəsinin müdiri Hikmət Musayev tərəfindən aparılmışdır. Təlimdə iştirakçılara süni intellekt texnologiyalarının inkişaf istiqamətləri, onların təhsil sahəsində tətbiqi və müxtəlif sahələrdəki praktik əhəmiyyəti barədə məlumat verilmişdir. Eyni zamanda, süni intellektin gələcəkdə karyera inkişafına təsiri və texnologiyanın yaradıcı imkanları müzakirə edilmişdir. Tədbirə universitet tələbələri, müəllim heyəti və digər maraqlı tərəflər qatılmış və süni intellektin real tətbiq nümunələri ilə tanış olmuşlar. Təlimin sonunda iştirakçılar süni intellektlə bağlı əldə etdikləri bilikləri gündəlik həyat və peşəkar fəaliyyətlərində necə istifadə edə biləcəkləri barədə müzakirələr aparılmış və bütün iştirakçılara sertifikatlar təqdim edilmişdir.    `,
    image: "telim5.jpg",
  },
  {
    id: 6,
    title: "Təhsildə yeni strategiyalar",
    description: `ADPU-nun Quba filialında “Təhsildə yeni strategiyalar” mövzusunda beynəlxalq təlim-tədris uğurla başa çatıb Azərbaycan Dövlət Pedaqoji Universitetinin (ADPU) Quba filialında “Təhsildə yeni strategiyalar” mövzusunda beynəlxalq təlim-tədris təşkil olunub. 14 Oktyabr 2024-cü il tarixində Avropa Azərbaycan Məktəbi, Qafqaz və Orta Asiya İB (International Baccalaureate) Dünya Məktəbləri Assosiasiyası ilə əməkdaşlıq nəticəsində təşkil olunan təlim-tədris ADPU-nun Quba filialının rəhbərliyi, professor müəllim və tələbə heyəti iştirak edib. Əvvəlcə ADPU-nun Quba filialının direktoru f.e.d. dosent Yusif Alıyev təlimin-tədrisin məqsəd və vəzifələrindən bəhs edib. Çıxışında rəhbərlik etdiyi təhsil müəssisəsində elm və təhsil sahəsində aparılan islahatlara, biliyin mənimsənilməsi üçün dünya təcrübəsinin öyrənilməsi, müasir dövrdə müəllim-tələbə münasibətlərinə yeni yanaşmalara dair səmərəli tətbiqlər, biliyin qiymətləndirilməsi və s. mühüm məsələlərə geniş yer verən direktoru dosent Yusif Alıyev diqqətə çatdırıb ki, tələbənin öyrənmək arzusu ilə müəllimin öyrətmək istəyi vəhdət təşkil edəndə nəticələr daha böyük olur. Sonra Azərbaycan Dövlət Pedaqoji Universitetinin Quba filialının tələbələri vətənimizin gözəlliyini və dəyərlərimizi ehtiva edən şeirləri ana dilində və ingiliscə söyləyiblər. Təlimçi, Avropa Azərbaycan Məktəbinin direktoru, Qafqaz və Orta Asiya İB Dünya Məktəbləri Assosiasiyasının rəhbəri Françesko Bankini geniş təqdimatla iştirakçılar qarşısında çıxış edib. Sonra iştirakçılara ADPU-nun Quba filialı və təlimçi tərəfin ortaq sertifikatı təqdim olunub. Təlimçi-müəllim Françesko Bankini Azərbaycan Dövlət Pedaqoji Universitetinin ADPU-nin Quba filialında Xatirə kitabına filial və kollektiv barədə xoş sözlər ifadə edib.`,
    image: "telim6.jpg",
  },
];

const Tedbirler = () => {
  return (
    <div className={styles.tedbirlerContainer}>
      {events.map((event, index) => (
        <Link
          to={`/conference/${event.id}`}
          key={event.id}
          className={styles.eventCard}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className={styles.eventImage}>
            <img src={event.image} alt={event.title} />
          </div>
          <h5 className={styles.eventTitle}>
            {event.title.slice(0, 30) + "..."}
          </h5>
        </Link>
      ))}
    </div>
  );
};

export default Tedbirler;
