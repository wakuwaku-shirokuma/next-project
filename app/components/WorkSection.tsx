import WorkCard from './WorkCard';
import { WorkItem } from '../data/workHistory';

interface WorkSectionProps {
  title: string;
  works: WorkItem[];
}

export default function WorkSection({ title, works }: WorkSectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-700">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {works.map((work, index) => (
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
  );
}
