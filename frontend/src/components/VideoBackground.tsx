interface VideoBackgroundProps {
  opacity?: number
  className?: string
}

export default function VideoBackground({
  opacity = 0.4,
  className = '',
}: VideoBackgroundProps) {
  return (
    <div
      className={`absolute inset-0 z-0 overflow-hidden ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(232,96,10,0.22),transparent_34%),radial-gradient(circle_at_76%_18%,rgba(139,92,246,0.16),transparent_30%),linear-gradient(145deg,#f7f3eb,#ffffff_62%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(17,24,39,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(17,24,39,0.035)_1px,transparent_1px)] bg-[size:36px_36px]" />
    </div>
  )
}
