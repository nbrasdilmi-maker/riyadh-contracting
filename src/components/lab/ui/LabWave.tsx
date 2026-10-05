/** حد متموج بين الداكن والعاجي — بتدرج شمبين */
export default function LabWave({ flip = false, fill = "url(#labWaveG)" }: { flip?: boolean; fill?: string }) {
  return (
    <svg
      viewBox="0 0 1440 70"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{ display: "block", width: "100%", height: 42, transform: flip ? "rotate(180deg)" : "none" }}
    >
      <defs>
        <linearGradient id="labWaveG" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#f6f2e9" />
          <stop offset="0.5" stopColor="#f0dfbc" />
          <stop offset="1" stopColor="#f6f2e9" />
        </linearGradient>
      </defs>
      <path
        d="M0,42 C220,68 480,8 720,30 C960,52 1220,66 1440,34 L1440,70 L0,70 Z"
        fill={fill}
      />
    </svg>
  );
}
