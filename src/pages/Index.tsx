import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Machine {
  id: number;
  name: string;
  image: string;
  power: string;
  maxSize: string;
  precision: string;
  weight: string;
  price: string;
  description: string;
  features: string[];
}

const machines: Machine[] = [
  {
    id: 1,
    name: 'ЗС-3000 Профи',
    image: '/img/96567faa-c545-4e30-bd5d-adfad9ed2051.jpg',
    power: '15 кВт',
    maxSize: '300×200×150 мм',
    precision: '±0.01 мм',
    weight: '850 кг',
    price: '2 850 000 ₽',
    description: 'Высокоточный зачистной станок для профессиональной обработки металлических поверхностей',
    features: ['CNC управление', 'Автоматическая подача', 'Система охлаждения', 'Защитные экраны']
  },
  {
    id: 2,
    name: 'ЗС-2500 Стандарт',
    image: '/img/9c293355-7a8f-4879-ac59-6a95997830bd.jpg',
    power: '11 кВт',
    maxSize: '250×180×120 мм',
    precision: '±0.02 мм',
    weight: '620 кг',
    price: '1 950 000 ₽',
    description: 'Надежный станок для средних производственных задач с оптимальным соотношением цена-качество',
    features: ['Ручное управление', 'Регулируемая скорость', 'Пылеудаление', 'Компактный размер']
  },
  {
    id: 3,
    name: 'ЗС-4000 Индустриал',
    image: '/img/11e16b5d-1a80-4841-93a1-9b8fa2ed7adb.jpg',
    power: '22 кВт',
    maxSize: '400×300×200 мм',
    precision: '±0.005 мм',
    weight: '1200 кг',
    price: '3 750 000 ₽',
    description: 'Промышленный станок повышенной мощности для крупносерийного производства',
    features: ['Программируемое управление', 'Автозамена инструмента', 'Промышленное охлаждение', 'Вибрационная защита']
  }
];

