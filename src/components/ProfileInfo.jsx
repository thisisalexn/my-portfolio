
import { Accordion, Avatar, Button, Card, Dropdown, Popover } from "flowbite-react";
import { FaLinkedin } from "react-icons/fa";
import { Children } from "react";

function ProfileInfo() {
    return (
        <>
            <div className="">
                <Card className="bg-transparent content-center flex-col  items-center justify-center w-96">
                    <Avatar img={'/public/IMG_5973.png'} rounded className="image" size="xl" placeholderInitials="AN" />
                    <h1 className="text-5xl font-bold tracking-tight text-white">
                        Alexander Nuss
                    </h1>
                    <p className="text-2xl font-bold text-white flex">
                        Software Devolper
                    </p>
                    <p className="text-2xl text-white flex items-center space-x-4 ">
                        <svg class="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd" />
                        </svg>
                        Munich, DE
                    </p>

                    <div className="flex flex-row space-x-4" style={{ background: "transparent" }}>
                        <Button
                            className="group border-2 border-white text-white rounded-full p-2 hover:bg-white hover:border-orange-500 transition-all duration-300 flex items-center flex-shrink-0 flex-grow-0"
                            href="https://www.linkedin.com/in/alexander-n-8a574b23b/"
                            style={{ background: "transparent" }}
                            target="_blank"
                        >
                            <FaLinkedin className="group-hover:text-orange-500 group-hover:scale-110 w-6 h-6" />

                        </Button>
                        <Popover content={
                            <Button.Group>
                                <Button color="dark" href="public/cv_de.pdf" target="_blank">Deutsch</Button>
                                <Button color="dark" disabled>English</Button>
                            </Button.Group>
                        }>
                            <Button
                                className="group border-2 border-white text-white rounded-full p-2 hover:bg-white hover:border-orange-500 transition-all duration-300 flex items-center flex-shrink-0 flex-grow-0"

                                style={{ background: "transparent" }}
                                target="_blank"
                            >
                                <svg className="w-6 h-6 text-white group-hover:text-orange-500 group-hover:scale-110 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M13 11.15V4a1 1 0 1 0-2 0v7.15L8.78 8.374a1 1 0 1 0-1.56 1.25l4 5a1 1 0 0 0 1.56 0l4-5a1 1 0 1 0-1.56-1.25L13 11.15Z" clip-rule="evenodd" />
                                    <path fill-rule="evenodd" d="M9.657 15.874 7.358 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.358l-2.3 2.874a3 3 0 0 1-4.685 0ZM17 16a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z" clip-rule="evenodd" />
                                </svg>
                                <span className="align-baseline text-xl ml-2 leading-6 group-hover:text-orange-500 transition-all duration-300 flex-shrink-0">
                                    CV
                                </span>

                            </Button>
                        </Popover>
                    </div>

                </Card>
            </div>
        </>
    );
}

export default ProfileInfo

