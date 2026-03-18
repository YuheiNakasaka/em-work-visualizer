import type { TaskDefinition } from "../types";

export const TASKS: TaskDefinition[] = [
  // ============================================================
  // Project Management (35 tasks: id 0-34)
  // ============================================================

  // project / short_individual (9 tasks)
  { id: 0, name: "スプリントプランニング", category: "project", quadrant: "short_individual", baseX: 11, baseY: 27, defaultImportance: 1, description: "スプリントの計画と目標設定" },
  { id: 1, name: "タスク見積もり", category: "project", quadrant: "short_individual", baseX: 38, baseY: 83, defaultImportance: 1, description: "作業量と工数の見積もり" },
  { id: 2, name: "進捗レポート作成", category: "project", quadrant: "short_individual", baseX: 72, baseY: 12, defaultImportance: 1, description: "進捗状況のレポート作成" },
  { id: 3, name: "リスク評価", category: "project", quadrant: "short_individual", baseX: 55, baseY: 56, defaultImportance: 1, description: "プロジェクトリスクの評価と対策" },
  { id: 4, name: "スコープ調整", category: "project", quadrant: "short_individual", baseX: 23, baseY: 63, defaultImportance: 1, description: "開発スコープの調整と管理" },
  { id: 5, name: "バグトリアージ", category: "project", quadrant: "short_individual", baseX: 88, baseY: 42, defaultImportance: 1, description: "バグの優先度分類と対応判断" },
  { id: 6, name: "リリース判定", category: "project", quadrant: "short_individual", baseX: 8, baseY: 91, defaultImportance: 1, description: "リリース可否の最終判定" },
  { id: 7, name: "デイリースタンドアップ運営", category: "project", quadrant: "short_individual", baseX: 46, baseY: 38, defaultImportance: 1, description: "日次ミーティングの進行" },
  { id: 8, name: "ブロッカー解消", category: "project", quadrant: "short_individual", baseX: 82, baseY: 71, defaultImportance: 1, description: "開発阻害要因の特定と解消" },

  // project / short_organization (9 tasks)
  { id: 9, name: "プロジェクト間依存管理", category: "project", quadrant: "short_organization", baseX: 14, baseY: 33, defaultImportance: 1, description: "プロジェクト間の依存関係管理" },
  { id: 10, name: "リソースアロケーション", category: "project", quadrant: "short_organization", baseX: 42, baseY: 78, defaultImportance: 1, description: "人的リソースの適切な配分" },
  { id: 11, name: "ステークホルダー報告", category: "project", quadrant: "short_organization", baseX: 76, baseY: 18, defaultImportance: 1, description: "関係者への進捗・課題報告" },
  { id: 12, name: "部門間調整会議", category: "project", quadrant: "short_organization", baseX: 28, baseY: 58, defaultImportance: 1, description: "部門間の調整と合意形成" },
  { id: 13, name: "予算管理", category: "project", quadrant: "short_organization", baseX: 61, baseY: 44, defaultImportance: 1, description: "プロジェクト予算の管理と追跡" },
  { id: 14, name: "ベンダー管理", category: "project", quadrant: "short_organization", baseX: 89, baseY: 67, defaultImportance: 1, description: "外部ベンダーとの連携管理" },
  { id: 15, name: "全体進捗ダッシュボード管理", category: "project", quadrant: "short_organization", baseX: 7, baseY: 88, defaultImportance: 1, description: "全体進捗の可視化と管理" },
  { id: 16, name: "インシデント対応指揮", category: "project", quadrant: "short_organization", baseX: 53, baseY: 11, defaultImportance: 1, description: "障害発生時の対応指揮" },
  { id: 17, name: "クロスチーム同期", category: "project", quadrant: "short_organization", baseX: 83, baseY: 91, defaultImportance: 1, description: "複数チーム間の情報同期" },

  // project / long_individual (8 tasks)
  { id: 18, name: "技術的負債の返済計画", category: "project", quadrant: "long_individual", baseX: 12, baseY: 22, defaultImportance: 1, description: "技術的負債の計画的な解消" },
  { id: 19, name: "プロジェクト振り返り改善", category: "project", quadrant: "long_individual", baseX: 47, baseY: 68, defaultImportance: 1, description: "レトロスペクティブと改善実行" },
  { id: 20, name: "見積もり精度向上", category: "project", quadrant: "long_individual", baseX: 83, baseY: 14, defaultImportance: 1, description: "見積もり手法の精度改善" },
  { id: 21, name: "個人の生産性メトリクス設計", category: "project", quadrant: "long_individual", baseX: 29, baseY: 51, defaultImportance: 1, description: "個人生産性の測定指標設計" },
  { id: 22, name: "CI/CDパイプライン改善計画", category: "project", quadrant: "long_individual", baseX: 66, baseY: 37, defaultImportance: 1, description: "CI/CDの継続的な改善計画" },
  { id: 23, name: "テスト戦略策定", category: "project", quadrant: "long_individual", baseX: 91, baseY: 82, defaultImportance: 1, description: "テスト方針と戦略の策定" },
  { id: 24, name: "ドキュメント整備計画", category: "project", quadrant: "long_individual", baseX: 8, baseY: 78, defaultImportance: 1, description: "技術ドキュメントの整備計画" },
  { id: 25, name: "開発フロー最適化", category: "project", quadrant: "long_individual", baseX: 56, baseY: 93, defaultImportance: 1, description: "開発プロセスの最適化" },

  // project / long_organization (9 tasks)
  { id: 26, name: "開発プロセス標準化", category: "project", quadrant: "long_organization", baseX: 18, baseY: 11, defaultImportance: 1, description: "開発プロセスの組織標準策定" },
  { id: 27, name: "プロジェクト管理ツール導入", category: "project", quadrant: "long_organization", baseX: 43, baseY: 86, defaultImportance: 1, description: "PM管理ツールの選定と導入" },
  { id: 28, name: "組織横断KPI設計", category: "project", quadrant: "long_organization", baseX: 78, baseY: 28, defaultImportance: 1, description: "組織全体のKPI指標設計" },
  { id: 29, name: "ポートフォリオマネジメント", category: "project", quadrant: "long_organization", baseX: 9, baseY: 54, defaultImportance: 1, description: "複数プロジェクトの統合管理" },
  { id: 30, name: "リリースプロセス改善", category: "project", quadrant: "long_organization", baseX: 56, baseY: 42, defaultImportance: 1, description: "リリースフローの継続改善" },
  { id: 31, name: "品質基準策定", category: "project", quadrant: "long_organization", baseX: 91, baseY: 63, defaultImportance: 1, description: "組織の品質基準と指標策定" },
  { id: 32, name: "障害対応フロー整備", category: "project", quadrant: "long_organization", baseX: 32, baseY: 37, defaultImportance: 1, description: "障害対応の標準フロー整備" },
  { id: 33, name: "技術ロードマップ策定", category: "project", quadrant: "long_organization", baseX: 67, baseY: 73, defaultImportance: 1, description: "中長期の技術ロードマップ作成" },
  { id: 34, name: "キャパシティプランニング", category: "project", quadrant: "long_organization", baseX: 24, baseY: 91, defaultImportance: 1, description: "組織のキャパシティ計画策定" },

  // ============================================================
  // Product Management (30 tasks: id 35-64)
  // ============================================================

  // product / short_individual (8 tasks)
  { id: 35, name: "PRD作成", category: "product", quadrant: "short_individual", baseX: 17, baseY: 34, defaultImportance: 1, description: "プロダクト要件定義書の作成" },
  { id: 36, name: "ユーザーストーリー作成", category: "product", quadrant: "short_individual", baseX: 63, baseY: 88, defaultImportance: 1, description: "ユーザー視点の要件記述" },
  { id: 37, name: "受入条件定義", category: "product", quadrant: "short_individual", baseX: 91, baseY: 19, defaultImportance: 1, description: "機能の受入基準の明確化" },
  { id: 38, name: "仕様レビュー", category: "product", quadrant: "short_individual", baseX: 34, baseY: 52, defaultImportance: 1, description: "仕様書の確認とフィードバック" },
  { id: 39, name: "A/Bテスト設計", category: "product", quadrant: "short_individual", baseX: 78, baseY: 61, defaultImportance: 1, description: "A/Bテストの設計と計画" },
  { id: 40, name: "データ分析", category: "product", quadrant: "short_individual", baseX: 48, baseY: 14, defaultImportance: 1, description: "プロダクトデータの分析" },
  { id: 41, name: "競合調査", category: "product", quadrant: "short_individual", baseX: 8, baseY: 73, defaultImportance: 1, description: "競合プロダクトの調査分析" },
  { id: 42, name: "ユーザーインタビュー", category: "product", quadrant: "short_individual", baseX: 56, baseY: 43, defaultImportance: 1, description: "ユーザーへのヒアリング実施" },

  // product / short_organization (7 tasks)
  { id: 43, name: "プロダクトバックログ優先順位付け", category: "product", quadrant: "short_organization", baseX: 21, baseY: 17, defaultImportance: 1, description: "バックログの優先度設定" },
  { id: 44, name: "ステークホルダーとの要件すり合わせ", category: "product", quadrant: "short_organization", baseX: 58, baseY: 72, defaultImportance: 1, description: "関係者との要件合意形成" },
  { id: 45, name: "Go/No-Go判定会議", category: "product", quadrant: "short_organization", baseX: 87, baseY: 31, defaultImportance: 1, description: "リリース可否の判定会議" },
  { id: 46, name: "OKR設定", category: "product", quadrant: "short_organization", baseX: 12, baseY: 58, defaultImportance: 1, description: "目標と主要成果の設定" },
  { id: 47, name: "プロダクトレビュー会", category: "product", quadrant: "short_organization", baseX: 44, baseY: 43, defaultImportance: 1, description: "プロダクトの定期レビュー" },
  { id: 48, name: "他チームとの機能連携調整", category: "product", quadrant: "short_organization", baseX: 73, baseY: 88, defaultImportance: 1, description: "チーム間の機能連携調整" },
  { id: 49, name: "カスタマーフィードバック共有", category: "product", quadrant: "short_organization", baseX: 36, baseY: 91, defaultImportance: 1, description: "顧客フィードバックの組織共有" },

  // product / long_individual (8 tasks)
  { id: 50, name: "プロダクトビジョン策定", category: "product", quadrant: "long_individual", baseX: 16, baseY: 29, defaultImportance: 1, description: "プロダクトの長期ビジョン策定" },
  { id: 51, name: "ユーザージャーニー設計", category: "product", quadrant: "long_individual", baseX: 53, baseY: 74, defaultImportance: 1, description: "ユーザー体験の全体設計" },
  { id: 52, name: "メトリクス設計", category: "product", quadrant: "long_individual", baseX: 87, baseY: 18, defaultImportance: 1, description: "プロダクト指標の設計" },
  { id: 53, name: "技術的実現可能性調査", category: "product", quadrant: "long_individual", baseX: 38, baseY: 46, defaultImportance: 1, description: "技術面からの実現可能性検証" },
  { id: 54, name: "プロトタイプ作成", category: "product", quadrant: "long_individual", baseX: 71, baseY: 55, defaultImportance: 1, description: "機能プロトタイプの作成" },
  { id: 55, name: "ユーザビリティ改善計画", category: "product", quadrant: "long_individual", baseX: 9, baseY: 87, defaultImportance: 1, description: "UX改善の計画策定" },
  { id: 56, name: "データ基盤要件定義", category: "product", quadrant: "long_individual", baseX: 62, baseY: 9, defaultImportance: 1, description: "データ基盤の要件定義" },
  { id: 57, name: "機能廃止計画", category: "product", quadrant: "long_individual", baseX: 28, baseY: 67, defaultImportance: 1, description: "不要機能の廃止計画策定" },

  // product / long_organization (7 tasks)
  { id: 58, name: "プロダクト戦略策定", category: "product", quadrant: "long_organization", baseX: 13, baseY: 23, defaultImportance: 1, description: "プロダクトの中長期戦略策定" },
  { id: 59, name: "ロードマップ策定・更新", category: "product", quadrant: "long_organization", baseX: 52, baseY: 67, defaultImportance: 1, description: "プロダクトロードマップの管理" },
  { id: 60, name: "新規事業の技術検証", category: "product", quadrant: "long_organization", baseX: 84, baseY: 13, defaultImportance: 1, description: "新規事業の技術的検証" },
  { id: 61, name: "プラットフォーム戦略", category: "product", quadrant: "long_organization", baseX: 37, baseY: 82, defaultImportance: 1, description: "プラットフォームの戦略策定" },
  { id: 62, name: "エコシステム設計", category: "product", quadrant: "long_organization", baseX: 68, baseY: 38, defaultImportance: 1, description: "プロダクトエコシステムの設計" },
  { id: 63, name: "技術投資ROI評価", category: "product", quadrant: "long_organization", baseX: 22, baseY: 56, defaultImportance: 1, description: "技術投資の費用対効果評価" },
  { id: 64, name: "市場分析レポート", category: "product", quadrant: "long_organization", baseX: 91, baseY: 89, defaultImportance: 1, description: "市場動向の分析レポート作成" },

  // ============================================================
  // People Management (35 tasks: id 65-99)
  // ============================================================

  // people / short_individual (9 tasks)
  { id: 65, name: "1on1ミーティング", category: "people", quadrant: "short_individual", baseX: 19, baseY: 22, defaultImportance: 1, description: "メンバーとの定期1on1実施" },
  { id: 66, name: "パフォーマンスフィードバック", category: "people", quadrant: "short_individual", baseX: 41, baseY: 69, defaultImportance: 1, description: "パフォーマンスへの適切なFB" },
  { id: 67, name: "タスクアサイン", category: "people", quadrant: "short_individual", baseX: 74, baseY: 8, defaultImportance: 1, description: "適切なタスクの割り当て" },
  { id: 68, name: "メンタリング", category: "people", quadrant: "short_individual", baseX: 57, baseY: 47, defaultImportance: 1, description: "メンバーへの助言と指導" },
  { id: 69, name: "コードレビュー指導", category: "people", quadrant: "short_individual", baseX: 13, baseY: 56, defaultImportance: 1, description: "レビュースキルの指導" },
  { id: 70, name: "コンフリクト解消", category: "people", quadrant: "short_individual", baseX: 86, baseY: 34, defaultImportance: 1, description: "メンバー間の対立解消" },
  { id: 71, name: "モチベーション管理", category: "people", quadrant: "short_individual", baseX: 32, baseY: 88, defaultImportance: 1, description: "メンバーの動機づけ支援" },
  { id: 72, name: "勤怠管理", category: "people", quadrant: "short_individual", baseX: 67, baseY: 79, defaultImportance: 1, description: "勤怠状況の確認と管理" },
  { id: 73, name: "体調・メンタルケア", category: "people", quadrant: "short_individual", baseX: 92, baseY: 91, defaultImportance: 1, description: "メンバーの健康状態把握と支援" },

  // people / short_organization (9 tasks)
  { id: 74, name: "チームミーティング運営", category: "people", quadrant: "short_organization", baseX: 22, baseY: 14, defaultImportance: 1, description: "チーム定例会議の運営" },
  { id: 75, name: "採用面接", category: "people", quadrant: "short_organization", baseX: 48, baseY: 82, defaultImportance: 1, description: "候補者の面接と評価" },
  { id: 76, name: "スクラムイベント進行", category: "people", quadrant: "short_organization", baseX: 81, baseY: 26, defaultImportance: 1, description: "スクラムイベントのファシリテーション" },
  { id: 77, name: "チームビルディング活動", category: "people", quadrant: "short_organization", baseX: 11, baseY: 47, defaultImportance: 1, description: "チームの結束力向上活動" },
  { id: 78, name: "新メンバーオンボーディング", category: "people", quadrant: "short_organization", baseX: 63, baseY: 53, defaultImportance: 1, description: "新メンバーの受け入れ支援" },
  { id: 79, name: "チーム間コミュニケーション促進", category: "people", quadrant: "short_organization", baseX: 37, baseY: 36, defaultImportance: 1, description: "チーム間の情報共有促進" },
  { id: 80, name: "部門全体会議運営", category: "people", quadrant: "short_organization", baseX: 89, baseY: 72, defaultImportance: 1, description: "部門全体ミーティングの運営" },
  { id: 81, name: "表彰・認知制度運営", category: "people", quadrant: "short_organization", baseX: 7, baseY: 91, defaultImportance: 1, description: "メンバーの功績認知と表彰" },
  { id: 82, name: "ダイバーシティ推進活動", category: "people", quadrant: "short_organization", baseX: 72, baseY: 8, defaultImportance: 1, description: "多様性推進の取り組み" },

  // people / long_individual (8 tasks)
  { id: 83, name: "キャリア開発支援", category: "people", quadrant: "long_individual", baseX: 14, baseY: 18, defaultImportance: 1, description: "メンバーのキャリア形成支援" },
  { id: 84, name: "スキルマップ作成", category: "people", quadrant: "long_individual", baseX: 58, baseY: 62, defaultImportance: 1, description: "チームのスキル可視化" },
  { id: 85, name: "成長計画策定", category: "people", quadrant: "long_individual", baseX: 86, baseY: 27, defaultImportance: 1, description: "メンバーの成長計画作成" },
  { id: 86, name: "評価制度の適用", category: "people", quadrant: "long_individual", baseX: 33, baseY: 43, defaultImportance: 1, description: "評価基準の公正な適用" },
  { id: 87, name: "昇進・昇格推薦", category: "people", quadrant: "long_individual", baseX: 72, baseY: 84, defaultImportance: 1, description: "メンバーの昇進・昇格推薦" },
  { id: 88, name: "トレーニング計画", category: "people", quadrant: "long_individual", baseX: 44, baseY: 91, defaultImportance: 1, description: "スキル向上のための研修計画" },
  { id: 89, name: "ストレッチゴール設定", category: "people", quadrant: "long_individual", baseX: 8, baseY: 72, defaultImportance: 1, description: "挑戦的な目標の設定" },
  { id: 90, name: "後継者育成", category: "people", quadrant: "long_individual", baseX: 91, baseY: 53, defaultImportance: 1, description: "次世代リーダーの育成" },

  // people / long_organization (9 tasks)
  { id: 91, name: "採用戦略策定", category: "people", quadrant: "long_organization", baseX: 16, baseY: 27, defaultImportance: 1, description: "中長期の採用戦略策定" },
  { id: 92, name: "組織設計・チーム構成", category: "people", quadrant: "long_organization", baseX: 52, baseY: 82, defaultImportance: 1, description: "組織構造とチーム編成設計" },
  { id: 93, name: "評価制度設計", category: "people", quadrant: "long_organization", baseX: 83, baseY: 14, defaultImportance: 1, description: "評価制度の設計と改善" },
  { id: 94, name: "研修プログラム設計", category: "people", quadrant: "long_organization", baseX: 38, baseY: 48, defaultImportance: 1, description: "組織の研修プログラム設計" },
  { id: 95, name: "組織文化醸成", category: "people", quadrant: "long_organization", baseX: 68, baseY: 36, defaultImportance: 1, description: "エンジニア文化の醸成" },
  { id: 96, name: "エンゲージメント調査", category: "people", quadrant: "long_organization", baseX: 9, baseY: 67, defaultImportance: 1, description: "従業員エンゲージメントの調査" },
  { id: 97, name: "報酬・待遇設計", category: "people", quadrant: "long_organization", baseX: 27, baseY: 91, defaultImportance: 1, description: "報酬体系と待遇の設計" },
  { id: 98, name: "リテンション施策", category: "people", quadrant: "long_organization", baseX: 74, baseY: 58, defaultImportance: 1, description: "人材定着のための施策立案" },
  { id: 99, name: "技術広報・ブランディング", category: "people", quadrant: "long_organization", baseX: 91, baseY: 88, defaultImportance: 1, description: "技術ブランドの構築と発信" },

  // ============================================================
  // Technology Management (30 tasks: id 100-129)
  // ============================================================

  // technology / short_individual (7 tasks)
  { id: 100, name: "コードレビュー", category: "technology", quadrant: "short_individual", baseX: 9, baseY: 41, defaultImportance: 1, description: "コードの品質レビュー" },
  { id: 101, name: "技術的意思決定", category: "technology", quadrant: "short_individual", baseX: 52, baseY: 23, defaultImportance: 1, description: "技術選択の意思決定" },
  { id: 102, name: "バグ調査・修正", category: "technology", quadrant: "short_individual", baseX: 84, baseY: 78, defaultImportance: 1, description: "バグの原因調査と修正" },
  { id: 103, name: "パフォーマンスチューニング", category: "technology", quadrant: "short_individual", baseX: 27, baseY: 86, defaultImportance: 1, description: "システム性能の最適化" },
  { id: 104, name: "セキュリティレビュー", category: "technology", quadrant: "short_individual", baseX: 68, baseY: 52, defaultImportance: 1, description: "セキュリティ観点のレビュー" },
  { id: 105, name: "技術ドキュメント更新", category: "technology", quadrant: "short_individual", baseX: 39, baseY: 11, defaultImportance: 1, description: "技術文書の更新と整備" },
  { id: 106, name: "ライブラリアップデート", category: "technology", quadrant: "short_individual", baseX: 91, baseY: 33, defaultImportance: 1, description: "依存ライブラリの更新管理" },

  // technology / short_organization (8 tasks)
  { id: 107, name: "アーキテクチャレビュー会", category: "technology", quadrant: "short_organization", baseX: 18, baseY: 21, defaultImportance: 1, description: "アーキテクチャの定期レビュー" },
  { id: 108, name: "技術選定会議", category: "technology", quadrant: "short_organization", baseX: 54, baseY: 76, defaultImportance: 1, description: "技術スタックの選定会議" },
  { id: 109, name: "セキュリティ監査", category: "technology", quadrant: "short_organization", baseX: 82, baseY: 12, defaultImportance: 1, description: "セキュリティの定期監査" },
  { id: 110, name: "SLO/SLAモニタリング", category: "technology", quadrant: "short_organization", baseX: 33, baseY: 53, defaultImportance: 1, description: "SLO/SLA指標の監視" },
  { id: 111, name: "インフラコスト管理", category: "technology", quadrant: "short_organization", baseX: 71, baseY: 42, defaultImportance: 1, description: "インフラコストの監視と最適化" },
  { id: 112, name: "障害分析・ポストモーテム", category: "technology", quadrant: "short_organization", baseX: 89, baseY: 64, defaultImportance: 1, description: "障害の根本原因分析と再発防止" },
  { id: 113, name: "技術標準策定", category: "technology", quadrant: "short_organization", baseX: 8, baseY: 87, defaultImportance: 1, description: "コーディング規約等の標準策定" },
  { id: 114, name: "共通基盤メンテナンス", category: "technology", quadrant: "short_organization", baseX: 46, baseY: 33, defaultImportance: 1, description: "共通基盤の保守運用" },

  // technology / long_individual (8 tasks)
  { id: 115, name: "新技術調査・PoC", category: "technology", quadrant: "long_individual", baseX: 11, baseY: 34, defaultImportance: 1, description: "新技術の調査と概念実証" },
  { id: 116, name: "技術スキル向上", category: "technology", quadrant: "long_individual", baseX: 48, baseY: 17, defaultImportance: 1, description: "自身の技術力向上" },
  { id: 117, name: "特許・技術論文", category: "technology", quadrant: "long_individual", baseX: 82, baseY: 71, defaultImportance: 1, description: "特許出願や技術論文の執筆" },
  { id: 118, name: "テスト自動化推進", category: "technology", quadrant: "long_individual", baseX: 27, baseY: 58, defaultImportance: 1, description: "テスト自動化の推進と拡充" },
  { id: 119, name: "開発環境改善", category: "technology", quadrant: "long_individual", baseX: 63, baseY: 44, defaultImportance: 1, description: "開発環境の継続的改善" },
  { id: 120, name: "パフォーマンス改善計画", category: "technology", quadrant: "long_individual", baseX: 91, baseY: 23, defaultImportance: 1, description: "長期的な性能改善計画" },
  { id: 121, name: "アーキテクチャ設計", category: "technology", quadrant: "long_individual", baseX: 38, baseY: 86, defaultImportance: 1, description: "システムアーキテクチャの設計" },
  { id: 122, name: "デプロイ自動化", category: "technology", quadrant: "long_individual", baseX: 74, baseY: 92, defaultImportance: 1, description: "デプロイプロセスの自動化" },

  // technology / long_organization (7 tasks)
  { id: 123, name: "技術戦略策定", category: "technology", quadrant: "long_organization", baseX: 19, baseY: 16, defaultImportance: 1, description: "組織の技術戦略策定" },
  { id: 124, name: "アーキテクチャ刷新計画", category: "technology", quadrant: "long_organization", baseX: 57, baseY: 73, defaultImportance: 1, description: "アーキテクチャの刷新計画" },
  { id: 125, name: "技術スタック標準化", category: "technology", quadrant: "long_organization", baseX: 86, baseY: 29, defaultImportance: 1, description: "組織の技術スタック標準化" },
  { id: 126, name: "セキュリティポリシー策定", category: "technology", quadrant: "long_organization", baseX: 34, baseY: 52, defaultImportance: 1, description: "セキュリティポリシーの策定" },
  { id: 127, name: "SREプラクティス導入", category: "technology", quadrant: "long_organization", baseX: 72, baseY: 44, defaultImportance: 1, description: "SRE実践の組織導入" },
  { id: 128, name: "技術コミュニティ運営", category: "technology", quadrant: "long_organization", baseX: 8, baseY: 84, defaultImportance: 1, description: "社内技術コミュニティの運営" },
  { id: 129, name: "イノベーション推進", category: "technology", quadrant: "long_organization", baseX: 47, baseY: 91, defaultImportance: 1, description: "技術イノベーションの推進" },
];
