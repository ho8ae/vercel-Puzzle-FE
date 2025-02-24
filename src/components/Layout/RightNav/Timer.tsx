'use client';
import { useState, useEffect, useRef } from 'react';
import {
  useBroadcastEvent,
  useEventListener,
  useStorage,
  useMutation,
} from '@/liveblocks.config';
import { Play, Pause, RotateCcw } from 'lucide-react';

export default function Timer() {
  const [isRunning, setIsRunning] = useState(false);
  const broadcast = useBroadcastEvent();
  const audioRef = useRef<HTMLAudioElement>(null);
  const time = useStorage((root) => root.time ?? { time: 300 }).time;

  const setTime = useMutation(({ storage }, newTime) => {
    const timeObject = storage.get('time');
    if (timeObject) {
      timeObject.set('time', newTime);
    }
  }, []);

  const toggleTimer = () => {
    if (isRunning) {
      stopTimer();
    } else {
      startTimer();
    }
  };

  const startTimer = () => {
    setIsRunning(true);
    broadcast({ type: 'START_TIMER', time });
  };

  const stopTimer = () => {
    setIsRunning(false);
    broadcast({ type: 'STOP_TIMER' });
  };

  const addTime = () => {
    setTime(time + 60);
  };

  const subtractTime = () => {
    setTime(Math.max(0, time - 60));
  };

  const resetTime = () => {
    setIsRunning(false);
    setTime(300);
  };

  useEventListener(({ event }) => {
    if (event.type === 'START_TIMER') {
      setTime(event.time);
      setIsRunning(true);
    } else if (event.type === 'STOP_TIMER') {
      setIsRunning(false);
    }
  });

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        if (time > 0) {
          setTime(time - 1);
        } else if (time === 0) {
          if (audioRef.current) {
            audioRef.current.play();
          }
          setTime(300);
          setIsRunning(false);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, time, setTime]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const getTimerBackgroundColor = () => {
    const totalTime = 300;
    const percentRemaining = (time / totalTime) * 100;

    if (percentRemaining > 50) {
      return 'bg-white';
    } else if (percentRemaining > 25) {
      return 'bg-orange-50'; // 더 연한 오렌지색
    } else {
      return 'bg-red-50'; // 더 연한 빨간색
    }
  };

  return (
    <div className="bg-white rounded-lg p-2 shadow-sm border border-gray-100">
      {' '}
      {/* padding과 rounded 감소 */}
      <div className="flex flex-col items-center">
        <div
          className={`${getTimerBackgroundColor()} rounded-full px-4 py-2 mb-2 shadow-inner`} // padding, margin, rounded 감소
        >
          <h1 className="text-3xl font-bold text-purple-600 tracking-wide">
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </h1>
        </div>

        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <button
              onClick={subtractTime}
              className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full 
                         flex items-center justify-center hover:bg-purple-200 
                         transition-colors font-bold text-sm" // 크기 감소, 텍스트 크기 감소
            >
              -
            </button>
            <button
              onClick={addTime}
              className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full 
                         flex items-center justify-center hover:bg-purple-200 
                         transition-colors font-bold text-sm" // 크기 감소, 텍스트 크기 감소
            >
              +
            </button>
          </div>
          <button
            onClick={resetTime}
            className="w-6 h-6 text-purple-600 hover:bg-purple-100 
                       rounded-full flex items-center justify-center 
                       transition-colors" // 크기 감소
          >
            <RotateCcw size={14} /> {/* 아이콘 크기 감소 */}
          </button>
          <button
            onClick={toggleTimer}
            className={`w-8 h-6 rounded-full flex items-center justify-center 
                        ${isRunning ? 'bg-red-500' : 'bg-green-500'} 
                        text-white transition-colors`} // 크기 감소
          >
            {isRunning ? <Pause size={14} /> : <Play size={14} />}{' '}
            {/* 아이콘 크기 감소 */}
          </button>
        </div>
      </div>
      <audio
        ref={audioRef}
        src="https://aws-file-uploder.s3.ap-northeast-2.amazonaws.com/alarm.mp3"
      />
    </div>
  );
}
