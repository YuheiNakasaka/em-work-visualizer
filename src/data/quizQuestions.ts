import type { Category } from "../types";

export interface QuizQuestion {
  title: string;
  scenario: string;
  category: Category;
  taskIds: number[];
}

// Project Management questions (27)
const projectQuestions: QuizQuestion[] = [
  {
    title: "開発計画の作成",
    scenario:
      "4か月後の大型リリースに向けて、要件定義・設計・実装・検証・移行の工程を週単位で引き、どのタイミングで何を終える必要があるかをチームに示す。",
    category: "project",
    taskIds: [0], // スプリントプランニング
  },
  {
    title: "マイルストーン設計",
    scenario:
      "「要件確定」「API実装完了」「結合試験完了」「段階リリース開始」のように、進捗判断に使える区切りを定義する。",
    category: "project",
    taskIds: [28], // 組織横断KPI設計
  },
  {
    title: "スコープ定義",
    scenario:
      "初回リリースでは管理画面のCSV出力までを対象にし、通知機能や権限の細分化は次フェーズに切り分ける。",
    category: "project",
    taskIds: [4], // スコープ調整
  },
  {
    title: "優先順位の整理",
    scenario:
      "売上に直結する申込導線の改善を最優先にし、内部向けの軽微な改善要望は次スプリントへ回す。",
    category: "project",
    taskIds: [43], // プロダクトバックログ優先順位付け
  },
  {
    title: "リリース計画の策定",
    scenario:
      "月末の繁忙期を避け、ステージング確認、本番反映、監視強化、ロールバック手順確認まで含めて公開手順を設計する。",
    category: "project",
    taskIds: [6, 30], // リリース判定, リリースプロセス改善
  },
  {
    title: "タスク分解",
    scenario:
      "「新機能追加」をAPI実装、画面実装、権限制御、テスト追加、運用手順更新に分解して担当と順番を明確にする。",
    category: "project",
    taskIds: [1], // タスク見積もり
  },
  {
    title: "依存関係の洗い出しと調整",
    scenario:
      "決済基盤チームのAPI変更待ちだと判明した段階で、先にモック実装できる範囲と先方への確認事項を整理する。",
    category: "project",
    taskIds: [9], // プロジェクト間依存管理
  },
  {
    title: "進捗確認",
    scenario:
      "デイリーや週次で、予定通り進んでいるかではなく「残課題は何か」「今週中に詰まりそうな箇所はどこか」を確認する。",
    category: "project",
    taskIds: [7], // デイリースタンドアップ運営
  },
  {
    title: "遅延要因の特定",
    scenario:
      "実装が遅れている原因が設計の未確定なのか、レビュー待ちなのか、担当者のキャパ不足なのかを切り分ける。",
    category: "project",
    taskIds: [8], // ブロッカー解消
  },
  {
    title: "ブロッカーの除去",
    scenario:
      "他部署承認がないと進まない案件で、自分が関係者を集めて15分で論点を詰め、その日のうちに意思決定を取る。",
    category: "project",
    taskIds: [8], // ブロッカー解消
  },
  {
    title: "リスクの洗い出し",
    scenario:
      "リリース直前に「データ移行量が想定より多い」「問い合わせ急増の可能性がある」といった懸念を事前に列挙する。",
    category: "project",
    taskIds: [3], // リスク評価
  },
  {
    title: "リスク対応策の立案",
    scenario:
      "もし移行が失敗した場合は旧画面へ戻す、CSへの告知文を先に用意する、監視閾値を一時的に厳しくする、と決める。",
    category: "project",
    taskIds: [3], // リスク評価
  },
  {
    title: "障害時のエスカレーション判断",
    scenario:
      "一時的なエラー増加ではチーム内で対処し、課金や契約に影響する障害は部門責任者やCS責任者に即共有する。",
    category: "project",
    taskIds: [16], // インシデント対応指揮
  },
  {
    title: "関係者とのスケジュール調整",
    scenario:
      "デザイナー確認、QA期間、事業側告知、営業向け周知の締切を並べて、無理のない全体スケジュールに組み直す。",
    category: "project",
    taskIds: [12], // 部門間調整会議
  },
  {
    title: "PdM・デザイナー・QA・事業側との合意形成",
    scenario:
      "納期優先のため一部仕様を簡略化する際に、ユーザー影響・品質リスク・代替案を示して関係者の納得を取る。",
    category: "project",
    taskIds: [12, 44], // 部門間調整会議, ステークホルダーとの要件すり合わせ
  },
  {
    title: "会議体の設計と運営",
    scenario:
      "週次進捗会は意思決定中心、朝会はブロッカー共有中心、月次レビューは学習共有中心と目的別に会議を分ける。",
    category: "project",
    taskIds: [74], // チームミーティング運営
  },
  {
    title: "定例進行のファシリテーション",
    scenario:
      "脱線しがちな定例で、現状確認・論点整理・決定事項・宿題の順に進めて30分で終わらせる。",
    category: "project",
    taskIds: [7], // デイリースタンドアップ運営
  },
  {
    title: "意思決定事項の記録と追跡",
    scenario:
      "「初回は手動運用で始める」「監査ログは次フェーズ」といった決定を残し、後から蒸し返されないようにする。",
    category: "project",
    taskIds: [24], // ドキュメント整備計画
  },
  {
    title: "開発状況の可視化",
    scenario:
      "経営や他部署にも伝わる形で、完了率ではなく「残論点」「リスク」「次の意思決定ポイント」を1枚にまとめる。",
    category: "project",
    taskIds: [15], // 全体進捗ダッシュボード管理
  },
  {
    title: "レポーティング",
    scenario:
      "部門長に対して、進捗・品質懸念・追加人員の必要性を毎週簡潔に共有する。",
    category: "project",
    taskIds: [2, 11], // 進捗レポート作成, ステークホルダー報告
  },
  {
    title: "品質・納期・スコープのトレードオフ判断",
    scenario:
      "締切を守るためにUIの細かな改善は落とすが、監査ログや権限制御の要件は落とさないと判断する。",
    category: "project",
    taskIds: [4, 31], // スコープ調整, 品質基準策定
  },
  {
    title: "開発体制の再配置",
    scenario:
      "重要障害が続いているため、新機能担当から一部メンバーを保守改善チームへ一時的に移す。",
    category: "project",
    taskIds: [10], // リソースアロケーション
  },
  {
    title: "インシデント後の振り返り運営",
    scenario:
      "障害の再発防止会で、誰が悪いかではなく、検知・判断・連絡・復旧のどこが弱かったかを整理する。",
    category: "project",
    taskIds: [19, 112], // プロジェクト振り返り改善, 障害分析・ポストモーテム
  },
  {
    title: "プロジェクト運営ルールの改善",
    scenario:
      "毎回要件確定が遅れるため、「着手条件を満たさない案件はスプリント投入しない」ルールを導入する。",
    category: "project",
    taskIds: [26], // 開発プロセス標準化
  },
  {
    title: "複数案件のポートフォリオ調整",
    scenario:
      "採用管理システム改修、負債返済、法対応の3案件を並べ、四半期内にどこへどれだけ開発力を張るか決める。",
    category: "project",
    taskIds: [29], // ポートフォリオマネジメント
  },
  {
    title: "跨り案件の優先順位調整",
    scenario:
      "3チームに依存する共通認証刷新で、各チームの事情を踏まえながら全体最適の順番を決める。",
    category: "project",
    taskIds: [17], // クロスチーム同期
  },
  {
    title: "経営・部門責任者への進捗説明",
    scenario:
      "「予定より2週間遅れています」ではなく、「要件追加が原因で、Aを削れば当初日程、削らなければ2週間延長です」と説明する。",
    category: "project",
    taskIds: [11], // ステークホルダー報告
  },
];

