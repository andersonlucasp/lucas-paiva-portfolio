export default function Preloader() {
  return (
    <div className="preloader fixed inset-0 z-[200] bg-bg flex items-center justify-center">
      <p
        className="text-[clamp(20px,3vw,40px)] font-bold tracking-tightest uppercase"
        style={{ color: 'rgba(255,255,255,0.12)' }}
      >
        Lucas Paiva
      </p>
    </div>
  )
}
