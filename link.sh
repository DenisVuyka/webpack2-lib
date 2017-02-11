rm -rf ~/github/webpack2-app/node_modules/webpack2-lib
mkdir ~/github/webpack2-app/node_modules/webpack2-lib
mkdir ~/github/webpack2-app/node_modules/webpack2-lib/dist

cp package.json ~/github/webpack2-app/node_modules/webpack2-lib/package.json
cp -r ./dist/* ~/github/webpack2-app/node_modules/webpack2-lib/dist
ls ~/github/webpack2-app/node_modules/webpack2-lib
