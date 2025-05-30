
import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2025-06-30T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center space-y-4">
      <h3 className="text-2xl font-bold text-yellow-400 mb-2">🚀 COMING SOON</h3>
      <div className="flex space-x-6">
        <div className="text-center">
          <div className="text-3xl font-bold text-white bg-purple-600/30 rounded-lg p-3 min-w-[60px]">
            {timeLeft.days}
          </div>
          <div className="text-purple-300 text-sm mt-1">Days</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-white bg-purple-600/30 rounded-lg p-3 min-w-[60px]">
            {timeLeft.hours}
          </div>
          <div className="text-purple-300 text-sm mt-1">Hours</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-white bg-purple-600/30 rounded-lg p-3 min-w-[60px]">
            {timeLeft.minutes}
          </div>
          <div className="text-purple-300 text-sm mt-1">Minutes</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-white bg-purple-600/30 rounded-lg p-3 min-w-[60px]">
            {timeLeft.seconds}
          </div>
          <div className="text-purple-300 text-sm mt-1">Seconds</div>
        </div>
      </div>
      <p className="text-purple-200 text-center">Until $ZOOM Launch on June 30th, 2025</p>
    </div>
  );
};
