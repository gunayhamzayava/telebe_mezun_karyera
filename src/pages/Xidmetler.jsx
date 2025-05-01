import React from "react";
import styles from "./Xidmetler.module.css";
import { Link } from "react-router-dom";

export const services = [
  {
    id: 1,
    name: "Karyera Məsləhətləri",
    description:
      "Karyera məsləhətləri tələbə və məzunlara peşəkar həyatlarında doğru istiqamət seçməyə kömək edir. Bu məsləhətlər vasitəsilə onlar karyera məqsədlərini müəyyənləşdirir və həmin məqsədlərə çatmaq üçün uyğun addımları planlaşdırırlar. Karyera məsləhətləri tələbələrə öz güclü və zəif tərəflərini anlamağa, işəgötürənlərin gözləntilərini öyrənməyə imkan verir. Həmçinin, məsləhətlərdə CV və motivasiya məktubu yazmaq, müsahibələrə hazırlıq kimi praktiki bacarıqlar da inkişaf etdirilir. Bu məsləhətlər sayəsində tələbələr iş bazarında rəqabət üstünlüyü qazanır və özlərinə uyğun iş imkanlarını daha asan tapırlar.",
    image: "/service1.jpg",
  },
  {
    id: 2,
    name: "Təcrübə və İş imkanları",
    description:
      "Təcrübə və iş imkanları tələbələrin peşəkar bacarıqlarını inkişaf etdirməsi və real iş mühiti ilə tanış olması üçün əhəmiyyətlidir. Bu imkanlar tələbələrin nəzəri biliklərini praktikada tətbiq etməsinə və iş dünyasının tələblərini daha yaxşı başa düşməsinə kömək edir. Təcrübə proqramları sayəsində tələbələr öz sahələrindəki ən yaxşı təcrübələri öyrənir və iş həyatına inamla daxil olurlar. İş imkanları tələbələrə və məzunlara özlərini göstərmək və işəgötürənlərlə əlaqə qurmaq üçün vacib fürsətlər təqdim edir. Eyni zamanda, təcrübə və iş təcrübələri tələbələrin CV-lərini zənginləşdirərək gələcəkdə karyera seçimlərini genişləndirir.",
    image: "/service2.jpg",
  },
  {
    id: 3,
    name: "Təlim və Seminarlar",
    description:
      "Təlim və seminarlar tələbə və məzunların peşəkar və şəxsi bacarıqlarını inkişaf etdirmək üçün xüsusi olaraq təşkil edilir. Bu tədbirlər iştirakçılara yenilənmiş biliklər əldə etmək, müxtəlif sahələr üzrə dərin məlumat toplamaq və aktual bacarıqlara yiyələnmək imkanı verir. Təlimlərdə praktiki bacarıqlar, o cümlədən liderlik, komanda ilə işləmə və problem həll etmə kimi mövzular ön planda olur. Seminarlar vasitəsilə tələbələr iş dünyasında mövcud olan trendlər və yeni texnologiyalarla tanış olur, bu da onların karyera hədəflərinə çatmasında mühüm rol oynayır. Bu tədbirlər həmçinin tələbələrin şəbəkələrini genişləndirməsinə və peşəkar əlaqələr qurmasına kömək edir.",
    image: "/service3.jpg",
  },
  {
    id: 4,
    name: "Karyera Yarmarkaları",
    description:
      "Karyera yarmarkaları tələbə və məzunların iş dünyasının nümayəndələri ilə birbaşa əlaqə qurması üçün unikal bir platformadır. Bu tədbirlərdə iştirakçılar müxtəlif şirkətlərin iş təklifləri və tələb olunan bacarıqlar haqqında ətraflı məlumat əldə edə bilirlər. Yarmarkalar tələbələrə müxtəlif sektorlardan olan işəgötürənlərlə tanışlıq imkanı verərək, onların iş bazarındakı trendlər və gözləntiləri anlamasını asanlaşdırır. Tələbələr yarmarkalar vasitəsilə CV-lərini təqdim edir, müsahibə təcrübəsi qazanır və iş imkanlarını birbaşa müzakirə etmək imkanı əldə edirlər. Həmçinin, karyera yarmarkaları tələbə və məzunların gələcəkdəki karyera istiqamətlərini müəyyən etməsinə və peşəkar şəbəkələrini genişləndirməsinə kömək edir.",
    image: "/service4.jpg",
  },
  {
    id: 5,
    name: "Məzunlarla Əlaqələr",
    description:
      "Məzunlarla əlaqələr şöbəsi universitet məzunları ilə davamlı rabitə saxlayaraq onların karyera və inkişaf yolunu izləmək üçün çalışır. Bu əlaqələr vasitəsilə məzunlar iş dünyasında qarşılaşdıqları təcrübələri və uğurları universitetlə paylaşır, gələcək tələbələr üçün ilham mənbəyi olur. Şöbə məzunlarla görüşlər, seminarlar və məzun günləri kimi tədbirlər təşkil edərək, onları universitet həyatında yenidən bir araya gətirir. Məzunlarla əlaqələr həmçinin onların iş imkanları haqqında məlumatlar paylaşmasına və təcrübələrini indiki tələbələrlə bölüşməsinə şərait yaradır. Bu cür əlaqələr universitetin məzunlar şəbəkəsini gücləndirir və karyera imkanlarının artırılmasına kömək edir",
    image: "/service5.jpg",
  },
];
const Xidmetler = () => {
  return (
    <div className={styles.serviceContainer}>
      <h1>Xidmətlərimiz</h1>
      <div className={styles.services}>
        {services.map((service,index) => (
          <Link
            key={service.id}
            className={styles.serviceCard}
            to={`/service/${service.id}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={styles.serviceImage}>
              <img src={service.image} alt={service.name} />
            </div>
            <h4>{service.name}</h4>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Xidmetler;
