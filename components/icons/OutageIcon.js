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
        stroke={color}
        width={width}
        height={height}
        className={`text-red-500 mx-auto ${className}`}
        {...props}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    </figure>
  );
}
