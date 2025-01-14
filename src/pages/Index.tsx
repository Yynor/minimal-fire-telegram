import React from 'react';
import { Button } from "@/components/ui/button";
import FirefliesBackground from '../components/FirefliesBackground';
import FeatureCard from '../components/FeatureCard';

const Index = () => {
  const handleTelegramClick = () => {
    window.open('https://t.me/nesosalbot', '_blank');
  };

  const features = [
    {
      title: "Надежность",
      description: "Гарантируем качество и своевременность выполнения заказов"
    },
    {
      title: "Безопасность",
      description: "Полная конфиденциальность и защита ваших данных"
    },
    {
      title: "Выгодные условия",
      description: "Конкурентные цены и гибкая система скидок"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <FirefliesBackground />
      
      <main className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Профессиональная биржа отзывов
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-foreground/80">
            Повысьте доверие к вашему бизнесу с помощью качественных отзывов
          </p>

          <Button 
            onClick={handleTelegramClick}
            className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Связаться с нами в Telegram
          </Button>
        </div>

        <div className="mt-32 grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="opacity-0 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;