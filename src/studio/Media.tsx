import type { MediaSlot } from "./content"

export default function Media({
  slot,
  ratio = "16 / 10",
  className = "",
}: {
  slot: MediaSlot
  ratio?: string
  className?: string
}) {
  return (
    <div className={`st-media ${className}`} style={{ aspectRatio: ratio }}>
      {slot.video ? (
        <video
          src={slot.video}
          poster={slot.image}
          autoPlay
          muted
          loop
          playsInline
          aria-label={slot.alt}
        />
      ) : slot.image ? (
        <img src={slot.image} alt={slot.alt} loading="lazy" />
      ) : (
        <div className="wk-placeholder" role="img" aria-label={slot.alt}>
          <span>{slot.label}</span>
          <span>Replace in content.ts</span>
        </div>
      )}
    </div>
  )
}
