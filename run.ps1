cd "nlp_api"

uvicorn main:app --reload

cd ..

cd "atleave_api"

npm run start:dev

cd ..

cd "atleave_site"

npm run dev