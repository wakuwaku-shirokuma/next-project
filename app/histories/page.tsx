import WorkCard from '../components/WorkCard';

const workHistory = {
  "正社員": [
    {
      "企業名": "サイド・ビィ株式会社",
      "開始年月": "2015-04",
      "終了年月": "2016-10",
      "サムネイル画像": "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=400&fit=crop"
    },
    {
      "企業名": "株式会社ファンデリー",
      "開始年月": "2016-11",
      "終了年月": "2021-08",
      "サムネイル画像": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop"
    },
    {
      "企業名": "エムスリーキャリア株式会社",
      "開始年月": "2021-09",
      "終了年月": "現在",
      "サムネイル画像": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=400&fit=crop"
    }
  ],
  "個人事業主（副業）": [
    {
      "企業名": "株式会社いいんじゃ（株式会社ヒトクセ）",
      "開始年月": "2021-12",
      "終了年月": "2022-05",
      "サムネイル画像": "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&h=400&fit=crop"
    },
    {
      "企業名": "株式会社スタメン",
      "開始年月": "2025-01",
      "終了年月": "2025-03",
      "サムネイル画像": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop"
    },
    {
      "企業名": "株式会社インフラトップ",
      "開始年月": "2022-05",
      "終了年月": "2025-08",
      "サムネイル画像": "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=400&fit=crop"
    },
    {
      "企業名": "株式会社ローカルイノベーション",
      "開始年月": "2025-07",
      "終了年月": "継続中",
      "サムネイル画像": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=400&fit=crop"
    }
  ]
};

export default function HistoriesPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">職歴</h1>
        
        {/* 正社員 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-700">正社員</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workHistory.正社員.map((work, index) => (
              <WorkCard
                key={index}
                companyName={work.企業名}
                startDate={work.開始年月}
                endDate={work.終了年月}
                thumbnail={work.サムネイル画像}
              />
            ))}
          </div>
        </section>

        {/* 個人事業主（副業） */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-gray-700">個人事業主（副業）</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workHistory["個人事業主（副業）"].map((work, index) => (
              <WorkCard
                key={index}
                companyName={work.企業名}
                startDate={work.開始年月}
                endDate={work.終了年月}
                thumbnail={work.サムネイル画像}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
