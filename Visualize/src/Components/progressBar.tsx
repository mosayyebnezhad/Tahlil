import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgress = ({ time }: { time: number }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0; // ریست کردن به 0 برای لوپ
        }
        return prev + 1; // افزایش تدریجی
      });
    }, time / 100); // زمان تنظیم شده برای 100 مرحله

    return () => clearInterval(interval); // پاکسازی تایمر هنگام خروج
  }, [time]);

  return (
    <div className="w-full h-full">
      <CircularProgressbar
        value={progress}
        text={`${progress}%`}
        styles={buildStyles({
          textColor: "#000",
          pathColor: "#4caf50",
          trailColor: "#d6d6d6",
          pathTransition: "none"
        })}
      />
    </div>
  );
};

export default CircularProgress;