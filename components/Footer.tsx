import { Code2, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import { CONTACT_EMAIL } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black pt-20 pb-10 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-white mb-6">
              <Code2 className="size-8" />
              <span className="font-semibold tracking-tight text-2xl font-display">Studio</span>
            </div>
            <p className="text-zinc-400 max-w-sm text-lg">
              Создаем цифровые продукты премиум-класса, которые помогают бизнесу расти и выделяться.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Навигация</h4>
            <ul className="space-y-4 text-zinc-400">
              <li><a href="#services" className="hover:text-white transition-colors">Услуги</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Преимущества</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Процесс</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Портфолио</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Контакты</h4>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>г. Москва, Пресненская наб., 12</li>
              <li className="pt-4 flex gap-4">
                <a href="#" aria-label="Twitter" className="hover:text-white transition-colors"><Twitter className="size-5" /></a>
                <a href="#" aria-label="Instagram" className="hover:text-white transition-colors"><Instagram className="size-5" /></a>
                <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors"><Linkedin className="size-5" /></a>
                <a href="#" aria-label="GitHub" className="hover:text-white transition-colors"><Github className="size-5" /></a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} Studio. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
