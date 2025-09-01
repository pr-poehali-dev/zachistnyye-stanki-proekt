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

interface ProductCatalogProps {
  setActiveSection: (section: string) => void;
}

export default function ProductCatalog({ setActiveSection }: ProductCatalogProps) {
  const [selectedMachines, setSelectedMachines] = useState<number[]>([1, 2]);

  const toggleMachineSelection = (id: number) => {
    if (selectedMachines.includes(id)) {
      setSelectedMachines(selectedMachines.filter(machineId => machineId !== id));
    } else if (selectedMachines.length < 3) {
      setSelectedMachines([...selectedMachines, id]);
    }
  };

  const selectedMachineData = machines.filter(machine => selectedMachines.includes(machine.id));

  return (
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
  );
}