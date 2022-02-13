# react-with-webpack
react with webpack base application


ToDo:

1.) babel:               npm install @babel/core @babel/cli @babel/preset-react --save-dev
2.) webpack:             npm install webpack webpack-cli webpack-dev-server babel-loader --save-dev
3.) react:               npm install react react-dom
4.) html-webpack-plugin: npm install html-webpack-plugin --save-dev
5.) css-loader:          npm install css-loader style-loader --save-dev
6.) build:               npm run build
7.) start:               npm run start
    server stop:         STRG+C
8.) browser: http://localhost:8080/

The following lines were added to package.json during installation. Should the project in future
no longer work, you can fall back on the following versions for the installation: 

{
  ...,
  "devDependencies": {
    "@babel/cli": "^7.17.0",
    "@babel/core": "^7.17.2",
    "@babel/preset-react": "^7.16.7",
    "babel-loader": "^8.2.3",
    "css-loader": "^6.6.0",
    "html-webpack-plugin": "^5.5.0",
    "style-loader": "^3.3.1",
    "webpack": "^5.68.0",
    "webpack-cli": "^4.9.2",
    "webpack-dev-server": "^4.7.4"
  },
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  }
}