// Product Management questions (25)
const productQuestions: QuizQuestion[] = [
  {
    title: "プロダクト目標の理解とチームへの接続",
    scenario:
      "「反響数を増やす」という事業目標を、チームには「入力完了率を上げる改善を優先する」という実装テーマに翻訳して伝える。",
    category: "product",
    taskIds: [46], // OKR設定
  },
  {
    title: "事業目標と開発計画の接続",
    scenario:
      "半期の売上目標から逆算し、先に営業支援機能ではなくCVR改善施策を開発計画へ入れる。",
    category: "product",
    taskIds: [46], // OKR設定
  },
  {
    title: "ロードマップ策定への参加",
    scenario:
      "PdMが描いた機能ロードマップに対し、技術制約や基盤投資の必要性を加味して実現順を調整する。",
    category: "product",
    taskIds: [59], // ロードマップ策定・更新
  },
  {
    title: "技術的実現可能性の評価",
    scenario:
      "「リアルタイム通知をすぐ入れたい」要望に対して、既存構成のままだと負荷と保守コストが高いことを説明する。",
    category: "product",
    taskIds: [53], // 技術的実現可能性調査
  },
  {
    title: "開発コスト見積もり",
    scenario:
      "似た改修実績を基に、「最短2週間だが品質担保まで含めると4週間必要」と幅を持って示す。",
    category: "product",
    taskIds: [1], // タスク見積もり
  },
  {
    title: "仕様の実装観点レビュー",
    scenario:
      "UI仕様に見えていないエラーハンドリング、権限、監査ログ、通知条件の抜けを開発視点で補う。",
    category: "product",
    taskIds: [38], // 仕様レビュー
  },
  {
    title: "仕様の曖昧さの解消支援",
    scenario:
      "「申込完了時に通知」という文言に対し、誰に、どの条件で、再送はあるかまで定義を詰める。",
    category: "product",
    taskIds: [37], // 受入条件定義
  },
  {
    title: "MVP範囲の提案",
    scenario:
      "初回は管理者のみ利用可能にして、一般ユーザー向けの権限制御や分析ダッシュボードは後続に回す。",
    category: "product",
    taskIds: [35], // PRD作成
  },
  {
    title: "価値検証のための開発優先順位づけ",
    scenario:
      "最初から全機能を作るのではなく、まずは問い合わせフォーム改善だけ先に出して効果を見る。",
    category: "product",
    taskIds: [43], // プロダクトバックログ優先順位付け
  },
  {
    title: "ユーザー影響と技術負債のバランス判断",
    scenario:
      "新機能要望は強いが現状の実装だと障害リスクが高いため、先に最低限のリファクタを入れてから開発する。",
    category: "product",
    taskIds: [18], // 技術的負債の返済計画
  },
  {
    title: "品質要求レベルの調整",
    scenario:
      "社内向け運用ツールなら多少の手作業を許容する一方、顧客接点画面では表示崩れや性能劣化を許容しない。",
    category: "product",
    taskIds: [31], // 品質基準策定
  },
  {
    title: "運用保守コストを踏まえた仕様提案",
    scenario:
      "毎回手入力が必要な設定項目は、将来の問い合わせ増加を見越してマスタ連携に変更提案する。",
    category: "product",
    taskIds: [55], // ユーザビリティ改善計画
  },
  {
    title: "既存機能改善の提案",
    scenario:
      "新機能より先に、離脱が多い既存フォームの入力補助を改善したほうが成果が出ると提案する。",
    category: "product",
    taskIds: [55], // ユーザビリティ改善計画
  },
  {
    title: "顧客要望と開発可能性のすり合わせ",
    scenario:
      "営業からの「この月内で全部対応したい」に対し、今月はAとB、Cは次月なら品質担保できると調整する。",
    category: "product",
    taskIds: [44], // ステークホルダーとの要件すり合わせ
  },
  {
    title: "CS・営業・事業側からの要求整理",
    scenario:
      "部署ごとに別々に来る要望を「緊急不具合」「売上寄与」「運用改善」に分けて比較可能にする。",
    category: "product",
    taskIds: [49], // カスタマーフィードバック共有
  },
  {
    title: "開発観点でのプロダクト課題の抽出",
    scenario:
      "要望ベースでは見えないが、計測不足やバッチ遅延が改善速度を落としていると課題提起する。",
    category: "product",
    taskIds: [52], // メトリクス設計
  },
  {
    title: "KPIや利用状況を踏まえた改善テーマの提案",
    scenario:
      "利用率が低い画面の新機能追加ではなく、入力途中離脱率の高い画面改善を提案する。",
    category: "product",
    taskIds: [40, 52], // データ分析, メトリクス設計
  },
  {
    title: "開発投資対効果の説明",
    scenario:
      "リファクタは直接売上を生まないが、月次の障害工数を減らし機能開発余力を回復できると説明する。",
    category: "product",
    taskIds: [63], // 技術投資ROI評価
  },
  {
    title: "リリース判断への参加",
    scenario:
      "機能は動くが計測が未整備なので、「今回は限定公開に留める」という判断に加わる。",
    category: "product",
    taskIds: [45], // Go/No-Go判定会議
  },
  {
    title: "リリース後の学習事項の整理",
    scenario:
      "リリース後に想定より使われなかった理由を、導線・UI文言・営業運用の観点で整理する。",
    category: "product",
    taskIds: [47], // プロダクトレビュー会
  },
  {
    title: "中長期ロードマップに対する技術制約の提示",
    scenario:
      "1年後にマルチテナント化を目指すなら、今のうちに認可設計を変えないと後から大きく崩れると伝える。",
    category: "product",
    taskIds: [59], // ロードマップ策定・更新
  },
  {
    title: "プロダクト戦略に沿った技術投資の提案",
    scenario:
      "将来の新規事業展開を見据えて、共通会員基盤や権限基盤への投資を提案する。",
    category: "product",
    taskIds: [58, 61], // プロダクト戦略策定, プラットフォーム戦略
  },
  {
    title: "機能開発と基盤改善の配分調整",
    scenario:
      "四半期の開発余力のうち7割を新機能、3割をテスト基盤改善に配分する。",
    category: "product",
    taskIds: [29], // ポートフォリオマネジメント
  },
  {
    title: "非機能要求の事業上の意味づけ",
    scenario:
      "応答速度改善を「技術的に気持ちいい」ではなく、「反響離脱を減らすために必要」と説明する。",
    category: "product",
    taskIds: [63], // 技術投資ROI評価
  },
  {
    title: "事業フェーズに応じた品質水準の調整",
    scenario:
      "検証初期は手動運用を許容し、拡大フェーズでは監査・権限・可観測性まで整える。",
    category: "product",
    taskIds: [58], // プロダクト戦略策定
  },
];

