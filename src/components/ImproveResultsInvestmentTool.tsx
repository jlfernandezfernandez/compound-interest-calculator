// components/ImproveResultsInvestmentTool.tsx
import React from "react";
import { ArrowRight } from "lucide-react";

interface ImproveResultsInvestmentToolProps {
  title: string;
  description: string;
  emoji: string;
  link: string;
  linkText: string;
  referralBenefit?: string;
}

const ImproveResultsInvestmentTool: React.FC<
  ImproveResultsInvestmentToolProps
> = ({ title, description, emoji, link, linkText, referralBenefit }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6 transition-all duration-300 hover:shadow-md">
    <div className="flex items-center mb-3">
      <span className="text-3xl mr-3">{emoji}</span>
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <p className="text-gray-600 mb-4 text-sm">{description}</p>
    <p className="text-green-600 text-sm mb-4">{referralBenefit}</p>
    <a
      href={link}
      className="text-blue-600 hover:text-blue-800 text-sm font-semibold inline-flex items-center transition-colors duration-300"
    >
      {linkText} <ArrowRight className="ml-1 h-4 w-4" />
    </a>
  </div>
);

export default ImproveResultsInvestmentTool;
