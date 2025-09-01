import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function ContactsSection() {
  return (
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
  );
}