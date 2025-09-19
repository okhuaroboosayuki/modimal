function HeartIcon({ height, width, className }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16.5 3.8252C19.0277 3.8252 21 5.79748 21 8.3252C21 9.88673 20.3066 11.3819 18.8818 13.125C17.4459 14.8817 15.3736 16.7655 12.7793 19.123L12.002 19.8242L11.2236 19.1152L11.2217 19.1143C8.62662 16.7611 6.55418 14.8787 5.11816 13.123C3.69361 11.3814 3 9.88671 3 8.3252C3 5.79748 4.97228 3.8252 7.5 3.8252C8.93712 3.8252 10.3319 4.4992 11.2383 5.56348L12 6.45801L12.7617 5.56348C13.6681 4.4992 15.0629 3.8252 16.5 3.8252Z"
        fill="white"
        stroke="#0C0C0C"
        strokeWidth={2}
      />
    </svg>
  );
}

export default HeartIcon;
