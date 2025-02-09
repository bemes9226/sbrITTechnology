import React, { useState } from "react";

interface AccessibilityCardProps {
  cardId: number;
  isSelected: boolean;
  onSelect: (cardId: number) => void;
}

const AccessibilityCard: React.FC<AccessibilityCardProps> = ({
  cardId,
  isSelected,
  onSelect,
}) => {
  const [statusIndex, setStatusIndex] = useState(0);

  const handleClick = () => {
    if (isSelected) {
      setStatusIndex((prev) => (prev + 1) % 4); // Loop through 4 states
    }
    onSelect(cardId); // Toggle selection
  };

  return (
    <div
      className={`p-4 rounded-lg shadow-lg border cursor-pointer transition-all hover:shadow-xl ${
        isSelected ? "border-blue-500 bg-aegold-600" : "bg-aeblack-700"
      }`}
      onClick={handleClick}
      tabIndex={0}
      role="button"
      aria-label={`Card ${cardId} with status ${statusIndex + 1}`}
    >
      <h2 className="text-xl font-bold">Card {cardId}</h2>

      {/* Status Bar */}
      <div className="flex space-x-2 mt-2">
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className={`h-1 w-6 rounded transition-all ${
              isSelected && statusIndex === index
                ? "bg-blue-500"
                : "bg-gray-300"
            }`}
            aria-hidden="true"
          ></div>
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleCardSelect = (cardId: number) => {
    setSelectedCard((prev) => (prev === cardId ? null : cardId)); // Toggle selection
  };

  return (
    <div className="max-w-md mx-auto mt-10 space-y-4">
      <h1 className="text-2xl font-semibold text-center">Select a Card</h1>

      {[1, 2, 3].map((cardId) => (
        <AccessibilityCard
          key={cardId}
          cardId={cardId}
          isSelected={selectedCard === cardId}
          onSelect={handleCardSelect}
        />
      ))}
    </div>
  );
};

export default Home;
