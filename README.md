# Typescript を使った React プロジェクトのテンプレート

## 利用しているツール

- typescript
  - React を記述するのに使用する言語
- eslint
  - TSLint ではなく、ESLint を使用してコードをチェックする
- prettier
  - コードのフォーマット
- parcel
  - 作成したコードをバンドルする（webpack難しすぎ）

## 使用方法

1. テンプレートを使用して、Github上で新しいプロジェクトを作成する
2. 作成したプロジェクトを git clone する
3. ローカルで npm install する
4. npm run parcel で開発用のサーバが起動する

## 設定内容

- package.json
  - script に parcel のコマンドを記述しているだけ
- tsconfig.json
  - 雰囲気を create-react-app に合わせている
- .eslintrc.json
  - no-debugger と no-console をルールに追加しているくらい、基本デフォルト

## TODO

- node-sass を入れる
- jest を入れる