
```
cd repo-b
npm install
npm run build
npm link
cd ../repo-a
npm install
npm link repo-b
npm run start
```
