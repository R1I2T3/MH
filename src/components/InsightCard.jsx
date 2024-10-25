export default function InsightCard({ title, content }) {
    return (
      <div className="border p-4 rounded shadow mb-2">
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{content}</p>
      </div>
    );
  }
  