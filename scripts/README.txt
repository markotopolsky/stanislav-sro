Cloudinary upload — postup
==========================

1. Vytvor si Cloudinary účet (free tier stačí):
   https://cloudinary.com/users/register/free

2. V dashboard nájdi credentials (Settings → API Keys):
   - Cloud name
   - API key
   - API secret

3. V root projekte vytvor .env.local (alebo doplň ak už existuje):

   CLOUDINARY_CLOUD_NAME=tvoj-cloud-name
   CLOUDINARY_API_KEY=...
   CLOUDINARY_API_SECRET=...

   (Tieto sa nedostanú do gitu — .env* je v .gitignore.)

4. Nainštaluj balík:

   npm install cloudinary

5. Skontroluj photo-mapping.json (manuálne páry foto↔slug pre prípady,
   kde názvy nesedia 1:1). Verejné slug-y produktov sú v
   app/data/produkty.json.

6. Najprv DRY-RUN, len pozri čo by sa stalo:

   npm run upload-photos:dry

7. Ak je všetko OK, ostrý beh:

   npm run upload-photos

   Script:
   - nahrá fotky do Cloudinary pod public_id "kralovska-pekaren/products/<slug>"
   - aktualizuje app/data/produkty.json so secure_url
   - duplicate fotky (napr. ' (1)', ' (2)') ignoruje, použije prvú

8. Po uploade si over zopár produktov v dev:

   npm run dev
   → http://localhost:3000/produkty
