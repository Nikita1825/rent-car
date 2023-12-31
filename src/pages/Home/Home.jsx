import React from "react";
import css from "./home.module.css"

const Home = () => {
    return (
      <div className={css.container}>
        <div className={css.main}>
          <h1 className={css.rental}>Trusted car rental</h1>
        </div>
        <h2 className={css.rentH}>Seven reasons to rent a car with us:</h2>
        <ul className={css.listInfo}>
          <li className={css.linkInfo}>
            <svg
              stroke="currentColor"
              fill="black"
              stroke-width="0"
              viewBox="0 0 32 32"
              height="100"
              width="100"
              xmlns="http://www.w3.org/2000/svg"
              className={css.svg}
            >
              <path d="M9 18h-2v14h2c0.55 0 1-0.45 1-1v-12c0-0.55-0.45-1-1-1z"></path>
              <path d="M23 18c-0.55 0-1 0.45-1 1v12c0 0.55 0.45 1 1 1h2v-14h-2z"></path>
              <path d="M32 16c0-8.837-7.163-16-16-16s-16 7.163-16 16c0 1.919 0.338 3.759 0.958 5.464-0.609 1.038-0.958 2.246-0.958 3.536 0 3.526 2.608 6.443 6 6.929v-13.857c-0.997 0.143-1.927 0.495-2.742 1.012-0.168-0.835-0.258-1.699-0.258-2.584 0-7.18 5.82-13 13-13s13 5.82 13 13c0 0.885-0.088 1.749-0.257 2.584-0.816-0.517-1.745-0.87-2.743-1.013v13.858c3.392-0.485 6-3.402 6-6.929 0-1.29-0.349-2.498-0.958-3.536 0.62-1.705 0.958-3.545 0.958-5.465z"></path>
            </svg>
            <p className={css.pInfo}>Assistance</p>
            <p className={css.pInfoCard}>Roadside support 24 hours a day</p>
          </li>
          <li className={css.linkInfo}>
            <svg
              stroke="currentColor"
              fill="black"
              stroke-width="0"
              viewBox="0 0 32 32"
              height="100"
              width="100"
              xmlns="http://www.w3.org/2000/svg"
              className={css.svg}
            >
              <path d="M15 2c-8.284 0-15 6.716-15 15s6.716 15 15 15c8.284 0 15-6.716 15-15s-6.716-15-15-15zM15 29c-6.627 0-12-5.373-12-12s5.373-12 12-12c6.627 0 12 5.373 12 12s-5.373 12-12 12zM16 16v-4h4v-2h-4v-2h-2v2h-4v8h4v4h-4v2h4v2h2v-2h4l-0-8h-4zM14 16h-2v-4h2v4zM18 22h-2v-4h2v4z"></path>
            </svg>
            <p className={css.pInfo}>Affordable prices</p>
            <p className={css.pInfoCard}>We try to keep prices below market</p>
          </li>
          <li className={css.linkInfo}>
            <svg
              stroke="currentColor"
              fill="black"
              stroke-width="0"
              viewBox="0 0 32 32"
              height="100"
              width="100"
              xmlns="http://www.w3.org/2000/svg"
              className={css.svg}
            >
              <path d="M28.681 7.159c-0.694-0.947-1.662-2.053-2.724-3.116s-2.169-2.030-3.116-2.724c-1.612-1.182-2.393-1.319-2.841-1.319h-15.5c-1.378 0-2.5 1.121-2.5 2.5v27c0 1.378 1.122 2.5 2.5 2.5h23c1.378 0 2.5-1.122 2.5-2.5v-19.5c0-0.448-0.137-1.23-1.319-2.841zM24.543 5.457c0.959 0.959 1.712 1.825 2.268 2.543h-4.811v-4.811c0.718 0.556 1.584 1.309 2.543 2.268zM28 29.5c0 0.271-0.229 0.5-0.5 0.5h-23c-0.271 0-0.5-0.229-0.5-0.5v-27c0-0.271 0.229-0.5 0.5-0.5 0 0 15.499-0 15.5 0v7c0 0.552 0.448 1 1 1h7v19.5z"></path>
              <path d="M23 26h-14c-0.552 0-1-0.448-1-1s0.448-1 1-1h14c0.552 0 1 0.448 1 1s-0.448 1-1 1z"></path>
              <path d="M23 22h-14c-0.552 0-1-0.448-1-1s0.448-1 1-1h14c0.552 0 1 0.448 1 1s-0.448 1-1 1z"></path>
              <path d="M23 18h-14c-0.552 0-1-0.448-1-1s0.448-1 1-1h14c0.552 0 1 0.448 1 1s-0.448 1-1 1z"></path>
            </svg>
            <p className={css.pInfo}>Minimum bureaucracy</p>
            <p className={css.pInfoCard}>Minimum documents for rental</p>
          </li>
          <li className={css.linkInfo}>
            <svg
              stroke="currentColor"
              fill="black"
              stroke-width="0"
              viewBox="0 0 32 32"
              height="100"
              width="100"
              xmlns="http://www.w3.org/2000/svg"
              className={css.svg}
            >
              <path d="M28 8v-4h-28v22c0 1.105 0.895 2 2 2h27c1.657 0 3-1.343 3-3v-17h-4zM26 26h-24v-20h24v20zM4 10h20v2h-20zM16 14h8v2h-8zM16 18h8v2h-8zM16 22h6v2h-6zM4 14h10v10h-10z"></path>
            </svg>
            <p className={css.pInfo}>Full insurance</p>
            <p className={css.pInfoCard}>
              All cars are insured by CASCO, OSAGO
            </p>
          </li>
          <li className={css.linkInfo}>
            <svg
              stroke="currentColor"
              fill="black"
              stroke-width="0"
              viewBox="0 0 32 32"
              height="100"
              width="100"
              xmlns="http://www.w3.org/2000/svg"
              className={css.svg}
            >
              <path d="M31.317 9.82l-3.16-3.159c-0.775-0.775-2.043-2.043-2.818-2.818l-3.16-3.159c-0.775-0.775-2.155-0.911-3.067-0.304l-8.639 5.759c-0.912 0.608-1.257 1.907-0.767 2.887l2.203 4.405c0.067 0.135 0.145 0.278 0.231 0.427l-11.142 11.142-1 7h6v-2h4v-4h4v-4h4v-2.225c0.2 0.119 0.392 0.226 0.569 0.314l4.405 2.203c0.98 0.49 2.279 0.145 2.887-0.767l5.759-8.639c0.608-0.912 0.471-2.292-0.304-3.066zM4.707 26.707l-1.414-1.414 9.737-9.737 1.414 1.414-9.737 9.737zM28.657 13.243l-1.414 1.414c-0.389 0.389-1.025 0.389-1.414 0l-8.485-8.485c-0.389-0.389-0.389-1.025 0-1.414l1.414-1.414c0.389-0.389 1.025-0.389 1.414 0l8.485 8.485c0.389 0.389 0.389 1.025 0 1.414z"></path>
            </svg>
            <p className={css.pInfo}>Free delivery to the client</p>
            <p className={css.pInfoCard}>When renting for more than 3 days</p>
          </li>
          <li className={css.linkInfo}>
            <svg
              stroke="currentColor"
              fill="black"
              stroke-width="0"
              viewBox="0 0 32 32"
              height="100"
              width="100"
              xmlns="http://www.w3.org/2000/svg"
              className={css.svg}
            >
              <path d="M11.366 22.564l1.291-1.807-1.414-1.414-1.807 1.291c-0.335-0.187-0.694-0.337-1.071-0.444l-0.365-2.19h-2l-0.365 2.19c-0.377 0.107-0.736 0.256-1.071 0.444l-1.807-1.291-1.414 1.414 1.291 1.807c-0.187 0.335-0.337 0.694-0.443 1.071l-2.19 0.365v2l2.19 0.365c0.107 0.377 0.256 0.736 0.444 1.071l-1.291 1.807 1.414 1.414 1.807-1.291c0.335 0.187 0.694 0.337 1.071 0.444l0.365 2.19h2l0.365-2.19c0.377-0.107 0.736-0.256 1.071-0.444l1.807 1.291 1.414-1.414-1.291-1.807c0.187-0.335 0.337-0.694 0.444-1.071l2.19-0.365v-2l-2.19-0.365c-0.107-0.377-0.256-0.736-0.444-1.071zM7 27c-1.105 0-2-0.895-2-2s0.895-2 2-2 2 0.895 2 2-0.895 2-2 2zM32 12v-2l-2.106-0.383c-0.039-0.251-0.088-0.499-0.148-0.743l1.799-1.159-0.765-1.848-2.092 0.452c-0.132-0.216-0.273-0.426-0.422-0.629l1.219-1.761-1.414-1.414-1.761 1.219c-0.203-0.149-0.413-0.29-0.629-0.422l0.452-2.092-1.848-0.765-1.159 1.799c-0.244-0.059-0.492-0.109-0.743-0.148l-0.383-2.106h-2l-0.383 2.106c-0.251 0.039-0.499 0.088-0.743 0.148l-1.159-1.799-1.848 0.765 0.452 2.092c-0.216 0.132-0.426 0.273-0.629 0.422l-1.761-1.219-1.414 1.414 1.219 1.761c-0.149 0.203-0.29 0.413-0.422 0.629l-2.092-0.452-0.765 1.848 1.799 1.159c-0.059 0.244-0.109 0.492-0.148 0.743l-2.106 0.383v2l2.106 0.383c0.039 0.251 0.088 0.499 0.148 0.743l-1.799 1.159 0.765 1.848 2.092-0.452c0.132 0.216 0.273 0.426 0.422 0.629l-1.219 1.761 1.414 1.414 1.761-1.219c0.203 0.149 0.413 0.29 0.629 0.422l-0.452 2.092 1.848 0.765 1.159-1.799c0.244 0.059 0.492 0.109 0.743 0.148l0.383 2.106h2l0.383-2.106c0.251-0.039 0.499-0.088 0.743-0.148l1.159 1.799 1.848-0.765-0.452-2.092c0.216-0.132 0.426-0.273 0.629-0.422l1.761 1.219 1.414-1.414-1.219-1.761c0.149-0.203 0.29-0.413 0.422-0.629l2.092 0.452 0.765-1.848-1.799-1.159c0.059-0.244 0.109-0.492 0.148-0.743l2.106-0.383zM21 15.35c-2.402 0-4.35-1.948-4.35-4.35s1.948-4.35 4.35-4.35 4.35 1.948 4.35 4.35c0 2.402-1.948 4.35-4.35 4.35z"></path>
            </svg>
            <p className={css.pInfo}>Technically sound cars</p>
            <p className={css.pInfoCard}>
              Our cars regularly pass technical control
            </p>
          </li>
          <li className={css.linkInfo}>
            <svg
              stroke="currentColor"
              fill="black"
              stroke-width="0"
              viewBox="0 0 32 32"
              height="100"
              width="100"
              xmlns="http://www.w3.org/2000/svg"
              className={css.svg}
            >
              <path d="M27.802 5.197c-2.925-3.194-7.13-5.197-11.803-5.197-8.837 0-16 7.163-16 16h3c0-7.18 5.82-13 13-13 3.844 0 7.298 1.669 9.678 4.322l-4.678 4.678h11v-11l-4.198 4.197z"></path>
              <path d="M29 16c0 7.18-5.82 13-13 13-3.844 0-7.298-1.669-9.678-4.322l4.678-4.678h-11v11l4.197-4.197c2.925 3.194 7.13 5.197 11.803 5.197 8.837 0 16-7.163 16-16h-3z"></path>
            </svg>
            <p className={css.pInfo}>Substitution car</p>
            <p className={css.pInfoCard}>in case of breakdown</p>
          </li>
        </ul>
        
        <p className={css.rentP}>© Rent'n'Roll Ukraine. All rights reserved. 2023</p>
      </div>
    );
}
export default Home