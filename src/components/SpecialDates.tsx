
import { useState, useEffect } from "react";
import { Calendar, Star } from "lucide-react";

interface SpecialDate {
  id: number;
  title: string;
  date: string;
  description: string;
}

const specialDates: SpecialDate[] = [
  {
    id: 1,
    title: "First Date",
    date: "2023-05-15",
    description: "The day we went to that cute Italian restaurant and talked until closing time."
  },
  {
    id: 2,
    title: "Engagement Day",
    date: "2024-09-10",
    description: "When Michael proposed at sunset on Mount Rainier."
  },
  {
    id: 3, 
    title: "Anniversary",
    date: "2025-07-22",
    description: "Our wedding anniversary."
  }
];

const SpecialDates = () => {
  const [daysUntilNextDate, setDaysUntilNextDate] = useState<number | null>(null);
  const [nextDate, setNextDate] = useState<SpecialDate | null>(null);

  useEffect(() => {
    const calculateNextDate = () => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      let closestDate: SpecialDate | null = null;
      let minimumDaysDifference = Infinity;
      
      specialDates.forEach(specialDate => {
        // Handle yearly recurring dates (like anniversaries)
        const currentYear = today.getFullYear();
        const dateObj = new Date(specialDate.date);
        const dateThisYear = new Date(currentYear, dateObj.getMonth(), dateObj.getDate());
        
        // If this year's date has passed, calculate for next year
        const dateToUse = dateThisYear < today ? 
          new Date(currentYear + 1, dateObj.getMonth(), dateObj.getDate()) : 
          dateThisYear;
        
        const timeDiff = dateToUse.getTime() - today.getTime();
        const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
        
        if (daysDiff < minimumDaysDifference && daysDiff >= 0) {
          minimumDaysDifference = daysDiff;
          closestDate = specialDate;
        }
      });
      
      setDaysUntilNextDate(minimumDaysDifference === Infinity ? null : minimumDaysDifference);
      setNextDate(closestDate);
    };
    
    calculateNextDate();
  }, []);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section id="dates" className="section bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-serif text-center text-couple-deep mb-12">Special Dates</h2>
        
        {nextDate && (
          <div className="bg-couple-cream rounded-2xl p-6 md:p-10 shadow-lg mb-12 text-center">
            <div className="inline-block bg-couple-pink bg-opacity-30 p-3 rounded-full mb-4">
              <Calendar className="h-8 w-8 text-couple-rose" />
            </div>
            <h3 className="text-2xl md:text-3xl font-serif text-couple-deep mb-2">Coming Up: {nextDate.title}</h3>
            <p className="text-lg text-couple-mauve mb-4">{formatDate(nextDate.date)}</p>
            {daysUntilNextDate !== null && (
              <div className="bg-white bg-opacity-70 backdrop-blur-sm inline-block px-6 py-3 rounded-full shadow-sm">
                <span className="text-xl font-semibold text-couple-deep">{daysUntilNextDate}</span>
                <span className="text-couple-deep ml-2">days to go</span>
              </div>
            )}
          </div>
        )}
        
        <div className="grid md:grid-cols-3 gap-6">
          {specialDates.map(date => (
            <div key={date.id} className="bg-white rounded-xl p-6 shadow-md border border-couple-pink border-opacity-20">
              <div className="flex items-start mb-4">
                <div className="bg-couple-pink bg-opacity-20 p-2 rounded-full">
                  <Star className="h-5 w-5 text-couple-rose" />
                </div>
                <div className="ml-3">
                  <h3 className="font-serif text-xl text-couple-deep">{date.title}</h3>
                  <p className="text-couple-mauve">{formatDate(date.date)}</p>
                </div>
              </div>
              <p className="text-couple-deep">{date.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialDates;
