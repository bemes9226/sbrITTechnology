interface DynamicCardProps {
  label: string;
  property: string;
  activeProgress: number;
  onClick: (property: string, activeProgress: number) => void;
}

export const DynamicCard: React.FC<DynamicCardProps> = ({
  label,
  property,
  activeProgress,
  onClick,
}) => {
  return (
    <div
      onClick={() => onClick(property, activeProgress)}
      className="p-4 rounded shadow-md cursor-pointer transition"
      style={{
        backgroundColor: activeProgress >= 4 ? "gold" : "gray",
      }}
    >
      <div className="mb-4">
        <h3 className="font-semibold text-lg">{label}</h3>
        <p>Progress: {activeProgress}/4</p>
      </div>

      {/* Horizontal Status Bar */}
      <div className="flex space-x-1">
        {[1, 2, 3, 4].map((line) => (
          <div
            key={line}
            className={`h-2 flex-1 rounded transition ${
              line <= activeProgress ? "bg-aegreen-500" : "bg-aegold-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default DynamicCard;
