export default function({color}){


    return(
        <svg width="16" height="16" style={{ marginRight: '3px' }}>
        <circle
          cx="8"  // center x (half of SVG width)
          cy="8"  // center y (half of SVG height)
          r="6"   // radius (slightly smaller than container)
          fill={color}
        />
      </svg>
    );
}