export default function IncidentIcon({
  width = 18,
  height = 18,
  color = "currentColor",
  className = "",
  ...props
}) {
  return (
    <figure>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke={color}
        width={width}
        height={height}
        className={`text-orange-500 mx-auto ${className}`}
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10ZM12 6v8M12 16v.01"
        />
      </svg>
    </figure>
  );
}
