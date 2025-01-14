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
      title: "Качество",
      description: "Мы гарантируем высокое качество отзывов от реальных пользователей"
    },
    {
      title: "Скорость",
      description: "Быстрое выполнение заказов в течение 24 часов"
    },
    {
      title: "Поддержка",
      description: "Персональный менеджер для каждого клиента 24/7"
    },
    {
      title: "Гарантии",
      description: "100% возврат средств при неудовлетворительном результате"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <FirefliesBackground />
      
      <main className="container mx-auto px-4 pt-32 pb-20 relative z-10">
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

        <div className="mt-32 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="opacity-0 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </main>

      <footer className="relative z-10 border-t border-primary/20 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-foreground/60 text-sm">
            <div className="flex items-center space-x-4">
              <span>Контакты:</span>
              <a href="https://t.me/yyn0r" className="hover:text-primary transition-colors">@yyn0r</a>
            </div>
            <div>
              <p>©2019-2025</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;