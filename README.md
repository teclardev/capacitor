# Capacitor'ni ishga tushirish loyihasi

HTML/CSS ishlatgan holda tezda ilova yasash mumkin. 
Capacitor'ni har safar to'g'rilab o'tirmasdan shu loyihani clone qilib tezda ish boshlash mumkin. 

Qo'shimchasiga, eng kerakli npm komandalar oldindan o'rnatib qo'yildi.
Windows 10 da tekshirildi

## Talablar
Kompyuterizda NodeJs (>16) o'rnatilgan bo'lishi kerak.

Qaysi platformaga chiqarmoqchi bo'lseyz, o'shanga qarab `Android SDK`si bilan `android studio` yoki `Xcode`

## O'rnatish 
```bash
npm install
```
Iloji bo'lsa capacitorni global o'rnatib oling (ixtiyoriy)
```bash
npm i -g capacitor/cli
```    
## Komandalar

- `npm start` - src papkadagi kodlarni jonli efirda ko'rish. browser ochiladi
- `npm run build` - src papkadan dist papkasiga ixchamlashtirib build qiladi
- `npm run studio` - build bo'lganidan keyin android studio'da ochsa bo'ladi
- `npm run xcode` - build bo'lganidan keyin xcode studio'da ochsa bo'ladi

## Batafsil

Birinchi src papkaga kirib, ilovani kompyuter browseridan ko'rib, o'zizga moslab, to'g'rilab oling. Ichiga bootstrap, tailwindcss yoki materialize'larni qo'shseyz bo'ladi. HTML5 ham ishladi. 
`npm start` komandasini berib nima qivotganizni jonli efirda ko'rib turseyz bo'ladi

Oxirida, loyihani bitirib bo'lganizdan keyin, jonli efirdan terminate (ctrl+c) bilan chiqib ketib `npm run build` komandasini yurg'izing.
Qaysi platformaga yasavotgan bo'lseyz o'shanga yarasha komanda bering. 

Masalan: `npm run studio` komandasini berganizdan keyin `android studio` ochiladi. Keyin android studio o'zidan proyektni run qilib ishlatib ko'rish yoki build qilib tayyor apk (yoki google so'ravotgan yangicha formatga) chiqarib olseyz bo'ladi. 

Capacitorni o'zidan ham to'g'ridan-to'g'ri tayyor ilova build qilsa bo'ladi, lekin bu process murakkabligi sabab bu loyihaga qo'shib o'tirmadim. Uni o'ziz qarab ko'rseyz bo'ladi

https://capacitorjs.com/docs/android   |   https://capacitorjs.com/docs/ios
