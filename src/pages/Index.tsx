import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    email: '',
    model: '',
    date: '',
    message: ''
  });

  const models = [
    {
      id: 1,
      name: 'BAIC X55',
      category: 'Premium SUV',
      price: '2 900 000',
      image: 'https://cdn.poehali.dev/projects/58eef7f7-3189-45cc-b21d-698deab5d7a6/files/5b154c3c-2f0d-4454-960a-9ccc4c67f9f4.jpg',
      specs: ['Турбо 1.5L', 'CVT', '4WD']
    },
    {
      id: 2,
      name: 'BAIC X7',
      category: 'Luxury SUV',
      price: '3 500 000',
      image: 'https://cdn.poehali.dev/projects/58eef7f7-3189-45cc-b21d-698deab5d7a6/files/5b154c3c-2f0d-4454-960a-9ccc4c67f9f4.jpg',
      specs: ['Турбо 2.0L', 'AT', '4WD']
    },
    {
      id: 3,
      name: 'BAIC BJ40',
      category: 'Off-Road Premium',
      price: '4 200 000',
      image: 'https://cdn.poehali.dev/projects/58eef7f7-3189-45cc-b21d-698deab5d7a6/files/5b154c3c-2f0d-4454-960a-9ccc4c67f9f4.jpg',
      specs: ['Турбо 2.3L', 'AT', '4WD']
    }
  ];

  const offers = [
    { id: 1, title: 'Выгода до 500 000 ₽', description: 'При покупке в кредит', icon: 'Tag' },
    { id: 2, title: 'Trade-In', description: 'Обмен вашего авто с выгодой', icon: 'RefreshCw' },
    { id: 3, title: 'Бесплатное ТО', description: 'Первые 3 года обслуживания', icon: 'Wrench' }
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Наш менеджер свяжется с вами в ближайшее время.',
    });
    setBookingForm({ name: '', phone: '', email: '', model: '', date: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <header className="fixed top-0 w-full z-50 bg-[#1a1a1a]/95 backdrop-blur-sm border-b border-[#2c2c2c]">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold gold-text">BAIC PREMIUM</h1>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-white/80 hover:text-white transition-colors">Главная</a>
              <a href="#brand" className="text-white/80 hover:text-white transition-colors">О бренде</a>
              <a href="#models" className="text-white/80 hover:text-white transition-colors">Модельный ряд</a>
              <a href="#offers" className="text-white/80 hover:text-white transition-colors">Акции</a>
              <a href="#contacts" className="text-white/80 hover:text-white transition-colors">Контакты</a>
            </div>
            <Button variant="outline" className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#1a1a1a]">
              <Icon name="Phone" size={16} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
          </div>
        </nav>
      </header>

      <section id="home" className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 gold-gradient opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-6xl font-bold">
                <span className="gold-text">BAIC</span>
                <br />
                <span className="text-white">Престиж на дорогах</span>
              </h2>
              <p className="text-xl text-white/70">
                Откройте для себя новый уровень комфорта и элегантности с премиальными автомобилями BAIC
              </p>
              <div className="flex gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" className="bg-[#d4af37] hover:bg-[#c9a961] text-[#1a1a1a] font-semibold">
                      Записаться на тест-драйв
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-[#2c2c2c] border-[#3c3c3c]">
                    <DialogHeader>
                      <DialogTitle className="text-2xl gold-text">Онлайн-бронирование</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleBooking} className="space-y-4">
                      <div>
                        <Label htmlFor="name" className="text-white">Ваше имя</Label>
                        <Input 
                          id="name"
                          value={bookingForm.name}
                          onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                          required
                          className="bg-[#1a1a1a] border-[#3c3c3c] text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-white">Телефон</Label>
                        <Input 
                          id="phone"
                          type="tel"
                          value={bookingForm.phone}
                          onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                          required
                          className="bg-[#1a1a1a] border-[#3c3c3c] text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-white">Email</Label>
                        <Input 
                          id="email"
                          type="email"
                          value={bookingForm.email}
                          onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
                          required
                          className="bg-[#1a1a1a] border-[#3c3c3c] text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="model" className="text-white">Модель</Label>
                        <Input 
                          id="model"
                          value={bookingForm.model}
                          onChange={(e) => setBookingForm({...bookingForm, model: e.target.value})}
                          placeholder="Например: BAIC X55"
                          required
                          className="bg-[#1a1a1a] border-[#3c3c3c] text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="date" className="text-white">Желаемая дата</Label>
                        <Input 
                          id="date"
                          type="date"
                          value={bookingForm.date}
                          onChange={(e) => setBookingForm({...bookingForm, date: e.target.value})}
                          required
                          className="bg-[#1a1a1a] border-[#3c3c3c] text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="message" className="text-white">Комментарий</Label>
                        <Textarea 
                          id="message"
                          value={bookingForm.message}
                          onChange={(e) => setBookingForm({...bookingForm, message: e.target.value})}
                          className="bg-[#1a1a1a] border-[#3c3c3c] text-white"
                        />
                      </div>
                      <Button type="submit" className="w-full bg-[#d4af37] hover:bg-[#c9a961] text-[#1a1a1a] font-semibold">
                        Отправить заявку
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#1a1a1a]">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/58eef7f7-3189-45cc-b21d-698deab5d7a6/files/5b154c3c-2f0d-4454-960a-9ccc4c67f9f4.jpg"
                alt="BAIC Premium"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="brand" className="py-20 bg-[#2c2c2c]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/58eef7f7-3189-45cc-b21d-698deab5d7a6/files/5fd989d5-d901-4959-a2c3-5f04dea4ae9f.jpg"
                alt="BAIC Showroom"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-5xl font-bold gold-text">О бренде BAIC</h2>
              <p className="text-lg text-white/80 leading-relaxed">
                BAIC — один из крупнейших автопроизводителей Китая, объединяющий передовые технологии, 
                элегантный дизайн и непревзойденное качество. Каждый автомобиль создается с вниманием 
                к деталям, чтобы подарить вам уникальный опыт вождения.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <Icon name="Award" size={40} className="mx-auto mb-2 text-[#d4af37]" />
                  <p className="text-white font-semibold">Премиум качество</p>
                </div>
                <div className="text-center">
                  <Icon name="Shield" size={40} className="mx-auto mb-2 text-[#d4af37]" />
                  <p className="text-white font-semibold">Безопасность</p>
                </div>
                <div className="text-center">
                  <Icon name="Zap" size={40} className="mx-auto mb-2 text-[#d4af37]" />
                  <p className="text-white font-semibold">Инновации</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="models" className="py-20 bg-[#1a1a1a]">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-4 gold-text">Модельный ряд</h2>
          <p className="text-center text-white/70 mb-12 text-lg">Выберите автомобиль, который подчеркнет ваш статус</p>
          <div className="grid md:grid-cols-3 gap-8">
            {models.map((model) => (
              <Card key={model.id} className="bg-[#2c2c2c] border-[#3c3c3c] hover:border-[#d4af37] transition-all duration-300 hover-scale">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={model.image}
                      alt={model.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-[#d4af37] text-[#1a1a1a] px-3 py-1 rounded-full text-sm font-semibold">
                      {model.category}
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold text-white">{model.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {model.specs.map((spec, idx) => (
                        <span key={idx} className="text-xs bg-[#3c3c3c] text-white/80 px-3 py-1 rounded-full">
                          {spec}
                        </span>
                      ))}
                    </div>
                    <p className="text-3xl font-bold gold-text">от {model.price} ₽</p>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full bg-[#d4af37] hover:bg-[#c9a961] text-[#1a1a1a] font-semibold">
                          Забронировать
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-[#2c2c2c] border-[#3c3c3c]">
                        <DialogHeader>
                          <DialogTitle className="text-2xl gold-text">Бронирование {model.name}</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleBooking} className="space-y-4">
                          <div>
                            <Label htmlFor="name" className="text-white">Ваше имя</Label>
                            <Input 
                              id="name"
                              value={bookingForm.name}
                              onChange={(e) => setBookingForm({...bookingForm, name: e.target.value, model: model.name})}
                              required
                              className="bg-[#1a1a1a] border-[#3c3c3c] text-white"
                            />
                          </div>
                          <div>
                            <Label htmlFor="phone" className="text-white">Телефон</Label>
                            <Input 
                              id="phone"
                              type="tel"
                              value={bookingForm.phone}
                              onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                              required
                              className="bg-[#1a1a1a] border-[#3c3c3c] text-white"
                            />
                          </div>
                          <div>
                            <Label htmlFor="email" className="text-white">Email</Label>
                            <Input 
                              id="email"
                              type="email"
                              value={bookingForm.email}
                              onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
                              required
                              className="bg-[#1a1a1a] border-[#3c3c3c] text-white"
                            />
                          </div>
                          <div>
                            <Label htmlFor="date" className="text-white">Желаемая дата</Label>
                            <Input 
                              id="date"
                              type="date"
                              value={bookingForm.date}
                              onChange={(e) => setBookingForm({...bookingForm, date: e.target.value})}
                              required
                              className="bg-[#1a1a1a] border-[#3c3c3c] text-white"
                            />
                          </div>
                          <Button type="submit" className="w-full bg-[#d4af37] hover:bg-[#c9a961] text-[#1a1a1a] font-semibold">
                            Отправить заявку
                          </Button>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="offers" className="py-20 bg-[#2c2c2c]">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-4 gold-text">Специальные предложения</h2>
          <p className="text-center text-white/70 mb-12 text-lg">Выгодные условия приобретения</p>
          <div className="grid md:grid-cols-3 gap-8">
            {offers.map((offer) => (
              <Card key={offer.id} className="bg-[#1a1a1a] border-[#3c3c3c] hover:border-[#d4af37] transition-all duration-300">
                <CardContent className="p-8 text-center space-y-4">
                  <Icon name={offer.icon as any} size={48} className="mx-auto text-[#d4af37]" />
                  <h3 className="text-2xl font-bold text-white">{offer.title}</h3>
                  <p className="text-white/70">{offer.description}</p>
                  <Button variant="outline" className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#1a1a1a]">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-[#1a1a1a]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-5xl font-bold gold-text">Контакты</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Icon name="MapPin" size={24} className="text-[#d4af37]" />
                  <p className="text-white">г. Москва, ул. Автомобильная, д. 1</p>
                </div>
                <div className="flex items-center gap-4">
                  <Icon name="Phone" size={24} className="text-[#d4af37]" />
                  <p className="text-white">+7 (495) 123-45-67</p>
                </div>
                <div className="flex items-center gap-4">
                  <Icon name="Mail" size={24} className="text-[#d4af37]" />
                  <p className="text-white">info@baic-premium.ru</p>
                </div>
                <div className="flex items-center gap-4">
                  <Icon name="Clock" size={24} className="text-[#d4af37]" />
                  <p className="text-white">Пн-Вс: 09:00 - 21:00</p>
                </div>
              </div>
            </div>
            <Card className="bg-[#2c2c2c] border-[#3c3c3c]">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Свяжитесь с нами</h3>
                <form className="space-y-4" onSubmit={(e) => {
                  e.preventDefault();
                  toast({
                    title: 'Сообщение отправлено!',
                    description: 'Мы свяжемся с вами в ближайшее время.',
                  });
                }}>
                  <Input placeholder="Ваше имя" required className="bg-[#1a1a1a] border-[#3c3c3c] text-white" />
                  <Input type="tel" placeholder="Телефон" required className="bg-[#1a1a1a] border-[#3c3c3c] text-white" />
                  <Input type="email" placeholder="Email" required className="bg-[#1a1a1a] border-[#3c3c3c] text-white" />
                  <Textarea placeholder="Ваше сообщение" className="bg-[#1a1a1a] border-[#3c3c3c] text-white" />
                  <Button type="submit" className="w-full bg-[#d4af37] hover:bg-[#c9a961] text-[#1a1a1a] font-semibold">
                    Отправить
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-[#0a0a0a] border-t border-[#2c2c2c]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60">© 2024 BAIC Premium. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="#" className="text-white/60 hover:text-[#d4af37] transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-[#d4af37] transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-[#d4af37] transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
