export default function DarkTheme() {
  return (
    <style jsx global>
      {`
        /* DARK THEME */
        :root {
          --background-color: rgb(54, 54, 54);
          --text-color: rgba(255, 255, 255, 0.937);
          --link-color: rgb(255, 217, 0);
        }
      `}
    </style>
  );
}
