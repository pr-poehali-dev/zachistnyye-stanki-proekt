import Icon from '@/components/ui/icon';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  return (
    <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <Icon name="Settings" size={28} className="text-primary" />
            <h1 className="text-2xl font-bold text-secondary">ПромСтанки</h1>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => setActiveSection('main')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === 'main' ? 'text-primary border-b-2 border-primary pb-1' : 'text-muted-foreground'
              }`}
            >
              Главная
            </button>
            <button 
              onClick={() => setActiveSection('catalog')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === 'catalog' ? 'text-primary border-b-2 border-primary pb-1' : 'text-muted-foreground'
              }`}
            >
              Каталог
            </button>
            <button 
              onClick={() => setActiveSection('delivery')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === 'delivery' ? 'text-primary border-b-2 border-primary pb-1' : 'text-muted-foreground'
              }`}
            >
              Доставка
            </button>
            <button 
              onClick={() => setActiveSection('contacts')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === 'contacts' ? 'text-primary border-b-2 border-primary pb-1' : 'text-muted-foreground'
              }`}
            >
              Контакты
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}