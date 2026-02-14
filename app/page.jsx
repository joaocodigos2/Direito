"use client";

import { useEffect, useMemo, useState } from "react";
import { dayDisplay, dayLabels, scheduleByDay } from "./data/courseData";

const LOCATION = {
  name: "UNASP Engenheiro Coelho",
  latitude: -22.4836,
  longitude: -47.2117,
  timezone: "America/Sao_Paulo"
};

function weatherCodeToLabel(code) {
  if (code === 0) return "Céu limpo";
  if (code === 1 || code === 2) return "Parcialmente nublado";
  if (code === 3) return "Nublado";
  if (code === 45 || code === 48) return "Nevoeiro";
  if (code === 51 || code === 53 || code === 55) return "Garoando";
  if (code === 56 || code === 57) return "Garoa congelante";
  if (code === 61 || code === 63 || code === 65) return "Chuva";
  if (code === 66 || code === 67) return "Chuva congelante";
  if (code === 71 || code === 73 || code === 75 || code === 77) return "Neve";
  if (code === 80 || code === 81 || code === 82) return "Pancadas de chuva";
  if (code === 85 || code === 86) return "Pancadas de neve";
  if (code === 95) return "Trovoadas";
  if (code === 96 || code === 99) return "Trovoadas fortes";
  return "Clima";
}

function weatherCodeToIcon(code) {
  if (code === undefined || code === null) return "sun";
  if (code >= 80 || code === 61 || code === 63 || code === 65 || code === 66 || code === 67 || code === 95 || code === 96 || code === 99)
    return "rain";
  if (code === 3 || code === 45 || code === 48) return "cloud";
  return "sun";
}

