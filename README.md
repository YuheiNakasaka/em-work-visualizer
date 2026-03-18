# EM Work Visualizer

EMとしての業務を2Dバブルチャートで可視化するWebアプリ。

業務を選択すると、**時間軸（短期 ↔ 長期）× スコープ（個人 ↔ 組織）** の2次元平面にバブルとしてマッピングされ、重要度がバブルサイズで表現される。状態はURLエンコードで共有可能。バックエンド不要。

## 機能

- 130件のEM業務を4カテゴリ（プロジェクト / プロダクト / ピープル / テクノロジー）に分類
- 4分割モード（カテゴリ別チャート）と統合モード（全カテゴリ1チャート）の切替
- タスクごとの重要度（1〜5）調整でバブルサイズが変化
- lz-string圧縮によるURL共有（選択状態・重要度・表示モードを保持）
- サイドバーのドラッグリサイズ・折りたたみ
- 各タスクの具体例表示
- レスポンシブ対応

## Tech Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4
- Chart.js + react-chartjs-2 + chartjs-plugin-datalabels
- lz-string（URL圧縮）
- Vitest（テスト）

## セットアップ

```bash
pnpm install
```

## 開発

```bash
pnpm dev
```

http://localhost:5173/ で開発サーバーが起動する。

## テスト

```bash
pnpm test
```

## ビルド

```bash
pnpm build
```

`dist/` にプロダクションビルドが出力される。

## プロジェクト構成

```
src/
├── data/          # タスク定義・カテゴリ・象限の静的データ
├── types/         # TypeScript型定義
├── lib/           # ビットフィールド・URLコーデック・座標計算
├── hooks/         # URL状態管理・チャートデータ変換
└── components/    # UIコンポーネント
    ├── TaskSelector/   # タスク選択パネル
    └── ChartPanel/     # バブルチャート描画
```
