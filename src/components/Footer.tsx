import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
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
  );
}