import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <Card className="bg-background/50 border-primary/20 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 group">
      <CardHeader>
        <div className="text-4xl mb-4 transform transition-transform group-hover:scale-110 group-hover:rotate-12">
          {icon}
        </div>
        <CardTitle className="text-xl text-primary group-hover:text-secondary transition-colors">{title}</CardTitle>
        <CardDescription className="text-foreground/80">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default FeatureCard;