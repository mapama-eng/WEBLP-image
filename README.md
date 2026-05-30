# MiiiU Recruit LP

美容室 MiiiU のリクルート用 LP サイトです。

React + Tailwind CSS + Vite で作成しています。Windows PC で解凍して、そのまま VS Code で開き、GitHub に保存し、Vercel で公開できる構成です。

## 必要なもの

- Windows PC
- VS Code
- Node.js LTS
- Git
- GitHub アカウント
- Vercel アカウント

Node.js は LTS 版をインストールしてください。

## 1. ZIPを解凍する

納品された ZIP ファイルを右クリックして、任意の場所に解凍します。

例:

```text
ドキュメント
└─ miiiu-recruit-lp
```

## 2. VS Codeでフォルダを開く

VS Code を起動し、以下の順番で開きます。

```text
ファイル > フォルダーを開く
```

解凍した `miiiu-recruit-lp` フォルダを選択してください。

## 3. ターミナルを開く

VS Code 上部メニューから開きます。

```text
ターミナル > 新しいターミナル
```

ターミナルの場所がプロジェクトフォルダになっていることを確認します。

## 4. npm install を実行する

最初に必要なパッケージをインストールします。

```bash
npm install
```

完了すると `node_modules` フォルダが作成されます。

## 5. npm run dev でローカル確認する

開発用サーバーを起動します。

```bash
npm run dev
```

ターミナルに表示された URL をブラウザで開きます。

例:

```text
http://127.0.0.1:5173/
```

確認が終わったら、ターミナル上で `Ctrl + C` を押すと停止できます。

## 6. npm run build でエラー確認する

公開用ファイルが作れるか確認します。

```bash
npm run build
```

エラーが出なければ成功です。成功すると `dist` フォルダが作成されます。

## 7. GitHubへ保存する

GitHub で新しいリポジトリを作成します。

VS Code のターミナルで以下を実行します。

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/ユーザー名/リポジトリ名.git
git push -u origin main
```

`ユーザー名` と `リポジトリ名` は自分のGitHubに合わせて変更してください。

## 8. Vercelで公開する

1. Vercel にログインします。
2. `Add New...` から `Project` を選びます。
3. GitHub のリポジトリを選択します。
4. Framework Preset が `Vite` になっていることを確認します。
5. 以下の設定で公開します。

```text
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

通常は Vercel が自動で認識するため、変更せずそのまま公開できます。

## よく使うコマンド

```bash
npm install
npm run dev
npm run build
```

## 画像の差し替えについて

画像は `public/assets/photos` に入っています。

同じファイル名で画像を差し替えると、コードを変更せずにサイト上の画像を変更できます。

## 注意点

- `node_modules` は ZIP に含めていません。解凍後に必ず `npm install` を実行してください。
- `dist` は `npm run build` で自動生成されるため、GitHub に保存しなくて大丈夫です。
- Vercel 公開時は、画像パスが `/assets/...` で指定されているため、そのまま公開できます。
