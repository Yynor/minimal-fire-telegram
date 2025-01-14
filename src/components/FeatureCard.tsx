import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard = ({ title, description }: FeatureCardProps) => {
  return (
    <Card className="bg-background/50 border-primary/20 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-primary">{title}</CardTitle>
        <CardDescription className="text-foreground/80">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default FeatureCard;