export default function Home() {
  const [now, setNow] = useState(() => new Date());
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${LOCATION.latitude}&longitude=${LOCATION.longitude}&current=temperature_2m,weather_code,is_day&daily=temperature_2m_max,temperature_2m_min,weather_code&forecast_days=5&timezone=${encodeURIComponent(
          LOCATION.timezone
        )}`;
        const response = await fetch(url);
        if (!response.ok) return;
        const data = await response.json();
        const label = weatherCodeToLabel(data.current?.weather_code);
        const daily = (data.daily?.time ?? []).map((date, idx) => ({
          date,
          code: data.daily?.weather_code?.[idx],
          max: Math.round(data.daily?.temperature_2m_max?.[idx] ?? 0),
          min: Math.round(data.daily?.temperature_2m_min?.[idx] ?? 0)
        }));
        setWeather({
          label,
          code: data.current?.weather_code,
          temp: Math.round(data.current?.temperature_2m ?? 0),
          max: Math.round(data.daily?.temperature_2m_max?.[0] ?? 0),
          min: Math.round(data.daily?.temperature_2m_min?.[0] ?? 0),
          daily
        });
      } catch (error) {
        console.warn("Falha ao buscar clima", error);
      }
    };

    fetchWeather();
  }, []);

  const nowInLocation = useMemo(
    () => new Date(new Date().toLocaleString("en-US", { timeZone: LOCATION.timezone })),
    [now]
  );

  const dayKey = dayLabels[nowInLocation.getDay()];
  const schedule = scheduleByDay[dayKey] ?? [];
  const formattedDate = nowInLocation.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: LOCATION.timezone
  });
  const formattedTime = nowInLocation.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: LOCATION.timezone
  });
  const dateShort = nowInLocation.toLocaleDateString("pt-BR", {
    weekday: "short",
    day: "2-digit",
    month: "2-digit",
    timeZone: LOCATION.timezone
  });
  const primarySlot = schedule?.[0];
  const nextSlots = schedule?.slice(0, 4) ?? [];
  const forecastDays = weather?.daily?.slice(1, 5) ?? Array.from({ length: 4 }, () => ({ date: null, code: null }));
  const currentIcon = weatherCodeToIcon(weather?.code);

  return (
    <main className="min-h-screen">
      <section className="bg-slate-950 bg-[radial-gradient(circle_at_top,_rgba(124,92,255,0.25),_transparent_55%)] py-20">
        <div className="mx-auto w-[90%] max-w-6xl">
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Projeto Direito Claro</p>
              <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">
                Seu curso de Direito, organizado com clareza.
              </h1>
              <p className="mt-4 text-lg text-slate-300">
                Materiais por disciplina, cronograma inteligente e estrutura objetiva para revisar com precisão.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  className="rounded-full bg-gradient-to-r from-rose-500 to-orange-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:-translate-y-0.5 hover:brightness-105"
                  href="#cronograma"
                >
                  Ver aulas de hoje
                </a>
                <a
                  className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-500"
                  href="/disciplinas"
                >
                  Ver páginas de disciplinas
                </a>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="wc-card">
                <section className="wc-info">
                  <div className="wc-bg">
                    <div className="wc-circle" />
                    <div className="wc-circle" />
                    <div className="wc-circle" />
                  </div>
                  <div className="wc-left">
                    <div className="wc-weather">
                      <div className="wc-icon" aria-hidden>
                        {currentIcon === "sun" && (
                          <svg stroke="currentColor" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0-14a1 1 0 0 0 1-1V2a1 1 0 1 0-2 0v1a1 1 0 0 0 1 1Zm0 16a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-1a1 1 0 0 0-1-1ZM4.22 5.64a1 1 0 0 0 1.42-1.42L4.34 2.93A1 1 0 1 0 2.93 4.34l1.29 1.3Zm14.14 12.72a1 1 0 0 0-1.42 1.42l1.29 1.29a1 1 0 0 0 1.42-1.41l-1.29-1.3ZM4 12a1 1 0 0 0-1-1H2a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1Zm17 0a1 1 0 0 0-1-1h-1a1 1 0 1 0 0 2h1a1 1 0 0 0 1-1Zm-2.64-8.78a1 1 0 0 0-1.42 1.42l1.29 1.29a1 1 0 0 0 1.42-1.42l-1.29-1.29ZM5.64 18.36a1 1 0 0 0-1.42 1.41l1.29 1.3a1 1 0 0 0 1.42-1.42l-1.29-1.29Z" />
                          </svg>
                        )}
                        {currentIcon === "cloud" && (
                          <svg stroke="currentColor" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M7 18h10a4 4 0 0 0 .7-7.95A6 6 0 0 0 5.08 9.6 4 4 0 0 0 7 18Zm0-2a2 2 0 0 1-.18-3.99l1.12-.1.13-1.12A4 4 0 0 1 16 10.25l.75.31.82-.08A2 2 0 0 1 17 16H7Z" />
                          </svg>
                        )}
                        {currentIcon === "rain" && (
                          <svg stroke="currentColor" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M7 18h10a4 4 0 0 0 .7-7.95A6 6 0 0 0 5.08 9.6 4 4 0 0 0 7 18Zm4.5 2.5a1 1 0 1 1-1.9-.6l1-3a1 1 0 0 1 1.9.6l-1 3Zm-4 0a1 1 0 1 1-1.9-.6l1-3a1 1 0 1 1 1.9.6l-1 3Zm8 0a1 1 0 1 1-1.9-.6l1-3a1 1 0 0 1 1.9.6l-1 3Z" />
                          </svg>
                        )}
                      </div>
                      <div className="wc-weather-label">{weather?.label ?? "Clima local"}</div>
                    </div>
                    <div className="wc-temp">{weather ? `${weather.temp}°` : "--"}</div>
                    <div className="wc-range">
                      {weather ? `${weather.max}°/${weather.min}°` : "Buscando clima"}
                    </div>
                  </div>
                  <div className="wc-right">
                    <div>
                      <div className="wc-hour">{formattedTime}</div>
                      <div className="wc-date">{dateShort}</div>
                    </div>
                    <div className="wc-city">{LOCATION.name}</div>
                  </div>
                </section>
                <section className="wc-days">
                  {forecastDays.map((day, idx) => {
                    const baseDate = day.date
                      ? new Date(`${day.date}T12:00:00`)
                      : (() => {
                          const d = new Date(nowInLocation);
                          d.setDate(d.getDate() + idx + 1);
                          return d;
                        })();
                    const weekday = baseDate
                      .toLocaleDateString("en-US", { weekday: "short", timeZone: LOCATION.timezone })
                      .toUpperCase();
                    const icon = weatherCodeToIcon(day.code);
                    return (
                      <button key={`${day.date ?? idx}`} className="wc-day-btn" aria-label={weekday}>
                        <span className="wc-day">{weekday}</span>
                        <span className="wc-day-icon" aria-hidden>
                          {icon === "sun" && (
                            <svg stroke="currentColor" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0-14a1 1 0 0 0 1-1V2a1 1 0 1 0-2 0v1a1 1 0 0 0 1 1Zm0 16a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-1a1 1 0 0 0-1-1ZM4.22 5.64a1 1 0 0 0 1.42-1.42L4.34 2.93A1 1 0 1 0 2.93 4.34l1.29 1.3Zm14.14 12.72a1 1 0 0 0-1.42 1.42l1.29 1.29a1 1 0 0 0 1.42-1.41l-1.29-1.3ZM4 12a1 1 0 0 0-1-1H2a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1Zm17 0a1 1 0 0 0-1-1h-1a1 1 0 1 0 0 2h1a1 1 0 0 0 1-1Zm-2.64-8.78a1 1 0 0 0-1.42 1.42l1.29 1.29a1 1 0 0 0 1.42-1.42l-1.29-1.29ZM5.64 18.36a1 1 0 0 0-1.42 1.41l1.29 1.3a1 1 0 0 0 1.42-1.42l-1.29-1.29Z" />
                            </svg>
                          )}
                          {icon === "cloud" && (
                            <svg stroke="currentColor" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path d="M7 18h10a4 4 0 0 0 .7-7.95A6 6 0 0 0 5.08 9.6 4 4 0 0 0 7 18Zm0-2a2 2 0 0 1-.18-3.99l1.12-.1.13-1.12A4 4 0 0 1 16 10.25l.75.31.82-.08A2 2 0 0 1 17 16H7Z" />
                            </svg>
                          )}
                          {icon === "rain" && (
                            <svg stroke="currentColor" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path d="M7 18h10a4 4 0 0 0 .7-7.95A6 6 0 0 0 5.08 9.6 4 4 0 0 0 7 18Zm4.5 2.5a1 1 0 1 1-1.9-.6l1-3a1 1 0 0 1 1.9.6l-1 3Zm-4 0a1 1 0 1 1-1.9-.6l1-3a1 1 0 1 1 1.9.6l-1 3Zm8 0a1 1 0 1 1-1.9-.6l1-3a1 1 0 0 1 1.9.6l-1 3Z" />
                            </svg>
                          )}
                        </span>
                      </button>
                    );
                  })}
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cronograma" className="py-16">
        <div className="mx-auto w-[90%] max-w-6xl">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Hoje</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">Aulas do dia</h2>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {schedule.length === 0 ? (
              <div className="rounded-2xl border border-brand-500/30 bg-slate-900 px-6 py-6">
                <h3 className="text-lg font-semibold text-white">Sem aulas regulares hoje</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Aproveite para revisar, organizar resumos e atualizar o glossário.
                </p>
              </div>
            ) : (
              schedule.map((item) => (
                <div
                  key={`${item.subject}-${item.time}`}
                  className="rounded-2xl border border-brand-500/20 bg-slate-900 px-6 py-6 shadow-lg shadow-black/20"
                >
                  <h3 className="text-lg font-semibold text-white">{item.subject}</h3>
                  <p className="mt-2 text-sm text-slate-400">{item.time}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 py-10 text-center text-sm text-slate-400">
        Direito Claro · Organização inteligente do curso de Direito
      </footer>
    </main>
  );
}