export default function Index() {
  const [selectedMachines, setSelectedMachines] = useState<number[]>([1, 2]);
  const [activeSection, setActiveSection] = useState('catalog');

  const toggleMachineSelection = (id: number) => {
    if (selectedMachines.includes(id)) {
      setSelectedMachines(selectedMachines.filter(machineId => machineId !== id));
    } else if (selectedMachines.length < 3) {
      setSelectedMachines([...selectedMachines, id]);
    }
  };

  const selectedMachineData = machines.filter(machine => selectedMachines.includes(machine.id));

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
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

      {/* Hero Section */}
      {activeSection === 'main' && (
        <section className="py-20 bg-gradient-to-br from-secondary to-secondary/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
                Промышленные Зачистные Станки
              </h1>
              <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8">
                Высокоточное оборудование для профессиональной обработки металлических поверхностей. 
                Немецкое качество по доступным ценам.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => setActiveSection('catalog')}>
                  <Icon name="Wrench" size={20} className="mr-2" />
                  Смотреть каталог
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-secondary">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Получить консультацию
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Catalog Section */}
      {activeSection === 'catalog' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-secondary mb-4">Каталог Оборудования</h2>
              <p className="text-muted-foreground max-w-2xl">
                Выберите оптимальный зачистной станок для ваших производственных задач
              </p>
            </div>

            <Tabs defaultValue="grid" className="w-full">
              <div className="flex justify-between items-center mb-8">
                <TabsList>
                  <TabsTrigger value="grid">
                    <Icon name="Grid3X3" size={16} className="mr-2" />
                    Каталог
                  </TabsTrigger>
                  <TabsTrigger value="compare">
                    <Icon name="BarChart" size={16} className="mr-2" />
                    Сравнение
                  </TabsTrigger>
                </TabsList>
                <div className="flex items-center gap-2">
                  <Icon name="Info" size={16} className="text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    Выберите до 3 станков для сравнения
                  </span>
                </div>
              </div>

              <TabsContent value="grid">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {machines.map((machine) => (
                    <Card key={machine.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                      <div className="aspect-video bg-muted relative overflow-hidden">
                        <img 
                          src={machine.image} 
                          alt={machine.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4">
                          <Button
                            size="sm"
                            variant={selectedMachines.includes(machine.id) ? "default" : "outline"}
                            onClick={() => toggleMachineSelection(machine.id)}
                            disabled={!selectedMachines.includes(machine.id) && selectedMachines.length >= 3}
                          >
                            <Icon name="BarChart" size={16} className="mr-1" />
                            {selectedMachines.includes(machine.id) ? 'Выбран' : 'Сравнить'}
                          </Button>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          {machine.name}
                          <Badge variant="secondary" className="bg-primary/10 text-primary">
                            {machine.price}
                          </Badge>
                        </CardTitle>
                        <p className="text-muted-foreground text-sm">{machine.description}</p>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-secondary">{machine.power}</div>
                            <div className="text-xs text-muted-foreground">Мощность</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-secondary">{machine.precision}</div>
                            <div className="text-xs text-muted-foreground">Точность</div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {machine.features.slice(0, 2).map((feature, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                        <Button className="w-full">
                          <Icon name="ShoppingCart" size={16} className="mr-2" />
                          Заказать
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="compare">
                {selectedMachineData.length === 0 ? (
                  <div className="text-center py-16">
                    <Icon name="BarChart" size={64} className="mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-xl font-semibold mb-2">Станки не выбраны</h3>
                    <p className="text-muted-foreground mb-4">
                      Выберите станки в каталоге для сравнения характеристик
                    </p>
                    <Button onClick={() => setActiveSection('catalog')}>
                      Перейти в каталог
                    </Button>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-48">Характеристика</TableHead>
                          {selectedMachineData.map((machine) => (
                            <TableHead key={machine.id} className="text-center min-w-48">
                              <div className="flex flex-col items-center gap-2">
                                <img 
                                  src={machine.image} 
                                  alt={machine.name}
                                  className="w-16 h-16 object-cover rounded"
                                />
                                <span className="font-semibold">{machine.name}</span>
                              </div>
                            </TableHead>
                          ))}
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Цена</TableCell>
                          {selectedMachineData.map((machine) => (
                            <TableCell key={machine.id} className="text-center font-bold text-primary">
                              {machine.price}
                            </TableCell>
                          ))}
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Мощность</TableCell>
                          {selectedMachineData.map((machine) => (
                            <TableCell key={machine.id} className="text-center">{machine.power}</TableCell>
                          ))}
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Максимальный размер обработки</TableCell>
                          {selectedMachineData.map((machine) => (
                            <TableCell key={machine.id} className="text-center">{machine.maxSize}</TableCell>
                          ))}
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Точность</TableCell>
                          {selectedMachineData.map((machine) => (
                            <TableCell key={machine.id} className="text-center">{machine.precision}</TableCell>
                          ))}
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Вес</TableCell>
                          {selectedMachineData.map((machine) => (
                            <TableCell key={machine.id} className="text-center">{machine.weight}</TableCell>
                          ))}
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Особенности</TableCell>
                          {selectedMachineData.map((machine) => (
                            <TableCell key={machine.id} className="text-center">
                              <div className="flex flex-col gap-1">
                                {machine.features.map((feature, index) => (
                                  <Badge key={index} variant="outline" className="text-xs">
                                    {feature}
                                  </Badge>
                                ))}
                              </div>
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>
      )}

      {/* Delivery Section */}
      {activeSection === 'delivery' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-secondary mb-4">Доставка и Установка</h2>
              <p className="text-muted-foreground max-w-2xl">
                Обеспечиваем безопасную доставку и профессиональную установку оборудования
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Icon name="Truck" size={32} className="text-primary mb-2" />
                  <CardTitle>Доставка по России</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Москва и область: 1-2 дня
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Регионы РФ: 3-7 дней
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Специализированный транспорт
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Страхование груза
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Icon name="Wrench" size={32} className="text-primary mb-2" />
                  <CardTitle>Установка и Пуско-наладка</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Профессиональная установка
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Настройка и калибровка
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Обучение персонала
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Тестовый запуск
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Icon name="Shield" size={32} className="text-primary mb-2" />
                  <CardTitle>Гарантия и Сервис</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Гарантия 24 месяца
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Техподдержка 24/7
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Запасные части в наличии
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Выездной сервис
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 bg-card p-8 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Стоимость доставки</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-center p-4 bg-muted rounded">
                  <div className="text-lg font-bold text-primary">Бесплатно</div>
                  <div className="text-muted-foreground">Москва и область</div>
                </div>
                <div className="text-center p-4 bg-muted rounded">
                  <div className="text-lg font-bold text-primary">От 15 000 ₽</div>
                  <div className="text-muted-foreground">Центральный регион</div>
                </div>
                <div className="text-center p-4 bg-muted rounded">
                  <div className="text-lg font-bold text-primary">По запросу</div>
                  <div className="text-muted-foreground">Другие регионы</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contacts Section */}
      {activeSection === 'contacts' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-secondary mb-4">Контакты</h2>
              <p className="text-muted-foreground max-w-2xl">
                Свяжитесь с нами для консультации и заказа оборудования
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Icon name="MapPin" size={24} className="text-primary" />
                      Адрес офиса
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      115093, г. Москва, ул. Люсиновская, д. 36, стр. 1<br/>
                      БЦ "Гранд Сетунь Плаза", офис 401
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Icon name="Phone" size={24} className="text-primary" />
                      Телефоны
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">Отдел продаж:</span>
                      <a href="tel:+74951234567" className="font-semibold hover:text-primary">
                        +7 (495) 123-45-67
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">Сервисная служба:</span>
                      <a href="tel:+74951234568" className="font-semibold hover:text-primary">
                        +7 (495) 123-45-68
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Icon name="Mail" size={24} className="text-primary" />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">Продажи:</span>
                      <a href="mailto:sales@promstanki.ru" className="font-semibold hover:text-primary">
                        sales@promstanki.ru
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">Поддержка:</span>
                      <a href="mailto:support@promstanki.ru" className="font-semibold hover:text-primary">
                        support@promstanki.ru
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>График работы</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Понедельник - Пятница</span>
                        <span className="font-semibold">9:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Суббота</span>
                        <span className="font-semibold">10:00 - 16:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Воскресенье</span>
                        <span className="text-muted-foreground">Выходной</span>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-primary/5 rounded border border-primary/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Clock" size={16} className="text-primary" />
                        <span className="font-semibold">Техподдержка</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Круглосуточно для клиентов с действующими договорами сервисного обслуживания
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-6 text-center">
                  <Button size="lg" className="w-full">
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Получить консультацию
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-secondary text-primary-foreground py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Settings" size={28} className="text-primary" />
                <h3 className="text-xl font-bold">ПромСтанки</h3>
              </div>
              <p className="text-primary-foreground/80 text-sm">
                Ведущий поставщик промышленного оборудования для металлообработки
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукция</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Зачистные станки</li>
                <li>Шлифовальные машины</li>
                <li>Запасные части</li>
                <li>Расходные материалы</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Доставка и установка</li>
                <li>Техническое обслуживание</li>
                <li>Обучение персонала</li>
                <li>Консультации</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-primary-foreground/80">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={14} />
                  +7 (495) 123-45-67
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={14} />
                  info@promstanki.ru
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={14} />
                  Москва, ул. Люсиновская, 36
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
            © 2024 ПромСтанки. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}