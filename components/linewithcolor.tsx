const ColoredLine = ({ color }: { color: string }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 2,
    }}
  />
)

export default ColoredLine