// People Management questions (36)
const peopleQuestions: QuizQuestion[] = [
  {
    title: "1on1の実施",
    scenario:
      "週1回30分で、進捗確認ではなく本人の悩み、モチベーション、詰まりを継続的に聞く。",
    category: "people",
    taskIds: [65], // 1on1ミーティング
  },
  {
    title: "メンバーの状況把握",
    scenario:
      "いつもより発言が少ない、レビュー反応が遅いなどの変化から負荷や不安を察知する。",
    category: "people",
    taskIds: [73], // 体調・メンタルケア
  },
  {
    title: "コンディション変化の早期察知",
    scenario:
      "残業増加やミス増加が見えた段階で、正式な問題化前に声をかける。",
    category: "people",
    taskIds: [73], // 体調・メンタルケア
  },
  {
    title: "業務上の悩み相談対応",
    scenario:
      "他職種との認識ずれで疲弊しているメンバーに対し、論点整理や同席支援を行う。",
    category: "people",
    taskIds: [68], // メンタリング
  },
  {
    title: "キャリア志向の把握",
    scenario:
      "テックリード志向なのか、マネージャー志向なのか、専門性特化なのかを定期的に確認する。",
    category: "people",
    taskIds: [83], // キャリア開発支援
  },
  {
    title: "目標設定支援",
    scenario:
      "「頑張る」ではなく、「四半期で設計レビューを主導できる状態になる」という具体目標に落とす。",
    category: "people",
    taskIds: [89], // ストレッチゴール設定
  },
  {
    title: "期待値の明確化",
    scenario:
      "シニアに対して「実装が速いこと」だけでなく、「論点を先回りして潰すこと」も期待値として明示する。",
    category: "people",
    taskIds: [66], // パフォーマンスフィードバック
  },
  {
    title: "評価フィードバック",
    scenario:
      "昇格見送り時に「まだ足りない」ではなく、期待等級との差分を具体行動で返す。",
    category: "people",
    taskIds: [66], // パフォーマンスフィードバック
  },
  {
    title: "行動改善フィードバック",
    scenario:
      "レビューで厳しい言い方が続くメンバーに対し、事実と影響を伝えて改善を促す。",
    category: "people",
    taskIds: [66], // パフォーマンスフィードバック
  },
  {
    title: "成果承認・称賛",
    scenario:
      "障害復旧をやり切ったメンバーに対し、チームの前で具体的にどの行動が良かったかを伝える。",
    category: "people",
    taskIds: [81], // 表彰・認知制度運営
  },
  {
    title: "成長課題の明確化",
    scenario:
      "実装力は高いが巻き込み力が弱いメンバーに対し、次の成長テーマを「関係者調整」と定める。",
    category: "people",
    taskIds: [85], // 成長計画策定
  },
  {
    title: "育成計画の作成",
    scenario:
      "半年で設計を任せられる状態にするため、レビュー同席→小規模設計主担当→設計レビュー主導の順で計画を組む。",
    category: "people",
    taskIds: [85], // 成長計画策定
  },
  {
    title: "アサインメント設計",
    scenario:
      "新しい領域を伸ばしたいメンバーを、あえて少し背伸びが必要な案件へ配置する。",
    category: "people",
    taskIds: [67], // タスクアサイン
  },
  {
    title: "ストレッチ機会の提供",
    scenario:
      "普段は実装中心のメンバーに、今回だけ他職種との要件調整役も任せる。",
    category: "people",
    taskIds: [89], // ストレッチゴール設定
  },
  {
    title: "OJTの設計",
    scenario:
      "放置でも付きっきりでもなく、最初の2週間は毎日レビュー、その後は週2回に減らすなど支援密度を設計する。",
    category: "people",
    taskIds: [88], // トレーニング計画
  },
  {
    title: "メンター・レビュアーのアサイン",
    scenario:
      "ドメイン知識が必要な新人に対し、技術面と業務面で別々の相談相手を割り当てる。",
    category: "people",
    taskIds: [68], // メンタリング
  },
  {
    title: "オンボーディング設計",
    scenario:
      "初月で何を学び、誰に会い、どのタスクをこなせば戦力化できるかを事前に設計する。",
    category: "people",
    taskIds: [78], // 新メンバーオンボーディング
  },
  {
    title: "採用要件定義",
    scenario:
      "「Ruby経験者」ではなく、「曖昧な要件下で設計判断できる人」のように必要能力を明文化する。",
    category: "people",
    taskIds: [91], // 採用戦略策定
  },
  {
    title: "面接",
    scenario:
      "単なる知識確認ではなく、過去の意思決定やチームでの振る舞いから再現性を見極める。",
    category: "people",
    taskIds: [75], // 採用面接
  },
  {
    title: "候補者体験の改善",
    scenario:
      "面接間の待ち時間が長い、評価観点が曖昧といった問題を改善して辞退率を下げる。",
    category: "people",
    taskIds: [75], // 採用面接
  },
  {
    title: "採用広報・組織ブランディング",
    scenario:
      "技術ブログやイベント登壇を通じて、「この組織はどんな課題に向き合っているか」を外部に伝える。",
    category: "people",
    taskIds: [99], // 技術広報・ブランディング
  },
  {
    title: "チーム内役割分担の設計",
    scenario:
      "実装・設計・運用・品質改善・育成の役割が一部メンバーに偏らないよう配置する。",
    category: "people",
    taskIds: [92], // 組織設計・チーム構成
  },
  {
    title: "人員配置の最適化",
    scenario:
      "新規開発に強い人、運用改善に強い人を案件特性に合わせて組み替える。",
    category: "people",
    taskIds: [10, 92], // リソースアロケーション, 組織設計・チーム構成
  },
  {
    title: "異動・兼務の調整",
    scenario:
      "別チーム支援が必要だが現チームへの影響も大きいため、期間と責任範囲を明確にして兼務にする。",
    category: "people",
    taskIds: [92], // 組織設計・チーム構成
  },
  {
    title: "低パフォーマンス対応",
    scenario:
      "期待未達の状態に対して、曖昧に見守るのではなく改善期待・期限・支援内容を明確にする。",
    category: "people",
    taskIds: [66], // パフォーマンスフィードバック
  },
  {
    title: "コンフリクトマネジメント",
    scenario:
      "技術方針で衝突した2人に対し、人格ではなく論点と判断基準に戻して対話を設計する。",
    category: "people",
    taskIds: [70], // コンフリクト解消
  },
  {
    title: "心理的安全性の醸成",
    scenario:
      "障害報告や『分からない』の共有がしやすいように、EM自身が先に失敗共有をする。",
    category: "people",
    taskIds: [95], // 組織文化醸成
  },
  {
    title: "チームカルチャーの言語化",
    scenario:
      "「速さより学習」「批判より改善」のように、そのチームで大事にする行動原則を明文化する。",
    category: "people",
    taskIds: [95], // 組織文化醸成
  },
  {
    title: "チーム規範の設計",
    scenario:
      "レビューは24時間以内に一次反応する、設計変更は先に共有する、など日常ルールを整える。",
    category: "people",
    taskIds: [76], // スクラムイベント進行
  },
  {
    title: "エンゲージメント向上施策",
    scenario:
      "仕事の意義が見えにくいチームで、利用者の声共有や成果の見える化を定例に入れる。",
    category: "people",
    taskIds: [96], // エンゲージメント調査
  },
  {
    title: "離職予兆の把握と対応",
    scenario:
      "急な有給増加、将来不安の発言、評価への強い不満が続く場合に、役割や期待値の見直しを行う。",
    category: "people",
    taskIds: [98], // リテンション施策
  },
  {
    title: "後継者育成",
    scenario:
      "EMが不在でも回るように、Tech Leadやサブリーダーへ意思決定の一部を移譲していく。",
    category: "people",
    taskIds: [90], // 後継者育成
  },
  {
    title: "マネージャー候補の育成",
    scenario:
      "希望者に1on1同席、評価文章レビュー、採用面接同席などを通じて管理業務を体験してもらう。",
    category: "people",
    taskIds: [90], // 後継者育成
  },
  {
    title: "評価制度運用",
    scenario:
      "評価会議前に各メンバーの実績を集め、評価のばらつきが出ないよう基準に沿ってすり合わせる。",
    category: "people",
    taskIds: [86, 93], // 評価制度の適用, 評価制度設計
  },
  {
    title: "等級期待のすり合わせ",
    scenario:
      "「シニアなら何ができればよいか」を抽象語ではなく具体行動レベルでチームに共有する。",
    category: "people",
    taskIds: [86], // 評価制度の適用
  },
  {
    title: "報酬・昇給・昇格判断へのインプット",
    scenario:
      "目立つ成果だけでなく継続的な再現性や周囲への波及効果も含めて処遇判断材料を出す。",
    category: "people",
    taskIds: [87, 97], // 昇進・昇格推薦, 報酬・待遇設計
  },
];

