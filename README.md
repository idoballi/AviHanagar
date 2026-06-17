# אבי הנגר – דף נחיתה

דף נחיתה לעסק נגרות בהתאמה אישית.

## הרצה

```bash
npm install
npm run dev
```

פתח [http://localhost:3000](http://localhost:3000)

## בנייה

```bash
npm run build
npm start
```

## בדיקת TypeScript

```bash
npm run typecheck
```

## החלפת תמונות

הוסף תמונות לתיקייה `public/images/`:

| קובץ | שימוש |
|------|-------|
| `avi-logo.png` | לוגו (Header + Footer) |
| `hero.jpg` | תמונה ראשית |
| `avi.jpg` | תמונה של אבי |
| `work-1.jpg` … `work-6.jpg` | גלריה |

עדכן רשימת הגלריה ב־`src/data/gallery.ts` אם מוסיפים תמונות.

## עריכת טקסטים

כל הטקסטים העסקיים ב־`src/config/business.ts`. שירותים, FAQ וגלריה ב־`src/data/`.

## חיבור Make.com

הגדר `MAKE_WEBHOOK_URL` ב־`.env.local`. הטופס שולח ל־`/api/submit-lead` שמעביר JSON ל-Make.

## חיבור Supabase

ב־`src/lib/submitForm.ts` – סמן `TODO: Supabase`. הגדר `NEXT_PUBLIC_SUPABASE_URL` ו־`NEXT_PUBLIC_SUPABASE_ANON_KEY` ב־`.env`.

ב־`src/app/api/submit-lead/route.ts` – שליחה ל-Make.com webhook.
TODO: Supabase – שמירה במסד נתונים.

## מבנה תיקיות

```
src/
├── app/              # דפים (Next.js App Router)
├── components/
│   ├── form/         # טופס רב-שלבי
│   ├── sections/     # אזורים בדף
│   └── ui/           # קומפוננטות UI
├── config/           # הגדרות עסק
├── data/             # שירותים, FAQ, גלריה
├── lib/              # לוגיקה (שליחה, שמירה)
└── types/            # TypeScript types
public/images/        # תמונות
```
