import React from "react";
import { ChevronDown } from "lucide-react";

const HeroDropdown = ({
  config,
  selectedValues,
  activeDropdown,
  toggleDropdown,
  handleOptionSelect,
  dropdownOptions,
}) => {
  return (
    <div className="relative">
      <label className="block text-white text-sm mb-2 text-left">
        {config.label}
      </label>
      <button
        onClick={() => toggleDropdown(config.key)}
        className="cursor-pointer w-full bg-white/20 backdrop-blur-sm text-white px-4 py-3 rounded-full hover:bg-white/30 transition-all duration-300 flex items-center justify-between text-left"
      >
        <span className="truncate">{selectedValues[config.valueKey]}</span>
        <ChevronDown
          className={`w-4 h-4 ml-2 flex-shrink-0 transition-transform duration-300 ${
            activeDropdown === config.key ? "rotate-180" : ""
          }`}
        />
      </button>

      {activeDropdown === config.key && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 max-h-60 overflow-y-auto z-30">
          {dropdownOptions[config.key].map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionSelect(config.valueKey, option)}
              className="cursor-pointer w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-100 transition-colors first:rounded-t-lg last:rounded-b-lg"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroDropdown;
