import Link from 'next/link';

export default function CareerCard({ title, linkUrl, location }: { title: string, linkUrl: string, location: string }) {
  return (
    <div className="flex justify-between text-lg flex-row items-center gap-2">
      <Link href={linkUrl} className="underline hover:text-gray-500">{title}</Link>
      <p className="text-gray-500">{location}</p>
    </div>
  );
}