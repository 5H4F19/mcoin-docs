export default {
  project: {
    link: "https://github.com/5H4F19/mcoin-docs",
  },
  darkMode: false,
  nextThemes: {
    defaultTheme: "dark",
  },
  useNextSeoProps: ()=>{
    return {
       titleTemplate: '%s – Multicone'
    }
  },
  primaryHue:214,
  primarySaturation:60,
  logo: (
    <svg
      width="33"
      height="29"
      viewBox="0 0 42 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M10.4651 0C4.68539 0 0 4.68539 0 10.4651V34.9535C0 35.5315 0.468539 36 1.04651 36C6.82624 36 11.5116 31.3146 11.5116 25.5349V1.04651C11.5116 0.468539 11.0431 0 10.4651 0ZM14.8605 1.04651C14.8605 0.46854 15.329 0 15.907 0C21.6867 0 26.3721 4.68539 26.3721 10.4651C26.3721 11.0431 25.9036 11.5116 25.3256 11.5116H19.8605C17.099 11.5116 14.8605 9.27305 14.8605 6.51163V1.04651ZM41.2325 10.4651C41.2325 4.68539 36.5471 0 30.7674 0C30.1895 0 29.7209 0.468539 29.7209 1.04651V25.5349C29.7209 31.3146 34.4063 36 40.186 36C40.764 36 41.2325 35.5315 41.2325 34.9535V10.4651Z"
        fill="url(#paint0_linear_237_688)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_237_688"
          x1="5.27236"
          y1="9.52207e-07"
          x2="21"
          y2="36"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F6F6F6" />
          <stop offset="1" stopColor="#5D5D5D" />
        </linearGradient>
      </defs>
    </svg>
  ),
  footer: {
    text: () => {
      return (
        <div className="">
          <span>
            MIT {new Date().getFullYear()} ©{" "}
            <a href="https://multicone.tech" target="_blank">
              Multicone
            </a>
            .
          </span>
        </div>
      );
    },
  },
};
