interface WorkCardProps {
  companyName: string;
  startDate: string;
  endDate: string;
  thumbnail: string;
}

export default function WorkCard({ companyName, startDate, endDate, thumbnail }: WorkCardProps) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4 hover:shadow-xl transition-shadow">
      <img src={thumbnail} alt={companyName} className="w-full h-48 object-cover mb-4 rounded" />
      <div className="font-bold text-xl mb-2">{companyName}</div>
      <p className="text-gray-700 text-base">
        {startDate} 〜 {endDate}
      </p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
        詳細
      </button>
    </div>
  );
}
