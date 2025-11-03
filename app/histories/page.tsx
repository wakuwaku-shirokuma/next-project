import WorkSection from '../components/WorkSection';
import { workHistory } from '../data/workHistory';

export default function HistoriesPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">職歴</h1>
        <WorkSection title="正社員" works={workHistory.正社員} />
        <WorkSection title="個人事業主（副業）" works={workHistory["個人事業主（副業）"]} />
      </div>
    </div>
  );
}
