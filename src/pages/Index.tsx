import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [onlinePlayers, setOnlinePlayers] = useState(1247);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const interval = setInterval(() => {
      setOnlinePlayers(prev => prev + Math.floor(Math.random() * 3) - 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { id: 'home', label: 'ГЛАВНАЯ', icon: 'Home' },
    { id: 'game', label: 'ИГРА', icon: 'Gamepad2' },
    { id: 'rules', label: 'ПРАВИЛА', icon: 'Book' },
    { id: 'news', label: 'НОВОСТИ', icon: 'Newspaper' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gaming-dark via-black to-gaming-dark text-white font-roboto">
      {/* Header */}
      <header className="relative z-10 p-4 lg:p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl lg:text-2xl font-orbitron font-bold text-white">
              ONE PROJECT
            </h1>
            <Badge variant="secondary" className="bg-green-600 text-white animate-pulse-glow">
              ИГРОКОВ: {onlinePlayers.toLocaleString()}
            </Badge>
          </div>
          
          <Button 
            variant="outline"
            className="bg-primary hover:bg-primary/80 text-white border-primary/50 animate-glow font-orbitron"
            onClick={() => setActiveSection('game')}
          >
            НАЧАТЬ ИГРАТЬ
          </Button>
        </div>
      </header>

      {/* Navigation */}
      <nav className="relative z-10 px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex space-x-1 lg:space-x-2 bg-black/20 backdrop-blur-sm rounded-lg p-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'bg-primary text-white animate-glow' 
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon name={item.icon as any} size={16} />
                <span className="font-orbitron text-sm">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative flex-1 flex items-center justify-center px-4 py-16 lg:py-24">
        {/* Background Effect */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-96 h-96 lg:w-[600px] lg:h-[600px] bg-gradient-radial from-primary/20 via-primary/5 to-transparent rounded-full animate-pulse-glow"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="font-orbitron font-bold text-4xl lg:text-8xl mb-8 bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent animate-glow">
            ONE PROJECT
          </h1>
          
          <p className="text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к эпической онлайн-битве! Играйте с друзьями, 
            покоряйте новые миры и станьте легендой.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/80 text-white font-orbitron text-lg px-8 py-4 animate-glow group"
              onClick={() => setActiveSection('game')}
            >
              <Icon name="Play" size={20} className="mr-2 group-hover:animate-pulse" />
              НАЧАТЬ ИГРУ
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 font-orbitron text-lg px-8 py-4"
              onClick={() => setActiveSection('rules')}
            >
              <Icon name="Book" size={20} className="mr-2" />
              ПРАВИЛА
            </Button>
          </div>

          {/* Game Features */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16">
            <Card className="bg-black/40 border-primary/30 backdrop-blur-sm hover:bg-black/60 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-primary/20 rounded-full group-hover:animate-pulse">
                    <Icon name="Users" size={32} className="text-primary" />
                  </div>
                </div>
                <h3 className="font-orbitron font-bold text-xl mb-2">МУЛЬТИПЛЕЕР</h3>
                <p className="text-gray-400">Играйте с друзьями в режиме реального времени</p>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-primary/30 backdrop-blur-sm hover:bg-black/60 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-primary/20 rounded-full group-hover:animate-pulse">
                    <Icon name="Trophy" size={32} className="text-primary" />
                  </div>
                </div>
                <h3 className="font-orbitron font-bold text-xl mb-2">ТУРНИРЫ</h3>
                <p className="text-gray-400">Участвуйте в соревнованиях и выигрывайте призы</p>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-primary/30 backdrop-blur-sm hover:bg-black/60 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-primary/20 rounded-full group-hover:animate-pulse">
                    <Icon name="Zap" size={32} className="text-primary" />
                  </div>
                </div>
                <h3 className="font-orbitron font-bold text-xl mb-2">БЫСТРАЯ ИГРА</h3>
                <p className="text-gray-400">Мгновенный поиск матчей и низкая задержка</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer Status */}
      <footer className="relative z-10 p-4 lg:p-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm text-gray-400">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>СЕРВЕР ОНЛАЙН</span>
            </div>
            <span>PING: 12ms</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>© 2024 ONE PROJECT</span>
            <div className="flex space-x-2">
              <Icon name="MessageCircle" size={16} className="text-gray-500 hover:text-primary cursor-pointer transition-colors" />
              <Icon name="Send" size={16} className="text-gray-500 hover:text-primary cursor-pointer transition-colors" />
              <Icon name="Youtube" size={16} className="text-gray-500 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;