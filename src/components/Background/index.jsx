export default function Background() {
  return (
    <>
      {/* Lines Background */}
      <div
        className="absolute inset-0 bg-repeat mix-blend-overlay"
        style={{
          background: 'url(\'/background-lines.png\')',
          backgroundSize: '1180px',
        }}
      />
      {/* Square Tile Background */}
      <div
        className="absolute inset-0 bg-repeat mix-blend-overlay"
        style={{
          background: 'url(\'/background-squares-tile.png\')',
          backgroundSize: '256px',
        }}
      />
      {/* Noise Background */}
      <div
        className="absolute inset-0 bg-repeat mix-blend-overlay"
        style={{
          background: 'url(\'/background-noise.png\')',
          backgroundSize: '1920px',
        }}
      />
    </>
  )
}
