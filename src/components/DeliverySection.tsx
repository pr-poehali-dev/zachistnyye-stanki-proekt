import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function DeliverySection() {
  return (
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
  );
}