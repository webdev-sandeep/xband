import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

const App = () => {
  const images = [
    {
      src: "https://www.w3schools.com/w3images/la.jpg",
      title: "Los Angeles",
      tagline: "We had the best time playing at Venice Beach!",
    },
    {
      src: "https://www.w3schools.com/w3images/ny.jpg",
      title: "New York",
      tagline: "The atmosphere in New York is lorem ipsum.",
    },
    {
      src: "https://www.w3schools.com/w3images/chicago.jpg",
      title: "Chicago",
      tagline: "Thank you, Chicago - A night we won't forget.",
    },
  ];

  const ticketStatus = [
    { month: "September", ticketCount: 0 },
    { month: "October", ticketCount: 0 },
    { month: "November", ticketCount: 3 },
  ];

  const [index, setIndex] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    ticket: "",
    email: "",
  });

  const handleFormData = ({ field, value }) => {
    setFormData({ ...formData, [field]: value });
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (index === images.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [index]);
  return (
    <>
      <section
        className={`fixed h-screen w-screen z-[999999] bg-[rgba(0,0,0,0.7)] ${
          modalIsOpen ? "block" : "hidden"
        }`}
        onClick={closeModal}
      >
        <div
          className="modal absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-white pb-4 w-[50rem]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative bg-teal-600 text-white">
            <h2 className="text-2xl tracking-widest text-center flex justify-center gap-4 py-10">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M176 56v40h160V56c0-4.4-3.6-8-8-8H184c-4.4 0-8 3.6-8 8zm-48 40V56c0-30.9 25.1-56 56-56h144c30.9 0 56 25.1 56 56v424H128V96zm-64 0h32v384H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64zm384 384h-32V96h32c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64z"
                  />
                </svg>
              </span>
              <span>Tickets</span>
            </h2>
            <span
              className="absolute top-0 right-0 p-2 hover:bg-red-200 cursor-pointer"
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
                />
              </svg>
            </span>
          </div>
          <div className="px-4">
            <form className="py-2 text-xs" onSubmit={handleFormSubmit}>
              <label htmlFor="ticket" className="flex items-center my-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M7 22q-.825 0-1.413-.588T5 20q0-.825.588-1.413T7 18q.825 0 1.413.588T9 20q0 .825-.588 1.413T7 22Zm10 0q-.825 0-1.413-.588T15 20q0-.825.588-1.413T17 18q.825 0 1.413.588T19 20q0 .825-.588 1.413T17 22ZM5.2 4h14.75q.575 0 .875.513t.025 1.037l-3.55 6.4q-.275.5-.738.775T15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.988t-.05-1.962L6.6 11.6L3 4H1V2h3.25l.95 2Z"
                    />
                  </svg>
                </span>
                <span>Tickets, $15 per person</span>
              </label>
              <input
                type="number"
                id="ticket"
                placeholder="How many?"
                className="w-full border border-gray-500 p-2 my-2"
                value={formData.ticket}
                onChange={(e) =>
                  handleFormData({ field: "ticket", value: e.target.value })
                }
              />
              <label htmlFor="email" className="flex">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z"
                    />
                  </svg>
                </span>
                <span>Send To</span>
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-500 p-2 my-2"
                placeholder="Enter email"
                value={formData.email}
                onChange={(e) =>
                  handleFormData({ field: "email", value: e.target.value })
                }
              />
              <button className="bg-teal-600 py-3 hover:bg-gray-300 hover:text-black w-full text-white flex justify-center">
                <span className="mr-1">Pay</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M437.3 30L202.7 339.3L64 200.7l-64 64L213.3 478L512 94z"
                    />
                  </svg>
                </span>
              </button>
            </form>
            <div className="flex justify-between items-center">
              <button
                className="flex items-center bg-red-500 text-white text-sm py-2 px-3"
                onClick={closeModal}
              >
                <span>Close</span>
                <span className="pt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z"
                    />
                  </svg>
                </span>
              </button>
              <span className="text-xs font-medium">
                Need{" "}
                <a
                  href="https://www.w3schools.com/"
                  className="underline underline-offset-2 text-teal-600"
                >
                  help?
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
      <header className="sticky top-0 z-10">
        <div className="flex justify-between bg-black text-white">
          <nav className="flex text-xs uppercase">
            <HashLink
              smooth
              to={"/#home"}
              className="block py-3 px-5 hover:bg-gray-300 hover:text-black"
            >
              Home
            </HashLink>
            <HashLink
              smooth
              to={"/#band"}
              className="block py-3 px-5 hover:bg-gray-300 hover:text-black"
            >
              Band
            </HashLink>
            <HashLink
              smooth
              to={"/#tour"}
              className="block py-3 px-5 hover:bg-gray-300 hover:text-black"
            >
              Tour
            </HashLink>
            <HashLink
              smooth
              to={"/#contact"}
              className="block py-3 px-5 hover:bg-gray-300 hover:text-black"
            >
              Contact
            </HashLink>
            <div
              to={"#"}
              className="group flex py-3 px-5 hover:bg-gray-300 hover:text-black relative cursor-pointer"
            >
              More
              <span className="absolute top-[50%] right-0 translate-y-[-50%]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="w-full h-full"
                >
                  <path
                    fill="currentColor"
                    d="m11.3 14.3l-2.6-2.6q-.475-.475-.212-1.087T9.425 10h5.15q.675 0 .938.613T15.3 11.7l-2.6 2.6q-.15.15-.325.225T12 14.6q-.2 0-.375-.075T11.3 14.3Z"
                  />
                </svg>
              </span>
              <div className="absolute hidden group-hover:block top-10 left-0 bg-white text-black">
                <HashLink
                  to="#"
                  className="py-2 pl-3 pr-10 capitalize hover:bg-gray-300 block"
                >
                  Merchendise
                </HashLink>
                <HashLink
                  to="#"
                  className="py-2 pl-3 pr-10 capitalize hover:bg-gray-300 block"
                >
                  Extras
                </HashLink>
                <HashLink
                  to="#"
                  className="py-2 pl-3 pr-10 capitalize hover:bg-gray-300 block"
                >
                  Media
                </HashLink>
              </div>
            </div>
          </nav>
          <div className="px-4 hover:bg-red-500 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="w-full h-full"
            >
              <path
                fill="currentColor"
                d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3l-1.4 1.4ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"
              />
            </svg>
          </div>
        </div>
      </header>
      <section className="relative" id="home">
        <img
          src={images[index].src}
          alt="band"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white">
          <h2>{images[index].title}</h2>
          <p className="text-xs font-semibold">{images[index].tagline}</p>
        </div>
      </section>
      <main id="band">
        <div className="max-w-[50rem] mx-auto text-center py-16 px-4">
          <h1 className="text-2xl tracking-widest mb-4">THE BAND</h1>
          <p className="text-xs italic text-gray-500 font-medium mb-3">
            We love music
          </p>
          <p className="text-justify text-sm">
            We have created a fictional band website. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <div className="grid grid-cols-3 justify-around pt-16">
            <div className="flex flex-col items-center col-span-3 min-[400px]:col-span-1">
              <p className="text-xs mb-2">Name</p>
              <div className="p-5">
                <img
                  src="https://www.w3schools.com/w3images/bandmember.jpg"
                  alt="camera"
                  className="rounded"
                />
              </div>
            </div>
            <div className="flex flex-col items-center col-span-3 min-[400px]:col-span-1">
              <p className="text-xs mb-2">Name</p>
              <div className="p-5">
                <img
                  src="https://www.w3schools.com/w3images/bandmember.jpg"
                  alt="camera"
                  className="rounded"
                />
              </div>
            </div>
            <div className="flex flex-col items-center col-span-3 min-[400px]:col-span-1">
              <p className="text-xs mb-2">Name</p>
              <div className="p-5">
                <img
                  src="https://www.w3schools.com/w3images/bandmember.jpg"
                  alt="camera"
                  className="rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <section className="bg-black" id="tour">
        <div className="max-w-[50rem] mx-auto text-white text-center py-16 px-4">
          <h2 className="text-2xl tracking-widest mb-4">TOUR DATES</h2>
          <p className="text-xs italic text-gray-500 font-medium mb-8">
            Remember to book your tickets!
          </p>
          <div>
            {ticketStatus.map((item, index) => {
              return (
                <p
                  key={index}
                  className={`flex ${
                    item.ticketCount !== 0 && "justify-between"
                  } border-b border-gray-200 bg-white text-black text-xs px-2 py-1 items-center`}
                >
                  <span>{item.month}</span>
                  {item.ticketCount === 0 ? (
                    <span className="bg-red-500 py-1 px-2 text-white ml-4">
                      Sold out
                    </span>
                  ) : (
                    <span className="text-white bg-black p-1 mr-5 rounded-full h-full w-6 flex justify-center items-center">
                      0
                    </span>
                  )}
                </p>
              );
            })}
          </div>
          <div className="grid grid-cols-3 justify-between gap-4 mt-8">
            <div className="card bg-white text-black col-span-3 min-[400px]:col-span-1 flex flex-col">
              <div className="img-container">
                <img
                  src="https://www.w3schools.com/w3images/newyork.jpg"
                  alt="building"
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="text-left p-4 text-xs">
                <h3 className="font-bold">New York</h3>
                <p className="my-5 text-gray-500">Fri 27 Nov 2016</p>
                <p className="mb-4">
                  Praesent tincidunt sed tellus ut rutrum sed vitae justo.
                </p>
                <button
                  className="text-white bg-black py-2 px-4 hover:bg-gray-300 hover:text-black"
                  onClick={openModal}
                >
                  Buy Tickets
                </button>
              </div>
            </div>
            <div className="card bg-white text-black col-span-3 min-[400px]:col-span-1 flex flex-col">
              <div className="img-container">
                <img
                  src="https://www.w3schools.com/w3images/paris.jpg"
                  alt="building"
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="text-left p-4 text-xs">
                <h3 className="font-bold">New York</h3>
                <p className="my-5 text-gray-500">Fri 27 Nov 2016</p>
                <p className="mb-4">
                  Praesent tincidunt sed tellus ut rutrum sed vitae justo.
                </p>
                <button
                  className="text-white bg-black py-2 px-4 hover:bg-gray-300 hover:text-black"
                  onClick={openModal}
                >
                  Buy Tickets
                </button>
              </div>
            </div>
            <div className="card bg-white text-black col-span-3 min-[400px]:col-span-1 flex flex-col">
              <div className="img-container">
                <img
                  src="https://www.w3schools.com/w3images/sanfran.jpg"
                  alt="building"
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="text-left p-4 text-xs">
                <h3 className="font-bold">New York</h3>
                <p className="my-5 text-gray-500">Fri 27 Nov 2016</p>
                <p className="mb-4">
                  Praesent tincidunt sed tellus ut rutrum sed vitae justo.
                </p>
                <button
                  className="text-white bg-black py-2 px-4 hover:bg-gray-300 hover:text-black"
                  onClick={openModal}
                >
                  Buy Tickets
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="max-w-[50rem] mx-auto text-center py-16 px-4">
          <h2 className="text-2xl tracking-widest mb-4">CONTACT</h2>
          <p className="text-xs italic text-gray-500 font-medium mb-8">
            Fan? Drop a note!
          </p>
          <div className="flex justify-between min-[400px]:flex-col">
            <div className="address text-xs mb-4">
              <p className="flex">
                <span className="h-6 w-6 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="h-full w-full p-1"
                  >
                    <path
                      fill="currentColor"
                      d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Z"
                    />
                  </svg>
                </span>
                <span>Chicago, US</span>
              </p>
              <p className="flex">
                <span className="h-6 w-6 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="h-full w-full p-1"
                  >
                    <path
                      fill="currentColor"
                      d="M19.95 21q-3.225 0-6.287-1.438t-5.425-3.8q-2.363-2.362-3.8-5.425T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.225t.325.575l.65 3.5q.05.35-.013.638T9.4 8.45L7 10.9q1.05 1.8 2.625 3.375T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.075.575.338T21 15.9v4.05q0 .45-.3.75t-.75.3Z"
                    />
                  </svg>
                </span>
                <span>Phone: +00 151515</span>
              </p>
              <p className="flex">
                <span className="h-6 w-6 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="h-full w-full p-1"
                  >
                    <path
                      fill="currentColor"
                      d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z"
                    />
                  </svg>
                </span>
                <span>Email: mail@mail.com</span>
              </p>
            </div>
            <div className="flex flex-col w-1/2 min-[400px]:w-full">
              <div className="grid grid-cols-2 gap-2 mb-2">
                <input
                  type="text"
                  placeholder="Name"
                  className="border border-gray-500 px-2 py-1 col-span-1"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-500 px-2 py-1 col-span-1"
                />
                <input
                  type="text"
                  placeholder="Message"
                  className="w-full border border-gray-500 px-2 py-1 col-span-2"
                />
              </div>
              <div className="text-end">
                <button className="text-white bg-black px-4 py-1">Send</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-[rgba(0,0,0,0.2)]">
        <img
          src="https://www.w3schools.com/w3images/map.jpg"
          alt="map"
          className="w-full"
        />
      </section>
      <section className="py-16 grid place-items-center text-xs text-gray-500">
        <div>
          <div className="logos flex">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M26.67 4H5.33A1.34 1.34 0 0 0 4 5.33v21.34A1.34 1.34 0 0 0 5.33 28h11.49v-9.28H13.7v-3.63h3.12v-2.67c0-3.1 1.89-4.79 4.67-4.79c.93 0 1.86 0 2.79.14V11h-1.91c-1.51 0-1.8.72-1.8 1.77v2.31h3.6l-.47 3.63h-3.13V28h6.1A1.34 1.34 0 0 0 28 26.67V5.33A1.34 1.34 0 0 0 26.67 4Z"
                />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48Zm0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32Zm48-136H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56Zm40 152a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40V80a40 40 0 0 1 40-40h96a40 40 0 0 1 40 40ZM192 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12Z"
                />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M27.977 9.628a7.33 7.33 0 0 0-.118-1.289a5.246 5.246 0 0 0-.487-1.495a5.187 5.187 0 0 0-1-1.332a4.956 4.956 0 0 0-2.18-1.243a8.844 8.844 0 0 0-2.306-.246l-.004-.012H10.114v.012a12.578 12.578 0 0 0-1.323.059A6.295 6.295 0 0 0 7.38 4.4a5.115 5.115 0 0 0-3.125 3.415a8.8 8.8 0 0 0-.246 2.286L4 21.907a14.92 14.92 0 0 0 .109 1.599A5.53 5.53 0 0 0 4.6 25.12a5.17 5.17 0 0 0 1.443 1.744a4.69 4.69 0 0 0 1.444.783a7.83 7.83 0 0 0 2.374.348c.504.003 1.007.016 1.51.014c3.66-.016 7.319.026 10.978-.023a8.632 8.632 0 0 0 1.44-.153a4.877 4.877 0 0 0 2.411-1.172a4.992 4.992 0 0 0 1.593-2.654a9.665 9.665 0 0 0 .207-2.1v-.141c0-.055-.02-11.98-.023-12.138Zm-3.213 11.105c-.154.36-.93.657-2.244.86c-.123.02-.175.219-.246.545c-.03.135-.06.267-.1.405a.245.245 0 0 1-.26.195h-.02a2.101 2.101 0 0 1-.374-.047a4.921 4.921 0 0 0-.986-.105a4.37 4.37 0 0 0-.71.06a3.405 3.405 0 0 0-1.349.689a3.912 3.912 0 0 1-2.366.933c-.05 0-.098-.002-.134-.004a1.063 1.063 0 0 1-.088.004a3.906 3.906 0 0 1-2.365-.932a3.412 3.412 0 0 0-1.35-.69a4.361 4.361 0 0 0-.71-.06a4.858 4.858 0 0 0-.985.111a2.187 2.187 0 0 1-.374.054a.257.257 0 0 1-.28-.202a5.135 5.135 0 0 1-.1-.408c-.072-.328-.124-.528-.247-.547c-1.313-.203-2.09-.501-2.244-.863a.335.335 0 0 1-.027-.114a.21.21 0 0 1 .176-.22a4.585 4.585 0 0 0 2.757-1.639a6.168 6.168 0 0 0 .94-1.461l.004-.01a.943.943 0 0 0 .09-.79c-.169-.4-.73-.577-1.1-.695a3.842 3.842 0 0 1-.25-.084c-.328-.13-.868-.404-.796-.783a.733.733 0 0 1 .712-.468a.505.505 0 0 1 .216.043a2.157 2.157 0 0 0 .892.235a.747.747 0 0 0 .513-.157q-.014-.263-.032-.525a8.874 8.874 0 0 1 .212-3.545a4.607 4.607 0 0 1 4.278-2.758l.354-.003a4.615 4.615 0 0 1 4.285 2.76a8.884 8.884 0 0 1 .212 3.548l-.003.057l-.028.467a.722.722 0 0 0 .466.156a2.232 2.232 0 0 0 .84-.234a.663.663 0 0 1 .275-.055a.832.832 0 0 1 .313.06l.005.002a.583.583 0 0 1 .44.478c.004.184-.132.458-.803.723a4.055 4.055 0 0 1-.249.084c-.371.118-.931.296-1.1.695a.942.942 0 0 0 .09.789l.004.01a5.431 5.431 0 0 0 3.697 3.1a.211.211 0 0 1 .176.22a.34.34 0 0 1-.027.116Z"
                />
                <path
                  fill="none"
                  d="M24.764 20.733c-.154.36-.93.657-2.244.86c-.123.02-.175.219-.246.545c-.03.135-.06.267-.1.405a.245.245 0 0 1-.26.195h-.02a2.101 2.101 0 0 1-.374-.047a4.921 4.921 0 0 0-.986-.105a4.37 4.37 0 0 0-.71.06a3.405 3.405 0 0 0-1.349.689a3.912 3.912 0 0 1-2.366.933c-.05 0-.098-.002-.134-.004a1.063 1.063 0 0 1-.088.004a3.906 3.906 0 0 1-2.365-.932a3.412 3.412 0 0 0-1.35-.69a4.361 4.361 0 0 0-.71-.06a4.858 4.858 0 0 0-.985.111a2.187 2.187 0 0 1-.374.054a.257.257 0 0 1-.28-.202a5.135 5.135 0 0 1-.1-.408c-.072-.328-.124-.528-.247-.547c-1.313-.203-2.09-.501-2.244-.863a.335.335 0 0 1-.027-.114a.21.21 0 0 1 .176-.22a4.585 4.585 0 0 0 2.757-1.639a6.168 6.168 0 0 0 .94-1.461l.004-.01a.943.943 0 0 0 .09-.79c-.169-.4-.73-.577-1.1-.695a3.842 3.842 0 0 1-.25-.084c-.328-.13-.868-.404-.796-.783a.733.733 0 0 1 .712-.468a.505.505 0 0 1 .216.043a2.157 2.157 0 0 0 .892.235a.747.747 0 0 0 .513-.157q-.014-.263-.032-.525a8.874 8.874 0 0 1 .212-3.545a4.607 4.607 0 0 1 4.278-2.758l.354-.003a4.615 4.615 0 0 1 4.285 2.76a8.884 8.884 0 0 1 .212 3.548l-.003.057l-.028.467a.722.722 0 0 0 .466.156a2.232 2.232 0 0 0 .84-.234a.663.663 0 0 1 .275-.055a.832.832 0 0 1 .313.06l.005.002a.583.583 0 0 1 .44.478c.004.184-.132.458-.803.723a4.055 4.055 0 0 1-.249.084c-.371.118-.931.296-1.1.695a.942.942 0 0 0 .09.789l.004.01a5.431 5.431 0 0 0 3.697 3.1a.211.211 0 0 1 .176.22a.34.34 0 0 1-.027.116Z"
                />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="-4.5 -2 24 24"
              >
                <path
                  fill="currentColor"
                  d="M6.17 13.097c-.506 2.726-1.122 5.34-2.95 6.705c-.563-4.12.829-7.215 1.475-10.5c-1.102-1.91.133-5.755 2.457-4.808c2.86 1.166-2.477 7.102 1.106 7.844c3.741.774 5.269-6.683 2.949-9.109C7.855-.272 1.45 3.15 2.238 8.163c.192 1.226 1.421 1.598.491 3.29C.584 10.962-.056 9.22.027 6.897C.159 3.097 3.344.435 6.538.067c4.04-.466 7.831 1.527 8.354 5.44c.59 4.416-1.823 9.2-6.142 8.855c-1.171-.093-1.663-.69-2.58-1.265z"
                />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"
                />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z"
                />
              </svg>
            </span>
          </div>
          <p className="text-center">
            Powered by{" "}
            <a
              href="https://www.w3schools.com/"
              className="underline underline-offset-2"
            >
              w3.css
            </a>{" "}
          </p>
        </div>
      </section>
    </>
  );
};

export default App;
