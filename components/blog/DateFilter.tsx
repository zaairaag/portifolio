'use client';

import { useState } from 'react';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Calendar as CalendarIcon, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';

interface DateFilterProps {
  dates: string[];
}

export function DateFilter({ dates }: DateFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedDate = searchParams.get('date');
  const [date, setDate] = useState<Date | undefined>(
    selectedDate ? parseISO(selectedDate + '-01') : undefined
  );

  // Cria um Set com todas as datas disponíveis
  const availableDates = new Set(
    dates.map(date => format(parseISO(date), 'yyyy-MM'))
  );

  const handleSelect = (date: Date | undefined) => {
    setDate(date);
    if (date) {
      const monthYear = format(date, 'yyyy-MM');
      if (availableDates.has(monthYear)) {
        router.push(`/blog?date=${monthYear}`);
      }
    } else {
      router.push('/blog');
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={date ? "default" : "outline"}
            className={cn(
              "justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? (
              format(date, "MMMM 'de' yyyy", { locale: ptBR })
            ) : (
              <span>Filtrar por data</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleSelect}
            disabled={(date) => !availableDates.has(format(date, 'yyyy-MM'))}
            initialFocus
            locale={ptBR}
          />
        </PopoverContent>
      </Popover>
      {date && (
        <Button
          variant="ghost"
          className="h-8 w-8 p-0"
          onClick={() => handleSelect(undefined)}
        >
          <span className="sr-only">Limpar data</span>
          <X className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}
