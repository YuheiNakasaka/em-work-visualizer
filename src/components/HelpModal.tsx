interface Props {
  open: boolean;
  onClose: () => void;
}

export function HelpModal({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full mx-4 max-h-[85vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-xl">
          <h2 className="text-lg font-bold text-gray-800">
            EM Work Visualizer の使い方
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100"
          >
            ✕
          </button>
        </div>

        <div className="px-6 py-5 space-y-6 text-sm text-gray-700 leading-relaxed">
          {/* Overview */}
          <section>
            <h3 className="text-base font-bold text-gray-800 mb-2">
              このツールについて
            </h3>
            <p>
              EM Work Visualizer
              は、エンジニアリングマネージャー（EM）の業務を2Dバブルチャートで可視化するツールです。
              自分が担当している業務を選択することで、業務の全体像を俯瞰できます。
            </p>
          </section>

          {/* Chart axes */}
          <section>
            <h3 className="text-base font-bold text-gray-800 mb-2">
              チャートの見方
            </h3>
            <p className="mb-2">
              チャートの2つの軸は以下を表しています：
            </p>
            <ul className="space-y-1 ml-4 list-disc">
              <li>
                <span className="font-medium text-gray-800">横軸（短期 ↔ 長期）</span>
                ：業務の時間軸。左が短期的・日常的な業務、右が中長期的・戦略的な業務
              </li>
              <li>
                <span className="font-medium text-gray-800">縦軸（個人 ↔ 組織）</span>
                ：業務のスコープ。下が個人・チーム向けの業務、上が組織全体に関わる業務
              </li>
            </ul>
            <p className="mt-2">
              バブルの大きさは「重要度」を表します。重要度が高い業務ほど大きく表示されます。
            </p>
          </section>

          {/* Step-by-step */}
          <section>
            <h3 className="text-base font-bold text-gray-800 mb-2">
              基本的な使い方
            </h3>
            <ol className="space-y-3 ml-4 list-decimal">
              <li>
                <span className="font-medium text-gray-800">
                  カテゴリを選ぶ
                </span>
                <p className="mt-0.5 text-gray-500">
                  左パネル上部のタブ（プロジェクト / プロダクト / ピープル /
                  テクノロジー）から、確認したいカテゴリを選択します。
                </p>
              </li>
              <li>
                <span className="font-medium text-gray-800">
                  業務を選択する
                </span>
                <p className="mt-0.5 text-gray-500">
                  チェックボックスをクリックして、自分が担当している業務にチェックを入れます。
                  「すべて選択」で一括選択もできます。
                </p>
              </li>
              <li>
                <span className="font-medium text-gray-800">
                  重要度を調整する
                </span>
                <p className="mt-0.5 text-gray-500">
                  選択した業務の右側に表示されるスライダーで、重要度（1〜5）を調整します。
                  重要度に応じてチャート上のバブルサイズが変化します。
                </p>
              </li>
              <li>
                <span className="font-medium text-gray-800">
                  具体例を確認する
                </span>
                <p className="mt-0.5 text-gray-500">
                  各業務名の右にある「?」ボタンをクリックすると、その業務の具体的な内容が表示されます。
                </p>
              </li>
              <li>
                <span className="font-medium text-gray-800">
                  チャートを見る
                </span>
                <p className="mt-0.5 text-gray-500">
                  右側のチャートエリアに、選択した業務がバブルとして表示されます。
                  バブルにマウスを乗せると業務名と重要度が確認できます。
                </p>
              </li>
            </ol>
          </section>

          {/* View modes */}
          <section>
            <h3 className="text-base font-bold text-gray-800 mb-2">
              表示モード
            </h3>
            <ul className="space-y-1 ml-4 list-disc">
              <li>
                <span className="font-medium text-gray-800">4分割モード</span>
                ：4つのカテゴリをそれぞれ独立したチャートとして表示します。カテゴリごとの業務分布が見やすいモードです。
              </li>
              <li>
                <span className="font-medium text-gray-800">統合モード</span>
                ：全カテゴリの業務を1つのチャートに重ねて表示します。カテゴリは色で区別されます。全体の業務バランスを確認するのに適しています。
              </li>
            </ul>
            <p className="mt-2 text-gray-500">
              ヘッダー右上の「4分割」「統合」ボタンで切り替えられます。
            </p>
          </section>

          {/* Sidebar */}
          <section>
            <h3 className="text-base font-bold text-gray-800 mb-2">
              パネル操作
            </h3>
            <ul className="space-y-1 ml-4 list-disc">
              <li>
                左パネルの右端にあるドラッグハンドルを掴んで左右に動かすと、パネル幅を調整できます。
              </li>
              <li>
                パネル右端の矢印ボタン（‹）をクリックすると、パネルを折りたたんでチャートを広く表示できます。
                もう一度クリックすると元に戻ります。
              </li>
            </ul>
          </section>

          {/* Sharing */}
          <section>
            <h3 className="text-base font-bold text-gray-800 mb-2">
              共有機能
            </h3>
            <p>
              業務の選択状態・重要度・表示モードはすべてURLに自動保存されます。
              ヘッダーの「Share URL」ボタンをクリックすると、現在の状態を含むURLがクリップボードにコピーされます。
              このURLを他の人に共有すれば、同じ画面を再現できます。
            </p>
          </section>

          {/* Tips */}
          <section>
            <h3 className="text-base font-bold text-gray-800 mb-2">
              活用のヒント
            </h3>
            <ul className="space-y-1 ml-4 list-disc">
              <li>
                まずは自分が実際に担当している業務だけを選択し、重要度を付けてみましょう。
                自分の業務ポートフォリオの偏りが可視化されます。
              </li>
              <li>
                チームメンバーにもURLを共有して、それぞれの業務マップを比較すると、チーム内の業務分担の偏りが見えてきます。
              </li>
              <li>
                統合モードで全体を俯瞰し、特定カテゴリに偏っていないか、短期業務に追われすぎていないかを確認できます。
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
