# WaseMap
```
├── .expo/              # Expo によって自動生成される設定ファイル（基本的に編集不要）
├── assets/             # 画像・フォントなどの静的アセット（画像ファイルなど）
├── node_modules/       # 使用している npm パッケージ（自動生成、編集不要）
├── src/                # アプリの主要なソースコード
│   ├── assets/         # src 以下で使う静的アセット（例：ローカル画像）
│   ├── atoms/          # Recoil や Zustand などで使う状態管理の単位（グローバルステートなど）
│   ├── components/     # 再利用可能な UI コンポーネント群（Button, Card など）
│   ├── const/          # 定数定義（定数ファイル、Enum など）
│   ├── hooks/          # カスタム React Hooks（再利用可能なロジック）
│   ├── mocks/          # モックデータ（開発中に使用するテスト用のデータなど）
│   ├── navigation/     # 画面遷移（React Navigation 等の設定）
│   │   └── index.tsx   # ナビゲーションルート定義
│   ├── screens/        # 画面ごとのコンポーネント（マップ画面、タイムライン画面など）
│   ├── types/          # 型定義（TypeScript の型、インターフェース）
│   └── utils/          # 汎用的な関数やユーティリティ（フォーマッタなど）
├── .gitignore          # Gitで追跡しないファイルの定義
├── app.json            # Expo の設定ファイル
├── App.tsx             # アプリのエントリーポイント（最初に呼び出されるコンポーネント）
├── index.ts            # TypeScript のエントリーポイント（Expo 起動用）
├── package.json        # 使用パッケージとスクリプト定義
├── package-lock.json   # パッケージの依存関係を固定化
├── README.md           # このファイル。プロジェクトの説明
└── tsconfig.json       # TypeScript の設定ファイル
```