// Technology Management questions (34)
const technologyQuestions: QuizQuestion[] = [
  {
    title: "技術方針の策定",
    scenario:
      "今後3年間はRailsを中核にしつつ、周辺機能だけを段階的に分離する、といった全体方針を定める。",
    category: "technology",
    taskIds: [123], // 技術戦略策定
  },
  {
    title: "技術選定",
    scenario:
      "新規API基盤でGoを採用するか既存のRubyで統一するかを、採用難易度・保守性・既存知識を踏まえて判断する。",
    category: "technology",
    taskIds: [101, 108], // 技術的意思決定, 技術選定会議
  },
  {
    title: "アーキテクチャ方針の整理",
    scenario:
      "モノリスを維持するのか、境界の明確な一部機能だけサービス分割するのかを整理する。",
    category: "technology",
    taskIds: [121, 124], // アーキテクチャ設計, アーキテクチャ刷新計画
  },
  {
    title: "技術負債の可視化",
    scenario:
      "属人的なバッチ、テスト不足箇所、更新停止ライブラリなどを棚卸しして優先順位をつける。",
    category: "technology",
    taskIds: [18], // 技術的負債の返済計画
  },
  {
    title: "技術負債の返済計画立案",
    scenario:
      "全面刷新ではなく、四半期ごとに「認証」「テスト」「バッチ監視」の順で改善ロードマップを引く。",
    category: "technology",
    taskIds: [18], // 技術的負債の返済計画
  },
  {
    title: "非機能要求の整理",
    scenario:
      "性能、監査、セキュリティ、可用性など、仕様書では抜けやすい要求を一覧化して確認する。",
    category: "technology",
    taskIds: [110], // SLO/SLAモニタリング
  },
  {
    title: "可用性・性能・セキュリティ要件の優先順位づけ",
    scenario:
      "管理画面なら多少遅くてもよいが、申込導線はピーク時でも落ちないことを最優先に置く。",
    category: "technology",
    taskIds: [110], // SLO/SLAモニタリング
  },
  {
    title: "開発プロセスの設計",
    scenario:
      "要件定義、設計レビュー、実装、QA、リリース確認の流れをチーム共通で定める。",
    category: "technology",
    taskIds: [26], // 開発プロセス標準化
  },
  {
    title: "コードレビュー運用設計",
    scenario:
      "緊急時を除きLGTM2名、設計変更はADR記録必須などレビューの扱いを定める。",
    category: "technology",
    taskIds: [100], // コードレビュー
  },
  {
    title: "テスト戦略の設計",
    scenario:
      "E2Eは主要導線だけに絞り、ロジックはユニットテスト中心で担保する方針を決める。",
    category: "technology",
    taskIds: [23], // テスト戦略策定
  },
  {
    title: "リリースフローの整備",
    scenario:
      "手順が人によって違う状態を改め、チェックリスト、承認者、ロールバック条件を標準化する。",
    category: "technology",
    taskIds: [30], // リリースプロセス改善
  },
  {
    title: "CI/CD改善",
    scenario:
      "40分かかるテストを分割実行やキャッシュ見直しで15分まで短縮する。",
    category: "technology",
    taskIds: [22], // CI/CDパイプライン改善計画
  },
  {
    title: "監視運用の整備",
    scenario:
      "障害が起きてから気づく状態をやめ、重要指標のアラートやダッシュボードを整備する。",
    category: "technology",
    taskIds: [110], // SLO/SLAモニタリング
  },
  {
    title: "障害対応プロセスの整備",
    scenario:
      "障害発生時の司令塔、連絡先、暫定復旧、恒久対応の流れを明文化する。",
    category: "technology",
    taskIds: [32], // 障害対応フロー整備
  },
  {
    title: "インシデント管理",
    scenario:
      "障害ごとに重要度判定を行い、一次対応・エスカレーション・顧客影響整理を一貫して進める。",
    category: "technology",
    taskIds: [16], // インシデント対応指揮
  },
  {
    title: "ポストモーテム文化の定着",
    scenario:
      "大きな障害のたびに、再発防止と学習のための振り返りを責任追及なしで実施する。",
    category: "technology",
    taskIds: [112], // 障害分析・ポストモーテム
  },
  {
    title: "開発生産性の計測",
    scenario:
      "PRリードタイム、デプロイ頻度、手戻り率を見て、どこで開発が詰まっているかを把握する。",
    category: "technology",
    taskIds: [21], // 個人の生産性メトリクス設計
  },
  {
    title: "DORA指標等の運用改善",
    scenario:
      "変更失敗率が高いなら、レビュー強化ではなく段階リリースやテスト自動化を優先する。",
    category: "technology",
    taskIds: [25], // 開発フロー最適化
  },
  {
    title: "技術標準の策定",
    scenario:
      "新規画面はTypeScript必須、バックエンドのAPI設計はOpenAPIで管理、など共通基準を作る。",
    category: "technology",
    taskIds: [113, 125], // 技術標準策定, 技術スタック標準化
  },
  {
    title: "コーディング規約整備",
    scenario:
      "命名、例外処理、ログ出力、非同期処理の扱いなどを曖昧にしないよう文書化する。",
    category: "technology",
    taskIds: [113], // 技術標準策定
  },
  {
    title: "ドキュメント整備の推進",
    scenario:
      "『知っている人に聞く』前提を減らすため、運用手順や設計判断をドキュメント化する。",
    category: "technology",
    taskIds: [105], // 技術ドキュメント更新
  },
  {
    title: "ナレッジ共有の仕組み化",
    scenario:
      "障害共有会、設計共有会、技術メモ置き場などを継続運用して学習をチームに残す。",
    category: "technology",
    taskIds: [128], // 技術コミュニティ運営
  },
  {
    title: "技術的意思決定のレビュー",
    scenario:
      "メンバーが提案したキャッシュ導入やDB分割案について、将来の運用負荷まで含めてレビューする。",
    category: "technology",
    taskIds: [107], // アーキテクチャレビュー会
  },
  {
    title: "セキュリティ対応の推進",
    scenario:
      "脆弱性通知が来たライブラリについて、影響調査、更新優先度、対応日程を整理する。",
    category: "technology",
    taskIds: [104, 109], // セキュリティレビュー, セキュリティ監査
  },
  {
    title: "権限管理・監査対応の整備",
    scenario:
      "誰が本番操作できるか、いつ権限付与されたかを追えるように管理ルールを整える。",
    category: "technology",
    taskIds: [126], // セキュリティポリシー策定
  },
  {
    title: "ライブラリ・依存関係管理の方針化",
    scenario:
      "放置されがちな依存更新を、月1回の更新サイクルと担当ルールで運用する。",
    category: "technology",
    taskIds: [106], // ライブラリアップデート
  },
  {
    title: "インフラコスト最適化",
    scenario:
      "使われていない高性能DBや過剰なログ保管を見直して、品質を落とさずコストを下げる。",
    category: "technology",
    taskIds: [111], // インフラコスト管理
  },
  {
    title: "SRE/Platform的改善の推進",
    scenario:
      "各チームが毎回同じセットアップで苦しむため、共通のデプロイ基盤やテンプレートを整備する。",
    category: "technology",
    taskIds: [127, 114], // SREプラクティス導入, 共通基盤メンテナンス
  },
  {
    title: "開発環境整備",
    scenario:
      "新メンバーが半日で立ち上がれるように、ローカル環境構築手順やDev Containerを整える。",
    category: "technology",
    taskIds: [119], // 開発環境改善
  },
  {
    title: "生成AI・新技術導入判断",
    scenario:
      "コード補完AIを全社導入する前に、セキュリティ、費用、実効性を小さく検証する。",
    category: "technology",
    taskIds: [115, 129], // 新技術調査・PoC, イノベーション推進
  },
  {
    title: "属人化の解消",
    scenario:
      "一人しか触れないバッチ処理について、手順書、レビュー、交代運用で『その人がいないと困る』状態を減らす。",
    category: "technology",
    taskIds: [84], // スキルマップ作成
  },
  {
    title: "保守性向上施策",
    scenario:
      "条件分岐だらけの重要処理を整理し、変更時に壊しにくい構造へ徐々に改善する。",
    category: "technology",
    taskIds: [18], // 技術的負債の返済計画
  },
  {
    title: "技術広報",
    scenario:
      "採用や社外認知のために、実際に向き合っている技術課題や改善事例を発信する。",
    category: "technology",
    taskIds: [99], // 技術広報・ブランディング
  },
  {
    title: "社内外技術発信の推進",
    scenario:
      "メンバーの登壇やブログ執筆を支援し、組織知見を外にも内にも残る形にする。",
    category: "technology",
    taskIds: [99, 128], // 技術広報・ブランディング, 技術コミュニティ運営
  },
];

export const QUIZ_QUESTIONS_BY_CATEGORY: Record<Category, QuizQuestion[]> = {
  project: projectQuestions,
  product: productQuestions,
  people: peopleQuestions,
  technology: technologyQuestions,
};

export const ALL_QUIZ_QUESTIONS: QuizQuestion[] = [
  ...projectQuestions,
  ...productQuestions,
  ...peopleQuestions,
  ...technologyQuestions,
];
